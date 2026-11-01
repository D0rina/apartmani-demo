// Ispravni oblici riječi uz brojeve: 1 gost, 2 gosta, 5 gostiju
const rulesCache = {};

export function plural(lang, n, forms) {
  rulesCache[lang] ??= new Intl.PluralRules(lang);
  const cat = rulesCache[lang].select(n); // "one" | "few" | "other"
  return `${n} ${forms[cat] ?? forms.other}`;
}
