import styles from "./HorizCardGrp.module.css";
import { AiOutlineClockCircle, AiOutlineFileText } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsArrowUpRightSquare } from "react-icons/bs";

type Props = {
    img: string;
    imgCaption: string;
    duration: string;
    location: string;
    position: string;
    desc: string;
    class?: string;
};

const Card = (props: Props) => {
    return (
        <div className={styles.card + " " + props.class}>
            <figure>
                <img src={props.img} alt="logo" />
                <figcaption>{props.imgCaption}</figcaption>
            </figure>
            <div className={styles.row}>
                <div className={styles.iconTextPair}>
                    <AiOutlineClockCircle />
                    <span>{props.duration}</span>
                </div>
                <div className={styles.iconTextPair}>
                    <HiOutlineLocationMarker />
                    <span>{props.location}</span>
                </div>
            </div>
            <h2>{props.position}</h2>
            <p>{props.desc}</p>
            <div className={styles.row}>
                <button>
                    <div className={styles.iconTextPair}>
                        <AiOutlineFileText />
                        <span>View</span>
                    </div>
                </button>
                <button>
                    <div className={styles.iconTextPair}>
                        <span>Apply</span>
                        <BsArrowUpRightSquare />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Card;
