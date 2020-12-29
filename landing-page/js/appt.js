window.addEventListener('load', function() {
    var hpage = document.body.getElementsByClassName("page__header")[0];
    //if (typeof hpage !== 'undefined') {
    hpage.style.height = "100px";
    //hpage.style.color = "yellow";
    //hpage.style.backgroundColor = "black";

    var hlist = document.getElementsByClassName(" page__header ")[0];
    hlist.className = "navbar__menu ul ";


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



    sec1.innerHTML = '<a href="#section1" class="s1Nav navbar__menu">SECTION 1</a>';
    sec2.innerHTML = '<a href="#section2" class="s2Nav navbar__menu">SECTION 2</a>';
    sec3.innerHTML = '<a href="#section3" class="s3Nav navbar__menu">SECTION 3</a>';
    sec4.innerHTML = '<a href="#section4" class="s4Nav navbar__menu">SECTION 4</a>';

    //sec1.innerHTML.classList.add("s1");

    list1.appendChild(sec4);
    list1.appendChild(sec3);
    list1.appendChild(sec2);
    list1.appendChild(sec1);
    list.appendChild(list1);
    hlist.appendChild(list);

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
    // هنا الكود الجديد يبدا
    function selectElementByclass(className) {

        return document.querySelector('.${className}');

    }

    const sections = [

        selectElementById("section1"),
        selectElementById("section2"),
        selectElementById("section3"),
        selectElementById("section4"),

    ];

    const navs = {
        SECTION1: selectElementByclass("s1Nav"),
        SECTION1: selectElementByclass("s2Nav"),
        SECTION1: selectElementByclass("s3Nav"),
        SECTION1: selectElementByclass("s4Nav"),


    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const navbar__menu = navbar__menu[entry.target.id];
                navbar__menu.classList.add('active');
                Object.values(navs).forEach((item) => {
                    if (item != navbar__menu) {
                        item.classList.remove('active');
                    }
                });

            }

        });


    } // هنا الكود الجديد ينتهي 
    const observe = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => observer.observe(sec));

});