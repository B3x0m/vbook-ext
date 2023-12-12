function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        // doc.select("ul.pagination li.page-item").last().remove()
        doc.select("li.nav-prev > a").last().remove()
        lastPage = doc.select("li.page-item > a").last().attr("href");
        console.log(lastPage)
        if (lastPage) {
            lastPage = lastPage.match(/paged=(\d+)/);
            if (lastPage) lastPage = lastPage[1];
        }
        if (lastPage) lastPage = parseInt(lastPage);
        else lastPage = 1;
        const data = [];
        for (var i = 0; i < lastPage; i++) {
            data.push(url + "?paged=" + (i + 1));
        }
        return Response.success(data);
    }

    return null;
}
