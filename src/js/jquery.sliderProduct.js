$(document).ready(function() {
        $("ul#slide a").click(function(t) {
            t.preventDefault(),
                $("ul#slide li").css("opacity", "1"),
                $(".x-box-product img").attr("src", $(this).attr("href"))
        })
    }),
    $(document).ready(function() {
        $("ul#slide li").hover(function() {
                $(this).css("opacity", "0.5")
            },
            function() {
                $(this).css("opacity", "1")
            })
    });