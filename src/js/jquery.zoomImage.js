function magnify(e, r) {
    var g, f, l, p;

    function t(e) {
        var t, n, i, o, a, s, d;
        e.preventDefault(), n = (d = s = 0, o = (o = e) || window.event, a = g.getBoundingClientRect(),
                s = o.pageX - a.left, d = o.pageY - a.top, t = {
                    x: s -= window.pageXOffset,
                    y: d -= window.pageYOffset
                }).x, i = t.y,
            n > g.width - l / r && (n = g.width - l / r),
            n < l / r && (n = l / r),
            i > g.height - p / r && (i = g.height - p / r),
            i < p / r && (i = p / r),
            f.style.left = n - l + "px",
            f.style.top = i - p + "px",
            f.style.backgroundPosition = "-" + (n * r - l + 3) + "px -" + (i * r - p + 3) + "px"
    }

    g = document.getElementById(e),
        (f = document.createElement("DIV")).setAttribute("class", "x-glass"),
        g.parentElement.insertBefore(f, g),
        f.style.backgroundImage = "url('" + g.src + "')",
        f.style.backgroundRepeat = "no-repeat",
        f.style.backgroundSize = g.width * r + "px " + g.height * r + "px",
        l = f.offsetWidth / 2, p = f.offsetHeight / 2,
        f.addEventListener("mousemove", t),
        g.addEventListener("mousemove", t),
        f.addEventListener("touchmove", t),
        g.addEventListener("touchmove", t)
}

magnify("airOne", 1.7), magnify("airTwo", 1.7);