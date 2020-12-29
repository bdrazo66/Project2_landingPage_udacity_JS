window.addEventListener('load', function() {

    const hpage = document.querySelector(".page__header");
    hpage.style.height = "100px";
    const list = document.querySelector(".navbar__menu");
    const list1 = document.querySelector("#navbar__list");

    const section1 = document.querySelector('#section1');
    section1.classList.add('unactive');
    const section2 = document.querySelector('#section2');
    section2.classList.add('unactive');
    const section3 = document.querySelector('#section3');
    section3.classList.add('unactive');
    const section4 = document.querySelector('#section4');
    section4.classList.add('unactive');

    list1.className = "navbar__list"; // هنا يحتاج تعديل الى
    //list1.classList.add("menu__sections");


    const section = document.querySelector('section');
    section.classList.add('unactive');

    var sec1 = document.createElement('li');
    sec1.classList.add('menu__sections', 'unactive__header');
    sec1.setAttribute('data-sections', 'section1');
    sec1.style.margin = "15px";
    sec1.style.padding = "30px";
    sec1.style.position = "fixed";
    sec1.style.float = "left";
    sec1.style.left = "100px";
    var sec2 = document.createElement('li');
    sec2.classList.add('menu__sections', 'unactive__header');
    sec2.setAttribute('data-sections', 'section2');
    sec2.style.margin = "15px";
    sec2.style.padding = "30px";
    sec2.style.position = "fixed";
    sec2.style.float = "left";
    sec2.style.left = "400px";
    var sec3 = document.createElement('li');
    sec3.classList.add('menu__sections', 'unactive__header');
    sec3.setAttribute('data-sections', 'section3');
    sec3.style.margin = "15px";
    sec3.style.padding = "30px";
    sec3.style.position = "fixed";
    sec3.style.float = "left";
    sec3.style.left = "700px";
    var sec4 = document.createElement('li');
    sec4.classList.add('menu__sections', 'unactive__header');
    sec4.setAttribute('data-sections', 'section4');
    sec4.style.margin = "15px";
    sec4.style.padding = "30px";
    sec4.style.position = "fixed";
    sec4.style.float = "left";
    sec4.style.left = "1000px";


    //li.innerHTML = `<a href=#section${index + 1}   >${section.dataset.nav}</a>`;
    sec1.innerHTML = `<a href="#section1" >SECTION 1</a>`;
    sec2.innerHTML = `<a href="#section2" >SECTION 2</a>`;
    sec3.innerHTML = `<a href="#section3" >SECTION 3</a>`;
    sec4.innerHTML = `<a href="#section4" >SECTION 4</a>`;

    //section.classList.add('unactive');

    list1.appendChild(sec4);
    list1.appendChild(sec3);
    list1.appendChild(sec2);
    list1.appendChild(sec1);
    list.appendChild(list1);
    hpage.appendChild(list);


    /* const observerOptions = {
           root: null,
           rootMargin: '0px',
           threshold: 0.7,
       };*/


    /*const sections = [

        selectElementById("section1"),
        selectElementById("section2"),
        selectElementById("section3"),
        selectElementById("section4"),

    ]; // مكتوبه بطريقة مختلفة */
    //1
    const sections = document.querySelectorAll('section');

    observer.observe(section);


    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    };

    //var data - sections = ["section1", "section2", "section3", "section4"];

    function sectionObserver(entries) {
        entries.forEach((entry) => {
            //const navSections = document.querySelectorAll('.menu__sections');

            const navSections = document.querySelector(
                `.menu__sections[data-sections='${entry.target.id}']`

            );


            if (entry.isIntersecting === true) {
                navSections.classList.add('active__header');
                entry.target.classList.add('active');
                entry.target.classList.remove('unactive');
            } else {
                entry.target.classList.add('unactive');
                entry.target.classList.remove('active');
                navSections.classList.remove('active__header');
            }
        });
    }
    const observer = new IntersectionObserver(sectionObserver, options);
    //1

    /*function buildNAV(items) {
        items.forEach((section, index) => {
            section.classList.add('unactive');
            observer.observe(section);
            const li = document.createElement('li');
            li.classList.add('unactive__header', 'menu__sections');
            li.setAttribute('data-sections', section.id);
            li.innerHTML = `<a href=#section${index + 1}   >${section.dataset.nav}</a>`;
            navbarList.appendChild(li);
        });
    }*/

    // buildNAV(sections);

    /**
     * End Helper Functions
     * Begin Main Functions
     *
     */

    // build the nav

    /*function hideHeader() {
        setInterval(() => {
            console.log('tic tic');
            header.classList.toggle('page__header_hide');
        }, 1000);
    }*/
    // الى هنا الكود الجديد ينتهي 
    /*function observerCallback(entries) {
        entries.forEach((entry) => {
            // const navbarSec = document.querySelector(`.menu__link[data-nav='  ${entry.target.id}']`);
            const navbarSec = document.querySelector('section');
            navbarSec.closest('#section');

            if (entry.isIntersecting === true) {
                navbarSec.classList.add('activeHe');
                entry.target.classList.add('active');
                entry.target.classList.remove('unactive');
            } else {
                entry.target.classlist.add('unactive');
                entry.target.classList.remove('active');
                navbarSec.classlist.remove('activeHe');


            }


        });
    }*/


    //

    /*const observe = new IntersectionObserver(observerCallback, observerOptions);

    function bVan(items) {

        // ممكن في شي هنا بس مو واضح لي 

    }
    bVan(sections);*/

});