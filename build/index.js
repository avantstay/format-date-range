"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var languagesFormat = {
    "en-US": {
        defaultStart: "MMM DD, YYYY ",
        defaultEnd: " MMM DD, YYYY",
        sameMonthStart: "MMM DD",
        sameMonthEnd: "DD, YYYY",
        sameYearStart: "MMM DD ",
        sameYearEnd: " MMM DD, YYYY"
    }
};
exports.formatDateRange = function (startDate, endDate, language, extraOptions) {
    if (language === void 0) { language = "en-US"; }
    if (extraOptions === void 0) { extraOptions = {}; }
    if (!startDate || !endDate) {
        return "";
    }
    var langFormat = __assign({}, languagesFormat[language], extraOptions.formats);
    var startFormat = langFormat.defaultStart;
    var endFormat = langFormat.defaultEnd;
    if (date_fns_1.isSameMonth(startDate, endDate)) {
        startFormat = langFormat.sameMonthStart;
        endFormat = langFormat.sameMonthEnd;
    }
    else if (date_fns_1.isSameYear(startDate, endDate)) {
        startFormat = langFormat.sameYearStart;
        endFormat = langFormat.sameYearEnd;
    }
    return [date_fns_1.format(startDate, startFormat), date_fns_1.format(endDate, endFormat)].join("-");
};
