load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);

    let response = fetch(url);
    if (response.ok) {
        let doc;
        let nextPart = url;
        let content = '';
        do {
            console.log(nextPart)
            doc = fetch(nextPart).html();
            nextPart = BASE_URL + doc.select(".text-center a").last().attr("href");
            doc.select("↑返回顶部↑").remove();
            doc.select("#rtext.readcontent a").remove();
            // doc.select('p[style*=\"color:red;\"]').remove();
            // doc.select('ins').remove();
            doc.select('script').remove();
            content += doc.select("#rtext");
        } while (nextPart.indexOf("_") !== -1)

        return Response.success(content);
    }
    return null;
}