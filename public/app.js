
window.onscroll = function() { 
    scrollFunction() 
};

function scrollFunction() {
        var btn = document.getElementById("topBtn");
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        }
        else {
            btn.style.display = "none";
        }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}