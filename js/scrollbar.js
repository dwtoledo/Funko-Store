document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('news__scrollbar--next');
    element.onclick = function () {
        document.getElementById('news__products--scroll').scrollLeft += 200;
    };
}, false);

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('news__scrollbar--back');
    element.onclick = function () {
        document.getElementById('news__products--scroll').scrollLeft -= 200;
    };
}, false);