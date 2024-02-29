"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { updateUser } from "@/services/userServices";

interface IProp {
  showUpdate: boolean;
  setShowUpdate: (value: boolean) => void;
  name: string;
  setName: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  id: string;
  setId: (value: string) => void;
  getUser: (page: number, keyword: string) => Promise<void>;
}
function UpdateUserModal(props: IProp) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    clearErrors,
  } = useForm({
    mode: "all",
  });
  const {
    showUpdate,
    setShowUpdate,
    name,
    setName,
    password,
    setPassword,
    id,
    setId,
    getUser,
  } = props;
  useEffect(() => {
    setValue("name", name);
  }, [name]);
  const handleClose = () => {
    setValue("name", name);
    setShowUpdate(false);
    clearErrors("name");
    clearErrors("password");
  };
  const handleUpdateUser = (data: any) => {
    updateUser(id, data).then((res: any) => {
      if (res && res.success === true) {
        toast.success(res.message);
        getUser(1, "");
        handleClose();
      } else {
        toast.error("Chỉnh sửa người dùng không thành công");
      }
    });
  };
  return (
    <>
      <Modal
        show={showUpdate}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Họ và tên
              </label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              <div className="invalid-feedback">
                {errors.name?.type === "required" &&
                  "Không được để trống trường họ và tên"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Mật khẩu{" "}
                <span className="text-danger">
                  <small>
                    (Nếu không đổi mật khẩu thì không cần nhập mật khẩu)
                  </small>
                </span>
              </label>
              <input
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                type="password"
                id="passowrd"
                {...register("password", {
                  minLength: 5,
                  maxLength: 20,
                })}
              />
              <div className="text-danger">
                {errors.password?.type === "minLength" &&
                  "Mật khẩu phải có ít nhất 5 ký tự"}
                {errors.password?.type === "maxLength" &&
                  "Mật khẩu không được dài quá 20 ký tự"}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSubmit(handleUpdateUser)}>
            Chỉnh sửa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateUserModal;
