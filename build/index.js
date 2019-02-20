"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var languagesFormat = {
    'en-US': {
        defaultStart: 'MMM DD, YYYY ',
        defaultEnd: ' MMM DD, YYYY',
        sameMonthStart: 'MMM DD',
        sameMonthEnd: 'DD, YYYY',
        sameYearStart: 'MMM DD ',
        sameYearEnd: ' MMM DD, YYYY',
    }
};
exports.formatDateRange = function (startDate, endDate, language) {
    if (language === void 0) { language = 'en-US'; }
    if (!startDate || !endDate) {
        return '';
    }
    var langFormat = languagesFormat[language];
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
    return [
        date_fns_1.format(startDate, startFormat),
        date_fns_1.format(endDate, endFormat)
    ].join('-');
};
