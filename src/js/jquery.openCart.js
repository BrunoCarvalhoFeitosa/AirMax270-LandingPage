$(document).ready(function() {

    $("#image-bag").on("click", function() {
            $(".x-shopping-Cart").css("transform", "translate(-100%, 0)"),
                $(".x-bag").css("transform", "translate(-429%, 0)")
        }),

        $("#image-close-cart").on("click", function() {
            $(".x-shopping-Cart").css("transform", "translate(100%, 0)"),
                $(".x-bag").css("transform", "translate(100%, 0)")
        }),

        $("#btn-next").on("click", function() {
            $(".x-info-client").css("transform", "translate(-100%, 0")
        }),

        $("#image-close-info").on("click", function() {
            $(".x-info-client").css("transform", "translate(100%, 0)")
        }),

        $("#icon-search").click(function() {
            $(".content-Search").css("transform", "translate(-100%, 0)")
        }),

        $("#icon-CloseSearch").click(function() {
            $(".content-Search").css("transform", "translate(100%, 0)")
        });
});