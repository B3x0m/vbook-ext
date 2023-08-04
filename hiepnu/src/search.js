function execute(key, page) {
    if (!page) page = '1';
    var browser = Engine.newBrowser();
    browser.launch("https://hiepnu.net/tim-kiem?tukhoa=" + key, 1000);
    browser.close()

    var urls = JSON.parse(browser.urls());
    var novelList = [];
    var next = "";
    urls.forEach(requestUrl => {
        if (requestUrl.indexOf("api.truyen.onl/v2/books") >= 0) {
            var response = JSON.parse(Http.get(requestUrl).string());
            next = response._extra._pagination._next;
            response._data.forEach(book => {
                novelList.push({
                    name: book.name,
                    link: "/truyen/" + book.slug,
                    description: book.author_name,
                    cover: book['poster']['default'],
                    host: "https://hiepnu.net"
                })
            });
        }
    });
    return Response.success(novelList, next);
}
