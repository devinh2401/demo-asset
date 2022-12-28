import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
//import Assetdetail from './Assetdetail';
import store from '../Redux/store';



 class Assetlist extends Component {
    
    render() {
        const data = store.getState(store)
        const addAsset = function(){
           console.log("condition show modal here")
       }
        const dataNew = data.map((value,key)=>{
            return(
                <tr key={key}>
                <td >
                  <Link to ='/Assetdetail'>
                  <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                        <i className="fa fa-barcode"></i>
                </a>
                </Link> 
                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                        <i className="fa fa-id-card"></i>
                    </a>
                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                        <i className="fa fa-trash"></i>
                    </a>
                </td>
                <td >{value.idAsset}</td>
                <td>{value.assetName}</td>
                <td>{value.buyDay}</td>
                <td>{value.price}</td>
                <td>{value.supplier}</td>
                <td>365</td>
                <td>{value.warranty}</td>
                <td>{value.location}</td>
                <td>{value.manage}</td>
                <td>{value.note}</td>
                </tr>
            )
        })
        // const {idAsset ,assetName,assetType,buyDay,supplier,quantity,location,manage,note,price,warranty} = data
        
        return (
            
            <div className='asset-list'>
                <div className="head-list">
                <h4 style={{color:'#036ead', margin: "5px", fontWeight:'600'}}> <i className="fa fa-list"></i> Danh sách tài sản </h4>
                <div className='panel'> 
                <a className="pn-right">
                    <i className="fa fa-search i-search"></i>
                    <Button variant="primary btn-search"> Search</Button>
                </a>
                <a className="pn-right">
                    <i className="fa fa-plus i-add"></i>
                    <Button variant="primary btn-add " data-bs-toggle="modal" data-bs-target="#addAsset"> Thêm mới</Button>
                    <div className="modal fade" id="addAsset" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="" aria-hidden="true">
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
                                                            <label id ="label-modal">Tên tài sản </label>
                                                        <input id='input-modal' type="text"></input>
                                                        </div>
                                                        <div className='col-sm-3'>
                                                            <label id ="label-modal">loại tài sản</label>
                                                            <select className='form-select' >
                                                                <option selected> selected</option>
                                                                <option value={1}> Máy tính</option>
                                                                <option value={2}> bàn ghế</option>
                                                                <option value={3}> VPP</option>
                                                        </select>
                                                        </div>
                                                       
                                                        <div className='col-sm-3'>
                                                        <label id ="label-modal"> Nhà cung cấp</label>
                                                            <select className='form-select' >
                                                                    <option selected> selected</option>
                                                                    <option value={1}> Phong Vũ</option>
                                                                    <option value={2}> Hanoi Computer</option>
                                                                    <option value={3}> Redzone</option>
                                                            </select>
                                                        </div>
                                                        <div className='col-sm-3'>
                                                            <label id ="label-modal"> Mua ngày</label>
                                                            <input id="input-modal" type="date"></input>
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
                </a>
                </div>
                </div>
                <div className='asset-search' style={{float:'right', margin: '10px'}}>
                    <panel style={{marginRight:'5px'}}>Tìm kiếm:</panel>
                    <input type='search' style={{outline:'none', border:'1px solid  #dfe6e9', borderRadius:"3px", width:'200px'}}></input>
                </div>
                <div className="asset-data">
                <Table striped bordered hover >
                            <thead >
                                <tr style={{backgroundColor:"#0984e3"}} >
                                <th  className='asset-action' >#</th>
                                <th>Mã tài sản</th>
                                <th>Tên tài sản</th>
                                <th>Mua ngày</th>
                                <th>Giá trị</th>
                                <th>Nhà cung cấp</th>
                                <th>Thời gian khấu hao</th>
                                <th>Bảo hành</th>
                                <th>Vị trí</th>
                                <th>Người quản lý</th>
                                <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataNew}
                            </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Assetlist;