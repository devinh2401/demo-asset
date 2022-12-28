import React, { Component } from "react";
import AssetCategory from "./Asset/Assetcategory";
//import Assetlist from "./Asset/Assetlist";
//import Assetdetail from "./Asset/Assetdetail";
import './Asset/styles/App.css';
//import store from "../Redux/store";
//import AssetMove from "./Asset/AssetMove";
//import AssetRepair from "./Asset/AssetRepair";
//import { Routes, Route } from "react-router-dom";

export class Asset extends Component {
    static displayName = Asset.name;
       render() {      

           return (
               <div>
               <AssetCategory />
                   
                </div>
        //<Routes>
        //  {/*<Route exact  path="/" element={<AssetCategory />} />*/}
        //  {/*<Route  path="/Assetlist" element={<Assetlist />} />*/}
        //  {/*<Route  path="/Assetdetail" element={<Assetdetail />} />*/}
        //  {/*<Route  path="/AssetMove" element={<AssetMove />} />*/}
        //  {/*<Route  path="/AssetRepair" element={<AssetRepair />} />*/}
                    
        //</Routes>
        );
    }
}

//export default Asset;

