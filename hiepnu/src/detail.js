function execute(url) {
    url = url.replace("hiepnu.net");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html().select(".book-list-field");

        var detail = doc.select(".l-book-list-field div.info-book");
        var cover = doc.select("img").first().attr("data-pagespeed-high-res-src")
        if (!cover) cover = doc.select("img").first().attr("src")
        var status = doc.select(".content1 .status").html()
        doc.select("div.status-chapter").remove()

        return Response.success({
            name: doc.select("h1.hl-name-book").first().text(),
            cover: cover,
            author: detail.select("a").first().text(),
            description: doc.select(".trichdan").html(),
            detail: detail.html(),
            host: "https://hiepnu.net",
            ongoing: status.indexOf("Đang ra") >= 0
        });
    }

    return null;

}
