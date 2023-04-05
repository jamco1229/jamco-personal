// Part 1
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNav = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const fs = require("fs");

var getIndex = (collection, currentSlug) => {
  let currentIndex = 0;
  collection.filter((page, index) => {
    currentIndex = page.fileSlug == currentSlug ? index : currentIndex;
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
    // ...
  });
  eleventyConfig.addFilter("dateToISO", (date) => {
    // ...
  });
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });
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
    if (start && end) {
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
    return DateTime.fromJSDate(date, { zone: "utc" }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    });
  });
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return LuxonDateTime.fromJSDate(dateObj).toFormat(format);
  });
};

  eleventyConfig.addFilter("nextInCollection", (collection, currentSlug) => {
    const currentIndex = getIndex(collection, currentSlug);
    const pages = collection.filter((page, index) => {
      return index == currentIndex + 1 ? page : false;
    });
    return pages.length ? pages[0] : false;
  });
  eleventyConfig.addFilter("prevInCollection", (collection, currentSlug) => {
    const currentIndex = getIndex(collection, currentSlug);
    const pages = collection.filter((page, index) => {
      return index == currentIndex - 1 ? page : false;
    });
    return pages.length ? pages[0] : false;
  });
  eleventyConfig.addFilter("getPagesByPaths", (collection, paths) => {
    let pages = [];
    paths.forEach((path) => {
      let page = collection.filter((page) => {
        return page.filePathStem.includes(path) ? page : false;
      });
      if (page.length) {
        pages.push(page[0]);
      }
    });
    return pages;
  });

  eleventyConfig.addFilter("getFeaturedImage", (blocks) => {
    // Get the featured images
    let images = blocks.filter((block) => {
      return block.type == "image" && block.featured ? block : false;
    });
    // If no featured images, get all the images
    if (!images.length) {
      images = blocks.filter((block) => {
        return block.type == "image" ? block : false;
      });
    }
    return images.length ? images[0] : false;
  });


  // Collections
  eleventyConfig.addCollection("cinematography", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/cinematography.json");
  });



  eleventyConfig.addCollection("concept", function (collection) {
    return collection.getFilteredByTag("concept");
  });

  eleventyConfig.addCollection("caseStudies", function (collection) {
    return collection.getFilteredByTag("caseStudies");
  });

  eleventyConfig.addCollection("exploration", function (collection) {
    return collection.getFilteredByTag("exploration");
  });

  eleventyConfig.addCollection("writing", function(collection) {
    return collection.getFilteredByGlob("content/posts/*.md");
  });

  eleventyConfig.addFilter("date", (dateObj, format) => {
    return LuxonDateTime.fromJSDate(dateObj).toFormat(format);
  });
  
eleventyConfig.addCollection("projects", (collection) => {
  const projects = collection.getFilteredByGlob("content/projects/*.md");
  return projects.sort(function (a, b) {
    return b.data.dateEnd - a.data.dateEnd;
  });
});
eleventyConfig.addCollection("posts", function (collection) {
  const posts = collection.getFilteredByGlob("content/posts/*.md");
  return posts.sort(function (a, b) {
    return b.data.date - a.data.date;
  });
});
eleventyConfig.addCollection("pages", function (collection) {
  return collection.getFilteredByGlob("content/pages/*.md");
});



// Part 2
  // ... (other collections)

  // Markdown
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };
  const markdownLibrary = markdownIt(markdownOptions).use(markdownItAnchor, {
    permalink: false,
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
    markdownIt(markdownOptions).render(markdownString)
  );
  eleventyConfig.addNunjucksFilter("markdownifyInline", (markdownString) =>
    markdownIt(markdownOptions).renderInline(markdownString)
  );
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->", // Matches WordPress style
  });

  // BrowserSync
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // Pass-thru files
  eleventyConfig.addPassthroughCopy({ "content/media": "media" });
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  // Layouts
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("error", "layouts/error.njk");
  eleventyConfig.addLayoutAlias("feed", "layouts/feed.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("project", "layouts/project.njk");
  eleventyConfig.addLayoutAlias("projects", "layouts/projects.njk");
  eleventyConfig.addLayoutAlias("resume", "layouts/resume.njk");

  // Base Config
  return {
    dir: {
      data: "content/_data",
    },
    templateFormats: ["njk", "md", "html", "liquid"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
