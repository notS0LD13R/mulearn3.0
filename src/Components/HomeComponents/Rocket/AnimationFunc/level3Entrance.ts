import { MutableRefObject } from "react";

export function level3Entrance(props: { descLevel1?: MutableRefObject<null>; descLevel2?: MutableRefObject<null>; descLevel3: any; descLevel4?: MutableRefObject<null>; pathWay: any; journey?: MutableRefObject<null>; gsap: any; slider: any; rocket?: MutableRefObject<null>; journeyLevel1?: MutableRefObject<null>; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3: any; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const { gsap, slider, pathWay, descLevel3, journeyLevel3 } = props;
  const anime = gsap
    .timeline({
      scrollTrigger: {
        trigger: slider.current,
        start: "3210",
        end: "4200",
        scrub: 3,
      },
    })
    .fromTo(
      pathWay.current,
      {
        x: 255,
        y: 200,
        scale: 1,
        opacity: 0,
      },
      {
        x: 255,
        y: 200,
        scale: 1,
        opacity: 1,
      }
    )
    .fromTo(
      descLevel3.current,
      {
        x: 500,
        y: 150,
        opacity: 0,
        scale: 1,
      },
      {
        opacity: 1,
        x: 330,
        y: 150,
        scale: 1,
      }
    )
    .to(
      descLevel3.current,
      {
        x: 600,
        opacity: 0,
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
    .to(journeyLevel3.current, {
      x: -200,
      y: 200,
      duration: 1,
      scale: 0,
      rotate: 520,
    });
  return anime;
}
