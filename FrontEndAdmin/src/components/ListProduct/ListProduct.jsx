import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import "./ListProduct.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";
import { doGet, doPost } from "../../utils/api/api";
import { Link } from "react-router-dom";
export const defaultValue = {};

function ListProduct() {
  const [isReload, setIsReload] = useState(false);
  const [products, setListPrducts] = useState([]);
  useEffect(() => {
    const initData = async () => {
      const response = await doGet(
        `product/admin/listProducts?searchValue=all`
      );

      if (response.data.status == 200) {
        console.log(response.data.data.products);
        setListPrducts(response.data.data.products);
      }
    };

    initData();
  }, [isReload]);

  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center mb-3">
            <div className="col-sm mb-2 mb-sm-0">
              <h1 className="page-header-title">
                Products <span className="badge badge-soft-dark ml-2">49</span>
              </h1>
              <div className="mt-2">
                <a
                  className="text-body mr-3"
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#exportProductsModal"
                >
                  <i className="tio-download-to mr-1" /> Export
                </a>
                <a
                  className="text-body"
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#importProductsModal"
                >
                  <i className="tio-publish mr-1" /> Import
                </a>
              </div>
            </div>
            <div className="col-sm-auto">
              <a className="btn btn-primary" href="ecommerce-add-product.html">
                Add product
              </a>
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
            <ul
              className="nav nav-tabs page-header-tabs"
              id="pageHeaderTab"
              role="tablist"
            >
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
                  Archived
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Publish
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Unpublish
                </a>
              </li>
            </ul>
            {/* End Nav */}
          </div>
          {/* End Nav Scroller */}
        </div>
        {/* End Page Header */}
        <div className="row justify-content-end mb-3">
          <div className="col-lg">
            {/* Datatable Info */}
            <div id="datatableCounterInfo" style={{ display: "none" }}>
              <div className="d-sm-flex justify-content-lg-end align-items-sm-center">
                <span className="d-block d-sm-inline-block font-size-sm mr-3 mb-2 mb-sm-0">
                  <span id="datatableCounter">0</span>
                  Selected
                </span>
                <a
                  className="btn btn-sm btn-outline-danger mb-2 mb-sm-0 mr-2"
                  href="javascript:;"
                >
                  <i className="tio-delete-outlined" /> Delete
                </a>
                <a
                  className="btn btn-sm btn-white mb-2 mb-sm-0 mr-2"
                  href="javascript:;"
                >
                  <i className="tio-archive" /> Archive
                </a>
                <a
                  className="btn btn-sm btn-white mb-2 mb-sm-0 mr-2"
                  href="javascript:;"
                >
                  <i className="tio-publish" /> Publish
                </a>
                <a
                  className="btn btn-sm btn-white mb-2 mb-sm-0"
                  href="javascript:;"
                >
                  <i className="tio-clear" /> Unpublish
                </a>
              </div>
            </div>
            {/* End Datatable Info */}
          </div>
        </div>
        {/* End Row */}
        {/* Card */}
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <div className="row justify-content-between align-items-center flex-grow-1">
              <div className="col-md-4 mb-3 mb-md-0">
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
                      placeholder="Search users"
                      aria-label="Search users"
                    />
                  </div>
                  {/* End Search */}
                </form>
              </div>
              <div className="col-auto">
                {/* Unfold */}
                <div className="hs-unfold mr-2">
                  <a
                    className="js-hs-unfold-invoker btn btn-white"
                    href="javascript:;"
                    data-hs-unfold-options='{
                  "target": "#datatableFilterSidebar",
                  "type": "css-animation",
                  "animationIn": "fadeInRight",
                  "animationOut": "fadeOutRight",
                  "hasOverlay": true,
                  "smartPositionOff": true
                 }'
                  >
                    <i className="tio-filter-list mr-1" /> Filters
                  </a>
                </div>
                {/* End Unfold */}
                {/* Unfold */}
                <div className="hs-unfold">
                  <a
                    className="js-hs-unfold-invoker btn btn-white"
                    href="javascript:;"
                    data-hs-unfold-options='{
                   "target": "#showHideDropdown",
                   "type": "css-animation"
                 }'
                  >
                    <i className="tio-table mr-1" /> Columns{" "}
                    <span className="badge badge-soft-dark rounded-circle ml-1">
                      6
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
                          <span className="mr-2">Product</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_product"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_product"
                              defaultChecked
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Type</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_type"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_type"
                              defaultChecked
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Vendor</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_vendor"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_vendor"
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Stocks</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_stocks"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_stocks"
                              defaultChecked
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">SKU</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_sku"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_sku"
                              defaultChecked
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Price</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_price"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_price"
                              defaultChecked
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="mr-2">Quantity</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_quantity"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_quantity"
                            />
                            <span className="toggle-switch-label">
                              <span className="toggle-switch-indicator" />
                            </span>
                          </label>
                          {/* End Checkbox Switch */}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="mr-2">Variants</span>
                          {/* Checkbox Switch */}
                          <label
                            className="toggle-switch toggle-switch-sm"
                            htmlFor="toggleColumn_variants"
                          >
                            <input
                              type="checkbox"
                              className="toggle-switch-input"
                              id="toggleColumn_variants"
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
            {/* End Row */}
          </div>
          {/* End Header */}
          {/* Table */}
          <div className="table-responsive datatable-custom">
            <table
              id="datatable"
              className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
              data-hs-datatables-options='{
                 "columnDefs": [{
                    "targets": [0, 4, 9],
                    "width": "5%",
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
                  <th className="table-column-pl-0">Product</th>
                  <th>Type</th>
                  <th>Vendor</th>
                  <th>Stocks</th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Variants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="table-column-pr-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="productsCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="productsCheck1"
                          />
                        </div>
                      </td>
                      <td className="table-column-pl-0">
                        <a className="media align-items-center">
                          <img
                            className="avatar avatar-lg mr-3"
                            src={`http://localhost:3000/assets/img/secondhand/accessories/${item.imageEntity[0].url}`}
                            alt=""
                            style={{ width: "50px", height: "50px" }}
                          />
                          <div className="media-body">
                            {/* <h5 className="text-hover-primary mb-0">{item.name}</h5> */}
                            <Link to={`${item.id}`}>{item.name}</Link>
                          </div>
                        </a>
                      </td>
                      <td>{item.sourceOrigin}</td>
                      <td>Second Hand Town</td>
                      <td>
                        <label
                          className="toggle-switch toggle-switch-sm"
                          htmlFor="stocksCheckbox1"
                        >
                          <input
                            type="checkbox"
                            className="toggle-switch-input"
                            id="stocksCheckbox1"
                            defaultChecked
                          />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                      </td>
                      <td>{item.id}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>2</td>
                      <td>
                        <div className="btn-group" role="group">
                          <a
                            className="btn btn-sm btn-white"
                            href="ecommerce-product-details.html"
                          >
                            <i className="tio-edit" /> Edit
                          </a>
                          {/* Unfold */}
                          <div className="hs-unfold btn-group">
                            <a
                              className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty"
                              href="javascript:;"
                              data-hs-unfold-options='{
                         "target": "#productsEditDropdown1",
                         "type": "css-animation",
                         "smartPositionOffEl": "#datatable"
                       }'
                            />
                            <div
                              id="productsEditDropdown1"
                              className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1"
                            >
                              <a className="dropdown-item" href="#">
                                <i className="tio-delete-outlined dropdown-item-icon" />{" "}
                                Delete
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="tio-archive dropdown-item-icon" />{" "}
                                Archive
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="tio-publish dropdown-item-icon" />{" "}
                                Publish
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="tio-clear dropdown-item-icon" />{" "}
                                Unpublish
                              </a>
                            </div>
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
                  <a className="list-separator-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="list-separator-link" href="#">
                    License
                  </a>
                </li>
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

export default ListProduct;
