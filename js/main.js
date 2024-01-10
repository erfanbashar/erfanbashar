/* ===================================================================
 * Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    "use strict";
    
    html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';

   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        window.addEventListener('load', function() {
            
            document.querySelector('body').classList.remove('ss-preload');
            document.querySelector('body').classList.add('ss-loaded');

            preloader.addEventListener('transitionend', function(e) {
                if (e.target.matches("#preloader")) {
                    this.style.display = 'none';
                }
            });

        });

        // force page scroll position to top at page refresh
        // window.addEventListener('beforeunload' , function () {
        //     window.scrollTo(0, 0);
        // });

    }; // end ssPreloader

    /* start createMenuItem
    * -------------------------------------------------- */

    const createMenuItem = function (name) {
        let li = document.createElement("li");
        li.textContent = name;
        return li;
    };

    /* end createMenuItem
    * -------------------------------------------------- */

    /* start ssContactLoader
    * -------------------------------------------------- */
    const ssContactLoader = function() {

        let preloader = document.querySelector(".row .s-about__content-bottom");
        // if (!preloader) return;

        let contactDiv = document.createElement("div");
        contactDiv.className = "column w-1000-stack";
        preloader.appendChild(contactDiv);

        let contactHeader = document.createElement("h3");
        contactHeader.textContent = "Contact Details";
        contactDiv.appendChild(contactHeader);

        let list = document.createElement("ul");
        list.setAttribute('style', 'list-style-type: none; margin: 0; padding: 0;');
        list.appendChild(createMenuItem("A M A Erfan Bashar"));

        fetch("https://ipinfo.io/json?token=8d1dda29c0e932")
        .then((response) => response.json())
        .then((jsonResponse) => {
            const respCountry = jsonResponse.country;
            let cv = document.querySelector("#cv");
            if(respCountry == 'BD') {
                list.appendChild(createMenuItem("Dhaka, Bangladesh"));
                
                let contactPhoneList = document.createElement("li");
                let contactPhone = document.createElement("a");
                contactPhone.href = "tel:+8801700714540";
                contactPhone.textContent = "+880-1700-714540";
                contactPhoneList.appendChild(contactPhone);
                list.appendChild(contactPhoneList);

                let contactEmailList = document.createElement("li");
                let contactEmail = document.createElement("a");
                contactEmail.href = "mailto:#0";
                contactEmail.textContent = "erfan.bashar.13@gmail.com";
                contactEmailList.appendChild(contactEmail);
                list.appendChild(contactEmailList);

                contactDiv.appendChild(list);

                cv.href = "https://drive.google.com/file/d/134VjxYA1-ZAn-6TYvi1IPsHHfcPCWv1W/view?usp=sharing";
            }
            else {
                list.appendChild(createMenuItem("Mississauga, Ontario, Canada"));
                
                let contactPhoneList = document.createElement("li");
                let contactPhone = document.createElement("a");
                contactPhone.href = "tel:+16046182296";
                contactPhone.textContent = "+1 (604) 6182296";
                contactPhoneList.appendChild(contactPhone);
                list.appendChild(contactPhoneList);

                let contactEmailList = document.createElement("li");
                let contactEmail = document.createElement("a");
                contactEmail.href = "mailto:#0";
                contactEmail.textContent = "erfan.bashar.13@gmail.com";
                contactEmailList.appendChild(contactEmail);
                list.appendChild(contactEmailList);

                contactDiv.appendChild(list);

                cv.href = "https://drive.google.com/file/d/1B61wfX7QKzlZEC8US6FAazH0Dr10e5LQ/view?usp=sharing";
            }
        });

    }; // end ssContactLoader

    /* start ssMobileLoader
    * -------------------------------------------------- */
    const ssMobileLoader = function() {

        let preloader = document.querySelector("#phone");
        // if (!preloader) return;

        let phoneDiv = document.createElement("div");
        phoneDiv.className = "contact-block";
        preloader.appendChild(phoneDiv);

        let phoneHeader = document.createElement("h5");
        phoneHeader.className = "contact-block__header";
        phoneHeader.textContent = "Phone";
        phoneDiv.appendChild(phoneHeader);

        let phoneLine = document.createElement("p");
        phoneLine.className = "contact-block__content";
        let phoneLink = document.createElement("a");

        fetch("https://ipinfo.io/json?token=8d1dda29c0e932")
        .then((response) => response.json())
        .then((jsonResponse) => {
            const respCountry = jsonResponse.country;
            if(respCountry == 'BD') {
                phoneLink.href = "tel:+8801700714540";
                phoneLink.textContent = "+880-1700-714540";

                phoneLine.appendChild(phoneLink);
            }
            else {
                phoneLink.href = "tel:+16046182296";
                phoneLink.textContent = "+1 (604) 6182296";

                phoneLine.appendChild(phoneLink);
            }
        });

        phoneDiv.appendChild(phoneLine);

    }; // end ssMobileLoader

   /* Parallax
    * -------------------------------------------------- */
    const ssParallax = function() { 

        const rellax = new Rellax('.rellax');

    }; // end ssParallax


   /* Move header menu
    * -------------------------------------------------- */
    const ssMoveHeader = function () {

        const hdr = document.querySelector('.s-header');
        const hero = document.querySelector('#hero');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function(){
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function () {

            let loc = window.scrollY;
           

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }

        });

    }; // end ssMoveHeader


   /* Mobile Menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const headerNavWrap = document.querySelector('.s-header__nav-wrap');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && headerNavWrap)) return;

        toggleButton.addEventListener('click', function(event){
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        headerNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {
            link.addEventListener("click", function(evt) {

                // at 800px and below
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 800px
            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });

    }; // end ssMobileMenu


   /* Highlight active menu link on pagescroll
    * ------------------------------------------------------ */
    const ssScrollSpy = function() {

        const sections = document.querySelectorAll(".target-section");

        // Add an event listener listening for scroll
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
        
            // Get current scroll position
            let scrollY = window.pageYOffset;
        
            // Loop through sections to get height(including padding and border), 
            // top and ID values for each
            sections.forEach(function(current) {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");
            
               /* If our current scroll position enters the space where current section 
                * on screen is, add .current class to parent element(li) of the thecorresponding 
                * navigation link, else remove it. To know which link is active, we use 
                * sectionId variable we are getting while looping through sections as 
                * an selector
                */
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
                } else {
                    document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
                }
            });
        }

    }; // end ssScrollSpy


   /* Swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const mySwiper = new Swiper('.swiper-container', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },          
            breakpoints: {
                // when window width is >= 401px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 801px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 48
                }
            }
         });

    }; // end ssSwiper


   /* Lightbox
    * ------------------------------------------------------ */
    const ssLightbox = function() {

        const folioLinks = document.querySelectorAll('.folio-item a');
        const modals = [];

        folioLinks.forEach(function(link) {
            let modalbox = link.getAttribute('href');
            let instance = basicLightbox.create(
                document.querySelector(modalbox),
                {
                    onShow: function(instance) {
                        //detect Escape key press
                        document.addEventListener("keydown", function(evt) {
                            evt = evt || window.event;
                            if(evt.keyCode === 27){
                            instance.close();
                            }
                        });
                    }
                }
            )
            modals.push(instance);
        });

        folioLinks.forEach(function(link, index) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                modals[index].show();
            });
        });

    };  // end ssLightbox


   /* Alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box) {

            box.addEventListener('click', function(e){
                if (e.target.matches(".alert-box__close")) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add("hideit");

                    setTimeout(function() {
                        box.style.display = "none";
                    }, 500)
                }    
            });

        })

    }; // end ssAlertBoxes


   /* Smoothscroll
    * ------------------------------------------------------ */
    const ssSmoothScroll = function () {
        
        const triggers = document.querySelectorAll(".smoothscroll");

        triggers.forEach(function(trigger) {
            trigger.addEventListener("click", function() {
                const target = trigger.getAttribute("href");

                Jump(target, {
                    duration: 1200,
                });
            });
        });

    }; // end ssSmoothScroll


   /* back to top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop



   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssContactLoader();
        ssMobileLoader();
        ssParallax();
        ssMoveHeader();
        ssMobileMenu();
        ssScrollSpy();
        ssSwiper();
        ssLightbox();
        ssAlertBoxes();
        ssSmoothScroll();
        ssBackToTop();

    })();

})(document.documentElement);
