import React, { useEffect, useRef, useState } from "react";

import Card from "./Cards";

import styles from "./VerticCardGrp.module.css";

type cardData = {
  img: string;
  imgCaption: string;
  duration: string;
  location: string;
  position: string;
  desc: string;
};

type Props = {
  cards: cardData[];
};

const VertiCardGroup = (props: Props) => {
  const [cards, setCards] = useState(props.cards);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<["top" | "bottom", number] | null>(null);
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const scrollPos = [
      target.scrollTop,
      Math.abs(target.scrollHeight - target.clientHeight - target.scrollTop),
    ];
    const tempArr = [...cards];
    scrollRef.current = null;
    if (scrollPos[0] === 0) {
      //Reached top
      scrollRef.current = [
        "top",
        (target.lastChild as HTMLDivElement).clientHeight + 60,
      ];
      tempArr.unshift(tempArr.pop()!);
    }
    if (Math.floor(scrollPos[1]) <= 1) {
      //Reached bottom
      scrollRef.current = [
        "bottom",
        (target.firstChild as HTMLDivElement).clientHeight + 60,
      ];
      tempArr.push(tempArr.shift()!);
    }
    setCards(tempArr);
  };

  useEffect(() => {
    if (scrollRef.current) {
      containerRef.current!.scrollBy(
        0,
        (scrollRef.current[0] === "top" ? 1 : -1) * scrollRef.current[1]
      );
    }
  }, [cards]);

  return (
    <div className={styles.VertiCardGroup}>
      <div
        className={styles.container}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
};

export default VertiCardGroup;
