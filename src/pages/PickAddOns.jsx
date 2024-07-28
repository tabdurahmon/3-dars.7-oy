//react imports
import { useState } from "react";
import { Link } from "react-router-dom";

function PickAddOns() {
  const [addons, setAddons] = useState({
    onlineService: true,
    largerStorage: false,
    customizableProfile: false,
  });

  const toggleAddon = (addon) => {
    setAddons((prev) => ({ ...prev, [addon]: !prev[addon] }));
  };

  return (
    <div className="pt-14 w-full">
      <h1 className="text-4xl font-bold text-[#022959]   mb-3">Pick add-ons</h1>
      <p className="text-xl text-[#022959]   opacity-50 mb-10">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="max-w-md mb-20 mx-auto p-4 space-y-4">
        <div
          className={`flex items-center justify-between p-4 border-2 rounded-lg ${
            addons.onlineService
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={addons.onlineService}
              onChange={() => toggleAddon("onlineService")}
              className="form-checkbox h-5 w-5  text-blue-600"
            />
            <div>
              <div className="font-semibold">Online service</div>
              <div className="text-sm text-gray-500">
                Access to multiplayer games
              </div>
            </div>
          </div>
          <div className="font-semibold text-blue-500">+$1/mo</div>
        </div>

        <div
          className={`flex items-center justify-between p-4 border-2 rounded-lg ${
            addons.largerStorage ? " bg-blue-50" : "border-gray-300"
          }`}
        >
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={addons.largerStorage}
              onChange={() => toggleAddon("largerStorage")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <div>
              <div className="font-semibold">Larger storage</div>
              <div className="text-sm text-gray-500">
                Extra 1TB of cloud save
              </div>
            </div>
          </div>
          <div className="font-semibold text-blue-500">+$2/mo</div>
        </div>

        <div
          className={`flex items-center justify-between p-4 border-2 rounded-lg ${
            addons.customizableProfile
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={addons.customizableProfile}
              onChange={() => toggleAddon("customizableProfile")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <div>
              <div className="font-semibold">Customizable Profile</div>
              <div className="text-sm text-gray-500">
                Custom theme on your profile
              </div>
            </div>
          </div>
          <div className="font-semibold text-blue-500">+$2/mo</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link
          to="/selectPlan"
          className="opacity-50 font-medium hover:opacity-100"
        >
          Go Back
        </Link>
        <div>
          <Link
            to="/finishing"
            className="group relative bg-[#022959] inline-flex items-center justify-center
          overflow-hidden rounded-lg  px-8 py-3 text-white"
            href="#"
          >
            Next Step
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PickAddOns;
