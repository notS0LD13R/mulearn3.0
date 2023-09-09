import { MutableRefObject } from "react";

export function setFrames(props: { descLevel1: any; descLevel2: any; descLevel3: any; descLevel4: any; pathWay: any; journey?: MutableRefObject<null>; gsap: any; slider: any; rocket?: MutableRefObject<null>; journeyLevel1?: MutableRefObject<null>; journeyLevel2?: MutableRefObject<null>; journeyLevel4?: MutableRefObject<null>; journeyLevel3?: MutableRefObject<null>; earthWay?: MutableRefObject<null>; moonWay?: MutableRefObject<null>; }) {
  const {
    descLevel1,
    descLevel2,
    descLevel3,
    descLevel4,
    pathWay,
    slider,
    gsap,
  } = props;
  const gs = [descLevel1, descLevel2, descLevel3, descLevel4, pathWay];
  const anim = gsap.timeline();
  anim.from(slider.current, {
    scrollTrigger: {
      trigger: slider.current,
      start: "top 0",
      end: "+=8000",
      scrub: 3,
      pin: true,
    },
  });
  gs.forEach((ref) => {
    anim.fromTo(ref.current, { scale: 0 }, { scale: 0 });
  });
  return anim;
}
