import React, { Component } from 'react';
import { Row, Col, Container, Table} from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
// import AssetMove from './AssetMove';
import AssetRepair from './AssetRepair';

class AssetMove extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isActive: 'true', 
    //         showTable:'true'
    //     }
    //     this.showTable = this.showTable.bind(this);
    //   }
    //   showTable() {
    //     console.log('Click ok');
    //   }
         
    render() {
        return (
            <div className='asset-detail'>
                <div className="panel">
                
                    <h3 style={{color:'#036ead', margin: "5px"}}> <i className="fa fa-list"></i>  Thông tin tài sản</h3>
                    <div className='head-title'>
                        <div className='pic-title'>
                            <input type="file"
                            accept=".png, .jpg, .jpeg">
                            </input>
                        </div>
                        <div className='info-title' style={{display:'flex' , justifyContent:'space-around',width:'100%' }}>
                            <div className='info-left' >
                                <p className="name-detail"> Mã sản phẩm:</p>  
                                <p className="name-detail"> Tên tài sản:</p>                   
                                <p className="name-detail"> ngày mua:</p>                   
                                <p className="name-detail"> Thời gian khấu hao:</p>                   
                                <p className="name-detail"> Nhà cung cấp:</p> 
                            </div>
                            <div className='info-right'>
                                <p className="name-detail"> Loại tài sản:</p>  
                                <p className="name-detail"> Giá trị ban đầu:</p>                   
                                <p className="name-detail"> Ngày mua:</p>                   
                                <p className="name-detail"> Thời gian bảo hành:</p>                   
                                <p className="name-detail"> Ghi chú:</p> 
                            </div>
                                             
                            
                        </div>
                        
                    </div> 
                    <div className="panel-info">
                        <div className='panel-list'>
                            <ul className='pn-list'> 
                            
                                <li className='tab-detail active'><Link to ="/Assetdetail">Thông tin tài sản</Link> </li>
                                <li className='tab-detail'><Link to ="/AssetMove">Lịch sử điểu động</Link> </li>
                                <li className='tab-detail'><Link to ="/AssetRepair">Lịch sử sửa chữa</Link> </li>
                                <li className='tab-detail'><Link to ="#">Lịch sử Kiểm định</Link> </li>
                                
                            </ul>
                            <button className="btn-primary" data-bs-toggle="modal" data-bs-target="#formsp" style={{textTransform:'uppercase' , borderRadius:'3px', padding:'2px', marginLeft:'3px'}}> Thêm mới lịch sử điều động</button>
                            <div className="modal fade" id="formsp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" >
                                        <div className="modal-content" style={{width:"900px", height:"400px"}}>
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="">Thông tin tài sản</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className='formSm'>
                                                    <div className='row' style={{marginBottom:"30px"}}>
                                                        <div className='col-sm-3' >
                                                            <label id ="label-modal">Vị trí </label>
                                                        <select className='form-select' >
                                                                <option selected> selected</option>
                                                                <option value={1}> value1</option>
                                                                <option value={2}> value 2</option>
                                                                <option value={3}> value3</option>
                                                        </select>
                                                        </div>
                                                        <div className='col-sm-3'>
                                                            <label id ="label-modal">Người quản lý</label>
                                                            <select className='form-select' >
                                                                <option selected> selected</option>
                                                                <option value={1}> value1</option>
                                                                <option value={2}> value 2</option>
                                                                <option value={3}> value3</option>
                                                        </select>
                                                        </div>
                                                        <div className='col-sm-3'>
                                                            <label id ="label-modal"> Ngày điều chuyển</label>
                                                            <input id="input-modal" type="date"></input>
                                                        </div>
                                                        <div className='col-sm-3'>
                                                        <label id ="label-modal"> Phiếu bàn giao tài sản</label>
                                                            <select className='form-select' >
                                                                    <option selected> selected</option>
                                                                    <option value={1}> value1</option>
                                                                    <option value={2}> value 2</option>
                                                                    <option value={3}> value3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-sm-3'>
                                                            <label id ="label-modal">Trạng thái sử dụng</label>
                                                            <select className='form-select'>
                                                                <option value={1}> Sử dụng </option>
                                                                <option value={2}> Không sử dụng </option>
                                                            </select>
                                                        </div>
                                                        <div className='col-sm-6'>
                                                            <label id ="label-modal" for="textarea">Ghi chú</label>
                                                            <textarea id="input-modal" style={{width:"400px", height:"85px"}}></textarea>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                                                <button type="button" className="btn btn-primary">Thêm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <form className='form-tbl'>
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Mô tả</th>
                                        <th>Vị trí</th>
                                        <th>Người quản lý</th>
                                        <th>Ngày điều chuyển</th>
                                        <th>Ghi chú</th>                                                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>New</td>
                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>New</td>
                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>New</td>
                                        </tr>
                                    </tbody>
                            </Table>
                            
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AssetMove;