import { MutableRefObject } from "react";

export function intro(props: { descLevel1?: MutableRefObject<null>; descLevel2?: MutableRefObject<null>; descLevel3?: MutableRefObject<null>; descLevel4?: MutableRefObject<null>; pathWay?: MutableRefObject<null>; journey: any; gsap: any; slider: any; rocket?: MutableRefObject<null>; journeyLevel1?: MutableRefObject<null>; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const { gsap, journey, slider } = props;
  const anim = gsap.timeline();
  anim.from(journey.current, {
    duration: 1,
    opacity: 0,
    y: -500,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: slider.current,
      start: "top center",
      end: "top bottom",
      scrub: 3,
    },
  });
  return anim;
}
