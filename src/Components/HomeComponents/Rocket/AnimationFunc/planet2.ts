import { MutableRefObject } from "react";

export function planet2(props: { descLevel1?: MutableRefObject<null>; descLevel2?: MutableRefObject<null>; descLevel3?: MutableRefObject<null>; descLevel4?: MutableRefObject<null>; pathWay?: MutableRefObject<null>; journey?: MutableRefObject<null>; gsap?: any; slider?: any; rocket?: any; journeyLevel1?: MutableRefObject<null>; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: any; }) {
  const { gsap, moonWay, rocket } = props;
  const anime = gsap
    .timeline({
      scrollTrigger: {
        trigger: props.slider.current,
        start: "6100",
        end: "8000",
        scrub: 3,
      },
    })
    .fromTo(
      moonWay.current,
      { xPercent: 300, yPercent: 0, scale: 0.3, opacity: 0, rotate: 0 },
      {
        rotate: 60,
        xPercent: 150,
        yPercent: 15,
        scale: 0.7,
        opacity: 1,
        duration: 1,
      },
      "+=2"
    )
    .to(
      rocket.current,
      { scale: 1, xPercent: 60, yPercent: -55, duration: 2 },
      "-=1"
    )
    .to(moonWay.current, { scale: 1.5, x: 5, rotate: 90, duration: 2 }, "+=2")
    .to(rocket.current, { opacity: 0 }, "-=2");
  return anime;
}
