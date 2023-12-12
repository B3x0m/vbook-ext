function execute() {
    return Response.success([
        {title: "熱門小說", input: "https://www.uuxs.com/", script: "top1.js"},
        {title: "章節更新", input: "https://www.uuxs.com/", script: "top2.js"},
        {title: "新上架小說", input: "https://www.uuxs.com/", script: "top3.js"},
    ]);
}