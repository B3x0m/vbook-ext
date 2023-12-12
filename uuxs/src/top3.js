load("config.js");

function execute(url, page) {
    let response = fetch(url + "/newbook");

    if (response.ok) {
        let doc = response.html();
        let books = [];
        doc.select("menu.px-3 li.py-3").forEach(e => {
            books.push({
                name: e.select("div.text-sm a").first().text(),
                link: e.select("div.text-sm a").first().attr("href"),
                // cover: e.select("a img").attr("data-original"),
                description: e.select("div a").last().text(),
                host: BASE_URL
            })
        });

        return Response.success(books);
    }

    return null;
}