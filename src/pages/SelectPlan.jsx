//images imports
import arcade from "../../public/images/icon-arcade.svg";
import advance from "../../public/images/icon-advanced.svg";
import Pro from "../../public/images/icon-pro.svg";
import { Link } from "react-router-dom";

function SelectPlan() {
  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl text-[#022959]   font-bold mb-3">
        Select your plan
      </h1>
      <p className="text-xl text-[#022959]   opacity-50 mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex  mb-8 w-full gap-4">
        <button className="card border-2 active:border-yellow-600 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={arcade} alt="" />
          <h2>Arcade</h2>
          <p>$9/mo</p>
        </button>
        <button className="card active:border-yellow-600 border-2 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={advance} alt="" />
          <h2>Advanced</h2>
          <p>$12/mo</p>
        </button>
        <button className="card active:border-yellow-600 border-2 pt-5 px-4 pb-4 w-[138px] shadow-xl">
          <img className="w-10 mb-10" src={Pro} alt="" />
          <h2>Pro</h2>
          <p>$15/mo</p>
        </button>
      </div>
      <div className="flex items-center justify-center mb-32 py-3 rounded-lg bg-[#F8F9FF] gap-6">
        <p className="text-xl font-semibold">Monthly</p>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />

        <p className="text-xl font-semibold">Yearly</p>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/" className="opacity-50 font-medium hover:opacity-100">
          Go Back
        </Link>
        <div>
          <Link
            to="/pickAddOns"
            className="group relative bg-[#022959] inline-flex items-center justify-center
          overflow-hidden rounded-lg  px-8 py-3 text-white "
            href="#"
          >
            Next Step
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SelectPlan;
