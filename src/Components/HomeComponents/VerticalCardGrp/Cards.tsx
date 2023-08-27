import styles from "./VerticCardGrp.module.css";

type Props = {
  img: string;
  imgCaption: string;
  position: string;
  desc: string;
  tags?: string[];
  style?: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card + " " + props.style}>
      <figure>
        <img src={props.img} alt="logo" />
        <figcaption>{props.imgCaption}</figcaption>
      </figure>
      <h2>{props.position}</h2>
      <p>{props.desc}</p>
      <div className={styles.tagContainer}>
        {props.tags
          ? props.tags.map((tag) => (
              <button>
                <span>{tag}</span>
              </button>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Card;
