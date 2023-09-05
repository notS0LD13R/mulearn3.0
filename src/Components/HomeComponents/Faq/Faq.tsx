import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./Faq.module.css";
import { Formik, Form, Field } from "formik";

type faqData = {
  head: string;
  para: string;
};

type Props = {
  faqs: faqData[];
};

const Faq = (props: Props) => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    console.log("clicked");
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className={styles.Faq}>
      <h2>FAQs</h2>
      <div className={styles.questionContainer}>
        {props.faqs.map((faq, index) => (
          <div
            key={`faqQuestion${index}`}
            className={
              styles.question +
              " " +
              (activeQuestion === index ? styles.selected : "")
            }
          >
            <span onClick={() => handleToggle(index)}>
              {faq.head}
              <IoIosArrowDown />
            </span>
            <div className={styles.gridWrapper}>
              <p>{faq.para}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.Form}>
        <Formik
          initialValues={{
            feedback: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Field
              className={styles.textArea}
              as="textarea"
              name="feedback"
              id="feedback"
              placeholder="Send your feedback"
              required
            />
            <div className={styles.emailSection}>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Send</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Faq;
