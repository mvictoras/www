import gsap from 'gsap';

anime({
  targets: '.home-image-groku',
  translateY: 10,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true,
});

const glitch = document.querySelector('.glitch-effect')
const tl = gsap.timeline({ id: 'getGlitch', repeat: -1, repeatDelay: 3 })

tl
  .fromTo(glitch, { x: 0 }, { duration: 0.1, x: 10, ease: "steps(2)", className: '+=active' })
  .to(glitch, { duration: 0.1, scale: 1.4, ease: "steps(2)" })
  .to(glitch, { duration: 0.1, scale: 1, rotationY: 180, ease: "steps(2)" })
  .fromTo(glitch, { y: 0 }, { duration: 0.1, y: -10, ease: "none" })
  .fromTo(glitch, { y: -10 }, { duration: 0.1, y: 0, ease: "none" })
  .to(glitch, { duration: 0.1, rotationY: 0, ease: "none" })
  .set(glitch, {className: '+=slice'})
  .to(glitch, { duration: 0.1, x: -30, ease: "steps(1)" })
  .set(glitch, {className: '-=slice'})
  .to(glitch, { duration: 0.1, x: 10, ease: "steps(1)" })
  .to(glitch, { duration: 0.1, scale: 1.8, ease: "steps(2)" })
  .to(glitch, { duration: 0.1, scale: 1, ease: "steps(2)" })
  .to(glitch, { duration: 0.1, x: 0, ease: "steps(1)" })
  .fromTo(glitch, { x: 0 }, { duration: 0.1, x: 5, ease: "steps(2)", className: '-=active' })

  .fromTo(glitch, { x: 0 }, { duration: 0.2, x: 5, ease: "steps(2)", delay: 2, className: '+=active' })
  .set(glitch, { className: '-=active' })

  .fromTo(glitch, { x: 0 }, { duration: 0.2, x: 5, ease: "steps(2)", repeat: 1, delay: 1, className: '+=active' })
  .set(glitch, { className: '-=active' })
