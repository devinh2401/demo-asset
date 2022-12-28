import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Asset } from "./components/Asset";
import  Assetlist  from "./components/Asset/Assetlist";
import Assetdetail from "./components/Asset/Assetdetail";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
   },
  {
      path: "/asset",
      element:<Asset />
    },
   
    {
        path: "/assetlist",
        element: <Assetlist />

    },
    {
        path: "/assetdetail",
        element: <Assetdetail />

    }
  
];

export default AppRoutes;
