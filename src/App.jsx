import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
//pages
import { Finishing, Home, PickAddOns, SelectPlan, Thanks } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "selectPlan",
          element: <SelectPlan />,
        },
        {
          path: "pickAddOns",
          element: <PickAddOns />,
        },
        {
          path: "finishing",
          element: <Finishing />,
        },
        {
          path: "thanks",
          element: <Thanks />,
        },
      ],
    },
  ]);

  return <>{<RouterProvider router={routes} />} </>;
}

export default App;
