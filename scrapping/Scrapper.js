var cheerio = require('cheerio');
var request = require('request');

request({
    method: 'GET',
    url: 'http://www.wordthink.com'
}, function(err, response, body, callback) {
    if (err) return console.error(err);
    $ = cheerio.load(body);

    var post = $('#content .singlemeta:first-child .post');
    var word = post.find('.title').eq(0).text().replace('\r\n\t\t\t\t\t', '').replace('\r\n\t\t\t\t', '');
    var definition = post.find('p').eq(0).text().replace('\n', '');

    console.log(word);
    console.log(definition);
});
