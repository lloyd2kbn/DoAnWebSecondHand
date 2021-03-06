import React, { useState, useEffect } from "react";
import { doGet } from "../../utils/api/api";
import "./Homepage.scss";
import { Column, Pie } from "@ant-design/plots";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Button } from "antd";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function Homepage() {
  const [month, setMonth] = useState(1);
  const [newChartData, setNewChartData] = useState({
    labels: ["accessories", "outerwear", "footwear", "tops", "bottoms"],
    datasets: [
      {
        label: "doanh thu ",
        data: [300, 50, 100, 30, 40],
        backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
      },
    ],
  });
  // const data1 = [
  //   {
  //     type: "1",
  //     sales: 0,
  //   },
  //   {
  //     type: "2",
  //     sales: 0,
  //   },
  //   {
  //     type: "3",
  //     sales: 0,
  //   },
  //   {
  //     type: "4",
  //     sales: 0,
  //   },
  //   {
  //     type: "5",
  //     sales: 0,
  //   },
  //   {
  //     type: "6",
  //     sales: 0,
  //   },
  //   {
  //     type: "7",
  //     sales: 0,
  //   },
  //   {
  //     type: "8",
  //     sales: 0,
  //   },
  //   {
  //     type: "9",
  //     sales: 0,
  //   },
  //   {
  //     type: "10",
  //     sales: 0,
  //   },
  //   {
  //     type: "11",
  //     sales: 0,
  //   },
  //   {
  //     type: "12",
  //     sales: 0,
  //   },
  //   {
  //     type: "13",
  //     sales: 0,
  //   },
  //   {
  //     type: "14",
  //     sales: 0,
  //   },
  //   {
  //     type: "15",
  //     sales: 0,
  //   },
  //   {
  //     type: "16",
  //     sales: 0,
  //   },
  //   {
  //     type: "17",
  //     sales: 0,
  //   },
  //   {
  //     type: "18",
  //     sales: 0,
  //   },
  //   {
  //     type: "19",
  //     sales: 0,
  //   },
  //   {
  //     type: "20",
  //     sales: 0,
  //   },
  //   {
  //     type: "21",
  //     sales: 0,
  //   },
  //   {
  //     type: "22",
  //     sales: 0,
  //   },
  //   {
  //     type: "23",
  //     sales: 0,
  //   },
  //   {
  //     type: "24",
  //     sales: 0,
  //   },
  //   {
  //     type: "25",
  //     sales: 0,
  //   },
  //   {
  //     type: "26",
  //     sales: 0,
  //   },
  //   {
  //     type: "27",
  //     sales: 0,
  //   },
  //   {
  //     type: "28",
  //     sales: 0,
  //   },
  //   {
  //     type: "29",
  //     sales: 0,
  //   },
  //   {
  //     type: "30",
  //     sales: 0,
  //   },
  //   {
  //     type: "31",
  //     sales: 0,
  //   },
  // ];
  // const [data, setData] = useState(data1);
  const [totalPrice, setTotalPrice] = useState([]);

  // const convertData = (list) => {
  //   let newList = data.map((element) => {
  //     let result = {
  //       type: element.type,
  //       sales: element.sales,
  //     };
  //     list.forEach((ele) => {
  //       if (ele.dateCreated.slice(-2) === element.type) {
  //         result.type = element.type;
  //         result.sales = ele.totalPriceOrder;
  //       }
  //     });
  //     return result;
  //   });
  //   setData(newList);
  // };
  const [newChart, setNewChart] = useState({
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "Doanh thu",
        data: [
          200, 300, 290, 350, 150, 350, 300, 100, 125, 220, 200, 300, 290, 350,
          150, 200, 300, 290, 350, 150, 350, 300, 100, 125, 220, 200, 300, 290,
          350, 150,
        ],
        backgroundColor: "#377dff",
        hoverBackgroundColor: "#377dff",
        borderColor: "#377dff",
      },
    ],
  });
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await doGet(
  //         `chart/admin/getChartDayMonth?month=${month}&year=2022`
  //       );
  //       console.log(data.data);
  //       // convertData(data.data);
  //       setNewChart({
  //         ...newChart,
  //         labels: data.data.title,
  //         datasets: [
  //           {
  //             label: "Doanh thu",
  //             data: data.data.data,
  //             backgroundColor: "#377dff",
  //             hoverBackgroundColor: "#377dff",
  //             borderColor: "#377dff",
  //           },
  //         ],
  //       });
  //     } catch (e) {
  //       console.log("aaaaa", e);

  //       console.log("status", e.status);
  //       // navigate("/login");
  //     }
  //   })();
  // }, [month]);

  // const config = {
  //   data,
  //   xField: "type",
  //   yField: "sales",
  //   label: {
  //     // ??????????????? label ??????????????????
  //     position: "middle",
  //     // 'top', 'bottom', 'middle',
  //     // ????????????
  //     style: {
  //       fill: "#FFFFFF",
  //       opacity: 0.6,
  //     },
  //   },
  //   xAxis: {
  //     label: {
  //       autoHide: true,
  //       autoRotate: false,
  //     },
  //   },
  //   meta: {
  //     type: {
  //       alias: "Ng??y",
  //     },
  //     sales: {
  //       alias: "doanh thu",
  //     },
  //   },
  // };

  const [doughnutChartData, setDoughnutChartData] = useState({
    title: [],
    label: ["VN??", "VN??", "VN??", "VN??", "VN??"],
    backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
    data: [],
    cutoutPercentage: 80,
    postfix: "k",
  });
  console.log(month);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const rep = await doGet(
  //         `/chart/admin/getChartMonthCi?month=${month}&year=2022`
  //       );
  //       console.log(rep.data.data.title);
  //       setDoughnutChartData({
  //         ...doughnutChartData,
  //         title: rep.data.data.title,
  //         data: rep.data.data.data,
  //       });
  //       setNewChartData({
  //         ...newChartData,
  //         labels: rep.data.data.title,
  //         datasets: [
  //           {
  //             label: "Doanh thu",
  //             data: rep.data.data.data,
  //             backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
  //             // hoverBackgroundColor: "#377dff",
  //             borderColor: "#377dff",
  //           },
  //         ],
  //       });
  //       console.log(rep.data.data.data);
  //     } catch (e) {
  //       console.log("aaaaa", e);

  //       console.log("status", e.status);
  //       // navigate("/login");
  //     }
  //   })();
  // }, [month]);
  const onClick = async ({ key }) => {
    const { data } = await doGet(
      `chart/admin/getChartDayMonth?month=${key}&year=2022`
    );
    setNewChart({
      ...newChart,
      labels: data.data.title,
      datasets: [
        {
          label: "Doanh thu",
          data: data.data.data,
          backgroundColor: "#377dff",
          hoverBackgroundColor: "#377dff",
          borderColor: "#377dff",
        },
      ],
    });

    const rep = await doGet(
      `/chart/admin/getChartMonthCi?month=${key}&year=2022`
    );
    console.log(rep.data.data.title);
    setDoughnutChartData({
      ...doughnutChartData,
      title: rep.data.data.title,
      data: rep.data.data.data,
    });
    setNewChartData({
      ...newChartData,
      labels: rep.data.data.title,
      datasets: [
        {
          label: "Doanh thu",
          data: rep.data.data.data,
          backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
          // hoverBackgroundColor: "#377dff",
          borderColor: "#377dff",
        },
      ],
    });
    setMonth(parseInt(key));
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Th??ng 1",
          key: "01",
        },
        {
          label: "Th??ng 2",
          key: "02",
        },
        {
          label: "Th??ng 3",
          key: "03",
        },
        {
          label: "Th??ng 4",
          key: "04",
        },
        {
          label: "Th??ng 5",
          key: "05",
        },
        {
          label: "Th??ng 6",
          key: "06",
        },
        {
          label: "Th??ng 7",
          key: "07",
        },
        {
          label: "Th??ng 8",
          key: "08",
        },
        {
          label: "Th??ng 9",
          key: "09",
        },
        {
          label: "Th??ng 10",
          key: "10",
        },
        {
          label: "Th??ng 11",
          key: "11",
        },
        {
          label: "Th??ng 12",
          key: "12",
        },
      ]}
    />
  );

  console.log("doughnutChartData", doughnutChartData);
  return (
    <main id="content" role="main" className="main homepage-main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm mb-2 mb-sm-0">
              <h1 className="page-header-title">Ch??o b???n.</h1>
              <p className="page-header-text">
                ????y l?? nh???ng g?? ??ang x???y ra v???i trang th????ng m???i ??i???n t??? c???a
                b???n.
              </p>
            </div>
          </div>
        </div>
        {/* End Page Header */}
        {/* Card (Ch???a Th??ng tin t???ng s??? l?????ng: Web sale, Request sale, Order, User, Product )*/}
        <div className="card card-body mb-3 mb-lg-5">
          <div className="row gx-lg-4">
            {/* Website Sales */}
            <div className="col-sm-6 col-lg-3">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">Doanh thu</h6>
                  <span className="card-title h3">$7,820.75</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">$5k trong ng??y</span>
                    <span className="badge badge-soft-success ml-2">
                      <i className="tio-trending-up" /> 4.3%
                    </span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-shop" />
                </span>
              </div>
              <div className="d-lg-none">
                <hr />
              </div>
            </div>
            {/* End Website Sales */}
            {/* Request Sales */}
            <div className="col-sm-6 col-lg-3 column-divider-sm">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">Y??u c???u b??n h??ng</h6>
                  <span className="card-title h3">210,000</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">1k ch??a duy???t</span>
                    <span className="badge badge-soft-success ml-2">
                      <i className="tio-trending-up" /> 12.5%
                    </span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-website" />
                </span>
              </div>
              <div className="d-lg-none">
                <hr />
              </div>
            </div>
            {/* End Request Sales */}
            {/* Products */}
            <div className="col-sm-6 col-lg-3 column-divider-lg">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">S???n ph???m</h6>
                  <span className="card-title h3">450,503</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">6k trong kho</span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-label-off" />
                </span>
              </div>
              <div className="d-sm-none">
                <hr />
              </div>
            </div>
            {/* End Products */}
            {/* Order */}
            <div className="col-sm-6 col-lg-3 column-divider-sm">
              <div className="media">
                <div className="media-body">
                  <h6 className="card-subtitle">????n h??ng</h6>
                  <span className="card-title h3">3,982</span>
                  <div className="d-flex align-items-center">
                    <span className="d-block font-size-sm">150 trong ng??y</span>
                    <span className="badge badge-soft-danger ml-2">
                      <i className="tio-trending-down" /> 4.4%
                    </span>
                  </div>
                </div>
                <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                  <i className="tio-users-switch" />
                </span>
              </div>
            </div>
            {/* End Order */}
          </div>
        </div>
        {/* End Card */}
        {/* Card (Bi???u ????? c???t: B??n h??ng theo th???i gian)*/}
        <div className="card mb-3 mb-lg-5">
          {/* Header */}
          <div className="card-header">
            <div className="row align-items-center flex-grow-1">
              <div className="col-sm mb-2 mb-sm-0">
                <h4 className="card-header-title">
                  Doanh thu{" "}
                  <i
                    className="tio-help-outlined text-body ml-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Doanh thu thu???n theo th???i gian(t???ng doanh thu tr??? chi???t kh???u v?? l???i nhu???n) c???ng v???i thu??? v?? ph?? v???n chuy???n. ???????c bi???u di???n theo th???i gian."
                  />
                </h4>
              </div>
              <Dropdown overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Button>
                    Th??ng {month}
                    <DownOutlined />
                  </Button>
                </a>
              </Dropdown>
            </div>
            {/* End Row */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 mb-5 mb-md-0">
                {/* Bar Chart */}
                {/* <div className="chartjs-custom mb-4">
                  {prevData && (
                    <>
                      {console.log("first")}
                      <canvas
                        className="js-chart"
                        style={{ height: "18rem" }}
                        data-hs-chartjs-options={`{
                    "type": "bar",
                    "data": {
                      "labels": ${JSON.stringify(chartData.label)},
                      "datasets": [{
                        "data": ${JSON.stringify(prevData)},
                        "backgroundColor": "${chartData.colorInActive}",
                        "hoverBackgroundColor": "${chartData.colorInActive}",
                        "borderColor": "${chartData.colorInActive}"
                      }
                    ]
                    },
                    "options": {
                      "scales": {
                        "yAxes": [{
                          "gridLines": {
                            "color": "#e7eaf3",
                            "drawBorder": false,
                            "zeroLineColor": "#e7eaf3"
                          },
                          "ticks": {
                            "beginAtZero": true,
                            "stepSize": ${chartData.stepSize},
                            "fontSize": 12,
                            "fontColor": "#97a4af",
                            "fontFamily": "Open Sans, sans-serif",
                            "padding": 10
                          }
                        }],
                        "xAxes": [{
                          "gridLines": {
                            "display": false,
                            "drawBorder": false
                          },
                          "ticks": {
                            "fontSize": 12,
                            "fontColor": "#97a4af",
                            "fontFamily": "Open Sans, sans-serif",
                            "padding": 5
                          },
                          "categoryPercentage": 0.5,
                          "maxBarThickness": "10"
                        }]
                      },
                      "cornerRadius": 2,
                      "tooltips": {
                        "hasIndicator": true,
                        "mode": "index",
                        "intersect": false
                      },
                      "hover": {
                        "mode": "nearest",
                        "intersect": true
                      }
                    }
                  }`}
                      />
                    </>
                  )}
                </div> */}
                {/* <Column {...config} /> */}

                <div className="chartjs-custom mb-4">
                  <Bar data={newChart} />
                </div>
                {/* End Bar Chart */}
                {/* Legend Indicators */}
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <span
                      className="legend-indicator"
                      style={{ backgroundColor: "blue" }}
                    />{" "}
                    Doanh thu
                  </div>
                </div>
                {/* End Legend Indicators */}
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Body */}
        </div>
        {/* End Card */}
        {/* Row (G???m 2 card: 1.Ch???c n??ng T???o Product, T???o Discount, ... v?? 2.Top list product best sales) ) */}

        {/* End Row */}
        {/* Bi???u ????? tr??n, bi???u di???n t???ng doanh thu theo danh m???c s???n ph???m */}
        <div className="row gx-2 gx-lg-3">
          <div className="col-lg-6 mb-3 mb-lg-0">
            {/* Card */}
            <div className="card h-100">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">
                  T???ng doanh thu{" "}
                  <i
                    className="tio-help-outlined text-body ml-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Doanh thu thu???n theo danh m???c h??ng h??a(t???ng doanh thu tr??? chi???t kh???u v?? l???i nhu???n) c???ng v???i thu??? v?? ph?? v???n chuy???n. ???????c bi???u di???n theo lo???i danh m???ch h??ng h??a."
                  />
                </h4>
                {/* Daterangepicker */}
                <div className="d-flex justify-content-end mb-3">
                  {/* Nav */}
                  <ul
                    className="nav nav-segment"
                    id="expensesTab"
                    role="tablist"
                  >
                    <li
                      className="nav-item"
                      data-toggle="chart-doughnut"
                      data-trigger="click"
                      data-action="toggle"
                    >
                      {/* <a
                        className="nav-link active"
                        href="javascript:;"
                        data-toggle="tab"
                      >
                        T???t c???
                      </a> */}
                    </li>
                    <li
                      className="nav-item"
                      data-toggle="chart-doughnut"
                      data-datasets={1}
                      data-trigger="click"
                      data-action="toggle"
                    >
                      {/* <a
                        className="nav-link"
                        href="javascript:;"
                        data-toggle="tab"
                      >
                        Th??ng n??y
                      </a> */}

                      {/* <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Button>
                            Th??ng {month}
                            <DownOutlined />
                          </Button>
                        </a>
                      </Dropdown> */}
                    </li>
                  </ul>
                  {/* End Nav */}
                </div>
                {/* End Daterangepicker */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Pie Chart */}
                <div
                  className="chartjs-custom mb-3 mb-sm-5"
                  style={{ overflow: "unset" }}
                >
                  {/* <canvas
                    className="js-chart"
                    style={{ height: "18rem" }}
                    id="updatingDoughnutChart"
                    data-hs-chartjs-options={`{
                    "type": "doughnut",
                    "data": {
                      "labels": ${JSON.stringify(doughnutChartData.label)},
                      "datasets": [{
                        "backgroundColor": ${JSON.stringify(
                          doughnutChartData.backgroundColor
                        )},
                        "data": ${JSON.stringify(doughnutChartData.data)},
                        "borderWidth": 5,
                        "hoverBorderColor": "#fff"
                      }]
                    },
                    "options": {
                      "cutoutPercentage": ${doughnutChartData.cutoutPercentage},
                      "tooltips": {
                        "postfix": "${doughnutChartData.postfix}",
                        "hasIndicator": true,
                        "mode": "index",
                        "intersect": false
                      },
                      "hover": {
                        "mode": "nearest",
                        "intersect": true
                      }
                    }
                  }`}
                  /> */}
                  <Doughnut data={newChartData} />
                </div>
                {/* End Pie Chart */}
                {/* Legend Indicators */}
                <div className="row justify-content-center">
                  {doughnutChartData.data.map((item, index) => (
                    <div
                      className="col-auto mb-3 mb-sm-0"
                      key={`doughnutChartData-${index}`}
                    >
                      <span className="card-title h4">{item}</span>
                      <span
                        className="legend-indicator"
                        style={{
                          backgroundColor:
                            doughnutChartData.backgroundColor[index],
                        }}
                      />
                      {doughnutChartData.title[index]}
                    </div>
                  ))}
                  {/* <div className="col-auto mb-3 mb-sm-0">
                    <span className="card-title h4">$2,332.00</span>
                    <span className="legend-indicator bg-primary" />Gi??y
                  </div>
                  <div className="col-auto mb-3 mb-sm-0">
                    <span className="card-title h4">$10,452.00</span>
                    <span className="legend-indicator bg-info" /> ??o
                  </div>
                  <div className="col-auto">
                    <span className="card-title h4">$56,856.00</span>
                    <span className="legend-indicator" /> S???n ph???m kh??c
                  </div> */}
                </div>
                {/* End Legend Indicators */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
          <div className="col-lg-6">
            {/* Card */}
            <div className="card h-100">
              {/* Header */}
              <div className="card-header">
                <h5 className="card-header-title">B??o c??o t???ng quan</h5>
                {/* Unfold */}
                <div className="hs-unfold">
                  <a
                    className="js-hs-unfold-invoker btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                    href="javascript:;"
                    data-hs-unfold-options='{
                       "target": "#reportsOverviewDropdown1",
                       "type": "css-animation"
                     }'
                  >
                    <i className="tio-more-vertical" />
                  </a>
                  <div
                    id="reportsOverviewDropdown1"
                    className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1"
                  >
                    <span className="dropdown-header">C??i ?????t</span>
                    <a className="dropdown-item" href="#">
                      <i className="tio-share dropdown-item-icon" /> Chia s???
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="tio-download-to dropdown-item-icon" /> T???i
                      v??? m??y
                    </a>
                  </div>
                </div>
                {/* End Unfold */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                <span className="h1 d-block mb-4">$7,431.14 USD</span>
                {/* Progress */}
                <div className="progress rounded-pill mb-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Gross value"
                  />
                  <div
                    className="progress-bar opacity"
                    role="progressbar"
                    style={{ width: "33%" }}
                    aria-valuenow={33}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Net volume from sales"
                  />
                  <div
                    className="progress-bar opacity-xs"
                    role="progressbar"
                    style={{ width: "9%" }}
                    aria-valuenow={9}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="New volume from sales"
                  />
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                {/* End Progress */}
                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-lg table-nowrap card-table mb-0">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator bg-primary" />
                          T???ng doanh thu
                        </th>
                        <td>
                          <span className="badge badge-soft-success">
                            $3,500.71
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator bg-primary opacity" />
                          Doanh thu t??? vi???c b??n gi??y
                        </th>
                        <td>
                          <span className="badge badge-soft-primary">
                            $2,980.45
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator bg-primary opacity-xs" />
                          Doanh thu t??? vi???c b??n ??o
                        </th>
                        <td>
                          <span className="badge badge-soft-info">$950.00</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="legend-indicator" />
                          Doanh thu t??? vi???c b??n m???t h??ng kh??c
                        </th>
                        <td>
                          <span className="badge badge-soft-success">
                            $1,950.00
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Bi???u ????? tr??n */}
      </div>
      {/* End Content */}
      {/* Footer */}
      <div className="footer">
        {/* <div class="row justify-content-between align-items-center">
        <div class="col">
          <p class="font-size-sm mb-0">&copy; Front. <span class="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
        </div>
        <div class="col-auto">
          <div class="d-flex justify-content-end"> */}
        {/* List Dot */}
        {/* <ul class="list-inline list-separator">
              <li class="list-inline-item">
                <a class="list-separator-link" href="#">FAQ</a>
              </li>

              <li class="list-inline-item">
                <a class="list-separator-link" href="#">License</a>
              </li>

              <li class="list-inline-item"> */}
        {/* Keyboard Shortcuts Toggle */}
        {/* <div class="hs-unfold">
                  <a class="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="javascript:;"
                    data-hs-unfold-options='{
                              "target": "#keyboardShortcutsSidebar",
                              "type": "css-animation",
                              "animationIn": "fadeInRight",
                              "animationOut": "fadeOutRight",
                              "hasOverlay": true,
                              "smartPositionOff": true
                             }'>
                    <i class="tio-command-key"></i>
                  </a>
                </div> */}
        {/* End Keyboard Shortcuts Toggle */}
        {/* </li>
            </ul> */}
        {/* End List Dot */}
        {/* </div>
        </div>
      </div> */}
      </div>
      {/* End Footer */}
    </main>
  );
}

export default Homepage;
