import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./faq.module.css";
import { Formik, Form, Field } from "formik";

type faqData = {
  head: string;
  para: string;
};

type Props = {
  faqs: faqData[];
};

const Faq = (props: Props) => {
  const [questionActive, setQuestionActive] = useState<boolean[]>(
    Array(props.faqs.length).fill(false)
  );

  const handleToggle = (index: number) => {
    console.log("clicked");
    const tempArr = [...questionActive];
    tempArr[index] = !tempArr[index];
    setQuestionActive(tempArr);
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
              (questionActive[index] ? styles.selected : "")
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
