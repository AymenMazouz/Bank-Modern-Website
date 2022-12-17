import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/*==========================================Start t3 le texte a gauche ==============================================================================*/}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/*==========================================Start t3 le texte hdk t3 20% ==============================================================================*/}
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        {/*==========================================END t3 le texte hdk t3 20% ==============================================================================*/}


        {/*==========================================Start t3 le texte hdk t3 the next generation paiment method==============================================================================*/}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[90.8px] leading-[65px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[55px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        {/*==========================================END t3 le texte hdk t3 the next generation paiment method==============================================================================*/}
        {/*==========================================Start t3 le texte hdk t3 our team of experts==============================================================================*/}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        {/*==========================================END t3 le texte hdk t3 our team of experts ==============================================================================*/}
      </div>
      {/*==========================================END t3 le texte a gauche  ==============================================================================*/}


      {/*==========================================START t3 la photo a droite  ==============================================================================*/}

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


        {/*==========================================START t3 les effets li mor  la photo a droite  ==============================================================================*/}
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        {/*==========================================END t3 les effets li mor  la photo a droite  ==============================================================================*/}

      </div>
      {/*==========================================END t3 la photo a droite  ==============================================================================*/}
      {/*==========================================START t3 get started f iphone tji ththom   ==============================================================================*/}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      {/*==========================================END t3 get started f iphone tji ththom   ==============================================================================*/}

    </section>
  );
};

export default Hero;
// class name wqtah ndirouha dynamic , et kol whda wsh m3ntha