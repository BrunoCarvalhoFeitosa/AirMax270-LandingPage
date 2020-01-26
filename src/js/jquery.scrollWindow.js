function scrollLoader() {
    var e = 
    (document.body.scrollTop || document.documentElement.scrollTop) / 
    (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.getElementById("page-ProgressBar").style.width = e + "%";
}

window.onscroll = function() { scrollLoader() };