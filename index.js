var fs = require("fs");
var marked = require('marked');
var cheerio = require('cheerio');
var toMarkdown = require('to-markdown');


var buf = fs.readFileSync("README_old.md", "utf8");

var $ = cheerio.load(marked(buf));

fs.writeFileSync('README.md', toMarkdown($.html()));
