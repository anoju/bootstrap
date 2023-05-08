// <script class="__include" src="../include/meta.js"></script>

(function () {
  let str = `<meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />`;
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
