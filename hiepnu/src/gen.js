function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url + "/trang-" + page);
    if (response.ok) {
        let doc = response.html();

        var next = doc.select(".pagination").select(".nav-prev").select("a").attr("href").match(/trang-(\d+)/)
        if (next) next = next[1]

        const data = [];
        doc.select(".box-cate-list.list-view li").forEach(e => {
            data.push({
                name: e.select("a").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(".box-book-info item-chapter").text(),
                host: "https://hiepnu.net"
            });
        });

        return Response.success(data, next);
    }
    return null;
}
