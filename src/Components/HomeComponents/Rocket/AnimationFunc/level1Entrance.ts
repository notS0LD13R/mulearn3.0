import { MutableRefObject } from "react";

export function level1Entrance(props: { descLevel1: any; descLevel2?: MutableRefObject<null>; descLevel3?: MutableRefObject<null>; descLevel4?: MutableRefObject<null>; pathWay: any; journey?: MutableRefObject<null>; gsap: any; slider: any; rocket?: MutableRefObject<null>; journeyLevel1: any; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const { gsap, slider, pathWay, descLevel1, journeyLevel1 } = props;
  const anim = gsap.timeline({
    scrollTrigger: {
      trigger: slider.current,
      start: "1100",
      end: "2200",
      scrub: 3,
    },
  });
  anim.fromTo(
    pathWay.current,
    {
      x: 255,
      y: 400,
      scale: 1,
      opacity: 0,
    },
    {
      duration: 2,
      opacity: 1,
      scale: 1,
      x: 255,
      y: 400,
      ease: "ease.out",
    }
  );
  anim
    .fromTo(
      descLevel1.current,
      {
        x: 500,
        y: 350,
        scale: 1,
        opacity: 0,
      },
      {
        duration: 2,
        opacity: 1,
        scale: 1,
        x: 330,
        y: 350,
        ease: "ease.out",
      }
    )
    .to(descLevel1.current, {
      opacity: 0,
      duration: 2,
    })
    .to(pathWay.current, {
      opacity: 0,
      duration: 1.5,
    })
    .to(
      journeyLevel1.current,
      {
        position: "absolute",
        y: 100,
        x: -200,
        duration: 3,
        scale: 0,
        rotate: 360,
        ease: "ease.out",
      },
      "+=2"
    );

  return anim;
}
