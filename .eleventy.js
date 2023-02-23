const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNav = require("@11ty/eleventy-navigation");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { DateTime } = require("luxon");
const fs = require("fs");

var getIndex = (collection, currentSlug) => {
  let currentIndex = 0;
  collection.forEach((page, index) => {
    if (page.fileSlug == currentSlug) {
      currentIndex = index;
      return;
    }
  });
  return currentIndex;
};

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginNav);

  // Filters
  eleventyConfig.addFilter("dateToFormat", (date, format) => {
    return DateTime.fromJSDate(date, { zone: "utc" }).toFormat(String(format));
  });
  eleventyConfig.addFilter("yearRange", (date1Str, date2Str = false) => {
    let date = false;
    let end = false;
    let start = false;
    const date1 = date1Str
      ? DateTime.fromJSDate(date1Str, { zone: "utc" })
      : false;
    const date2 = DateTime.fromJSDate(date2Str, { zone: "utc" });
    if (date1 && date2) {
      end = date1 < date2 ? date2 : date1;
      start = date1 < date2 ? date1 : date2;
    } else {
      end = date2;
    }
    const endYear = end.toFormat("yyyy");
    if (date1 && end) {
      const startYear = start.toFormat("yyyy");
      if (startYear == endYear) {
        date = endYear;
      } else {
        const startCent = startYear.slice(0, 2);
        const endCent = endYear.slice(0, 2);
        if (startCent == endCent) {
          date = startYear + "&ndash;" + end.toFormat("yy");
        } else {
          date = startYear + "&ndash;" + endYear;
        }
      }
    } else if (end) {
      date = endYear;
    }
    return date;
  });
  eleventyConfig.addFilter("dateToISO", (date) => {
    return DateTime.fromJSDate(date, { zone: "utc" }).
