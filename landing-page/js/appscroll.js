window.addEventListener('load', function() {




    const hpage = document.querySelector(".page__header");
    hpage.style.height = "100px";
    hpage.style.position = "fixed";
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

    //list1.className = "navbar__list";

    //var list5 = document.getElementById("navbar__list").className;
    //console.log(list5);



    //const section = document.querySelector('section');
    //section.classList.add('unactive');

    var sec1 = document.createElement('li');
    //sec1.classList.add('menu__sections', 'unactive__header');
    //sec1.setAttribute('data-sections', 'section1');
    //sec1.classList.add('active__header');
    sec1.classList.add('unactive__header', 'unactive');
    sec1.style.margin = "15px";
    sec1.style.padding = "30px";
    sec1.style.position = "fixed";
    sec1.style.float = "left";
    sec1.style.left = "100px";
    var sec2 = document.createElement('li');
    // sec2.classList.add('menu__sections', 'unactive__header');
    // sec2.setAttribute('data-sections', 'section2');
    //sec2.classList.add('active__header');
    sec2.classList.add('unactive__header', 'unactive');
    sec2.style.margin = "15px";
    sec2.style.padding = "30px";
    sec2.style.position = "fixed";
    sec2.style.float = "left";
    sec2.style.left = "400px";
    var sec3 = document.createElement('li');
    // sec3.classList.add('menu__sections', 'unactive__header');
    // sec3.setAttribute('data-sections', 'section3');
    sec3.classList.add('unactive__header', 'unactive');
    sec3.style.margin = "15px";
    sec3.style.padding = "30px";
    sec3.style.position = "fixed";
    sec3.style.float = "left";
    sec3.style.left = "700px";
    var sec4 = document.createElement('li');
    //sec4.classList.add('menu__sections', 'unactive__header');
    sec4.classList.add('unactive__header', 'unactive');
    //sec4.setAttribute('data-sections', 'section4');
    sec4.style.margin = "15px";
    sec4.style.padding = "30px";
    sec4.style.position = "fixed";
    sec4.style.float = "left";
    sec4.style.left = "1000px";

    var sec5 = document.createElement('i');
    sec5.style.margin = "15px";
    sec5.style.padding = "30px";
    sec5.style.position = "fixed";
    sec5.style.float = "left";
    sec5.style.left = "1400px";



    sec1.innerHTML = `<a href="#section1" >SECTION 1</a>`;
    sec2.innerHTML = `<a href="#section2" >SECTION 2</a>`;
    sec3.innerHTML = `<a href="#section3" >SECTION 3</a>`;
    sec4.innerHTML = `<a href="#section4" >SECTION 4</a>`;
    //sec5.innerHTML = `<a href="javascript:void(0);" class="icon" onclick="myFunction()">
    //<i class="fa fa-bars"></i></a>`;




    list1.appendChild(sec4);
    list1.appendChild(sec3);
    list1.appendChild(sec2);
    list1.appendChild(sec1);
    // list1.appendChild(sec5);
    list.appendChild(list1);
    hpage.appendChild(list);
    // here  testscroll test 

    function testScroll(ev) {

        const ysc = window.scrollY;

        if (window.pageYOffset > 400 && window.pageYOffset < 891) {

            //sec1.classlist.replace("unactive", 'active');
            //sec1.classlist.add('active__header');

            sec1.classList.add('active__header', 'active');
            //sec1.classList.add('active');
            sec1.classList.remove('unactive');

            sec2.classList.add('unactive');
            sec2.classList.remove('active', 'active__header');
            // sec2.classlist.remove('active__header');

            sec3.classList.add('unactive');
            sec3.classList.remove('active', 'active__header');
            //sec3.classlist.remove('active__header');

            sec4.classList.add('unactive');
            sec4.classList.remove('active', 'active__header');
            // sec4.classlist.remove('active__header');
            // console.log('you have reached to section 1');
            // console.log(ysc);
        }

        if (window.pageYOffset > 898 && window.pageYOffset < 1400) {
            sec2.classList.add('active__header', 'active');
            //sec2.classList.add('active');
            sec2.classList.remove('unactive');

            sec1.classList.add('unactive');
            sec1.classList.remove('active', 'active__header');
            // sec1.classlist.remove('active__header');

            sec3.classList.add('unactive');
            sec3.classList.remove('active', 'active__header');
            //sec3.classlist.remove('active__header');

            sec4.classList.add('unactive');
            sec4.classList.remove('active', 'active__header');
            //sec4.classlist.remove('active__header');
            //console.log('you have reached to section 2');
            //console.log(ysc);
        }
        if (window.pageYOffset > 1500 && window.pageYOffset < 2000) {

            sec3.classList.add('active__header', 'active');
            //sec3.classList.add('active');
            sec3.classList.remove('unactive');

            sec2.classList.add('unactive');
            sec2.classList.remove('active', 'active__header');
            //sec2.classlist.remove('active__header');

            sec1.classList.add('unactive');
            sec1.classList.remove('active', 'active__header');
            //sec1.classlist.remove('active__header');

            sec4.classList.add('unactive');
            sec4.classList.remove('active', 'active__header');
            //sec4.classlist.remove('active__header');
            //console.log('you have reached to section 3');
            // console.log(ysc);
        }
        if (window.pageYOffset > 2000 && window.pageYOffset < 2600) {

            sec4.classList.add('active__header', 'active');
            //sec4.classList.add('active');
            sec4.classList.remove('unactive');

            sec2.classList.add('unactive');
            sec2.classList.remove('active', 'active__header');
            //sec2.classlist.remove('active__header');

            sec3.classList.add('unactive');
            sec3.classList.remove('active', 'active__header');
            //sec3.classlist.remove('active__header');

            sec1.classList.add('unactive');
            sec1.classList.remove('active', 'active__header');
            //sec1.classlist.remove('active__header');
            // console.log('you have reached to section 4');
            // console.log(ysc);
        }
    }
    window.onscroll = testScroll;

    //2
    /*window.addEventListener('scroll', () => {
        const ysc = window.scrollY;
        console.log(ysc);
        //console.log(sec1.position);
        if (ysc === 471) {

            sec1.classList.add('active__header');
            sec1.classList.add('active');
            sec1.classList.remove('unactive');

            sec2.classlist.add('unactive');
            sec2.classList.remove('active');
            sec2.classlist.remove('active__header');

            sec3.classlist.add('unactive');
            sec3.classList.remove('active');
            sec3.classlist.remove('active__header');

            sec4.classlist.add('unactive');
            sec4.classList.remove('active');
            sec4.classlist.remove('active__header');



        }


    });*/ //2



    /*  window.addEventListener('scroll', () {


          const scrollable = document.documentElement.scrollHeight - window.innerHeight;

          const scrolled = Math.ceil(window.scrollY);


          console.log(scrolled);
          console.log(scrollable);
          if (scrolled === 471) {

              sec1.classList.add('active__header');
              sec1.classList.add('active');
              sec1.classList.remove('unactive');

              sec2.classlist.add('unactive');
              sec2.classList.remove('active');
              sec2.classlist.remove('active__header');

              sec3.classlist.add('unactive');
              sec3.classList.remove('active');
              sec3.classlist.remove('active__header');

              sec4.classlist.add('unactive');
              sec4.classList.remove('active');
              sec4.classlist.remove('active__header');



          } else if (scrolled === 1042) {

              sec2.classList.add('active__header');
              sec2.classList.add('active');
              sec2.classList.remove('unactive');

              sec1.classlist.add('unactive');
              sec1.classList.remove('active');
              sec1.classlist.remove('active__header');

              sec3.classlist.add('unactive');
              sec3.classList.remove('active');
              sec3.classlist.remove('active__header');

              sec4.classlist.add('unactive');
              sec4.classList.remove('active');
              sec4.classlist.remove('active__header');



          } else if (scrolled === 1613) {

              sec3.classList.add('active__header');
              sec3.classList.add('active');
              sec3.classList.remove('unactive');

              sec2.classlist.add('unactive');
              sec2.classList.remove('active');
              sec2.classlist.remove('active__header');

              sec1.classlist.add('unactive');
              sec1.classList.remove('active');
              sec1.classlist.remove('active__header');

              sec4.classlist.add('unactive');
              sec4.classList.remove('active');
              sec4.classlist.remove('active__header');



          } else if (scrolled === 2184) {

              sec4.classList.add('active__header');
              sec4.classList.add('active');
              sec4.classList.remove('unactive');

              sec2.classlist.add('unactive');
              sec2.classList.remove('active');
              sec2.classlist.remove('active__header');

              sec3.classlist.add('unactive');
              sec3.classList.remove('active');
              sec3.classlist.remove('active__header');

              sec1.classlist.add('unactive');
              sec1.classList.remove('active');
              sec1.classlist.remove('active__header');



          }


      });*/


});