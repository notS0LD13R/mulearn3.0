import { MutableRefObject } from "react";

export function level2Entrance(props: { descLevel1?: MutableRefObject<null>; descLevel2: any; descLevel3?: MutableRefObject<null>; descLevel4?: MutableRefObject<null>; pathWay: any; journey?: MutableRefObject<null>; gsap: any; slider: any; rocket?: MutableRefObject<null>; journeyLevel1?: MutableRefObject<null>; journeyLevel2: any; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const { gsap, slider, pathWay, descLevel2, journeyLevel2 } = props;
  const anime = gsap
    .timeline({
      scrollTrigger: {
        trigger: slider.current,
        start: "2100",
        end: "3200",
        scrub: 3,
      },
    })
    .fromTo(
      pathWay.current,
      {
        x: 255,
        y: 300,
        scale: 1,
        opacity: 0,
      },
      {
        x: 255,
        y: 300,
        scale: 1,
        opacity: 1,
      }
    )
    .fromTo(
      descLevel2.current,
      {
        x: 500,
        y: 250,
        opacity: 0,
        scale: 1,
      },
      {
        opacity: 1,
        x: 330,
        y: 250,
        scale: 1,
      }
    )
    .to(
      descLevel2.current,
      {
        opacity: 0,
        x: 700,
      },
      "+=1"
    )
    .to(
      pathWay.current,
      {
        opacity: 0,
      },
      "-=0.8"
    )
    .to(journeyLevel2.current, {
      x: 200,
      y: 300,
      duration: 1,
      scale: 0,
      rotate: 520,
    });
  return anime;
}
