$(document).ready(function() {
    var r = $("body").width(),
        t = $(".x-wrap-product"),
        n = $(".x-wrap-product .x-product"),
        a = t.width();

    $(window).on("resize", function() {
            r = $("body").width(),
                a = t.width()
        }),

        $(document).mousemove(function(t) {
            var o = t.pageX,
                d = o / r * a - o / 2;
            n.css({
                "-webkit-transform": "translate3d(" + -d + "px, 0, 0)",
                transform: "translate3d(" + -d + "px, 0, 0)"
            })
        })
});