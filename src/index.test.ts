import { expect } from "chai";
import { formatDateRange } from ".";

describe("formatDateRange", () => {
  it("should format dates in same month", () => {
    expect(formatDateRange("2018-09-10", "2018-09-15", "en-US")).to.equal(
      "Sep 10-15, 2018"
    );
  });

  it("should format dates in same year", () => {
    expect(formatDateRange("2018-09-10", "2018-10-10", "en-US")).to.equal(
      "Sep 10 - Oct 10, 2018"
    );
  });

  it("should format dates in different years", () => {
    expect(formatDateRange("2018-09-10", "2019-09-15", "en-US")).to.equal(
      "Sep 10, 2018 - Sep 15, 2019"
    );
  });

  it("should be able to customize formats", () => {
    expect(
      formatDateRange("2018-01-01", "2018-01-31", "en-US", {
        formats: {
          defaultStart: "MMM D, YY ",
          defaultEnd: " MMM D, YY",
          sameMonthStart: "MMM D",
          sameMonthEnd: "D, YY",
          sameYearStart: "MMM D ",
          sameYearEnd: " MMM D, YY"
        }
      })
    ).to.equal("Jan 1-31, 18");
  });
});
