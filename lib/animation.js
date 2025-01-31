import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Configuration for animations
const animationConfig = {
  disableOnMobile: false, 
  forceSlideUpOnMobile: true, 
};

// Initialize Lenis Smooth Scroll
export const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.1, 
    smoothWheel: true,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

// Initialize Entrance Animations
export const initAnimations = () => {
  // Check if the screen width is mobile (less than 768px)
  const isMobile = window.innerWidth < 768;

  // If animations are disabled on mobile, return early
  if (isMobile && animationConfig.disableOnMobile) {
    return;
  }

  // Fade-in animation
  gsap.utils.toArray('.animate-fade-in').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: parseFloat(element.getAttribute('data-delay')) || 0,
      ease: 'power3.out',
    });
  });

  // Slide-up animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-up').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // When the top of the element hits 80% of the viewport
        end: 'top 20%', // When the top of the element hits 20% of the viewport
        toggleActions: 'play none none reverse', // Play when entering, reverse when leaving
      },
    });
  });

  // Slide-down animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-down').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse', // Play when entering, reverse when leaving
      },
    });
  });

  // Slide-left animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-left').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      x: isMobile && animationConfig.forceSlideUpOnMobile ? 0 : 50, // Force slide-up on mobile
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse', // Play when entering, reverse when leaving
      },
    });
  });

  // Slide-right animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-right').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      x: isMobile && animationConfig.forceSlideUpOnMobile ? 0 : -50, // Force slide-up on mobile
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse', // Play when entering, reverse when leaving
      },
    });
  });

  // Scroll-triggered animations with delay
  gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      opacity: 0,
      y: isMobile && animationConfig.forceSlideUpOnMobile ? 50 : 0, // Force slide-up on mobile
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-left animation with delay
  gsap.utils.toArray('.animate-on-scroll-left').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      x: isMobile && animationConfig.forceSlideUpOnMobile ? 0 : 100, // Force slide-up on mobile
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-right animation with delay
  gsap.utils.toArray('.animate-on-scroll-right').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      x: isMobile && animationConfig.forceSlideUpOnMobile ? 0 : -100, // Force slide-up on mobile
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-up animation with delay
  gsap.utils.toArray('.animate-on-scroll-up').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: 100,
      opacity: 0,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-down animation with delay
  gsap.utils.toArray('.animate-on-scroll-down').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: isMobile && animationConfig.forceSlideUpOnMobile ? 100 : -100, // Force slide-up on mobile
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });
};