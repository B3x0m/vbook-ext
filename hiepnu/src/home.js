function execute() {
    return Response.success([
        {title: "Truyện Mới", script: "gen.js", input: "https://hiepnu.net/danh-sach/truyen-moi"},
        {title: "Truyện Hot", script: "gen.js", input: "https://hiepnu.net/danh-sach/truyen-hot"},
        {title: "Truyện Full", script: "gen.js", input: "https://hiepnu.net/danh-sach/truyen-full"},
    ]);
}
