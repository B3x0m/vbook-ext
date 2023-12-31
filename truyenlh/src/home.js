function execute() {
    return Response.success([
        {title: "Cập Nhật", input: "https://truyenlh.com/danh-sach?sort=update", script: "gen.js"},
        {title: "Truyện Mới", input: "https://truyenlh.com/danh-sach?sort=new", script: "gen.js"},
        {title: "Xem Nhiều", input: "https://truyenlh.com/danh-sach?sort=top", script: "gen.js"}
    ]);
}