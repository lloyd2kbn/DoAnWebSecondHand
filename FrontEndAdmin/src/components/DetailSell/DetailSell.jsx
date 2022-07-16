import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./DetailSell.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";

export const defaultValue = {

}

function DetailSell() {

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
                <li className="breadcrumb-item"><a className="breadcrumb-link" href="sale-request-management.html">Yêu cầu bán
                    hàng</a></li>
                <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
              </ol>
            </nav>
            <h1 className="page-header-title">Tiro track jacket</h1>
            <div className="mt-2">
              {/* <a class="text-body mr-3" href="javascript:;">
              <i class="tio-copy mr-1"></i> Duplicate
            </a> */}
              <a className="text-body" href="javascript:;">
                <i className="tio-visible-outlined mr-1" /> Xem trước
              </a>
            </div>
          </div>
          <div className="col-sm-auto">
            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle mr-1" href="#" data-toggle="tooltip" data-placement="top" title="Previous product">
              <i className="tio-arrow-backward" />
            </a>
            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Next product">
              <i className="tio-arrow-forward" />
            </a>
          </div>
        </div>
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
          <ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" href="./checked-sales-request-details.html">Chi tiết yêu cầu đã duyệt</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./unchecked-sale-request-details.html" tabIndex={-1} aria-disabled="true">Chi tiết yêu cầu chưa duyệt</a>
            </li>
          </ul>
          {/* End Nav */}
        </div>
        {/* End Nav Scroller */}
      </div>
      {/* End Page Header */}
      <div className="row">
        <div className="col-lg-8">
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Header */}
            <div className="card-header">
              <h4 className="card-header-title">Chi tiết yêu cầu bán hàng</h4>
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body">
              {/* Form Group */}
              <div className="form-group">
                <label htmlFor="productNameLabel" className="input-label">Tên <i className="tio-help-outlined text-body ml-1" data-toggle="tooltip" data-placement="top" title="Tên yêu cầu bán hàng do người bán đặt." /></label>
                <input type="text" className="form-control" name="productName" id="productNameLabel" placeholder="Shirt, t-shirts, etc." aria-label="Shirt, t-shirts, etc." defaultValue="Tiro track jacket" readOnly />
              </div>
              {/* End Form Group */}
              <div className="row">
                <div className="col-sm-6">
                  {/* Form Group */}
                  <div className="form-group">
                    <label htmlFor="SKULabel" className="input-label">Mã yêu cầu</label>
                    <input type="text" className="form-control" name="SKU" id="SKULabel" placeholder="eg. 348121032" aria-label="eg. 348121032" defaultValue={124617209} readOnly />
                  </div>
                  {/* End Form Group */}
                </div>
                <div className="col-sm-6">
                  {/* Form Group */}
                  <div className="form-group">
                    <label htmlFor="vendorName" className="input-label">Tên người bán</label>
                    <div className="input-group input-group-merge">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="vendorNameAddOn">
                          <i className="tio-user-outlined" />
                        </span>
                      </div>
                      <input type="text" className="form-control" id="vendorName" placeholder="Mark Williams" aria-label="Mark Williams" aria-describedby="vendorNameAddOn" readOnly />
                    </div>
                  </div>
                  {/* End Form Group */}
                </div>
              </div>
              {/* End Row */}
              {/* Description */}
              <div className="form-group">
                <label className="input-label" htmlFor="desciptionRequest" />Mô tả 
                <textarea id="desciptionRequest" className="form-control" placeholder="Textarea field" rows={4} readOnly defaultValue={"                    Train hard. Stay dry. This soccer jacket is made of soft, sweat-wicking fabric that keeps you moving on the practice field. Stretch panels at the elbows and sides give you a full range of motion as you work.\n                    "} />
              </div>
              {/* End Description */}
              {/* Note */}
              <div className="form-group">
                <label className="input-label" htmlFor="noteRequest" />Ghi chú 
                <textarea id="noteRequest" className="form-control" placeholder="Textarea field" rows={5} readOnly defaultValue={"                    Regular fit is wider at the body, with a straight silhouette.\n                    Ribbed stand-up collar.\n                    Long sleeves with ribbed cuffs.\n                    100% polyester doubleknit.\n                    Front zip pockets; Full zip; Ribbing details; Ribbed hem.\n                  "} />
              </div>
              {/* End Note */}
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
              {/* <div class="hs-unfold">
              <a class="js-hs-unfold-invoker btn btn-sm btn-ghost-secondary" href="javascript:;" data-hs-unfold-options='{
                   "target": "#mediaDropdown",
                   "type": "css-animation"
                 }'>
                Add media from URL <i class="tio-chevron-down"></i>
              </a>
  
              <div id="mediaDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                <a class="dropdown-item" href="javascript:;" data-toggle="modal" data-target="#addImageFromURLModal">
                  <i class="tio-link dropdown-item-icon"></i> Add image from URL
                </a>
                <a class="dropdown-item" href="javascript:;" data-toggle="modal" data-target="#embedVideoModal">
                  <i class="tio-youtube-outlined dropdown-item-icon"></i> Embed video
                </a>
              </div>
            </div> */}
              {/* End Unfold */}
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body">
              {/* Gallery */}
              <div id="fancyboxGallery" className="js-fancybox row justify-content-sm-center gx-2" data-hs-fancybox-options="{
                   &quot;selector&quot;: &quot;#fancyboxGallery .js-fancybox-item&quot;
                 }">
                <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                  {/* Card */}
                  <div className="card card-sm">
                    <img className="card-img-top" src="assets\img\400x400\img7.jpg" alt="Image Description" />
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col">
                          <a className="js-fancybox-item text-body" href="javascript:;" data-toggle="tooltip" data-placement="top" title="View" data-src="./assets/img/725x1080/img1.jpg" data-caption="Image #01">
                            <i className="tio-visible-outlined" />
                          </a>
                        </div>
                        <div className="col column-divider">
                          <a className="text-danger" href="javascript:;" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i className="tio-delete-outlined" />
                          </a>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                  {/* Card */}
                  <div className="card card-sm">
                    <img className="card-img-top" src="assets\img\400x400\img8.jpg" alt="Image Description" />
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col">
                          <a className="js-fancybox-item text-body" href="javascript:;" data-toggle="tooltip" data-placement="top" title="View" data-src="./assets/img/1920x1080/img1.jpg" data-caption="Image #02">
                            <i className="tio-visible-outlined" />
                          </a>
                        </div>
                        <div className="col column-divider">
                          <a className="text-danger" href="javascript:;" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i className="tio-delete-outlined" />
                          </a>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                  {/* Card */}
                  <div className="card card-sm">
                    <img className="card-img-top" src="assets\img\400x400\img9.jpg" alt="Image Description" />
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col">
                          <a className="js-fancybox-item text-body" href="javascript:;" data-toggle="tooltip" data-placement="top" title="View" data-src="./assets/img/1920x1080/img2.jpg" data-caption="Image #03">
                            <i className="tio-visible-outlined" />
                          </a>
                        </div>
                        <div className="col column-divider">
                          <a className="text-danger" href="javascript:;" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i className="tio-delete-outlined" />
                          </a>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
                  {/* Card */}
                  <div className="card card-sm">
                    <img className="card-img-top" src="assets\img\400x400\img10.jpg" alt="Image Description" />
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col">
                          <a className="js-fancybox-item text-body" href="javascript:;" data-toggle="tooltip" data-placement="top" title="View" data-src="./assets/img/1920x1080/img3.jpg" data-caption="Image #04">
                            <i className="tio-visible-outlined" />
                          </a>
                        </div>
                        <div className="col column-divider">
                          <a className="text-danger" href="javascript:;" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i className="tio-delete-outlined" />
                          </a>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Card */}
                </div>
              </div>
              {/* End Gallery */}
              {/* Dropzone */}
              {/* <div id="attachFilesNewProjectLabel" class="js-dropzone dropzone-custom custom-file-boxed">
              <div class="dz-message custom-file-boxed-label">
                <img class="avatar avatar-xl avatar-4by3 mb-3" src="assets\svg\illustrations\browse.svg" alt="Image Description">
                <h5 class="mb-1">Choose files to upload</h5>
                <p class="mb-2">or</p>
                <span class="btn btn-sm btn-primary">Browse files</span>
              </div>
            </div> */}
              {/* End Dropzone */}
            </div>
            {/* Body */}
          </div>
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
                {/* Price */}
                <label htmlFor="priceNameLabel" className="input-label">Giá bán</label>
                <div className="input-group">
                  <input type="text" className="form-control" name="priceName" id="priceNameLabel" placeholder={0.00} aria-label={0.00} defaultValue={45.00} readOnly />
                  <div className="input-group-append">
                    {/* Select */}
                    <div id="priceCurrencySelect" className="select2-custom select2-custom-right">
                      <select className="js-select2-custom custom-select" size={1} style={{opacity: 0}} data-hs-select2-options="{
                              &quot;dropdownParent&quot;: &quot;#priceCurrencySelect&quot;,
                              &quot;dropdownAutoWidth&quot;: true,
                              &quot;width&quot;: true
                            }" disabled>
                        <option value="USD" selected>USD</option>
                        <option value="VND">VND</option>
                      </select>
                    </div>
                    {/* End Select */}
                  </div>
                </div>
                {/* End Price */}
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
                <span class="text-dark">Availability <i class="tio-help-outlined text-body ml-1" data-toggle="tooltip" data-placement="top" title="Product availability switch toggler."></i></span>
              </span>
              <span class="col-4 col-sm-3">
                <input type="checkbox" class="toggle-switch-input" id="availabilitySwitch1" checked="">
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
                <input type="text" className="form-control" name="brand" id="brandLabel" placeholder="eg. Nike" aria-label="eg. Nike" defaultValue="Adidas" readOnly />
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div className="form-group">
                <label htmlFor="categoryLabel" className="input-label">Loại sản phẩm</label>
                {/* Select */}
                <select className="js-select2-custom custom-select" size={1} style={{opacity: 0}} id="categoryLabel" data-hs-select2-options="{
                        &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                        &quot;placeholder&quot;: &quot;Select category&quot;
                      }" disabled>
                  <option label="empty" />
                  <option value="Clothing" selected>Clothing</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Others">Others</option>
                </select>
                {/* End Select */}
              </div>
              {/* Form Group */}
              {/* Form Group */}
              <div className="form-group">
                <label htmlFor="collectionsLabel" className="input-label">Kích thước</label>
                {/* Select */}
                <select className="js-select2-custom custom-select" size={1} style={{opacity: 0}} id="collectionsLabel" data-hs-select2-options="{
                        &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                        &quot;placeholder&quot;: &quot;Select collections&quot;
                      }" disabled>
                  <option label="empty" />
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L" selected>L</option>
                  <option value="XL">XL</option>
                </select>
                {/* End Select */}
              </div>
              {/* Form Group */}
              <label htmlFor="tagsLabel" className="input-label">Nhãn</label>
              <input type="text" className="js-tagify tagify-form-control form-control" name="tagsName" id="tagsLabel" placeholder="Enter tags here" aria-label="Enter tags here" defaultValue="white, black" readOnly />
            </div>
            {/* Body */}
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
                <button type="button" className="btn btn-ghost-light mr-2">Từ chối</button>
                <button type="button" className="btn btn-primary">Duyệt yêu cầu</button>
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

export default DetailSell;