import thanks from "../../public/images/icon-thank-you.svg";

function Thanks() {
  return (
    <div className="   ml-[100px] mt-[121px]">
      <img className="w-[80px]  mb-[80px] ml-[185px]" src={thanks} alt="" />
      <h1 className="text-4xl  text-[#022959]   font-bold mb-3 w-[450px] text-center">
        Thank You
      </h1>
      <p className="text-xl text-[#022959] mt-[14px]   opacity-50 mb-10 w-[450px] text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Thanks;
