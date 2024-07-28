//rrd imports
import { Outlet } from "react-router-dom";

//components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-row bg-white p-4 gap-24">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
