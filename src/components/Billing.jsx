
import styles, { layout } from "../style";
import { InlineWidget } from "react-calendly";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>

<div className={`${layout.sectionInfo}  mt-5` }>
      <InlineWidget url="https://calendly.com/avertising/15mindiscoverycall" />
</div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Buche dein Termin
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Ich glaube, was wir versuchen, dir zu sagen ist, dass du einen Termin mit uns buchen solltest, wenn du mehr Kunden annehmen kannst!
      </p>
    </div>

  </section>
);

export default Billing;
