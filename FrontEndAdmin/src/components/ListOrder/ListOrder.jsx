import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import "./ListOrder.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";
import { doGet, doPost } from "../../utils/api/api";
import { Link } from "react-router-dom";
export const defaultValue = {};

function ListOrder() {
  const [isReload, setIsReload] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [pageIndex, setPageIndex] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  console.log("re-render");
  useEffect(() => {
    const initData = async () => {
      const response = await doGet(`/order/admin/listOrders`);

      if (response.data.status == 200) {
        console.log(response.data.data.listOrderAdmin);
        setOrderList(response.data.data.listOrderAdmin);
        setTotalOrder(response.data.data.listOrderAdmin.length);
      }
    };

    initData();
  }, [isReload]);
  const handleDelete = (id) => {
    const response = doPost(`/order/admin/deleteOrder/${id}`);

    setIsReload(!isReload);
    window.location.reload();
  };

  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center mb-3">
            <div className="col-sm">
              <h1 className="page-header-title">
                Orders{" "}
                <span className="badge badge-soft-dark ml-2">{totalOrder}</span>
              </h1>
              <div className="mt-2">
                <a
                  className="text-body mr-3"
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#exportOrdersModal"
                >
                  <i className="tio-download-to mr-1" /> Export
                </a>
                {/* Unfold */}
                <div className="hs-unfold">
                  <a
                    className="js-hs-unfold-invoker text-body"
                    href="javascript:;"
                    data-hs-unfold-options='{
                   "target": "#moreOptionsDropdown",
                   "type": "css-animation"
                 }'
                  >
                    More options <i className="tio-chevron-down" />
                  </a>
                  <div
                    id="moreOptionsDropdown"
                    className="hs-unfold-content dropdown-unfold dropdown-menu mt-1"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="tio-folder-add dropdown-item-icon" /> New
                      order
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="tio-folder dropdown-item-icon" /> New order
                      - Development
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="tio-folder dropdown-item-icon" /> New order
                      - Staging
                    </a>
                  </div>
                </div>
                {/* End Unfold */}
              </div>
            </div>
          </div>
          {/* End Row */}
          {/* Nav Scroller */}
          <div className="js-nav-scroller hs-nav-scroller-horizontal">
            <span
              className="hs-nav-scroller-arrow-prev"
              style={{ display: "none" }}
            >
              <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                <i className="tio-chevron-left" />
              </a>
            </span>
            <span
              className="hs-nav-scroller-arrow-next"
              style={{ display: "none" }}
            >
              <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                <i className="tio-chevron-right" />
              </a>
            </span>
            {/* Nav */}
            <ul className="nav nav-tabs page-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  All products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Open
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Unfulfilled
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Unpaid
                </a>
              </li>
            </ul>
            {/* End Nav */}
          </div>
          {/* End Nav Scroller */}
        </div>
        {/* End Page Header */}
        {/* Card */}
        <div className="card">
          {/* Header */}
          <div className="card-header">
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
                    <input
                      id="datatableSearch"
                      type="search"
                      className="form-control"
                      placeholder="Search orders"
                      aria-label="Search orders"
                    />
                  </div>
                  {/* End Search */}
                </form>
              </div>
              <div className="col-lg-6">
                <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                  {/* Datatable Info */}
                  <div
                    id="datatableCounterInfo"
                    className="mr-2 mb-2 mb-sm-0"
                    style={{ display: "none" }}
                  >
                    <div className="d-flex align-items-center">
                      <span className="font-size-sm mr-3">
                        <span id="datatableCounter">0</span>
                        Selected
                      </span>
                      <a
                        className="btn btn-sm btn-outline-danger"
                        href="javascript:;"
                      >
                        <i className="tio-delete-outlined" /> Delete
                      </a>
                    </div>
                  </div>
                  {/* End Datatable Info */}
                  {/* Unfold */}
                  <div className="hs-unfold mr-2">
                    <a
                      className="js-hs-unfold-invoker btn btn-sm btn-white dropdown-toggle"
                      href="javascript:;"
                      data-hs-unfold-options='{
                     "target": "#usersExportDropdown",
                     "type": "css-animation"
                   }'
                    >
                      <i className="tio-download-to mr-1" /> Export
                    </a>
                    <div
                      id="usersExportDropdown"
                      className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm-right"
                    >
                      <span className="dropdown-header">Options</span>
                      <a
                        id="export-copy"
                        className="dropdown-item"
                        href="javascript:;"
                      >
                        <img
                          className="avatar avatar-xss avatar-4by3 mr-2"
                          src="assets\svg\illustrations\copy.svg"
                          alt="Image Description"
                        />
                        Copy
                      </a>
                      <a
                        id="export-print"
                        className="dropdown-item"
                        href="javascript:;"
                      >
                        <img
                          className="avatar avatar-xss avatar-4by3 mr-2"
                          src="assets\svg\illustrations\print.svg"
                          alt="Image Description"
                        />
                        Print
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Download options</span>
                      <a
                        id="export-excel"
                        className="dropdown-item"
                        href="javascript:;"
                      >
                        <img
                          className="avatar avatar-xss avatar-4by3 mr-2"
                          src="assets\svg\brands\excel.svg"
                          alt="Image Description"
                        />
                        Excel
                      </a>
                      <a
                        id="export-csv"
                        className="dropdown-item"
                        href="javascript:;"
                      >
                        <img
                          className="avatar avatar-xss avatar-4by3 mr-2"
                          src="assets\svg\components\placeholder-csv-format.svg"
                          alt="Image Description"
                        />
                        .CSV
                      </a>
                      <a
                        id="export-pdf"
                        className="dropdown-item"
                        href="javascript:;"
                      >
                        <img
                          className="avatar avatar-xss avatar-4by3 mr-2"
                          src="assets\svg\brands\pdf.svg"
                          alt="Image Description"
                        />
                        PDF
                      </a>
                    </div>
                  </div>
                  {/* End Unfold */}
                  {/* Unfold */}
                  <div className="hs-unfold">
                    <a
                      className="js-hs-unfold-invoker btn btn-sm btn-white"
                      href="javascript:;"
                      data-hs-unfold-options='{
                     "target": "#showHideDropdown",
                     "type": "css-animation"
                   }'
                    >
                      <i className="tio-table mr-1" /> Columns{" "}
                      <span className="badge badge-soft-dark rounded-circle ml-1">
                        7
                      </span>
                    </a>
                    <div
                      id="showHideDropdown"
                      className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card"
                      style={{ width: "15rem" }}
                    >
                      <div className="card card-sm">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Order</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_order"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_order"
                                defaultChecked
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Date</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_date"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_date"
                                defaultChecked
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Customer</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_customer"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_customer"
                                defaultChecked
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Payment status</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_payment_status"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_payment_status"
                                defaultChecked
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Fulfillment status</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_fulfillment_status"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_fulfillment_status"
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Payment method</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_payment_method"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_payment_method"
                                defaultChecked
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Total</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_total"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_total"
                                defaultChecked
                              />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="mr-2">Actions</span>
                            {/* Checkbox Switch */}
                            <label
                              className="toggle-switch toggle-switch-sm"
                              htmlFor="toggleColumn_actions"
                            >
                              <input
                                type="checkbox"
                                className="toggle-switch-input"
                                id="toggleColumn_actions"
                                defaultChecked
                              />
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
          {/* End Header */}
          {/* Table */}
          <div className="table-responsive datatable-custom">
            <table
              id="datatable"
              className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
              style={{ width: "100%" }}
              data-hs-datatables-options='{
                 "columnDefs": [{
                    "targets": [0],
                    "orderable": false
                  }],
                 "order": [],
                 "info": {
                   "totalQty": "#datatableWithPaginationInfoTotalQty"
                 },
                 "search": "#datatableSearch",
                 "entries": "#datatableEntries",
                 "pageLength": 12,
                 "isResponsive": false,
                 "isShowPaging": false,
                 "pagination": "datatablePagination"
               }'
            >
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="table-column-pr-0">
                    <div className="custom-control custom-checkbox">
                      <input
                        id="datatableCheckAll"
                        type="checkbox"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="datatableCheckAll"
                      />
                    </div>
                  </th>
                  <th className="table-column-pl-0">Order</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Payment status</th>
                  <th>Fulfillment status</th>
                  <th>Payment method</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td className="table-column-pr-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="ordersCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="ordersCheck1"
                          />
                        </div>
                      </td>
                      <td className="table-column-pl-0">
                        <Link to={`${item.id}`}>{item.id}</Link>
                      </td>
                      <td>{item.dateCreated}</td>
                      <td>
                        <a
                          className="text-body"
                          href="ecommerce-customer-details.html"
                        >
                          {item.userEntity.userName}
                        </a>
                      </td>
                      <td>
                        <span className="badge badge-soft-success">
                          <span className="legend-indicator bg-success" />
                          Paid
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-soft-info">
                          <span className="legend-indicator bg-info" />
                          Fulfilled
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="avatar avatar-xss avatar-4by3 mr-2"
                            src="assets\svg\brands\mastercard.svg"
                            alt="Image Description"
                          />
                          <span className="text-dark">•••• 4242</span>
                        </div>
                      </td>
                      <td>{item.totalPriceOrder}</td>
                      <td>
                        <div className="btn-group" role="group">
                          {/* Unfold */}
                          <div className="hs-unfold btn-group">
                            <button
                              style={{ outline: "none" }}
                              onClick={() => {
                                return handleDelete(item.id);
                              }}
                            >
                              Xóa
                            </button>
                          </div>
                          {/* End Unfold */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
                  <span className="mr-2">Showing:</span>
                  {/* Select */}
                  <select
                    id="datatableEntries"
                    className="js-select2-custom"
                    data-hs-select2-options='{
                        "minimumResultsForSearch": "Infinity",
                        "customClass": "custom-select custom-select-sm custom-select-borderless",
                        "dropdownAutoWidth": true,
                        "width": true
                      }'
                  >
                    <option value={12} selected>
                      12
                    </option>
                    <option value={14}>14</option>
                    <option value={16}>16</option>
                    <option value={18}>18</option>
                  </select>
                  {/* End Select */}
                  <span className="text-secondary mr-2">of</span>
                  {/* Pagination Quantity */}
                  <span id="datatableWithPaginationInfoTotalQty" />
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="d-flex justify-content-center justify-content-sm-end">
                  {/* Pagination */}
                  <nav
                    id="datatablePagination"
                    aria-label="Activity pagination"
                  />
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
      {/* Footer */}
      <div className="footer">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <p className="font-size-sm mb-0">
              © Front.{" "}
              <span className="d-none d-sm-inline-block">2020 Htmlstream.</span>
            </p>
          </div>
          <div className="col-auto">
            <div className="d-flex justify-content-end">
              {/* List Dot */}
              <ul className="list-inline list-separator">
                <li className="list-inline-item">
                  {/* Keyboard Shortcuts Toggle */}
                  <div className="hs-unfold">
                    <a
                      className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle"
                      href="javascript:;"
                      data-hs-unfold-options='{
                          "target": "#keyboardShortcutsSidebar",
                          "type": "css-animation",
                          "animationIn": "fadeInRight",
                          "animationOut": "fadeOutRight",
                          "hasOverlay": true,
                          "smartPositionOff": true
                         }'
                    >
                      <i className="tio-command-key" />
                    </a>
                  </div>
                  {/* End Keyboard Shortcuts Toggle */}
                </li>
              </ul>
              {/* End List Dot */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer */}
    </main>
  );
}

export default ListOrder;
