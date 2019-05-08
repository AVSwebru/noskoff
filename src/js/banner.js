import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const controller = new ScrollMagic.Controller();

    if (document.querySelector('.js-gift-banner')) {
      const giftBannerTween = new TimelineMax();
      giftBannerTween
        .from('.js-gift-banner-overtitle', 1, {
          opacity: 0,
        })
        .from('.js-gift-banner-left-img', 0.5, {
          x: 96,
          ease: Power2.easeOut,
        })
        .from(
          '.js-gift-banner-right-img',
          0.5,
          {
            x: -96,
            ease: Power2.easeOut,
          },
          '-=0.5'
        )
        .from('.js-gift-banner-title', 1, {
          opacity: 0,
        })
        .from('.js-gift-banner-price', 0.25, {
          opacity: 0,
          y: 20,
          ease: Back.easeOut.config(1.7),
        });

      new ScrollMagic.Scene({
        triggerElement: '.js-gift-banner',
        reverse: false,
      })
        .addTo(controller)
        .setTween(giftBannerTween);
    }
  });
})();
