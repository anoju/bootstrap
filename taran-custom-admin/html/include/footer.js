// <script class="__include" src="../include/footer.js"></script>

(function () {
  let str = `<footer class="kb-footer">
  <div>
    <div>
      부트스크랩 기반 관리자 입니다.
    </div>
    <div>
      <span>&copy; TARAN UX co.,Ltd. All Rights Reserved</span>
    </div>
  </div>
</footer>`;
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
