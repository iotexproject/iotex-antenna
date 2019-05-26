import test from "ava";
import { fromRau, toRau, validateAddress } from "../utils";
import { fromUtf8, toUtf8 } from "../utils";

test("fromRau", async t => {
  const rau = "2002000000000000000";
  t.true(fromRau(rau, "Rau") === "2002000000000000000");
  t.true(fromRau(rau, "KRau") === "2002000000000000");
  t.true(fromRau(rau, "MRau") === "2002000000000");
  t.true(fromRau(rau, "GRau") === "2002000000");
  t.true(fromRau(rau, "Qev") === "2002000");
  t.true(fromRau(rau, "Jing") === "2002");
  t.true(fromRau(rau, "Iotx") === "2.002");
});

test("toRau", async t => {
  const rau = "2002000000000000000";
  t.is(toRau("2002000000000000000", "Rau"), rau);
  t.is(toRau("2002000000000000", "KRau"), rau);
  t.is(toRau("2002000000000", "MRau"), rau);
  t.is(toRau("2002000000", "GRau"), rau);
  t.is(toRau("2002000", "Qev"), rau);
  t.is(toRau("2002", "Jing"), rau);
  t.is(toRau("2.002", "Iotx"), rau);

  t.is(toRau("10000.002", "Iotx"), "10000002000000000000000");
});

test("fromUtf8", async t => {
  t.is(fromUtf8("hello"), "68656c6c6f");
});

test("toUtf8", async t => {
  t.is(toUtf8("68656c6c6f"), "hello");
});

test("validateAddress", async t => {
  t.true(validateAddress("io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j"));
  t.true(validateAddress("io14y2zg5anuuqs597fz6qlkfs2d4h4vyszajaud0"));
  t.false(validateAddress("io14y2zg5anuuqs597fz6qlkfs2d4h4vyszajaud"));
  t.true(validateAddress("io1usnjqjhtjuk3up8244ay82yylugg5rs37ure00"));
  t.false(validateAddress("io1usnjqjhtjuk3up8244ay82yylugg5rs37ure"));
});
