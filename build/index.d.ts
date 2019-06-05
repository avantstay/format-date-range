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
declare type StringOrDate = Date | string;
export declare const formatDateRange: (startDate: StringOrDate, endDate: StringOrDate, language?: "en-US", extraOptions?: ExtraOptions) => string;
export {};
