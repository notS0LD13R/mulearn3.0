import { useState } from "react";

import styles from "./DynamicParaBox.module.css";

const DynamicParaBox = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const options = [
    {
      head: "Learning Circle",
      para: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum 
            passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      head: "Interest Group",
      para: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of tyntaining Lorem Ipsum 
            passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      head: "Gig Works",
      para: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leapLetraset sheets containing Lorem Ipsum 
            passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.`,
    },
    {
      head: "Projects",
      para: `Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset shees of Lorem Ipsum.`,
    },
  ];
  return (
    <div className={styles.DynamicParaBox}>
      <h2>What you can do at µLearn</h2>
      <section className={styles.container}>
        <ul className={styles.optionList}>
          {options.map((option, index) => (
            <span
              className={
                styles.optionSpan +
                (index === selectedOption ? " " + styles.selected : "")
              }
              onClick={() => {
                setSelectedOption(index);
              }}
              key={option.head}
            >
              {option.head}
            </span>
          ))}
        </ul>
        <p>{options[selectedOption].para}</p>
      </section>
    </div>
  );
};

export default DynamicParaBox;
