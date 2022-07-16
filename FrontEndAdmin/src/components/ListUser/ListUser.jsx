import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./ListUser.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";
import { doGet, doPost } from "../../utils/api/api";
import {Link} from 'react-router-dom'

export const defaultValue = {

}

function ListUser() {
  const [isReload, setIsReload] = useState(false);
  const [userList, setUserList] = useState([]);
  const [pageSize,setPageSize]=useState(12);
  const [pageIndex,setPageIndex]=useState(0);
  const [totalUser,setTotalUser]=useState(0);
  console.log(totalUser)
  useEffect(() => {
    const initData = async () => {
      const response = await doGet(`/manage/admin/findAllUsers?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    
      if(response.data.status==200){
          setUserList(response.data.data.listUser)
          setTotalUser(response.data.data.listUser.length)
          console.log("hello")
      }
      
   

    }
    
    initData();
  }, [isReload])
  
  console.log(userList)
  const handleDelete=(userId)=>{
    const response=doPost(`/manage/admin/deleteUsers?listId=${userId}`)
   
          setIsReload(!isReload)
          window.location.reload();
   
  }

  return (
   
          <main id="content" role="main" className="main">
            {/* Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center mb-3">
                  <div className="col-sm mb-2 mb-sm-0">
                    <h1 className="page-header-title">Khách hàng <span className="badge badge-soft-dark ml-2">{totalUser}</span></h1>
                    <div className="mt-2">
                      {/* <a class="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#importCustomersModal">
                    <i class="tio-publish mr-1"></i> Import customers
                  </a>
                  <a class="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#exportCustomersModal">
                    <i class="tio-download-to mr-1"></i> Export
                  </a> */}
                      {/* Unfold */}
                      {/* <div class="hs-unfold">
                    <a class="js-hs-unfold-invoker text-body" href="javascript:;" data-hs-unfold-options='{
                           "target": "#moreOptionsDropdown",
                           "type": "css-animation"
                         }'>
                      More options <i class="tio-chevron-down"></i>
                    </a>
    
                    <div id="moreOptionsDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
                      <a class="dropdown-item" href="#">
                        <i class="tio-copy dropdown-item-icon"></i> Manage duplicates
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="tio-edit dropdown-item-icon"></i> Edit users
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="tio-restore dropdown-item-icon"></i> Restore clients
                      </a>
                    </div>
                  </div> */}
                      {/* End Unfold */}
                    </div>
                  </div>
                  {/* <div class="col-sm-auto">
                <a class="btn btn-primary" href="ecommerce-add-customers.html">Thêm khách hàng</a>
              </div> */}
                </div>
                {/* End Row */}
                {/* Nav Scroller */}
                <div className="js-nav-scroller hs-nav-scroller-horizontal">
                  <span className="hs-nav-scroller-arrow-prev" style={{display: 'none'}}>
                    <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                      <i className="tio-chevron-left" />
                    </a>
                  </span>
                  <span className="hs-nav-scroller-arrow-next" style={{display: 'none'}}>
                    <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                      <i className="tio-chevron-right" />
                    </a>
                  </span>
                  {/* Nav */}
                  <ul className="nav nav-tabs page-header-tabs">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Tất cả khách hàng</a>
                    </li>
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mới</a>
                </li> */}
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Returning</a>
                </li> */}
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Abandoned checkouts</a>
                </li> */}
                    {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Email subscribers</a>
                </li> */}
                  </ul>
                  {/* End Nav */}
                </div>
                {/* End Nav Scroller */}
              </div>
              {/* End Page Header */}
              {/* Card */}
              <div className="card">
                {/* Body */}
                <div className="card-body">
                  <div className="row justify-content-between align-items-center flex-grow-1">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                      <form>
                        {/* Search */}
                        <div className="input-group input-group-merge input-group-flush">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tio-search" />
                            </div>
                          </div>
                          <input id="datatableSearch" type="search" className="form-control" placeholder="Tìm khách hàng" aria-label="Search customer" />
                        </div>
                        {/* End Search */}
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                        {/* Datatable Info */}
                        <div id="datatableCounterInfo" className="mr-2 mb-2 mb-sm-0" style={{display: 'none'}}>
                          <div className="d-flex align-items-center">
                            <span className="font-size-sm mr-3">
                              Đã chọn
                              <span id="datatableCounter">0</span>
                              khách hàng
                            </span>
                            <a className="btn btn-sm btn-outline-danger" href="javascript:;">
                              <i className="tio-delete-outlined" /> Xóa
                            </a>
                          </div>
                        </div>
                        {/* End Datatable Info */}
                        {/* Export Products */}
                        <div className="hs-unfold mr-2">
                          <a className="js-hs-unfold-invoker btn btn-sm btn-white dropdown-toggle" href="javascript:;" data-hs-unfold-options="{
                            &quot;target&quot;: &quot;#usersExportDropdown&quot;,
                            &quot;type&quot;: &quot;css-animation&quot;
                          }">
                            <i className="tio-download-to mr-1" /> Export
                          </a>
                          <div id="usersExportDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm-right">
                            <span className="dropdown-header">Options</span>
                            <a id="export-copy" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                              Copy
                            </a>
                            <a id="export-print" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                              Print
                            </a>
                            <div className="dropdown-divider" />
                            <span className="dropdown-header">Download options</span>
                            <a id="export-excel" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                              Excel
                            </a>
                            <a id="export-csv" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                              .CSV
                            </a>
                            <a id="export-pdf" className="dropdown-item" href="javascript:;">
                              <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                              PDF
                            </a>
                          </div>
                        </div>
                        {/* Export Products */}
                        {/* Unfold */}
                        <div className="hs-unfold">
                          <a className="js-hs-unfold-invoker btn btn-white" href="javascript:;" data-hs-unfold-options="{
                             &quot;target&quot;: &quot;#showHideDropdown&quot;,
                             &quot;type&quot;: &quot;css-animation&quot;
                           }">
                            <i className="tio-table mr-1" /> Số cột <span className="badge badge-soft-dark rounded-circle ml-1">5</span>
                          </a>
                          <div id="showHideDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card" style={{width: '15rem'}}>
                            <div className="card card-sm">
                              <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Tên</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_name">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_name" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">E-mail</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_email">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_email" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Số điện thoại</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_phone">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_phone" />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Địa chỉ</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_address">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_address" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Trạng thái</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_account_status">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_account_status" />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Số đơn hàng</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_orders">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_orders" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <span className="mr-2">Số tiền đã chi</span>
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_total_spent">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_total_spent" defaultChecked />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="mr-2">Ngày tạo</span>
                               
                                  {/* Checkbox Switch */}
                                  <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_date_created">
                                    <input type="checkbox" className="toggle-switch-input" id="toggleColumn_date_created" />
                                    <span className="toggle-switch-label">
                                      <span className="toggle-switch-indicator" />
                                    </span>
                                  </label>
                                  {/* End Checkbox Switch */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Unfold */}
                      </div>
                    </div>
                  </div>
                  {/* End Row */}
                </div>
                {/* End Body */}
                {/* Table */}
                <div className="table-responsive datatable-custom">
                  <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                         &quot;columnDefs&quot;: [{
                            &quot;targets&quot;: [0],
                            &quot;orderable&quot;: false
                          }],
                         &quot;order&quot;: [],
                         &quot;info&quot;: {
                           &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                         },
                         &quot;search&quot;: &quot;#datatableSearch&quot;,
                         &quot;entries&quot;: &quot;#datatableEntries&quot;,
                         &quot;pageLength&quot;: 15,
                         &quot;isResponsive&quot;: false,
                         &quot;isShowPaging&quot;: false,
                         &quot;pagination&quot;: &quot;datatablePagination&quot;
                       }">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="datatableCheckAll" />
                          </div>
                        </th>
                        <th className="table-column-pl-0">Tên</th>
                        <th>E-mail</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Trạng thái</th>
                        <th>Số đơn hàng</th>
                        <th>Số tiền đã chi</th>
                        <th>Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                      userList.map((user,key)=>{
                        return  <tr key={key}>
                        <td className="table-column-pr-0">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="usersDataCheck1" />
                            <label className="custom-control-label" htmlFor="usersDataCheck1" />
                          </div>
                        </td>
                        <td className="table-column-pl-0">
                          <a className="d-flex align-items-center" >
                            <div className="avatar avatar-circle">
                              <img className="avatar-img" src="assets\img\160x160\img10.jpg" alt="Image Description" />
                            </div>
                            <div className="ml-3">
                              <Link to={`${user.id}`}>  <span className="h5 text-hover-primary">{user.userName}<i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed" /></span></Link>
                            
                            </div>
                          </a>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>Hồ Chí Minh <span className="text-hide">Code: GB</span></td>
                        <td>
                          <span className="legend-indicator bg-success" />Active
                        </td>
                        <td>{user.totalOrder}</td>
                        <td>{user.totalPrice}</td>
                        <td>{user.dateCreated}</td>
                        <div className="btn-group" role="group">
                          <a className="btn btn-sm btn-white" style={{marginTop:"20px"}} onClick={() => handleDelete(user.id)}>
                            <i className="tio-edit" /> Xóa
                          </a>
                        </div>
                      </tr>
                      })
                     }
                 
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
                {/* Footer */}
                <div className="card-footer">
                  {/* Pagination */}
                  <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                    <div className="col-sm mb-2 mb-sm-0">
                      <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <span className="mr-2">Hiển thị</span>
                        {/* Select */}
                        <select id="datatableEntries" className="js-select2-custom" data-hs-select2-options="{
                                &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                                &quot;customClass&quot;: &quot;custom-select custom-select-sm custom-select-borderless&quot;,
                                &quot;dropdownAutoWidth&quot;: true,
                                &quot;width&quot;: true
                              }">
                          <option value={10}>10</option>
                          <option value={15} selected>15</option>
                          <option value={20}>20</option>
                        </select>
                        {/* End Select */}
                        <span className="text-secondary mr-2"> khách hàng trong tổng</span>
                        {/* Pagination Quantity */}
                        <span id="datatableWithPaginationInfoTotalQty" />
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex justify-content-center justify-content-sm-end">
                        {/* Pagination */}
                        <nav id="datatablePagination" aria-label="Activity pagination" />
                      </div>
                    </div>
                  </div>
                  {/* End Pagination */}
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
            </div>
            {/* End Content */}
          </main>
        );
      }

export default ListUser;