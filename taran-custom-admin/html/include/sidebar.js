// <script class="__include" src="../include/sidebar.js"></script>

(function () {
  const isMain = document.querySelector('.kb-container.main');
  const hideClass  = isMain ? 'hide' : '';
  let str = `<div class="kb-sidebar ${hideClass}">
  <div class="kb-sidebar-head">
    <button type="button" class="kb-sidebar-pc-btn"><i class="bi bi-chevron-left"></i><span class="sr-only">메뉴</span></button>
    <button type="button" class="kb-sidebar-close" aria-label="메뉴"></button>
  </div>
  <div class="kb-sidebar-inner" id="kb-lnb-nav">
    <nav class="kb-lnb" aria-label="Main navigation">
      <ul class="kb-lnb-dep1">
        <li>
          <a href="#" class="kb-lnb-link"><span>템플릿</span></a>
          <ul class="kb-lnb-dep2">
            <li><a href="../template/login.html" class="kb-lnb-link">로그인</a></li>
            <li><a href="../template/pwChange.html" class="kb-lnb-link">비밀번호변경</a></li>
            <li><a href="../template/main.html" class="kb-lnb-link">메인</a></li>
            <li><a href="../template/list.html" class="kb-lnb-link">리스트</a></li>
            <li><a href="../template/listDetail.html" class="kb-lnb-link">리스트상세</a></li>
            <li>
              <a href="#" class="kb-lnb-link">메뉴명1-1</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="#">메뉴명1-1-1</a></li>
                <li><a class="kb-lnb-link" href="#">메뉴명1-1-2</a></li>
                <li><a class="kb-lnb-link" href="#">메뉴명1-1-3</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="kb-lnb-link">메뉴명1-2</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="#">메뉴명1-2-1</a></li>
                <li><a class="kb-lnb-link" href="#">메뉴명1-2-2</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="kb-lnb-link"><span>메뉴명2</span></a>
          <ul class="kb-lnb-dep2">
            <li><a href="#" class="kb-lnb-link">메뉴명2-1</a></li>
            <li><a href="#" class="kb-lnb-link">메뉴명2-2</a></li>
            <li><a href="#" class="kb-lnb-link">메뉴명2-3</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="kb-lnb-link"><span>메뉴명3</span></a>
          <ul class="kb-lnb-dep2">
            <li><a href="#" class="kb-lnb-link">메뉴명2-1</a></li>
            <li><a href="#" class="kb-lnb-link">메뉴명2-2</a></li>
            <li>
              <a href="#" class="kb-lnb-link">메뉴명2-3</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="#">메뉴명2-3-1</a></li>
                <li><a class="kb-lnb-link" href="#">메뉴명123-2</a></li>
              </ul>
            </li>
            <li><a href="#" class="kb-lnb-link">메뉴명2-4</a></li>
          </ul>
        </li>

        <li>
          <a href="#" class="kb-lnb-link"><span>부트스트랩 가이드</span></a>
          <ul class="kb-lnb-dep2">
            <li>
              <a href="#" class="kb-lnb-link">Layout</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="../guide/guide41.html">Overview</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide42.html">Grid</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="kb-lnb-link">Content</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="../guide/guide51.html">Typography</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide52.html">Images & Figures</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide53.html">Tables</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="kb-lnb-link">Components</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="../guide/guide1.html">Alerts</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide2.html">Badges</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide3.html">Buttons</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide4.html">Button group</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide5.html">Cards</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide6.html">Carousel</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide7.html">Collapse</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide8.html">Dropdowns</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide9.html">Forms</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide10.html">Input group</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide11.html">Jumbotron</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide12.html">List group</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide13.html">Media object</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide14.html">Modal</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide15.html">Navs</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide16.html">Pagination</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide17.html">Popovers</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide18.html">Progress</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide19.html">Scrollspy</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide20.html">Spinners</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide21.html">Toasts</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide22.html">Tooltips</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="kb-lnb-link">Utilities</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="../guide/guide31.html">Borders & Clearfix & Close icon</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide32.html">Color & Display & Embeds</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide33.html">Flex & Float & Text selection</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide34.html">Overflow & Float & Screen readers</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide35.html">Shadows & Sizing & Spacing</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide36.html">Stretched link & Text & Vertical alignment & Visibility</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="kb-lnb-link">plugins</a>
              <ul class="kb-lnb-dep3">
                <li><a class="kb-lnb-link" href="../guide/guide64.html">datepicker(gijgo)</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide61.html">DataTable</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide62.html">Chart.js</a></li>
                <li><a class="kb-lnb-link" href="../guide/guide63.html">editor</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</div>`;
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
