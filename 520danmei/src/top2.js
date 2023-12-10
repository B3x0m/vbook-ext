load("config.js");

function execute(url, page) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let books = [];
        doc.select("#gengxin.content-left > ul > li").forEach(e => {
            books.push({
                name: e.select("a").first().text(),
                link: e.select("a").first().attr("href"),
                description: e.select(".s4").text(),
                host: BASE_URL
            })
        });

        return Response.success(books);
    }

    return null;
}