import AOS from 'aos';

export const initAnimations = () => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    disable: 'mobile',
    startEvent: 'DOMContentLoaded'
  });
};