"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
exports.ListingContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1);\n  border-radius: 5px;\n"], ["\n  box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1);\n  border-radius: 5px;\n"])));
exports.ListingAddress = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 20px;\n  font-weight: 500;\n  font-size: 2rem;\n  text-transform: capitalize;\n  text-shadow: 0 1px 4px rgba(91, 91, 91, 1);\n  opacity: 1;\n  transition: all 0.3s ease-in-out;\n\n  @media (max-width: 1100px) {\n    font-size: 1.5rem;\n  }\n"], ["\n  position: absolute;\n  bottom: 20px;\n  font-weight: 500;\n  font-size: 2rem;\n  text-transform: capitalize;\n  text-shadow: 0 1px 4px rgba(91, 91, 91, 1);\n  opacity: 1;\n  transition: all 0.3s ease-in-out;\n\n  @media (max-width: 1100px) {\n    font-size: 1.5rem;\n  }\n"])));
exports.ListingDetails = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 25px;\n  position: absolute;\n  background: linear-gradient(\n    to left,\n    rgba(218, 68, 83, 0.9),\n    rgba(137, 33, 107, 0.9)\n  );\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n"], ["\n  padding: 25px;\n  position: absolute;\n  background: linear-gradient(\n    to left,\n    rgba(218, 68, 83, 0.9),\n    rgba(137, 33, 107, 0.9)\n  );\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n"])));
exports.ListingImage = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: ", ";\n  /* background: url('https://images.familyhomeplans.com/plans/75977/75977-b600.jpg')\n    no-repeat center center; */\n  background-size: cover;\n  min-height: 200px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 15px;\n  color: ", ";\n  position: relative;\n\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n\n    ", " {\n      opacity: 0;\n    }\n  }\n"], ["\n  background: ", ";\n  /* background: url('https://images.familyhomeplans.com/plans/75977/75977-b600.jpg')\n    no-repeat center center; */\n  background-size: cover;\n  min-height: 200px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  padding: 15px;\n  color: ", ";\n  position: relative;\n\n  &:hover {\n    ", " {\n      opacity: 1;\n    }\n\n    ", " {\n      opacity: 0;\n    }\n  }\n"])), function (_a) {
    var imgUrl = _a.imgUrl;
    return "url(" + imgUrl + ") no-repeat center center";
}, function (_a) {
    var theme = _a.theme;
    return theme.main.white;
}, exports.ListingDetails, exports.ListingAddress);
exports.UserImage = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 3px solid ", ";\n  display: inline-block;\n  background: url('https://images.familyhomeplans.com/plans/75977/75977-b600.jpg')\n    no-repeat center center;\n  background-size: cover;\n"], ["\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 3px solid ", ";\n  display: inline-block;\n  background: url('https://images.familyhomeplans.com/plans/75977/75977-b600.jpg')\n    no-repeat center center;\n  background-size: cover;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.white;
});
exports.UserDetails = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: top;\n  width: 70%;\n  margin-left: 20px;\n"], ["\n  display: inline-block;\n  vertical-align: top;\n  width: 70%;\n  margin-left: 20px;\n"])));
exports.UserName = styled_components_1["default"].span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: rgba(255, 255, 255, 1);\n  display: block;\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0 0 5px;\n"], ["\n  color: rgba(255, 255, 255, 1);\n  display: block;\n  font-size: 1rem;\n  font-weight: 500;\n  margin: 0 0 5px;\n"])));
exports.PostDate = styled_components_1["default"].span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.9rem;\n  display: block;\n  margin-left: 3px;\n"], ["\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.9rem;\n  display: block;\n  margin-left: 3px;\n"])));
exports.Details = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10px;\n"], ["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10px;\n"])));
exports.FloorSpace = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-bottom: 10px;\n\n  svg {\n    font-size: 20px;\n    margin-right: 15px;\n  }\n\n  span {\n    font-weight: 400;\n    font-size: 1rem;\n  }\n"], ["\n  margin-bottom: 10px;\n\n  svg {\n    font-size: 20px;\n    margin-right: 15px;\n  }\n\n  span {\n    font-weight: 400;\n    font-size: 1rem;\n  }\n"])));
exports.ViewButton = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background: ", ";\n  padding: 8px;\n  font-size: 0.9rem;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  background: ", ";\n  padding: 8px;\n  font-size: 0.9rem;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.25s ease-in-out;\n\n  &:hover {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.main.secondary;
});
exports.Bedrooms = styled_components_1["default"](exports.FloorSpace)(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""])));
exports.BottomInfo = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding: 20px 15px;\n  display: flex;\n  flex-direction: column;\n"], ["\n  padding: 20px 15px;\n  display: flex;\n  flex-direction: column;\n"])));
exports.Price = styled_components_1["default"].span(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  font-size: 1rem;\n  margin-bottom: 10px;\n  color: ", ";\n"], ["\n  font-size: 1rem;\n  margin-bottom: 10px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.darkGrey;
});
exports.Location = styled_components_1["default"].span(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  font-size: 1.2rem;\n  color: ", ";\n\n  svg {\n    margin-right: 7.5px;\n  }\n"], ["\n  font-size: 1.2rem;\n  color: ", ";\n\n  svg {\n    margin-right: 7.5px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main.lightGrey;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
