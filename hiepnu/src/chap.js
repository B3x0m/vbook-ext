function execute(url) {
    url = url.replace("hiepnu.net");
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success(doc.select("div.read-content").html());
    }

    return null;
}
