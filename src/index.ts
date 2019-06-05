import { format, isSameMonth, isSameYear } from "date-fns";

const languagesFormat = {
  "en-US": {
    defaultStart: "MMM DD, YYYY ",
    defaultEnd: " MMM DD, YYYY",
    sameMonthStart: "MMM DD",
    sameMonthEnd: "DD, YYYY",
    sameYearStart: "MMM DD ",
    sameYearEnd: " MMM DD, YYYY"
  }
};

export interface ExtraOptions {
  formats?: {
    defaultStart: string;
    defaultEnd: string;
    sameMonthStart: string;
    sameMonthEnd: string;
    sameYearStart: string;
    sameYearEnd: string;
  };
}

type StringOrDate = Date | string;

export const formatDateRange = (
  startDate: StringOrDate,
  endDate: StringOrDate,
  language: "en-US" = "en-US",
  extraOptions: ExtraOptions = {}
) => {
  if (!startDate || !endDate) {
    return "";
  }

  let langFormat = { ...languagesFormat[language], ...extraOptions.formats };
  let startFormat = langFormat.defaultStart;
  let endFormat = langFormat.defaultEnd;

  if (isSameMonth(startDate, endDate)) {
    startFormat = langFormat.sameMonthStart;
    endFormat = langFormat.sameMonthEnd;
  } else if (isSameYear(startDate, endDate)) {
    startFormat = langFormat.sameYearStart;
    endFormat = langFormat.sameYearEnd;
  }

  return [format(startDate, startFormat), format(endDate, endFormat)].join("-");
};
