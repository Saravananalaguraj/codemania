// loader
// $(".loading").height($(window).height());
// $(".loading").width($(window).width());

    
// $(".loading img").css({
//     paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
//     paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
// });

// $(window).resize(function () {
   
//     "use strict";
    
//     $(".loading").height($(window).height());
//     $(".loading").width($(window).width());


//     $(".loading img").css({
//         paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
//         paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
//     });
    
// });



$(window).mousemove(function (e) {
   
    "use strict";
    
    $(".original").css({
        left: e.pageX - 20,
        top: e.pageY - 16
    });
    
});



// $(window).load(function() {
// 	$(".loading").fadeOut("fast");
// });

// $("body").on("click", function (e) {
   
//     "use strict";
    
//     $(".original").clone(true).appendTo("body").css({
//         left: e.pageX - 16,
//         top: e.pageY - 16
//     }).removeClass("original");
    
// });





setTimeout(function(){
    $(".loading").fadeToggle()
},3000);



// navbar
let marker = document.querySelector("#marker");
let item = document.querySelectorAll("nav a");

function indicator(e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

item.forEach(link =>{
    link.addEventListener('mousemove',(e)=>{
        indicator(e.target);
    })
})
// parallax
let text = document.getElementById("text");
window.addEventListener("scroll",function(){
    let value = window.scrollY;
    text.style.marginBottom = value * 2 + "px";
});

// portfolio
const listItems = document.querySelectorAll('.main li');
const allimages = document.querySelectorAll('.main .container-fluid1 .images');
 
function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allimages.length; i++){
            allimages[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<allimages.length; i++)
            allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
    }
}
 
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}

