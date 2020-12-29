window.addEventListener('load', function() {

    const hpage = document.querySelector('.page__header');
    hpage.style.height = "100px";
    const list = document.querySelector('.navbar__menu');
    const list1 = document.querySelector('#navbar__list');

    list1.className = "navbar__list"; // هنا يحتاج تعديل الى menu__list

    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    };

    function sectionObserver(entries) {
        entries.forEach((entry) => {
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

    function hNav(items) {
        items.forEach((section, index) => {
            section.classList.add('unactive');
            observer.observe(section);
            const sec = document.createElement('li');
            sec.classList.add('unactive__header', 'menu__sections');
            sec.setAttribute('data-sections', section.id);
            sec.innerHTML = `<a href=#section${index + 1}   >${section.dataset.nav}</a>`;
            list1.appendChild(sec);
            list.appendChild(list1);
            sec.style.margin = "15px";
            sec.style.padding = "30px";
            sec.style.position = "fixed";
            sec.style.float = "left";
            sec.style.left = "auto"
        });
    }
    hNav(sections);

    /* var sec1 = document.createElement('li');
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



     sec1.innerHTML = '<a href="#section1" id = "1" class="s1 navbar__list">SECTION 1</a>';
     sec2.innerHTML = '<a href="#section2" id = "2" class="s2 navbar__list">SECTION 2</a>';
     sec3.innerHTML = '<a href="#section3" id = "3" class="s3 navbar__list">SECTION 3</a>';
     sec4.innerHTML = '<a href="#section4" id = "4" class="s4 navbar__list">SECTION 4</a>';

     list1.appendChild(sec4);
     list1.appendChild(sec3);
     list1.appendChild(sec2);
     list1.appendChild(sec1);
     list.appendChild(list1);
     hpage.appendChild(list);*/

    // مكتوبه بطريقة مختلف




    // Track all sections that have an `id` applied


});