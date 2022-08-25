"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PRE_CONVERSION_MAP = {
    " +": " ",
    yy: "y",
    vv: "v",
    "„„": "„",
    "­­": "­",
    "y&": "y",
    "„&": "„",
    "‡u": "u‡",
    wu: "uw",
    " ,": ",",
    " \\|": "\\|",
    "\\\\ ": "",
    " \\\\": "",
    "\\\\": "",
    "\n +": "\n",
    " +\n": "\n",
    "\n\n\n\n\n": "\n\n",
    "\n\n\n\n": "\n\n",
    "\n\n\n": "\n\n"
};
var CONVERSION_MAP = {
    "°": "ক্ক",
    "±": "ক্ট",
    "²": "ক্ষ্ণ",
    "³": "ক্ত",
    "´": "ক্ম",
    µ: "ক্র",
    "¶": "ক্ষ",
    "·": "ক্স",
    "¸": "গু",
    "¹": "জ্ঞ",
    º: "গ্দ",
    "»": "গ্ধ",
    "¼": "ঙ্ক",
    "½": "ঙ্গ",
    "¾": "জ্জ",
    "¿": "্ত্র",
    À: "জ্ঝ",
    Á: "জ্ঞ",
    Â: "ঞ্চ",
    Ã: "ঞ্ছ",
    Ä: "ঞ্জ",
    Å: "ঞ্ঝ",
    Æ: "ট্ট",
    Ç: "ড্ড",
    È: "ণ্ট",
    É: "ণ্ঠ",
    Ê: "ণ্ড",
    Ë: "ত্ত",
    Ì: "ত্থ",
    Î: "ত্র",
    Ï: "দ্দ",
    Ð: "ণ্ড",
    Ñ: "-",
    Ò: '"',
    Ó: '"',
    Ô: "'",
    Õ: "'",
    "×": "দ্ধ",
    Ø: "দ্ব",
    Ù: "দ্ম",
    Ú: "ন্ঠ",
    Û: "ন্ড",
    Ü: "ন্ধ",
    Ý: "ন্স",
    Þ: "প্ট",
    ß: "প্ত",
    à: "প্প",
    á: "প্স",
    â: "ব্জ",
    ã: "ব্দ",
    ä: "ব্ধ",
    å: "ভ্র",
    ç: "ম্ফ",
    é: "ল্ক",
    ê: "ল্গ",
    ë: "ল্ট",
    ì: "ল্ড",
    í: "ল্প",
    î: "ল্ফ",
    ï: "শু",
    ð: "শ্চ",
    ñ: "শ্ছ",
    ò: "ষ্ণ",
    ó: "ষ্ট",
    ô: "ষ্ঠ",
    õ: "ষ্ফ",
    ö: "স্খ",
    "÷": "স্ট",
    ø: "স্ন",
    ù: "স্ফ",
    û: "হু",
    ü: "হৃ",
    ý: "হ্ন",
    ÿ: "ক্ষ",
    þ: "হ্ম",
    A: "অ",
    B: "ই",
    C: "ঈ",
    D: "উ",
    E: "ঊ",
    F: "ঋ",
    G: "এ",
    H: "ঐ",
    I: "ও",
    J: "ঔ",
    K: "ক",
    L: "খ",
    M: "গ",
    N: "ঘ",
    O: "ঙ",
    P: "চ",
    Q: "ছ",
    R: "জ",
    S: "ঝ",
    T: "ঞ",
    U: "ট",
    V: "ঠ",
    W: "ড",
    X: "ঢ",
    Y: "ণ",
    Z: "ত",
    _: "থ",
    "`": "দ",
    a: "ধ",
    b: "ন",
    c: "প",
    d: "ফ",
    e: "ব",
    f: "ভ",
    g: "ম",
    h: "য",
    i: "র",
    j: "ল",
    k: "শ",
    l: "ষ",
    m: "স",
    n: "হ",
    o: "ড়",
    p: "ঢ়",
    q: "য়",
    r: "ৎ",
    s: "ং",
    t: "ঃ",
    u: "ঁ",
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
    "•": "ঙ্",
    "|": "।"
};
var PRE_SYMBOLS_MAP = {
    "®": "ষ্",
    "¯": "স্",
    "”": "চ্",
    "˜": "দ্",
    "™": "দ্",
    š: "ন্",
    "›": "ন্",
    "¤": "ম্"
};
var REFF = {
    "©": "র্"
};
var POST_SYMBOLS_MAP = {
    "&": "্‌",
    ú: "্প",
    è: "্ন",
    "^": "্ব",
    "‘": "্তু",
    "’": "্থ",
    "‹": "্ক",
    Œ: "্ক্র",
    "—": "্ত",
    Í: "্ত",
    œ: "্ন",
    Ÿ: "্ব",
    "¡": "্ব",
    "¢": "্ভ",
    "£": "্ভ্র",
    "¥": "্ম",
    "¦": "্ব",
    "§": "্ম",
    "¨": "্য",
    ª: "্র",
    "«": "্র",
    "¬": "্ল",
    "­": "্ল",
    Ö: "্র"
};
var KAARS = {
    v: "া",
    w: "ি",
    x: "ী",
    y: "ু",
    z: "ু",
    æ: "ু",
    "“": "ু",
    "–": "ু",
    "~": "ূ",
    ƒ: "ূ",
    "‚": "ূ",
    "„": "ৃ",
    "…": "ৃ",
    "†": "ে",
    "‡": "ে",
    ˆ: "ৈ",
    "‰": "ৈ",
    Š: "ৗ"
};
var KAAR_POST_CONVERSION = {
    "ো": "ো",
    "ৌ": "ৌ"
};
var POST_CONVERSION_MAP = {
    অা: "আ",
    "্‌্‌": "্‌"
};
var ALL_SYMBOLS = Object.assign({}, CONVERSION_MAP, PRE_SYMBOLS_MAP, POST_SYMBOLS_MAP);
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function createConversionPattern(symbols, delimiter) {
    if (delimiter === void 0) { delimiter = ""; }
    return Object.keys(symbols)
        .map(function (val) {
        return escapeRegExp(val);
    })
        .join(delimiter);
}
var SYMBOLS_CONVERSION_PATTERN = new RegExp("([" + createConversionPattern(ALL_SYMBOLS, "") + "])", "g");
var MAIN_CONVERSION_PATTERN = new RegExp("([w\u2020\u2021\u02C6\u2030\u0160]?)(([" + createConversionPattern(PRE_SYMBOLS_MAP) + "])*([" + createConversionPattern(CONVERSION_MAP, "") + "])?([" + createConversionPattern(POST_SYMBOLS_MAP) + "])*)([" + createConversionPattern(REFF) + "])?([\u00E6vxyz\u201C\u2013~\u0192\u201A\u201E\u2026]?)([" + createConversionPattern(POST_SYMBOLS_MAP) + "])*", "g");
var HASAANT_PATTERN = new RegExp("(" + escapeRegExp("্") + ")+");
var PRE_CONVERSION_PATTERN = new RegExp("(" + createConversionPattern(PRE_CONVERSION_MAP, "|") + ")", "g");
var POST_CONVERSION_PATTERN = new RegExp("(" + createConversionPattern(POST_CONVERSION_MAP, "|") + ")", "g");
function replaceSymbol(m) {
    return ALL_SYMBOLS[m] || "";
}
function mainConverter(match, preKaar, mUnit, g3, g4, g5, reff, postKaar, postPhala, offset, string) {
    var core = mUnit.replace(SYMBOLS_CONVERSION_PATTERN, replaceSymbol);
    core = core.replace(HASAANT_PATTERN, function (m) { return "্"; });
    core = reff ? "র্" + core : core;
    core = postPhala ? core + POST_SYMBOLS_MAP[postPhala] : core;
    var kaarString = "" + (preKaar ? KAARS[preKaar] : "") + (postKaar ? KAARS[postKaar] : "");
    core = core + (KAAR_POST_CONVERSION[kaarString] || kaarString);
    return core;
}
function bnBijoy2Unicode(string) {
    var convText = string.replace(PRE_CONVERSION_PATTERN, function (m) { return PRE_CONVERSION_MAP[m] || string; });
    convText = convText.replace(MAIN_CONVERSION_PATTERN, mainConverter);
    convText = convText.replace(POST_CONVERSION_PATTERN, function (m) { return POST_CONVERSION_MAP[m] || convText; });
    return convText;
}
exports.default = bnBijoy2Unicode;
