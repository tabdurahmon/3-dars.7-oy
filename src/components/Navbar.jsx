import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navbar = [
    {
      text: 1,
      to: "/",
      STEP: "STEP 1",
      section: "Your Info",
    },
    {
      text: 2,
      to: "/selectPlan",
      STEP: "STEP 2",
      section: "SELECT PLAN",
    },
    {
      text: 3,
      to: "/pickAddOns",
      STEP: "STEP 3",
      section: "ADD-ONS",
    },
    {
      text: 4,
      to: "/finishing",
      STEP: "STEP 4",
      section: "SUMMARY",
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="navbarBg h-full w-80 rounded-lg pt-10 pl-8 text-white">
      <div className="space-y-8">
        {navbar.map((el) => {
          return (
            <Link
              to={el.to}
              key={el.text}
              className={`flex items-center space-x-4`}
            >
              <div
                className={`w-8 h-8 border-2 border-white text-white rounded-full flex items-center justify-center font-bold ${
                  pathname === el.to ? "active" : ""
                }`}
              >
                {el.text}
              </div>
              <div>
                <span className="text-xs">{el?.STEP}</span>
                <div className="font-semibold">{el?.section}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
