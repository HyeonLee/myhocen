import './Layout.css';
import './reset.css';

const Headers=()=> {
  return (
    <div className="header">
      <header class="header-top">
        <div class="menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="logo">
            <a href="/index.html">
                <p class="logo-img"></p>
                <p class="now">마이호센</p>
            </a>
            <div class="select">
                <article>i</article>
                <section class="select-area">
                    <div>NMS</div>
                    <div>Cloud Console</div>
                    <div>Hosting Console</div>
                </section>
            </div>
        </div>
        <section class="hd-top-mem">
            <div>
                <p><i class="far fa-user-circle"></i>로그인</p>
                <section class="hd-top-mem-open-1">
                    <div class="login-area">
                        <h3>
                            호스트센터 NMS 페이지입니다.
                            로그인하시면 서비스 이용이 가능합니다.
                        </h3>
                        <ul>
                            <li class="btn"><a href="/">로그인</a></li>
                            <li class="btn"><a href="/">회원가입</a></li>
                            <li class="btn"><a href="/">아이디/비밀번호 찾기</a></li>
                        </ul>
                    </div>
                </section>
            </div>
            <div>
                <p><i class="fas fa-user-circle"></i>호스트센터님</p>
                <section class="hd-top-mem-open-2">
                    <div class="logon-area">
                        <section>
                            <h3>
                                안녕하세요
                                <span class="member">호스트센터</span>
                            </h3>
                            <p class="related-logon">최근 접속일 2020-05-22</p>
                        </section>
                        <div class="service">
                            <h3 class="service-tit">서비스 알림</h3>
                            <ul>
                                <li>21년 1월 서버 청구서가 발행되었습니다.</li>
                                <li>21년 1월 서버 청구서가 발행되었습니다.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="logon-area-r">
                        <ul>
                            <li class="btn"><a href="/">로그아웃</a></li>
                            <li class="btn"><a href="/">회원정보 수정</a></li>
                            <li class="btn"><a href="/">마이페이지</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
        <div class="top-btn"><i class="fas fa-wrench"></i>지원센터</div>
        <div id="support"></div>
    </header> 
    </div>
  );
}

export default Headers;
