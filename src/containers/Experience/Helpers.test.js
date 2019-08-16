import { formatTime, formatPeriod } from "./Helpers";

describe("Testing formatTime()", () => {
  test("formatTime returns correct time", () => {
    expect(formatTime("201909")).toBe("2019/09");
  });

  test("formatTime returns label for NaN value", () => {
    expect(formatTime("hej")).toBe("hej");
  });
});

describe("Testing formatPeriod", () => {
  test("formatPeriod for work", () => {
    expect(
      formatPeriod({
        start: "201509",
        end: "pågående",
        entity: "a",
        entityTitle: "b",
        description: "c",
        location: "d"
      })
    ).toStrictEqual({
      start: "2015/09",
      end: "pågående",
      label: "b",
      title: "a, d",
      description: "c",
      project: false
    });
  });
});
