window.onload = function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var mobileWidth = 767;

    if (screenWidth < mobileWidth) {
        window.location.href = "pagina-restringida.html";
    }
};
