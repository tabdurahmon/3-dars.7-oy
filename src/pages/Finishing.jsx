import { Link } from "react-router-dom";
import Thanks from "../../public/images/icon-thank-you.svg";

function Finishing() {
  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl text-[#022959]   font-bold mb-3">Finishing up</h1>
      <p className="text-xl opacity-50 text-[#022959]   mb-10">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-[#F8F9FF] p-6 w-full rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl text-[#022959]   font-semibold">
            Arcade (Monthly)
          </h2>
          <span className="text-lg font-bold">$9/mo</span>
        </div>
        <Link to="/selectPlan" className="hover:text-blue-600 underline pb-6">
          Change
        </Link>
        <hr className="mb-4 mt-6" />
        <div className="flex justify-between mb-2">
          <span>Online service</span>
          <span>+$1/mo</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Larger storage</span>
          <span>+$2/mo</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-32 px-2">
        <p className="opacity-50">Total (per month)</p>
        <div className="flex justify-end">
          <span className="text-xl font-bold text-blue-600">+$12/mo</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to="/pickAddOns"
          className="opacity-50 font-medium hover:opacity-100"
        >
          Go Back
        </Link>

        <Link
          to="/thanks"
          className="btn btn-primary text-white hover:bg-[#928CFF] hover:border-none px-8"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}

export default Finishing;
