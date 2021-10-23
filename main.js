
let sidebarHeight = document.getElementById('sidebar').offsetHeight;
let sidebar = document.getElementById('sidebar');
// let sidebarTop = document.getElementById('sidebar').offsetTop;
vh = window.innerHeight;


function scrollDown() {

    
    let sidebarCord = sidebar.getBoundingClientRect();

    let y = sidebarCord.top;


    let scrolled = window.scrollY;
    console.log("scrolled: " + scrolled);

    // console.log("sidebar top: " + sidebarTop);
    console.log("content Height: " + document.documentElement.scrollHeight);
    console.log("viewport Height: " + vh);
    
    console.log("sidebar top: " + y);

    if( sidebarHeight + y > vh) {
        sidebar.style.top = -scrollY;
        console.log("a");
    }else {
        console.log("b");
        sidebar.style.top = vh - sidebarHeight;
    }


    console.log("sidebar Height: " + sidebarHeight);
    console.log("....................");

}



window.addEventListener("scroll" , scrollDown);




