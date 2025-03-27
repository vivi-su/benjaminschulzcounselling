
gsap.registerPlugin(ScrollTrigger);



  const track = document.querySelector(".carousel-track");
  const logos = gsap.utils.toArray(".carousel-track picture");

  // Duplicate logos for seamless looping
  logos.forEach((logo) => {
    let clone = logo.cloneNode(true);
    track.appendChild(clone);
  });



  gsap.to(track, {
    xPercent: -50,
    ease: "none",
    duration: 30,
    repeat: -1,
  });

