function execute(url) {
    const doc = Http.get(url).html()
    let title = doc.select('meta[property="og:title"]').attr("content");
    let cover = doc.select('meta[property="og:image"]').attr("content");
    let author = doc.select('meta[property="og:author"]').attr("content");
    return Response.success({
        name: title,
        cover: cover,
        author: author,
        description: doc.select(".tag").html(),
        detail: doc.select("#info").html(),
        host: "https://nhentai.one",
        ongoing: false,
        nsfw: true
    });
}