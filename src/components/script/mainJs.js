import $ from "jquery"

const mainJs = () => {

        $(document).ready(function () {
            "use strict";

            /*===============================
            =         Wow Active            =
            ================================*/

            //new WOW().init();
            
            /*=============================================
            =       Menu sticky & Scroll to top          =
            =============================================*/
            var windows = $(window);
            var screenSize = windows.width();
            var sticky = $('.header-sticky');
            var $html = $('html');
            var $body = $('body');

            windows.on('scroll', function () {
                var scroll = windows.scrollTop();
                var headerHeight = sticky.height();

                if (screenSize >= 320) {
                    if (scroll < headerHeight) {
                        sticky.removeClass('is-sticky');
                    } else {
                        sticky.addClass('is-sticky');
                    }
                }

            });
            /*----------  Scroll to top  ----------*/
            function scrollToTop() {
                var $scrollUp = $('#scroll-top'),
                    $lastScrollTop = 0,
                    $window = $(window);

                $window.on('scroll', function () {
                    var st = $(this).scrollTop();
                    if (st > $lastScrollTop) {
                        $scrollUp.removeClass('show');
                    } else {
                        if ($window.scrollTop() > 200) {
                            $scrollUp.addClass('show');
                        } else {
                            $scrollUp.removeClass('show');
                        }
                    }
                    $lastScrollTop = st;
                });

                $scrollUp.on('click', function (evt) {
                    $('html, body').animate({scrollTop: 0}, 600);
                    evt.preventDefault();
                });
            }
            scrollToTop();
            
            /*=========================================
            =            Preloader active            =
            ===========================================*/

            windows.on('load', function(){
                $(".preloader-activate").removeClass('preloader-active');
            });
            
            
            $(window).on('load', function(){
                setTimeout(function(){
                $('.open_tm_preloader').addClass('loaded');
                }, 500);
            });
            

            /*=========================================
            =            One page nav active           
            
            var top_offset = $('.navigation-menu--onepage').height() - 60;
            $('.navigation-menu--onepage ul').onePageNav({
                currentClass: 'active',
                scrollOffset: top_offset,
            });
            
            var top_offset_mobile = $('.header-area').height();
            $('.offcanvas-navigation--onepage ul').onePageNav({
                currentClass: 'active',
                scrollOffset: top_offset_mobile,
            });
            
            
            /*===========================================
            =            Submenu viewport position      =
            =============================================*/
            
            if ($(".has-children--multilevel-submenu").find('.submenu').length) {
                var elm = $(".has-children--multilevel-submenu").find('.submenu');
                
                elm.each(function(){
                    var off = $(this).offset();
                    var l = off.left;
                    var w = $(this).width();
                    var docH = windows.height();
                    var docW = windows.width() - 10;
                    var isEntirelyVisible = (l + w <= docW);

                    if (!isEntirelyVisible) {
                        $(this).addClass('left');
                    }
                });
            }
            /*==========================================
            =            mobile menu active            =
            ============================================*/
            
            $("#mobile-menu-trigger").on('click', function(){
                $("#mobile-menu-overlay").addClass("active");
                $body.addClass('no-overflow');
            });
            
            $("#mobile-menu-close-trigger").on('click', function(){
                $("#mobile-menu-overlay").removeClass("active");
                $body.removeClass('no-overflow');
            });
            
            $(".offcanvas-navigation--onepage ul li a").on('click', function(){
                $("#mobile-menu-overlay").removeClass("active");
                $body.removeClass('no-overflow');
            });
            
            /*Close When Click Outside*/
            $body.on('click', function(e){
                var $target = e.target;
                if (!$($target).is('.mobile-menu-overlay__inner') && !$($target).parents().is('.mobile-menu-overlay__inner') && !$($target).is('#mobile-menu-trigger') && !$($target).is('#mobile-menu-trigger i')){
                    $("#mobile-menu-overlay").removeClass("active");
                    $body.removeClass('no-overflow');
                }
                if (!$($target).is('.search-overlay__inner') && !$($target).parents().is('.search-overlay__inner') && !$($target).is('#search-overlay-trigger') && !$($target).is('#search-overlay-trigger i')){
                    $("#search-overlay").removeClass("active");
                    $body.removeClass('no-overflow');
                }
            });
            
            
            /*===================================
            =           Menu Activeion          =
            ===================================*/
            var cururl = window.location.pathname;
            var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
            var hash = window.location.hash.substr(1);
            if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
                {
                //$("nav .navbar-nav > li:first-child").addClass("active");
                } else {
                    $(".navigation-menu li").each(function()
                {
                    $(this).removeClass("active");
                });
                if(hash != "")
                    $(".navigation-menu li a[href*='"+hash+"']").parents("li").addClass("active");
                else
                $(".navigation-menu li a[href*='"+curpage+"']").parents("li").addClass("active");
            }
            
            
            /*=========================================
            =             open menu Active            =
            ===========================================*/
            $('.openmenu-trigger').on('click', function (e) {
                e.preventDefault();
                $('.open-menuberger-wrapper').addClass('is-visiable');
            });

            $('.page-close').on('click', function (e) {
                e.preventDefault();
                $('.open-menuberger-wrapper').removeClass('is-visiable');
            });
            
            
            /*=========================================
            =             open menu Active            =
            ===========================================*/
            $("#open-off-sidebar-trigger").on('click', function(){
                $("#page-oppen-off-sidebar-overlay").addClass("active");
                $body.addClass('no-overflow');
            });
            
            $("#menu-close-trigger").on('click', function(){
                $("#page-oppen-off-sidebar-overlay").removeClass("active");
                $body.removeClass('no-overflow');
            });
            
            /*=============================================
            =            search overlay active            =
            =============================================*/
            
            $("#search-overlay-trigger").on('click', function(){
                $("#search-overlay").addClass("active");
                $body.addClass('no-overflow');
            });
            
            $("#search-close-trigger").on('click', function(){
                $("#search-overlay").removeClass("active");
                $body.removeClass('no-overflow');
            });
            
            /*=============================================
            =            hidden icon active            =
            =============================================*/
            
            $("#hidden-icon-trigger").on('click', function(){
                $("#hidden-icon-wrapper").toggleClass("active");
            });
            

            /*=============================================
            =            newsletter popup active            =
            =============================================*/
            
            $("#newsletter-popup-close-trigger").on('click', function(){
                $("#newsletter-popup").removeClass("active");
            });
            
            
            /*=========================================
            =             open menu Active            =
            ===========================================*/
            var nodeList = document.querySelectorAll('.share-icon');
            nodeList.forEach((el, i)=>{
                el.addEventListener("click", function(e){
                    e.target.parentElement.parentElement.classList.toggle("opened")
                    e.stopPropagation();
                })
            })

            
            /*=============================================
            =            offcanvas mobile menu            =
            =============================================*/
            var $offCanvasNav = $('.offcanvas-navigation'),
                $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
            
            /*Add Toggle Button With Off Canvas Sub Menu*/
            $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
            
            /*Close Off Canvas Sub Menu*/
            $offCanvasNavSubMenu.slideUp();
            
            /*Category Sub Menu Toggle*/
            $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
                var $this = $(this);
                if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
                    e.preventDefault();
                    if ($this.siblings('ul:visible').length){
                        $this.parent('li').removeClass('active');
                        $this.siblings('ul').slideUp();
                    } else {
                        $this.parent('li').addClass('active');
                        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                        $this.closest('li').siblings('li').find('ul:visible').slideUp();
                        $this.siblings('ul').slideDown();
                    }
                }
            });
            
            /*=======================================
            =    	Portfolio Masonry Activation    =
            =========================================*/
 
        
            /*==================================
            =	      Mesonry Activation       =
            ===================================*/
 
            
            /*=============================================
            =            background image            =
            =============================================*/

            
            /*=============================================
            =            wavify activation            =
            =============================================*/

            

            if($('#feel-the-wave , .feel-the-wave').length) {
                $('#feel-the-wave , .feel-the-wave').wavify({
                    height: 80,
                    bones: 5,
                    amplitude: 100,
                    color: 'rgba(224,238,255,0.5)',
                    //color: 'url(#gradient1)',
                    speed: .15
                });
            }

            if($('#feel-the-wave-two , .feel-the-wave-two').length) {
                $('#feel-the-wave-two , .feel-the-wave-two').wavify({
                    height: 120,
                    bones: 4,
                    amplitude: 60,
                    color: 'rgba(224,238,255,0.4)',
                    //color: 'url(#gradient2)',
                    speed: .25
                });
            }

            /*=====  End of wavify activation  ======*/

            
            
            /* =====================================
                Fullpage Scroll Animation   
            ======================================*/
            if ($('#fullpage').length) {
                $('#fullpage').fullpage({
                    scrollBar: false,
                    navigation: true,
                    loopBottom: false,
                    sectionSelector: 'section',
                    scrollingSpeed: 1000,
                    autoScrolling: true,
                    fitToSection: true,
                    fitToSectionDelay: 1000,
                    afterLoad: function () {
                        var activeSetion = $('.fp-viewing-' + 3);
                        activeSetion.addClass('tm-one-page-footer-expanded');
                    },
                });
            }

            
            /*=============================================
            =            circle progress active            =
            =============================================*/
            
            
            
            /*======================================
            =       Countdown Activation          =     
            ======================================*/
            
            
            /*======================================
            =       instagram image slider        =     
            ======================================*/

            // $(window).on('load', function(){
            //     $.instagramFeed({
            //         'username': 'portfolio.devitems',
            //         'container': "#instagramFeed",
            //         'display_profile': false,
            //         'display_biography': false,
            //         'display_gallery': true,
            //         'styling': false,
            //         'items': 10,
            //         "image_size": "640",
            //         'margin': 0
            //     });
            // });
            
            /* ==================================
            =          Option Demo              =
        
            var $demoOption = $('.demo-option-container')


            $('.quick-option').on('click', function (e) {
                e.preventDefault(),
                function () {
                    $demoOption.toggleClass('open')
                }()
            });


            /*=============================================
            =            counter up active            =
            =============================================*/
            
          
            
            
            /*=================================- 
            =        Scroll Up Color Change    =
            ==================================-*/

           

            /*=============================================
            =            light gallery active            =
            =============================================*/
            
            
            /*=============================================
                showcoupon toggle function
        =============================================*/
            
            
            /*=============================================
            =            reveal footer active            =
            =============================================*/
            
           
            /* ====================================
            =       All Animation For Fade Up      =
            =======================================*/

        /*  $(window).on('load', function () {
                function allAnimation() {
                    $('.move-up').css('opacity', 0);
                    $('.move-up').waypoint(function () {
                        $('.move-up').addClass('animate');
                    }, {
                        offset: '90%'
                    });
                }
                allAnimation();

                function allAnimationx() {
                    $('.move-up-x').css('opacity', 0);
                    $('.move-up-x').waypoint(function () {
                        $('.move-up-x').addClass('animate');
                    }, {
                        offset: '90%'
                    });
                }
                allAnimationx();
            })*/


            
        });

}

export default mainJs;
