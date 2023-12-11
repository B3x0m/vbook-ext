function execute(url) {
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let el = doc.select("div#thumbnail-container div.thumb-container a");
        var mediaServer = /media_server\s*:\s*(\d+)/g.exec(doc.html());
        if (mediaServer) mediaServer = mediaServer[1];
        let data = [];
        el.forEach(e => {
            data.push(e.select("img").attr("src").replace("s_",""));
        });
        return Response.success(data);
    }
}