import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./AddProduct.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";

export const defaultValue = {

}

function AddProduct() {

  return (
  
    <main id="content" role="main" className="main">
  {/* Content */}
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col-sm mb-2 mb-sm-0">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-no-gutter">
              <li className="breadcrumb-item"><a className="breadcrumb-link" href="product-management.html">Sản phẩm</a></li>
              <li className="breadcrumb-item active" aria-current="page">Thêm</li>
            </ol>
          </nav>
          <h1 className="page-header-title">Thêm sản phẩm</h1>
        </div>
      </div>
      {/* End Row */}
    </div>
    {/* End Page Header */}
    <div className="row">
      <div className="col-lg-8">
        {/* Card */}
        <div className="card mb-3 mb-lg-5">
          {/* Header */}
          <div className="card-header">
            <h4 className="card-header-title">Thông tin sản phẩm</h4>
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="productNameLabel" className="input-label">Tên <i className="tio-help-outlined text-body ml-1" data-toggle="tooltip" data-placement="top" title="Tên sản phẩm." /></label>
              <input type="text" className="form-control" name="productName" id="productNameLabel" placeholder="Shirt, t-shirts, etc." aria-label="Shirt, t-shirts, etc." />
            </div>
            {/* End Form Group */}
            <div className="row">
              <div className="col-sm-4">
                {/* Form Group */}
                <div className="form-group">
                  <label htmlFor="quantityLabel" className="input-label">Số lượng</label>
                  <input type="number" className="form-control" name="quantity" id="quantityLabel" placeholder={100} aria-label={100} />
                </div>
                {/* End Form Group */}
              </div>
              <div className="col-sm-4">
                {/* Form Group */}
                <div className="form-group">
                  <label htmlFor="sizeLabel" className="input-label">Kích thước</label>
                  <div className="input-group input-group-merge">
                    <input type="text" className="form-control" name="weightName" id="sizeLabel" placeholder="S" aria-label="S" />
                  </div>
                </div>
                {/* End Form Group */}
              </div>
              <div className="col-sm-4">
                {/* Form Group */}
                <div className="form-group">
                  <label htmlFor="colorLabel" className="input-label">Màu</label>
                  <div className="input-group input-group-merge">
                    <input type="text" className="form-control" name="sizeName" id="colorLabel" placeholder="Đen" aria-label="Đen" />
                  </div>
                </div>
                {/* End Form Group */}
              </div>
            </div>
            {/* End Row */}
            <label className="input-label">Mô tả</label>
            {/* Quill */}
            <div className="quill-custom">
              <div className="js-quill" style={{minHeight: '15rem'}} data-hs-quill-options="{
                    &quot;placeholder&quot;: &quot;Type your description...&quot;
                   }">
              </div>
            </div>
            {/* End Quill */}
          </div>
          {/* Body */}
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="card mb-3 mb-lg-5">
          {/* Header */}
          <div className="card-header">
            <h4 className="card-header-title">Phương tiện</h4>
            {/* Unfold */}
            <div className="hs-unfold">
              <a className="js-hs-unfold-invoker btn btn-sm btn-ghost-secondary" href="javascript:;" data-hs-unfold-options="{
                 &quot;target&quot;: &quot;#mediaDropdown&quot;,
                 &quot;type&quot;: &quot;css-animation&quot;
               }">
                Thêm phương tiện từ URL <i className="tio-chevron-down" />
              </a>
              <div id="mediaDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                <a className="dropdown-item" href="javascript:;" data-toggle="modal" data-target="#addImageFromURLModal">
                  <i className="tio-link dropdown-item-icon" /> Thêm ảnh từ URL
                </a>
                <a className="dropdown-item" href="javascript:;" data-toggle="modal" data-target="#embedVideoModal">
                  <i className="tio-youtube-outlined dropdown-item-icon" /> Nhúng video
                </a>
              </div>
            </div>
            {/* End Unfold */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            {/* Dropzone */}
            <div id="attachFilesNewProjectLabel" className="js-dropzone dropzone-custom custom-file-boxed">
              <div className="dz-message custom-file-boxed-label">
                <img className="avatar avatar-xl avatar-4by3 mb-3" src="assets\svg\illustrations\browse.svg" alt="Image Description" />
                <h5 className="mb-1">Chọn tệp để tải lên</h5>
                <p className="mb-2">or</p>
                <span className="btn btn-sm btn-primary">Duyệt qua các tệp</span>
              </div>
            </div>
            {/* End Dropzone */}
          </div>
          {/* Body */}
        </div>
        {/* End Card */}
        {/* Card */}
        {/* End Card */}
      </div>
      <div className="col-lg-4">
        {/* Card */}
        <div className="card mb-3 mb-lg-5">
          {/* Header */}
          <div className="card-header">
            <h4 className="card-header-title">Giá</h4>
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            {/* Form Group */}
            <div className="form-group">
              {/* Price  */}
              <label htmlFor="priceNameLabel" className="input-label">Giá bán (VND)</label>
              <div className="input-group">
                <input type="number" className="form-control" name="priceName" id="priceNameLabel" placeholder={0.00} aria-label={0.00} />
              </div>
              {/* End Price */}
              {/* Price Sale*/}
              <label htmlFor="priceNameLabel" className="input-label">Giảm giá (VND)</label>
              <div className="input-group">
                <input type="number" className="form-control" name="priceName" id="priceNameLabel" placeholder={0.00} aria-label={0.00} />
              </div>
              {/* End Price Sale*/}
            </div>
            {/* End Form Group */}
            {/* <div class="mb-2">
            <a class="d-inline-block" href="javascript:;" data-toggle="modal" data-target="#productsAdvancedFeaturesModal">
              <i class="tio-star tio-lg text-warning mr-1"></i> Set "Compare to" price
            </a>
          </div>

          <a class="d-inline-block" href="javascript:;" data-toggle="modal" data-target="#productsAdvancedFeaturesModal">
            <i class="tio-star tio-lg text-warning mr-1"></i> Bulk discount pricing
          </a> */}
            <hr className="my-4" />
            {/* Toggle Switch */}
            {/* <label class="row toggle-switch" for="availabilitySwitch1">
            <span class="col-8 col-sm-9 toggle-switch-content">
              <span class="text-dark">Availability</span>
            </span>
            <span class="col-4 col-sm-3">
              <input type="checkbox" class="toggle-switch-input" id="availabilitySwitch1">
              <span class="toggle-switch-label ml-auto">
                <span class="toggle-switch-indicator"></span>
              </span>
            </span>
          </label> */}
            {/* End Toggle Switch */}
          </div>
          {/* Body */}
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="card">
          {/* Header */}
          <div className="card-header">
            <h4 className="card-header-title">Tổ chức</h4>
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="brandLabel" className="input-label">Thương hiệu</label>
              <input type="text" className="form-control" name="brand" id="brandLabel" placeholder="eg. Nike" aria-label="eg. Nike" />
            </div>
            {/* End Form Group */}
            {/* Form Group */}
            <div className="form-group">
              <label htmlFor="categoryLabel" className="input-label">Loại sản phẩm</label>
              {/* Select */}
              <select className="js-select2-custom custom-select" size={1} style={{opacity: 0}} id="categoryLabel" data-hs-select2-options="{
                      &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                      &quot;placeholder&quot;: &quot;Select category&quot;
                    }">
                <option label="empty" />
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
                <option value="Electronics">Electronics</option>
                <option value="Others">Others</option>
              </select>
              {/* End Select */}
            </div>
            {/* Form Group */}
            {/* Form Group */}
            {/* Xóa collection */}
            {/* Form Group */}
            {/* <label for="tagsLabel" class="input-label">Thẻ</label>

        <input type="text" class="js-tagify tagify-form-control form-control" name="tagsName" id="tagsLabel"
          placeholder="Enter tags here" aria-label="Enter tags here"> */}
          </div>
          {/* End Body */}
        </div>
        {/* End Card */}
      </div>
    </div>
    {/* End Row */}
    <div className="position-fixed bottom-0 content-centered-x w-100 z-index-99 mb-3" style={{maxWidth: '40rem'}}>
      {/* Card */}
      <div className="card card-sm bg-dark border-dark mx-2">
        <div className="card-body">
          <div className="row justify-content-center justify-content-sm-between">
            <div className="col">
              <button type="button" className="btn btn-ghost-danger">Xóa</button>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-ghost-light mr-2">Bỏ</button>
              <button type="button" className="btn btn-primary">Lưu</button>
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Card */}
    </div>
  </div>
  {/* End Content */}
</main>

  
  
  
        );
      }

export default AddProduct;