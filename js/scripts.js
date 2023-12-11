/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    $('.slider-2 .page-nav > div').click(function() {
    
        var $this = $(this);
        var $pagenav = $this.parent()
        var $current = $pagenav.find('.active');
        
        $current.removeClass('active');
        $this.addClass('active');
    
        var index = $this.index();
        var $슬라이더 = $this.closest('.slider-2');
        
        $슬라이더.find('.slides > div.active').removeClass('active');
        $슬라이더.find('.slides > div').eq(index).addClass('active');
        
        
    });
    
    $('.slider-2 > .side-btns > div:first-child').click(function() {
        var $this = $(this);
        var $slider = $this.closest('.slider-2');
        
        var $current = $slider.find('.page-nav > div.active');
        var $post = $current.prev();
        
        if ( $post.length == 0 ) {
            $post = $slider.find('.page-nav > div:last-child');
        }
        
        $post.click();
    });
    
    $('.slider-2 > .side-btns > div:last-child').click(function() {
        var $this = $(this);
        var $slider = $this.closest('.slider-2');
        
        var $current = $slider.find('.page-nav > div.active');
        var $post = $current.next();
        
        if ( $post.length == 0 ) {
            $post = $slider.find('.page-nav > div:first-child');
        }
        
        $post.click();
    });
    
    
});

