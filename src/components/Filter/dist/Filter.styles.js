"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.FilterContainer = styled_components_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 25vw;\n  padding: 70px;\n\n  @media (max-width: 1200px) {\n    padding: 30px;\n  }\n\n  @media (max-width: 900px) {\n    width: 40vw;\n  }\n"], ["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 25vw;\n  padding: 70px;\n\n  @media (max-width: 1200px) {\n    padding: 30px;\n  }\n\n  @media (max-width: 900px) {\n    width: 40vw;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.grey;
});
exports.PriceFilterWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .MuiTextField-root {\n    margin-right: 2.5%;\n    width: 45%;\n    display: inline-block;\n    margin-bottom: 1rem;\n  }\n"], ["\n  .MuiTextField-root {\n    margin-right: 2.5%;\n    width: 45%;\n    display: inline-block;\n    margin-bottom: 1rem;\n  }\n"])));
exports.PriceText = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-size: 1rem;\n  margin: 1rem 0;\n"], ["\n  display: block;\n  font-size: 1rem;\n  margin: 1rem 0;\n"])));
exports.FloorSpaceWrapper = styled_components_1["default"](exports.PriceFilterWrapper)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
exports.ExtrasWrapper = styled_components_1["default"](exports.PriceFilterWrapper)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
