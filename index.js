var fs = require("fs"),
    marked = require('marked'),
    cheerio = require('cheerio'),
    toMarkdown = require('to-markdown'),
    request = require('request');

var file_in = "README.md",
    file_out = "README.md";

var $ = cheerio.load(marked(fs.readFileSync(file_in, "utf8"))); //Для форматирования

fs.writeFileSync(file_out, toMarkdown($.html()));

$('a').each(function(i, elem) { //Проверка ссылок на доступность
    var url = $(elem).attr('href');

    request(url, function(error, response) {
        if (error) {
            console.log(url, " : ", error)
        };
    })
});
