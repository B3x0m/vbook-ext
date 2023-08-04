function execute() {
    return Response.success([
        {
            title: "Tiêu điểm",
            script: "news.js",
            input: "https://blogtruyenmoi.com/thumb"
        },
        {
            title: "Đủ bộ",
            script: "gen.js",
            input: "0"
        },
        {
            title: "Con gái",
            script: "gen.js",
            input: "29"
        },
        {
            title: "Con trai",
            script: "gen.js",
            input: "31"
        }
    ]);
}
