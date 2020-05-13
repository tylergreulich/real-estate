"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Filter_1 = require("../components/Filter/Filter");
var Header_1 = require("../components/Home/Header/Header");
var Listings_1 = require("../components/Listings/Listings");
var listingsData_1 = require("../components/Listings/listingsData");
var filterExtras_1 = require("../utils/filterExtras");
exports.ContentArea = styled_components_1["default"].section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            min_price: 0,
            max_price: 10000000,
            min_floor_space: 0,
            max_floor_space: 50000,
            houseType: 'All',
            city: 'All',
            bedrooms: '0',
            elevators: false,
            gym: false,
            swimming_pool: false,
            filteredData: listingsData_1.listingsData,
            listingsData: listingsData_1.listingsData,
            postsPerPage: 9,
            currentPage: 1,
            isFiltered: false,
            sortBy: '',
            search: ''
        };
        _this.handleChange = function (_a) {
            var _b;
            var target = _a.target;
            var name = target.name, value = target.value, type = target.type, checked = target.checked;
            var isCheckbox = type === 'checkbox';
            value = isCheckbox ? checked : value;
            _this.setState((_b = {}, _b[name] = value, _b), function () {
                console.log('After setState', _this.state);
                _this.filterData();
            });
        };
        _this.filterData = function () {
            var _a = _this.state, min_price = _a.min_price, max_price = _a.max_price, listingsData = _a.listingsData, min_floor_space = _a.min_floor_space, max_floor_space = _a.max_floor_space, city = _a.city, bedrooms = _a.bedrooms, houseType = _a.houseType, gym = _a.gym, swimming_pool = _a.swimming_pool, elevators = _a.elevators, sortBy = _a.sortBy;
            _this.setState({ isFiltered: true });
            var newData = listingsData.filter(function (item) {
                return (item.price >= min_price &&
                    item.price <= max_price &&
                    item.floorSpace >= min_floor_space &&
                    item.floorSpace <= max_floor_space &&
                    parseInt(item.bedrooms) >= parseInt(bedrooms));
            });
            if (city !== 'All') {
                newData = newData.filter(function (item) { return item.city === city; });
            }
            if (houseType !== 'All') {
                newData = newData.filter(function (item) { return item.houseType === houseType; });
            }
            if (gym)
                newData = filterExtras_1.filterExtras(newData, 'gym');
            if (elevators)
                newData = filterExtras_1.filterExtras(newData, 'elevator');
            if (swimming_pool)
                newData = filterExtras_1.filterExtras(newData, 'swimming_pool');
            if (sortBy === 'highest-price')
                newData = newData.sort(function (a, b) { return b.price - a.price; });
            if (sortBy === 'lowest-price')
                newData = newData.sort(function (a, b) { return a.price - b.price; });
            _this.setState({ filteredData: newData }, function () {
                console.log('After Filter', _this.state);
            });
        };
        return _this;
    }
    HomeComponent.prototype.render = function () {
        var _this = this;
        var _a = this.state, currentPage = _a.currentPage, postsPerPage = _a.postsPerPage, listingsData = _a.listingsData, filteredData = _a.filteredData, isFiltered = _a.isFiltered;
        var indexOfLastPost = currentPage * postsPerPage;
        var indexOfFirstPost = indexOfLastPost - postsPerPage;
        var getCurrentPosts = function (posts) {
            return posts.slice(indexOfFirstPost, indexOfLastPost);
        };
        var currentPosts = isFiltered
            ? getCurrentPosts(filteredData)
            : getCurrentPosts(listingsData);
        var totalPages = isFiltered && filteredData.length <= 9
            ? 1
            : Math.ceil(listingsData.length / 9);
        // Change Page
        var paginate = function (pageNumber) {
            return _this.setState({ currentPage: pageNumber });
        };
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Header_1.Header, null),
            react_1["default"].createElement(exports.ContentArea, null,
                react_1["default"].createElement(Filter_1.Filter, { handleChange: this.handleChange, filterValue: this.state }),
                react_1["default"].createElement(Listings_1.Listings, { listingsData: this.state.filteredData, postsPerPage: postsPerPage, totalPages: totalPages, paginate: paginate, totalPosts: listingsData.length, currentPosts: currentPosts, sortBy: this.state.sortBy, onChange: this.handleChange, search: this.state.search }))));
    };
    return HomeComponent;
}(react_1["default"].PureComponent));
exports.HomeComponent = HomeComponent;
var templateObject_1;
