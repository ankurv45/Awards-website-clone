gsap.from(".anime", {
  scrollTrigger: {
    trigger: "#hof",
    start: "top 20%",
  },
  stagger: 0.2,
  y: 10,
  opacity: 0,
  duration: 1,
  ease: Expo.easeInOut,
});

gsap.utils.toArray(".row3").forEach((everyRow) => {
  ScrollTrigger.create({
    trigger: everyRow,
    pin: true,
    start: "top 70px",
    end: "bottom 20%",
  });
});
