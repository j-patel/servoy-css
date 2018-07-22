

$(document).ready(function () {

    initTabs();
})

function initTabs() {
    $(".tabs").each(function () {
        var that = $(this);

        var header = that.find(".tabs-header ul li a");
        var content = that.find(".tabs-content ul li");
        header.click(function (ev) {
            ev.preventDefault();
            $(this).closest("ul").find(".active").removeClass("active");
            $(this).addClass("active");

            content.hide();
            content.eq(parseInt($(this).data("content"))).show();
        })

    })
}