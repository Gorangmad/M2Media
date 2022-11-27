import styles from "../style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Wir helfen Solar- und Dachdecker-Unternehmen, durch <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Lead-Generation</span>{" "}
            mehr Kunden zu generieren.
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mit bewährten Methoden liefern wir unseren Kunden einen hervorragenden Service, Ergebnisse und Unternehmenswachstum.
        </p>
      </div>
    </section>
  );
};

export default Hero;