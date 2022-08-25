"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("convertion", function () {
    it("Try a simple bijoy sentence to unicode", function () {
        expect(index_1.default("Avgvi †mvbvi evsjv, Avwg †Zvgvq fv‡jvevwm|")).toEqual("আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।");
        expect(index_1.default("fvlvšÍi")).toEqual("ভাষান্তর");
        expect(index_1.default("g„Zz¨")).toEqual("মৃত্যু");
        expect(index_1.default("ÿwZ")).toEqual("ক্ষতি");
    });
});
