import { test } from "node:test";
import assert from "node:assert/strict";
import { parseContact } from "../lib/contactInput.ts";

const good = { name: "Asha", email: "asha@example.com", message: "Hello, a question about Panzo.", consent: "on" };

test("accepts a valid message and trims fields", () => {
  const r = parseContact({ ...good, name: "  Asha  ", company: " Studio " });
  assert.deepEqual(r, { kind: "ok", value: { name: "Asha", company: "Studio", email: "asha@example.com", message: good.message } });
});

test("treats a filled honeypot as a bot", () => {
  assert.equal(parseContact({ ...good, website: "spam.example" }).kind, "bot");
});

test("rejects missing name, bad email, short message, no consent", () => {
  assert.equal(parseContact({ ...good, name: " " }).kind, "invalid");
  assert.equal(parseContact({ ...good, email: "not-an-email" }).kind, "invalid");
  assert.equal(parseContact({ ...good, message: "hi" }).kind, "invalid");
  assert.equal(parseContact({ ...good, consent: undefined }).kind, "invalid");
});

test("strips CR/LF from single-line fields so headers can't be injected", () => {
  const r = parseContact({ ...good, name: "Asha\r\nBcc: x@evil.test" });
  assert.equal(r.kind, "ok");
  if (r.kind === "ok") assert.ok(!/[\r\n]/.test(r.value.name));
});

test("keeps newlines in the message but normalises CRLF", () => {
  const r = parseContact({ ...good, message: "Line one here\r\nLine two" });
  assert.equal(r.kind, "ok");
  if (r.kind === "ok") assert.equal(r.value.message, "Line one here\nLine two");
});

test("ignores non-string values", () => {
  assert.equal(parseContact({ ...good, name: 42 }).kind, "invalid");
});
