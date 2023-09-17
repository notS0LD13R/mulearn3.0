import { CSSProperties } from "react";
import styles from "./Banner.module.css";

type BannerProps = {
    images: {
        id: string;
        image: string;
    }[];
    speed?: number;
};

const Banner = ({ images, speed = 5000 }: BannerProps) => {
    console.log(images);
    return (
        <div className={styles.inner}>
            <div className={styles.wrapper}>
                <section
                    className={styles.section}
                    style={{ "--speed": `${speed}ms` } as CSSProperties}
                >
                    {images.map(({ id, image }) => (
                        <div className={styles.image} key={id}>
                            <img className={styles.img} src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section
                    className={styles.section}
                    style={{ "--speed": `${speed}ms` } as CSSProperties}
                >
                    {images.map(({ id, image }) => (
                        <div className={styles.image} key={id}>
                            <img className={styles.img} src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section
                    className={styles.section}
                    style={{ "--speed": `${speed}ms` } as CSSProperties}
                >
                    {images.map(({ id, image }) => (
                        <div className={styles.image} key={id}>
                            <img className={styles.img} src={image} alt={id} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Banner;
