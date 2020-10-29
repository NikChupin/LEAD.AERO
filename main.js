window.addEventListener("DOMContentLoaded", () => {
    /* video */
    const tabs = document.querySelectorAll(".tabs_item"),
        playBtn = document.querySelector("#playVideo"),
        video = document.querySelector("#video");
    playBtn.addEventListener('click', function(){
        video.play();
        video.setAttribute('controls', 'controls');
        playBtn.style.display = "none";
    });
    video.addEventListener('ended', function() {
        this.src = this.src;
        playBtn.style.display = "block";
        video.removeAttribute('controls');
    })
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs_item_active")) {
                    otherItem.classList.remove("tabs_item_active");
                }
            })
            elem.classList.add("tabs_item_active")
        });
    });
    /* /video */

    /* carousel */
    $('.carousel').slick(
        {
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: '<div class="carousel_arrow carousel_prev"><i class="fas fa-chevron-left"></i></div>',
            nextArrow: '<div class="carousel_arrow carousel_next"><i class="fas fa-chevron-right"></i></div>',
        }
    );
    /* /carousel */

    /* popup */
    $('#buyNowBtn').on('click', popupOpen);
    $('.popup_close').on('click',() => {
        $('.popup').removeClass('popup_active');
        $('body').css('overflow', 'visible');
    })
    function popupOpen() {
        $('.popup').addClass('popup_active');
        $('body').css('overflow', 'hidden');
    }
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
      });
      /* /popup */

      /* hamburger */
      var $hamburger = $(".hamburger");
      $hamburger.on("click", function() {
        $hamburger.toggleClass("is-active");
        $('.popup_menu').toggleClass('popup_active');
      });

      var $popup_menu = $(".popup_menu_nav_item_text");
      $popup_menu.on("click", function() {
        $hamburger.toggleClass("is-active");
        $('.popup_menu').toggleClass('popup_active');
      });
      /* /hamburger */
});