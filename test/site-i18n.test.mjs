import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { negotiateLocale, localePath, localeRedirectScript } from "../site/i18n/locales.mjs";

const dictionaries = {
  "zh-CN": JSON.parse(readFileSync(new URL("../site/i18n/dictionaries/zh-CN.json", import.meta.url), "utf8")),
  en: JSON.parse(readFileSync(new URL("../site/i18n/dictionaries/en.json", import.meta.url), "utf8")),
};
const redirects = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8")).redirects;

function leaves(value, prefix = "") {
  if (Array.isArray(value)) return value.flatMap((item, index) => leaves(item, `${prefix}[${index}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => leaves(child, prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

test("browser language and a saved choice select the pet site locale", () => {
  assert.equal(negotiateLocale(null, undefined), "zh-CN");
  assert.equal(negotiateLocale("zh-CN,zh;q=0.9,en;q=0.8", undefined), "zh-CN");
  assert.equal(negotiateLocale("zh-TW,zh;q=0.9", undefined), "zh-CN");
  assert.equal(negotiateLocale("en-US,en;q=0.9", undefined), "en");
  assert.equal(negotiateLocale("fr-FR,en;q=0.8", undefined), "zh-CN");
  assert.equal(negotiateLocale("en-GB", "zh-CN"), "zh-CN");
  assert.equal(localePath("en"), "/en/");
});

test("the root redirect script and hosting redirects follow the same locales", () => {
  const script = localeRedirectScript();
  assert.match(script, /voira-locale=\(zh-CN\|en\)/);
  assert.deepEqual(
    redirects.map((item) => item.destination),
    ["/en/", "/zh-CN/", "/en/", "/zh-CN/"],
  );
});

test("both pet site dictionaries cover the same characters and questions", () => {
  assert.deepEqual(leaves(dictionaries.en), leaves(dictionaries["zh-CN"]));
  for (const locale of ["zh-CN", "en"]) {
    const dictionary = dictionaries[locale];
    assert.deepEqual(Object.keys(dictionary.pets), ["deepseek", "chatgpt", "claude", "gemini", "grok"]);
    assert.deepEqual(
      dictionary.faq.items.map((item) => item.id),
      ["what", "install", "source", "maintainer"],
    );
  }
});
