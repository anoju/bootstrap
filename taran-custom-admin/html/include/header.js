// <script class="__include" src="../include/header.js"></script>

(function () {
  let str = `<header class="navbar navbar-expand kb-navbar">
  <div class="navbar-top">
    <div class="navbar-brand-wrap">
      <a class="navbar-brand" href="../template/login.html" aria-label="마이데이타 관리자"><span class="sr-only">마이데이타 관리자</span></a>
    </div>
    <a href="#" class="kb-navbar-btn" aria-label="메뉴열기"><i></i><span class="sr-only">메뉴열기</span></a>

    <ul class="navbar-nav kb-navbar-util">
      <li class="nav-item">
        <div class="btn-group" role="group">
          <button id="btnDrop" type="button" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="bi bi-person-circle"></i> <strong>홍길동</strong> 님
          </button>
          <div class="dropdown-menu" aria-labelledby="btnDrop">
            <a class="dropdown-item" href="pwChange.html">비밀번호 변경</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <button type="button" class="nav-link"><i class="bi bi-box-arrow-in-left"></i> 로그아웃</button>
      </li>
    </ul>
  </div>

  <div class="navbar-nav-scroll">
    <ul class="navbar-nav flex-row kb-navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="../template/list.html">리스트(템플릿)</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../guide/guide1.html">가이드(부트스트랩)</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">메뉴명3</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">메뉴명4</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">메뉴명5</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">메뉴명6</a>
      </li>
    </ul>
  </div>
</header>`;
  document.write(str);
  const $include = document.querySelector('.__include');
  if ($include) $include.remove();
})();
