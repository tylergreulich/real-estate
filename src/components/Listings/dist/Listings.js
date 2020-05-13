"use strict";
exports.__esModule = true;
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var core_1 = require("@material-ui/core");
var lab_1 = require("@material-ui/lab");
var react_1 = require("react");
var Listing_1 = require("./Listing/Listing");
var Listings_styles_1 = require("./Listings.styles");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120
        },
        selectEmpty: {
            marginTop: theme.spacing(2)
        }
    });
});
exports.Listings = react_1["default"].memo(function (_a) {
    var listingsData = _a.listingsData, totalPages = _a.totalPages, paginate = _a.paginate, currentPosts = _a.currentPosts, sortBy = _a.sortBy, onChange = _a.onChange;
    var _b = react_1["default"].useState('vertical'), viewMode = _b[0], setViewMode = _b[1];
    var filterHasNoMatch = listingsData === undefined || listingsData.length === 0;
    var classes = useStyles();
    return (react_1["default"].createElement(Listings_styles_1.ListingsContainer, null, filterHasNoMatch ? (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", null, "No results found")))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Listings_styles_1.SortContainer, null,
            react_1["default"].createElement(Listings_styles_1.Results, null,
                currentPosts.length,
                " results found"),
            react_1["default"].createElement(Listings_styles_1.SortOptions, null,
                react_1["default"].createElement(core_1.FormControl, { className: classes.formControl },
                    react_1["default"].createElement(core_1.InputLabel, { id: "demo-simple-select-label" }, "Price"),
                    react_1["default"].createElement(core_1.Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: sortBy, onChange: onChange, name: "sortBy" },
                        react_1["default"].createElement(core_1.MenuItem, { value: "highest-price" }, "Highest Price"),
                        react_1["default"].createElement(core_1.MenuItem, { value: "lowest-price" }, "Lowest Price"))),
                react_1["default"].createElement(Listings_styles_1.ViewMode, { viewMode: viewMode },
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faList, onClick: function () { return setViewMode('horizontal'); } }),
                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTh, onClick: function () { return setViewMode('vertical'); } })))),
        react_1["default"].createElement(Listings_styles_1.ListingResults, { viewMode: viewMode }, currentPosts.map(function (_a) {
            var address = _a.address, state = _a.state, city = _a.city, realEstateAgent = _a.realEstateAgent, price = _a.price, floorSpace = _a.floorSpace, bedrooms = _a.bedrooms, datePosted = _a.datePosted, extras = _a.extras, houseType = _a.houseType, imgUrl = _a.imgUrl;
            return (react_1["default"].createElement(Listing_1.Listing, { key: imgUrl, address: address, state: state, city: city, realEstateAgent: realEstateAgent, price: price, floorSpace: floorSpace, bedrooms: bedrooms, datePosted: datePosted, extras: extras, houseType: houseType, imgUrl: imgUrl }));
        })),
        react_1["default"].createElement(Listings_styles_1.PaginationContainer, null,
            react_1["default"].createElement(lab_1.Pagination, { count: totalPages, color: "primary", onChange: function (_, pageNumber) { return paginate(pageNumber); }, style: {
                    justifyContent: 'center'
                } }))))));
});
