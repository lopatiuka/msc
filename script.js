AOS.init();

$(".call-btn").on("click", function() { 
    $('html, body').animate({
        scrollTop: $("#form").offset().top-100
    }, 100); 
});

$(function($, win) {
    $.fn.inViewport = function(cb) {
        return this.each(function(i,el){
        function visPx(){
            var H = $(this).height(),
                r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
            return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
        } visPx();
        $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));
jQuery(function($) { // DOM ready and $ in scope

$(".counter").inViewport(function(px) { // Make use of the `px` argument!!!
    // if element entered V.port ( px>0 ) and
    // if prop initNumAnim flag is not yet set
    //  = Animate numbers
    if(px>0 && !this.initNumAnim) { 
    this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        step: function (now) {
        $(this).text(Math.ceil(now));
        }
    });         
    }
});
}); 

$(".menu-item").each(function() {
    $(this).on("click", function() {
        $('html, body').animate({
            scrollTop: $(this).attr("href").offset().top-100
        }, 100); 
    })
})

$(document).ready(function(){
    $('.feedbacks-items').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });
});

$('.navicon').on('click',function (e) {
    e.preventDefault();
    $(this).toggleClass('navicon--active');
    $('.menu').toggleClass('menu--active');
});
    
