// <script class="__include" src="../include/head.js"></script>

(function () {
  let str = `<link rel="shortcut icon" type="image/x-icon" href="../../favicon.png" />

  <!-- css -->
  <link href="../../lib/fontawesome/css/all.min.css" rel="stylesheet" />
  <link href="../../lib/bootstrap-table/bootstrap-table.min.css" rel="stylesheet" />
  <link href="../../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link href="../../lib/bootstrap/css/bootstrap-icons.css" rel="stylesheet" />
  <link href="../../css/custom.min.css" rel="stylesheet" />

  <!-- js -->
  <script src="../../lib/jquery-3.6.0.min.js"></script>
  <script src="../../lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../../lib/bootstrap-table/bootstrap-table.min.js"></script>
  <script src="../../lib/bootstrap-table/bootstrap-table-ko-KR.js"></script>
  <script src="../../lib/ckeditor/ckeditor.js"></script>
  <script src="../../js/custom.lib.min.js"></script>
  <script src="../../js/custom.js"></script>`;
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
