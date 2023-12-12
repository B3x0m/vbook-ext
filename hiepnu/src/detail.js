function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html()
        var cover = doc.select(".img img").first().attr("src")
        if (!cover) cover = doc.select("img").first().attr("src")
        var status = doc.select(".status-chapter").html()
        let description = doc.select(".box-show-des").html().split("<p class=\"trichdan\"><\/p>")[1]
        let name =  doc.select("h1.hl-name-book").first().text()
        let author = doc.select('a.name-author').text()
        return Response.success({
            name: name,
            cover: cover,
            author: author,
            description: description,
            detail: "Tác giả: " + author + "<br>Thể loại: " + doc.select("div.book-list-field > div > div:nth-child(3) > div.r-if-book").text() + "<br>Số Chương: " + doc.select("body > div:nth-child(3) > div.detail > div > div > div > div.book-list-field > div > div:nth-child(5) > div.r-if-book > span").text(),
            host: "https://hiepnu.net",
            ongoing: status.indexOf("Đang ra") >= 0
        });
    }

    return null;

}
