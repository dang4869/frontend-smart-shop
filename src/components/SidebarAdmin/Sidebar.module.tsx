"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.scss";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function SidebarModule() {
  const pathname = usePathname();
  const [open1, setOpen1] = useState<any>(false);
  const [open2, setOpen2] = useState<any>(false);
  const [open3, setOpen3] = useState<any>(false);
  const [open4, setOpen4] = useState<any>(false);
  const [open5, setOpen5] = useState<any>(false);
  const [open6, setOpen6] = useState<any>(false);
  const [arrow1, setArrow1] = useState<any>(faAngleRight);
  const [arrow2, setArrow2] = useState<any>(faAngleRight);
  const [arrow3, setArrow3] = useState<any>(faAngleRight);
  const [arrow4, setArrow4] = useState<any>(faAngleRight);
  const [arrow5, setArrow5] = useState<any>(faAngleRight);
  const [arrow6, setArrow6] = useState<any>(faAngleRight);
  const handleClikArrow1 = () => {
    if (open1 === false) {
      setOpen1(true);
      setArrow1(faAngleDown);
    }
    if (open1 === true) {
      setOpen1(false);
      setArrow1(faAngleRight);
    }
  };
  const handleClikArrow2 = () => {
    if (open2 === false) {
      setOpen2(true);
      setArrow2(faAngleDown);
    }
    if (open2 === true) {
      setOpen2(false);
      setArrow2(faAngleRight);
    }
  };
  const handleClikArrow3 = () => {
    if (open3 === false) {
      setOpen3(true);
      setArrow3(faAngleDown);
    }
    if (open3 === true) {
      setOpen3(false);
      setArrow3(faAngleRight);
    }
  };
  const handleClikArrow4 = () => {
    if (open4 === false) {
      setOpen4(true);
      setArrow4(faAngleDown);
    }
    if (open4 === true) {
      setOpen4(false);
      setArrow4(faAngleRight);
    }
  };
  const handleClikArrow5 = () => {
    if (open5 === false) {
      setOpen5(true);
      setArrow5(faAngleDown);
    }
    if (open5 === true) {
      setOpen5(false);
      setArrow5(faAngleRight);
    }
  };
  const handleClikArrow6 = () => {
    if (open6 === false) {
      setOpen6(true);
      setArrow6(faAngleDown);
    }
    if (open6 === true) {
      setOpen6(false);
      setArrow6(faAngleRight);
    }
  };
  return (
    <div id="sidebar" className="bg-white">
      <ul id="sidebar-menu">
        <li className={`nav-link ${pathname === "/admin" ? "active" : ""}`}>
          <Link href={"/admin"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Dashboard
          </Link>
          <FontAwesomeIcon className="arrow" icon={faAngleRight} />
        </li>

        <li
          className={`nav-link ${pathname === "/admin/pages" ? "active" : ""}`}
        >
          <Link href={"/admin/pages"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Trang
          </Link>
          <FontAwesomeIcon
            className="arrow"
            icon={arrow1}
            onClick={handleClikArrow1}
          />
          <Collapse
            in={pathname === "/admin/pages" ? open1 === false : open1 === true}
          >
            <ul id="sub-menu1" className="sub-menu-child">
              <li>
                <a href="?view=add-post">Thêm mới</a>
              </li>
              <li>
                <a href="?view=list-post">Danh sách</a>
              </li>
            </ul>
          </Collapse>
        </li>

        <li
          className={`nav-link ${pathname === "/admin/posts" ? "active" : ""}`}
        >
          <Link href={"/admin/posts"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Bài viết
          </Link>
          <FontAwesomeIcon
            className="arrow"
            icon={arrow2}
            onClick={handleClikArrow2}
          />
          <Collapse
            in={pathname === "/admin/posts" ? open2 === false : open2 === true}
          >
            <ul id="sub-menu2" className="sub-menu-child">
              <li>
                <a href="?view=add-post">Thêm mới</a>
              </li>
              <li>
                <a href="?view=list-post">Danh sách</a>
              </li>
              <li>
                <a href="?view=cat">Danh mục</a>
              </li>
            </ul>
          </Collapse>
        </li>

        <li
          className={`nav-link ${
            pathname === "/admin/products" ||
            pathname === "/admin/products/category"
              ? "active"
              : ""
          }`}
        >
          <Link href={"/admin/products"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Sản phẩm
          </Link>
          <FontAwesomeIcon
            className="arrow"
            icon={arrow3}
            onClick={handleClikArrow3}
          />
          <Collapse
            in={
              pathname === "/admin/products" ||
              pathname === "/admin/products/category"
                ? open3 === false
                : open3 === true
            }
          >
            <ul id="sub-menu3" className="sub-menu-child">
              <li>
                <Link href={"/admin/products"}>Danh sách</Link>
              </li>
              <li>
                <Link href={"/admin/products/category"}>Danh mục</Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={`nav-link ${pathname === "/admin/orders" ? "active" : ""}`}
        >
          <Link href={"/admin/orders"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Bán hàng
          </Link>
          <FontAwesomeIcon
            className="arrow"
            icon={arrow4}
            onClick={handleClikArrow4}
          />
          <Collapse
            in={pathname === "/admin/orders" ? open4 === false : open4 === true}
          >
            <ul id="sub-menu4" className="sub-menu-child">
              <li>
                <a href="?view=list-order">Đơn hàng</a>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={`nav-link ${
            pathname === "/admin/users" || pathname === "/admin/users/add"
              ? "active"
              : ""
          }`}
        >
          <Link href={"/admin/users"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Users
          </Link>
          <FontAwesomeIcon
            className="arrow"
            icon={arrow5}
            onClick={handleClikArrow5}
          />
          <Collapse
            in={
              pathname === "/admin/users" || pathname === "/admin/users/add"
                ? open5 === false
                : open5 === true
            }
          >
            <ul id="sub-menu5" className="sub-menu-child">
              <li>
                <Link href={"/admin/users/add"}>Thêm mới</Link>
              </li>
              <li>
                <Link href={"/admin/users"}>Danh sách</Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={`nav-link ${pathname === "/admin/roles" ? "active" : ""}`}
        >
          <Link href={"/admin/roles"} className="menu">
            <div className="nav-link-icon d-inline-flex">
              <FontAwesomeIcon icon={faFolder} className="fa-folder" />
            </div>
            Phân quyền
          </Link>
          <FontAwesomeIcon
            className="arrow"
            icon={arrow6}
            onClick={handleClikArrow6}
          />
          <Collapse
            in={pathname === "/admin/roles" ? open6 === false : open6 === true}
          >
            <ul id="sub-menu6" className="sub-menu-child">
              <li>
                <a href="?view=permission">Quyền</a>
              </li>
              <li>
                <a href="?view=add-role">Thêm vai trò</a>
              </li>
              <li>
                <a href="?view=list-role">Danh sách vai trò</a>
              </li>
            </ul>
          </Collapse>
        </li>
      </ul>
    </div>
  );
}

export default SidebarModule;
