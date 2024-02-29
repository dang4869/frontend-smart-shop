import Link from "next/link";

function HeaderAuthModule() {
    return ( 
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="https://haidang.unitopcv.com/">
            SMARTSHOP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Chuyển hướng điều hướng"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href={'/auth/login'}
                >
                  Đăng nhập
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  href={'/auth/registers'}
                >
                  Đăng ký
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}

export default HeaderAuthModule;