import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Animation() {
  useGSAP(() => {
    gsap.from(".rotate-logo", {
      opacity: 0,
      rotate: -360,
      x: "-300%",
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".rotate-logo",
        scroller: "body",
        start: "top 100%",
      },
    });
    gsap.from(".fade", {
      opacity: 0,
      delay: 0.2,
      duration: 0.3,
      stagger: 0.25,
    });
    gsap.from(".nav-item", {
      opacity: 0,
      delay: 0.2,
      y: "20%",
      stagger: 0.15,
      duration: 1,
    });
    gsap.from(".project-heading", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".project-heading",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".skills-heading", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".skills-heading",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".education-heading", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".education-heading",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".contact-heading", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".contact-heading",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".education-list", {
      opacity: 0,
      delay: 0.2,
      y: "30%",
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".education-list",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".contact-form", {
      opacity: 0,
      delay: 0.2,
      duration: 0.3,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".contact-form",
        scroller: "body",
        start: "top 95%",
      },
    });
    gsap.from(".skills-list", {
      opacity: 0,
      delay: 0.1,
      x: "-30%",
      stagger: 0.1,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".skills-list",
        scroller: "body",
        start: "top 95%",
      },
    });
  });
  useGSAP(() => {
    gsap.from(".card-1", {
      duration: 1,
      rotateX: -3,
      scale: 0.8,
      y: "10%",
      scrollTrigger: {
        trigger: ".card-1",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".card-2", {
      duration: 1,
      rotateX: -3,
      scale: 0.8,
      y: "10%",
      scrollTrigger: {
        trigger: ".card-2",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".card-3", {
      duration: 1,
      rotateX: -3,
      scale: 0.8,
      y: "10%",
      scrollTrigger: {
        trigger: ".card-3",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
  });
  useGSAP(() => {
    gsap.from(".card-4", {
      duration: 1,
      rotateX: -3,
      scale: 0.8,
      y: "10%",
      scrollTrigger: {
        trigger: ".card-4",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
        once: true,
      },
    });
  });
  return <></>;
}

export default Animation;
