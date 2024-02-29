"use client";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { getCurrentUserProfile } from "@/services/authServices";
import ChangePasswordModal from "../modal/changepass.modal";
import { deleteCookie } from "cookies-next";

function HeaderMoudule() {
  const router = useRouter();
  const [currentUser, setcurrentUser] = useState<any>("");
  const [show, setshow] = useState<boolean>(false);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const res = await getCurrentUserProfile();
    setcurrentUser(res);
  };
  const logout = () => {
    deleteCookie('token')
    localStorage.removeItem("token");
    router.push("/auth/login");
    toast.success("Đã đăng xuất thành công");
  };

  return (
    <>
      <div className="topnav shadow navbar-light bg-white d-flex">
        <div className="navbar-brand">
          <Link href={"/admin"}>UNITOP ADMIN</Link>
        </div>
        <div className="nav-right ">
          <div className="btn-group mr-auto">
            <Dropdown>
              <Dropdown.Toggle
                variant="none"
                id="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Thêm bài viết</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Thêm sản phẩm</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thêm đơn hàng</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="btn-group">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={currentUser.name}
              >
                <NavDropdown.Item onClick={() => setshow(true)}>
                  Đổi mật khẩu
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
          <ChangePasswordModal show={show} setShow={setshow} />
        </div>
      </div>
    </>
  );
}

export default HeaderMoudule;
