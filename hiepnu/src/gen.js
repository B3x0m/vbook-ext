function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url + "?paged=" + page);
    if (response.ok) {
        let doc = response.html();
        var next = doc.select(".pagination").select(".nav-prev").select("a").last().attr("href").match(/paged=(\d+)/)
        if (next) next = next[1]
        console.log(next) 

        const data = [];
        doc.select("div.box-cate-list.list-view ul li").forEach(e => {
            data.push({
                name: e.select("a.name-book").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select(".img img").first().attr("src"),
                description: e.select("a.name-author").text(),
                host: "https://hiepnu.net"
            });
        });

        return Response.success(data, next);
    }
    return null;
}
