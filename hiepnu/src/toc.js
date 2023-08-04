function execute(url) {
    url = url.replace("hiepnu.net");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let title = doc.select("div.box-list-chapter .detail-title-box")
        if (title.size() === 2) {
            doc.select("div.show-chapter .box-show-chapter").first().remove();
        }
        const data = [];
        doc.select("div.show-chapter ul.list-chapter li a").forEach(e => {
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: "http://hiepnu.net"
            });
        });

        return Response.success(data);
    }

    return null;
}
