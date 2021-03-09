import './css/aside.css';

function Asides() {
  return (
    <div className="aside">
      <aside>
        <nav className="aside-nav">
          <div className="fee aside-drop1">
              <a>
                  <i className="fas fa-tachometer-alt"></i>
                  <span>요금조회 및 납부관리</span>
              </a>
              <ul className="aside-depth1">
                  <li className="url1"><a href="/">실시간 모니터링</a></li>
                  <li className="url2"><a href="/">모니터링 설정변경</a></li>
              </ul>
          </div>
          <div className="service aside-drop2">
              <a>
                  <i className="fas fa-desktop"></i>
                  <span>가입서비스 조회</span>
              </a>
              <ul className="aside-depth2">
                  <li className="url1"><a href="/">실시간 모니터링</a></li>
                  <li className="url2"><a href="/">모니터링 설정변경</a></li>
              </ul>
          </div>
          <div className="account">
              <a id="url" href="/">
                  <i className="far fa-file-alt"></i>
                  <span>계정관리</span>
              </a>
          </div>
          <div className="group">
              <a href="/">
                  <i className="fas fa-chart-line"></i>
                  <span>그룹관리</span>
              </a>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Asides;
