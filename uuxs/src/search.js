// nào rảnh thì làm

load('config.js');
function execute(key, page) {
    return Response.success([
        { name, link, host, cover, description }
    ], next);
}
// name: Tên truyện
// link: url của truyện
// host:<optional> domain của link, nếu link đã bao gồm domain thì không cần
// cover: url của ảnh cover
// description: mô tả thêm

// Kết quả của page đầu sẽ tiếp tục làm input của page tiếp theo
// key = key search
// page = next trả về từ page đầu, trường hợp next = <rỗng> hoặc null sẽ dừng load
// search.js - page 2
function execute(key, page) {
    return Response.success([
        { name, link, host, cover, description }
    ], next);
}