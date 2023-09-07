import { MutableRefObject } from "react";

export function level4Entrance(props: { descLevel1?: MutableRefObject<null>; descLevel2?: MutableRefObject<null>; descLevel3?: MutableRefObject<null>; descLevel4: any; pathWay: any; journey?: MutableRefObject<null>; gsap: any; slider: any; rocket?: MutableRefObject<null>; journeyLevel1?: MutableRefObject<null>; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const { slider, pathWay, descLevel4, gsap } = props;
  const anime = gsap
    .timeline({
      scrollTrigger: {
        trigger: slider.current,
        start: "4210",
        end: "5200",
        scrub: 3,
      },
    })
    .fromTo(
      pathWay.current,
      { x: 255, y: 100, scale: 1, opacity: 0 },
      { x: 255, y: 150, scale: 1, opacity: 1 }
    )
    .fromTo(
      descLevel4.current,
      { x: 500, y: 100, opacity: 0, scale: 1 },
      { opacity: 1, x: 330, y: 100, scale: 1 }
    )
    .to(descLevel4.current, { x: 600, opacity: 0 }, "+=1")
    .to(pathWay.current, { opacity: 0 }, "-=0.8");

  return anime;
}
