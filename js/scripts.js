console.log("Hello, My name is Marco Dijamco, Welcome to my Portfolio Site!");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

document.getElementById("scroll-to-bottom").addEventListener("click", function () {
    document.body.scrollIntoView(false);
});