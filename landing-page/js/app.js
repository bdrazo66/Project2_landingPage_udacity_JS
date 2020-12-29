/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 *
 */
/*


/**
 * End Global Variables
 * Start Helper Functions
 *
 */




/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
//var hpg = document.getElementsByClassName("page__header");
//hpg.document.setAttribute("height", "100px");
//hpg.document.setAttribute("color", "black");
//document.querySelector(".page__header").style.height = "100px";
window.addEventListener('load', function() {
    var hpage = document.body.getElementsByClassName("page__header")[0];
    //if (typeof hpage !== 'undefined') {
    hpage.style.height = "100px";
    hpage.style.color = "white";
    hpage.style.backgroundColor = "black";

    var hlist = document.getElementsByClassName(" page__header ")[0];
    var list = document.getElementsByClassName("navbar__menu ")[0];
    var list1 = document.getElementById("navbar__list ");
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

    /*var sec1link = document.createElement('a');
    var sec2link = document.createElement('a');
    var sec3link = document.createElement('a');
    var sec4link = document.createElement('a');

    var link1 = document.createTextNode("#section1 "),
        var link2 = document.createTextNode("#section2 "),
            var link3 = document.createTextNode("#section3 "),
                var link4 = document.createTextNode("#section4 "),


                    sec1link.appendChild(link1);
    sec2link.appendChild(link2);
    sec3link.appendChild(link3);
    sec4link.appendChild(link4);

    sec1link.title = "SECTION 1";
    sec1link.href = "#section1";
    document.body.appendChild(sec1link); * /

    sec1link.innerHTML = "SEC1";
    sec2link.innerHTML;
    sec3link.innerHTML;
    sec4link.innerHTML;

    sec1link.style.margin = "15px";
    sec1link.style.padding = "30px";
    sec1link.style.position = "fixed";
    sec1link.style.float = "left";
    sec1link.style.left = "100px";
    var sec2 = document.createElement('li');
    sec2link.style.margin = "15px";
    sec2link.style.padding = "30px";
    sec2link.style.position = "fixed";
    sec2link.style.float = "left";
    sec2link.style.left = "400px";
    var sec3 = document.createElement('li');
    sec3link.style.margin = "15px";
    sec3link.style.padding = "30px";
    sec3link.style.position = "fixed";
    sec3link.style.float = "left";
    sec3link.style.left = "700px";
    var sec4 = document.createElement('li');
    sec4link.style.margin = "15px";
    sec4link.style.padding = "30px";
    sec4link.style.position = "fixed";
    sec4link.style.float = "left";
    sec4link.style.left = "1000px";*/


    // sec1.innerHTML = '<a herf="#section1 ">SECTION 1</a>';
    // sec2.innerHTML = '<a herf="#section2">SECTION 2</a>';
    // sec3.innerHTML = '<a herf="#section3">SECTION 3</a>';
    // sec4.innerHTML = '<a herf="#section4">SECTION 4</a>';

    sec1.setAttribute("href", "#section1");
    //sec1.href = "#section1 ";

    sec1.innerHTML = '<a herf="#section1">SECTION 1</a>';
    sec2.innerHTML = '<a herf="#section2">SECTION 2</a>';
    sec3.innerHTML = '<a herf="#section3">SECTION 3</a>';
    sec4.innerHTML = '<a herf="#section4">SECTION 4</a>';



    list1.appendChild(sec4);
    list1.appendChild(sec3);
    list1.appendChild(sec2);
    list1.appendChild(sec1);
    list.appendChild(list1);
    hlist.appendChild(list);




});
document.addEventListener('click', function() {
    console.log('The document was clicked');
});



/*var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("navbar__list ").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});*/









//hpg.document.style.color = "red";

//mu fourth try

//var panel;
//var content = document.createElement('div');
//content.innerHTML = "";

//content.appendChild(list1);
// end my fourth try

//my tries and code that not working

/* my test code first try
var sec = document.createElement("div");
sec.setAttribute.('style', 'width : auto ; height : 100px');
document.body.innerHTML = '<div>iam here</div>';*/
/*const button_1, button_2, button_3, button_4;
button_1 = document.createElement("button");
button_1.innerText('SECTION1');
button_1.innerHTML = "Do Something";
document.body.appendChild(button_1);
button_2 = document.createElement("button");
button_2.innerText('SECTION2');
document.body.page_header.appendChild(button_2);
button_3 = document.createElement("button");
button_3.innerText('SECTION3');
document.body.appendChild(button_3);
button_4 = document.createElement("button");
button_4.innerText('SECTION4');
document.body.appendChild(button_3);
**second try doesnt work
var div = document.createElement("div");
div.style.width = "auto";
div.style.height = "50px";
div.style.background = "grey";
div.style.color = "yellow";

document.getElementsByClassName("nav").appendChild(div);

*/

/*var div = document.getElementById("navbar_list");*/
/*var ul = document.getElementById("navbar_list");*/
/* third try to solve the problem and nothing happen iam still stuck 
let uli=document.createElement("ul,navbar_list");
uli.innerHTML="hhhh";
let ul = document.querySelector("#navbar_list");
const ul1 = document.createElement("ul1");
const ul2 = document.createElement("ul2");
const ul3 = document.createElement("ul3");
const ul4 = document.createElement("ul4");
const textsec1 = document.createTextNode("SECTION 1");
const textsec2 = document.createTextNode("SECTION 2");
const textsec3 = document.createTextNode("SECTION 3");
const textsec4 = document.createTextNode("SECTION 4");
ul1.appendChild(textsec1);
ul2.appendChild(textsec2);
ul3.appendChild(textsec3);
ul4.appendChild(textsec4);
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
button1.innerHTML = "1";
button2.innerHTML = "2";
button3.innerHTML = "3";
button4.innerHTML = "4";

ul1.appendChild(button1);
ul2.appendChild(button2);
ul3.appendChild(button3);
ul4.appendChild(button4);
ul1.setAttribute("id", "element1");
ul2.setAttribute("id", "element2");
ul3.setAttribute("id", "element3");
ul4.setAttribute("id", "element4");
ul.appendChild(ul1);
ul.appendChild(ul2);
ul.appendChild(ul3);
ul.appendChild(ul4);
alert(ul1.element1);*/

/*div.style.width = "auto";
div.style.height = "50px";
div.style.background = "grey";
div.style.color = "yellow";

document.getElementsByClassName("nav").appendChild(div);*/


/*document.getElementById("navbar_list").appendChild(ul1);
document.getElementById("navbar_list").appendChild(ul2);
document.getElementById("navbar_list").appendChild(ul3);
document.getElementById("navbar_list").appendChild(ul4);*/