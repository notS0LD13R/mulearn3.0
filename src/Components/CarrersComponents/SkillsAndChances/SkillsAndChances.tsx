import { useEffect, useRef, useState } from "react";
import styles from "./SkillsAndChances.module.css";
export default function SkillsAndChances({
  cardData,
}: {
  cardData: {
    title: string;
    description: string;
    image: string;
    badges: string[];
  }[];
}) {
  const [arr, setArr] = useState<
    { title: string; description: string; image: string; badges: string[] }[]
  >(cardData.slice(0, 2));
  const index = useRef(2);
  useEffect(() => {
    const callback = () => {
      index.current++;
      if (index.current >= cardData.length) {
        index.current = 0;
      }
      const el1 = document.querySelector(
        `.${styles.card}:nth-child(1)`
      ) as HTMLDivElement;
      const el2 = document.querySelector(
        `.${styles.card}:nth-child(2)`
      ) as HTMLDivElement;

      el1.classList.add(`${styles.cardAnimOut}`);
      el2.classList.add(`${styles.cardAnimIn}`);
      el2.classList.add(`${styles.cardOp}`);

      setTimeout(() => {
        setArr((arr) => [...arr.slice(1), cardData[index.current]]);
        el1.classList.remove(`${styles.cardAnimOut}`);
        el2.classList.remove(`${styles.cardAnimIn}`);
      }, 1000);
    };
    const interval = setInterval(callback, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h2>Skills & Chances</h2>
        <p>
          lorem ipsum dolor sit amet consectetur.lorem ipsum dolor sit amet
          consectetur.lorem ipsum dolor sit amet consectetur.lorem ipsum dolor
          sit amet consectetur.
        </p>
      </div>
      <div className={styles.container}>
        {arr.map((el) => (
          <Card {...el} />
        ))}
      </div>
    </div>
  );
}
function Card({
  title,
  description,
  image,
  badges,
}: {
  title: string;
  description: string;
  image: string;
  badges: string[];
}) {
  return (
    <div className={`${styles.card} `}>
      <div className={styles.logoContainer}>
        <img src={image} alt="logo" width={90} height={90} />
        <p>Fun Design</p>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.badgeContainer}>
          {badges.map((el) => (
            <div className={styles.badge}>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
