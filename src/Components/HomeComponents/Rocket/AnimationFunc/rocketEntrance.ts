import { MutableRefObject } from "react";

export function rocketEntrance(props: { descLevel1?: MutableRefObject<null>; descLevel2?: MutableRefObject<null>; descLevel3?: MutableRefObject<null>; descLevel4?: MutableRefObject<null>; pathWay?: MutableRefObject<null>; journey?: MutableRefObject<null>; gsap: any; slider: any; rocket: any; journeyLevel1?: MutableRefObject<null>; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const { gsap, slider, rocket } = props;
  const anim = gsap.timeline({
    scrollTrigger: {
      trigger: slider.current,
      start: "100 bottom-=300",
      end: "bottom bottom",
      scrub: 3,
    },
  });
  anim.fromTo(
    rocket.current,
    {
      opacity: 0,
      y: 1000,
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 50,
      ease: "ease.in",
    }
  );

  return anim;
}
