$(document).ready(function() {
    $(".x-content-slide-product ul li").draggable({
            connectToSortable: ".x-bag",
            helper: "clone"            
    }),

    $(".x-bag").droppable({
        hoverClass: "ui-state-hover",
        drop: function(o, t) {
            alert("Seu produto foi adicionado ao carrinho"),
                $("<li></li>").html(t.draggable.html()).prependTo(this),
                $(this).find(".x-message-buy").remove(),
                preco = 599.99,
                totalCompra = 0,
                totalProdutos = $(this).find("li").length,
                totalCompra = (preco * totalProdutos),
                $("#count").html(totalProdutos ++),
                $("#total").html(parseFloat(totalCompra).toFixed(2));
        }
    });
});