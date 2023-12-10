load("config.js");

function execute(url, page) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let books = [];
        doc.select("#fengtui.content-left > .item").forEach(e => {
            books.push({
                name: e.select("dl > dt > a").last().text(),
                link: e.select("dl > dt > a").last().attr("href"),
                cover: e.select("img").attr("src"),
                description: e.select("dd").text(),
                host: BASE_URL
            })
        });

        return Response.success(books);
    }

    return null;
}