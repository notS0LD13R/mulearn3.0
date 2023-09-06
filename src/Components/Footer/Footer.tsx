import styles from "./Footer.module.css";
import earthImg from "./assets/images/earth.png";
import { XTwitter, ULearn } from "./assets/svg/svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    //grid-template-columns: 300px 200px 200px;
    //change incase more link list are added
    const links = [
        {
            head: "Quicklinks",
            links: [
                {
                    label: "About Us",
                    link: "",
                },
                {
                    label: "Careers",
                    link: "",
                },
                {
                    label: "Blog",
                    link: "",
                },
                {
                    label: "Gallery",
                    link: "",
                },
            ],
        },
        {
            head: "Quicklinks",
            links: [
                {
                    label: "About Us",
                    link: "",
                },
                {
                    label: "Careers",
                    link: "",
                },
                {
                    label: "Blog",
                    link: "",
                },
            ],
        },
    ];

    return (
        <footer className={styles.Footer}>
            <section>
                <div className={styles.footerMain}>
                    {/* <h2>µLearn</h2> */}
                    <ULearn />
                    <p>
                        µLearn is one of India's largest student communities
                        that provides learn new skills, network with peers.
                    </p>
                    <div className={styles.logoList}>
                        <FaFacebookF />
                        <XTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
                {links.map((list) => (
                    <ul className={styles.linkList}>
                        <strong>{list.head}</strong>
                        {list.links.map((link, index) => (
                            <li key={`flink${index}`}>
                                <a href={link.link}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                ))}
            </section>
            <a href="">
                <img src={earthImg} alt="" />
            </a>
            <small>
                &#169; Copyright 2023. All Rights Reserved. µLearn Foundation.
            </small>
        </footer>
    );
};

export default Footer;
