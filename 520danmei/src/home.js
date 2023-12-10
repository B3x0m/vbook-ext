function execute() {
    return Response.success([
        // mới cập nhật
        {title: "最新小说", input: "https://520danmei.org/", script: "top1.js"},
        // truyện mới
        {title: "最近更新", input: "https://520danmei.org/", script: "top2.js"},
    ]);
}