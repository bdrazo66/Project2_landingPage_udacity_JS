window.addEventListener('load', function() {
    var hpage = document.body.getElementsByClassName("page__header")[0];
    //if (typeof hpage !== 'undefined') {
    hpage.style.height = "100px";
    //hpage.style.color = "yellow";
    //hpage.style.backgroundColor = "black";

    var hlist = document.getElementsByClassName(" page__header ")[0];
    //hlist.className = "navbar__menu ul ";


    var list = document.getElementsByClassName("navbar__menu ")[0];
    var list1 = document.getElementById("navbar__list ");
    list1.className = "navbar__menu", "menu__link";
    var sec1 = document.createElement('li');
    //sec1.setAttribute("href", "#section1 ");
    //sec1.style.color = "yellow";
    sec1.style.margin = "15px";
    sec1.style.padding = "30px";
    sec1.style.position = "fixed";
    sec1.style.float = "left";
    sec1.style.left = "100px";
    var sec2 = document.createElement('li');
    sec2.style.margin = "15px";
    sec2.style.padding = "30px";
    sec2.style.position = "fixed";
    sec2.style.float = "left";
    sec2.style.left = "400px";
    var sec3 = document.createElement('li');
    sec3.style.margin = "15px";
    sec3.style.padding = "30px";
    sec3.style.position = "fixed";
    sec3.style.float = "left";
    sec3.style.left = "700px";
    var sec4 = document.createElement('li');
    sec4.style.margin = "15px";
    sec4.style.padding = "30px";
    sec4.style.position = "fixed";
    sec4.style.float = "left";
    sec4.style.left = "1000px";



    sec1.innerHTML = '<a href="#section1" id="s1">SECTION 1</a>';
    sec2.innerHTML = '<a href="#section2" id="s2">SECTION 2</a>';
    sec3.innerHTML = '<a href="#section3" id="s3">SECTION 3</a>';
    sec4.innerHTML = '<a href="#section4" id="s4">SECTION 4</a>';

    //sec1.innerHTML.classList.add("s1");

    list1.appendChild(sec4);
    list1.appendChild(sec3);
    list1.appendChild(sec2);
    list1.appendChild(sec1);
    list.appendChild(list1);
    hlist.appendChild(list);

    //  dev.to من موقع javaScript Tutorial Smotth Scroll Navigation 

    document.addEventListener("DOMContentLoaded", () => {
        //  little hack to detect if the user is on ie 11
        const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        // get all the links with an ID that starts with 'sectionLink'
        const listOfLinks = document.querySelectorAll("a[href^='#section");
        // loop over all the links
        listOfLinks.forEach(function(link) {
            // listen for a click
            link.addEventListener('click', () => {
                // toggle highlight on and off when we click a link
                listOfLinks.forEach((link) => {
                    if (link.classList.contains('highlighted')) {
                        link.classList.remove('highlighted');
                    }
                });
                link.classList.add('highlighted');
                // get the element where to scroll
                let ref = link.href.split('#section');
                ref = "#s" + ref[1];
                // ie 11 does not support smooth scroll, so we will simply scroll
                if (isIE11) {
                    window.scrollTo(0, document.querySelector(ref).offsetTop);
                } else {
                    window.scroll({
                        behavior: 'smooth',
                        left: 0,
                        // top gets the distance from the top of the page of our target element
                        top: document.querySelector(ref).offsetTop
                    });
                }
            })
        })
    })









    /* من هنا سكرت المشروع القديم ومن بعده جربت الكود الجديد 

        const header = document.querySelector("header");
        const sectionOne = document.querySelector("#section1");

        const sectionOneOptions = {};

        const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
            entries.forEach(entry => {
                //console.log(entry.target);
                if (!entry.isIntersecting) {
                    header.classList.add("navbar__menu", ".menu__link");
                    // sec1.setAttribute("color", "red");
                    //sec1.innerHTML;
                } else {
                    header.classList.remove("navbar__menu", ".menu__link");
                    //sec1.setAttribute("color", "green");
                    // sec1.innerHTML;
                }
            })
        }, sectionOneOptions);

        sectionOneObserver.observe(sectionOne);*/
    //  ولم يعمل معي هنا الكود الجديد يبدا
    /* function selectElementByclass(className) {

         return document.querySelector('.${className}');

     }

     const sections = [

         selectElementByclass("section1"),
         selectElementByclass("section2"),
         selectElementByclass("section3"),
         selectElementByclass("section4"),

     ];

     const navbar__list = {
         SECTION1: selectElementByclass("s1 navbar__list"),
         SECTION1: selectElementByclass("s2 navbar__list"),
         SECTION1: selectElementByclass("s3 navbar__list"),
         SECTION1: selectElementByclass("s4 navbar__list"),


     };

     const observerOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.7,
     }

     function observerCallback(entries, observer) {
         entries.forEach((entry) => {
             if (entry.isIntersecting) {
                 const navbar__list = navbar__list[entry.target.id];
                 navbar__list.classList.add('active');
                 Object.values(navbar__list).forEach((item) => {
                     if (item != navbar__list) {
                         item.classList.remove('active');
                     }
                 });

             }

         });


     } */
    // هنا الكود الجديد ينتهي 

});