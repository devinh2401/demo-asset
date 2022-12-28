import React, { Component } from "react";
import "../Asset/styles/Asset.css";
import {Link} from "react-router-dom";

class AssetCategory extends Component {
  render() {
    return (
        <div className = "main-asset">
            <div className="asset-left">
              <aside className="asset">
                <i className ="far fa-backpack asset-head"></i>
                <label className=""> Tài Sản</label>
                <ul>
                  <li className="list-title">
                    <a href ="">
                      <i className="far fa-angle-double-right"> </i>
                      <Link to="/assetlist"><span> Danh sách tài sản</span></Link>
                    </a>
                  </li>
                  <li className="list-title">
                    <a href ="#">
                      <i className="far fa-angle-double-right ">
                        <span> Thông tin chi tiết tài sản</span>
                      </i>
                    </a>
                  </li><li className="list-title">
                    <a href ="#">
                      <i className="far fa-angle-double-right">
                        <span> Bàn giao tài sản</span>
                      </i>
                    </a>
                  </li><li className="list-title">
                    <a href ="#">
                      <i className="far fa-angle-double-right">
                        <span> In phiếu bàn giao</span>
                      </i>
                    </a>
                  </li>
                </ul>              
              </aside>
              <aside className="report">
              <i className ="far fa-backpack asset-head"></i>
                <label className=""> Báo cáo</label>
                <ul>
                  <li className="list-title">
                    <a href ="#">
                      <i className="far fa-angle-double-right">
                        <span> Báo cáo theo phòng ban</span>
                      </i>
                    </a>
                  </li>
                  <li className="list-title">
                    <a href ="#">
                      <i className="far fa-angle-double-right">
                        <span> Báo cáo theo loại tài sản</span>
                      </i>
                    </a>
                  </li><li className="list-title">
                    <a href ="#">
                      <i className="far fa-angle-double-right">
                        <span> Báo cáo theo chi nhánh</span>
                      </i>
                    </a>
                  </li>
                </ul>              
              </aside>
              
            </div>
            <div className="asset-right">
              asset right
              <div className=""></div>
            </div >
        </div>
    );
  }
}
export default AssetCategory;
