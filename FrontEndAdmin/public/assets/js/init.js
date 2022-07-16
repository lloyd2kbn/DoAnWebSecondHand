
$(document).on('ready', function () {
  // INITIALIZATION OF CHARTJS
  // =======================================================
  // var updatingDoughnutChart = $.HSCore.components.HSChartJS.init($('#updatingDoughnutChart'));

  // Datasets for chart, can be loaded from AJAX request
  var updatingDoughnutChartDatasets = [
    [
      [45, 25, 30]
    ],
    [
      [35, 50, 15]
    ]
  ]

  // Set datasets for chart when page is loaded
  updatingDoughnutChart.data.datasets.forEach(function (dataset, key) {
    dataset.data = updatingDoughnutChartDatasets[0][key];
  });
  updatingDoughnutChart.update();

  // Call when tab is clicked
  $('[data-toggle="chart-doughnut"]').click(function (e) {
    let keyDataset = $(e.currentTarget).attr('data-datasets')

    // Update datasets for chart
    updatingDoughnutChart.data.datasets.forEach(function (dataset, key) {
      dataset.data = updatingDoughnutChartDatasets[keyDataset][key];
    });
    updatingDoughnutChart.update();
  })
  // ONLY DEV
  // =======================================================

  if (window.localStorage.getItem('hs-builder-popover') === null) {
    $('#builderPopover').popover('show')
      .on('shown.bs.popover', function () {
        $('.popover').last().addClass('popover-dark')
      });

    $(document).on('click', '#closeBuilderPopover', function () {
      window.localStorage.setItem('hs-builder-popover', true);
      $('#builderPopover').popover('dispose');
    });
  } else {
    $('#builderPopover').on('show.bs.popover', function () {
      return false
    });
  }

  // END ONLY DEV
  // =======================================================


  // BUILDER TOGGLE INVOKER
  // =======================================================
  $('.js-navbar-vertical-aside-toggle-invoker').click(function () {
    $('.js-navbar-vertical-aside-toggle-invoker i').tooltip('hide');
  });


  // INITIALIZATION OF MEGA MENU
  // =======================================================
  var megaMenu = new HSMegaMenu($('.js-mega-menu'), {
    desktop: {
      position: 'left'
    }
  }).init();



  // INITIALIZATION OF NAVBAR VERTICAL NAVIGATION
  // =======================================================
  var sidebar = $('.js-navbar-vertical-aside').hsSideNav();


  // INITIALIZATION OF TOOLTIP IN NAVBAR VERTICAL MENU
  // =======================================================
  $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

  $(".js-nav-tooltip-link").on("show.bs.tooltip", function (e) {
    if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
      return false;
    }
  });


  // INITIALIZATION OF UNFOLD
  // =======================================================
  $('.js-hs-unfold-invoker').each(function () {
    var unfold = new HSUnfold($(this)).init();
  });


  // INITIALIZATION OF FORM SEARCH
  // =======================================================
  $('.js-form-search').each(function () {
    new HSFormSearch($(this)).init()
  });


  // INITIALIZATION OF SELECT2
  // =======================================================
  $('.js-select2-custom').each(function () {
    var select2 = $.HSCore.components.HSSelect2.init($(this));
  });


  // INITIALIZATION OF DATERANGEPICKER
  // =======================================================
  $('.js-daterangepicker').daterangepicker();

  $('.js-daterangepicker-times').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(32, 'hour'),
    locale: {
      format: 'M/DD hh:mm A'
    }
  });

  var start = moment();
  var end = moment();

  function cb(start, end) {
    $('#js-daterangepicker-predefined .js-daterangepicker-predefined-preview').html(start.format('MMM D') + ' - ' + end.format('MMM D, YYYY'));
  }

  $('#js-daterangepicker-predefined').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  }, cb);

  cb(start, end);


  // INITIALIZATION OF CHARTJS
  // =======================================================
  $('.js-chart').each(function () {
    $.HSCore.components.HSChartJS.init($(this));
  });


  // INITIALIZATION OF JVECTORMAP
  // =======================================================
  $('.js-jvectormap').each(function () {
    var jVectorMap = $.HSCore.components.HSJVectorMap.init($(this));
  });
});