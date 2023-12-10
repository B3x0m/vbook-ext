// // https://520danmei.org/book/21/
load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let title = doc.select('meta[property="og:novel:book_name"]').attr("content");
        let cover = doc.select('meta[property="og:image"]').attr("content")
        let author =  doc.select('meta[property="og:novel:author"]').attr("content").replace(/作\s*者：/g, "");
        let descriptionMeta = doc.select('meta[property="og:description"]').attr("content")
        let updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content")    // .replace(/\d\d:\d\d/g, "");
        let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
        return Response.success({
            name: title,
            cover: cover,
            author: author,
            description: descriptionMeta,
            detail: "Tác giả: " + author + '<br>' + "Chương mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime,
            host: BASE_URL
        });
    }
    return null;
}