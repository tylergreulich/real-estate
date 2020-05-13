"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.ListingsContainer = styled_components_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 75vw;\n  padding: 25px 70px;\n  background: ", ";\n"], ["\n  width: 75vw;\n  padding: 25px 70px;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.white;
});
exports.SearchContainer = styled_components_1["default"].section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 70%;\n\n  .MuiAutocomplete-root {\n    width: 70% !important;\n    margin-bottom: 20px;\n  }\n"], ["\n  width: 70%;\n\n  .MuiAutocomplete-root {\n    width: 70% !important;\n    margin-bottom: 20px;\n  }\n"])));
exports.SortContainer = styled_components_1["default"].section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-between;\n"])));
exports.Results = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 1rem;\n  color: ", ";\n  display: inline-flex;\n  align-items: center;\n"], ["\n  font-size: 1rem;\n  color: ", ";\n  display: inline-flex;\n  align-items: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.darkGrey;
});
exports.SortOptions = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  select {\n    display: inline-block;\n    margin-right: 30px;\n  }\n"], ["\n  select {\n    display: inline-block;\n    margin-right: 30px;\n  }\n"])));
exports.ViewMode = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  margin: 8px 0;\n  cursor: pointer;\n\n  svg {\n    margin-left: 30px;\n    font-size: 1.25rem;\n  }\n\n  .fa-list {\n    color: ", ";\n  }\n\n  .fa-th {\n    color: ", ";\n  }\n\n  @media (max-width: 1100px) {\n    display: none;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  height: 100%;\n  margin: 8px 0;\n  cursor: pointer;\n\n  svg {\n    margin-left: 30px;\n    font-size: 1.25rem;\n  }\n\n  .fa-list {\n    color: ",
    ";\n  }\n\n  .fa-th {\n    color: ",
    ";\n  }\n\n  @media (max-width: 1100px) {\n    display: none;\n  }\n"])), function (_a) {
    var viewMode = _a.viewMode, theme = _a.theme;
    return viewMode === 'horizontal' ? theme.main.black : theme.main.lightGrey;
}, function (_a) {
    var viewMode = _a.viewMode, theme = _a.theme;
    return viewMode === 'vertical' ? theme.main.black : theme.main.lightGrey;
});
exports.ListingResults = styled_components_1["default"].section(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  gap: 60px;\n  margin-bottom: 60px;\n\n  @media (max-width: 1100px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: ",
    ";\n  gap: 60px;\n  margin-bottom: 60px;\n\n  @media (max-width: 1100px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n  }\n"])), function (_a) {
    var viewMode = _a.viewMode;
    return viewMode === 'vertical' ? "repeat(3, 1fr)" : "repeat(2, 1fr)";
});
exports.PaginationContainer = styled_components_1["default"].section(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  .MuiPagination-root {\n    .MuiPagination-ul {\n      justify-content: center;\n      margin-bottom: 30px;\n    }\n  }\n"], ["\n  .MuiPagination-root {\n    .MuiPagination-ul {\n      justify-content: center;\n      margin-bottom: 30px;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
