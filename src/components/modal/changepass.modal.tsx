"use client";
import { changePassword } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
interface IProp {
  show: boolean;
  setShow: (value: boolean) => void;
}
function ChangePasswordModal(props: IProp) {
  const { show, setShow } = props;
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "all",
  });
  const handleClose = () => setShow(false);
  const handleChangePassword = async (data: any) => {
    const res: any = await changePassword(data);
    if (res && res.user) {
      handleClose();
      reset();
      toast.success(res.message);
      localStorage.removeItem("token");
      router.push("/auth/login");
    } else {
      toast.error("Mật khẩu cũ không chính xác");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="old_password" className="form-label">
                Mật Khẩu cũ
              </label>
              <input
                className={`form-control ${
                  errors.old_password ? "is-invalid" : ""
                }`}
                type="password"
                id="old_password"
                {...register("old_password", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
              />
              <div className="invalid-feedback">
                {errors.old_password?.type === "required" &&
                  "Không được để trống trường mật khẩu cũ"}
                {errors.old_password?.type === "minLength" &&
                  "Mật khẩu cũ phải có ít nhất 5 ký tự"}
                {errors.old_password?.type === "maxLength" &&
                  "Mật khẩu cũ không được dài quá 20 ký tự"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="new_password" className="form-label">
                Mật khẩu mới
              </label>
              <input
                className={`form-control ${
                  errors.new_password ? "is-invalid" : ""
                }`}
                type="password"
                id="new_password"
                {...register("new_password", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
              />
              <div className="invalid-feedback">
                {errors.old_password?.type === "required" &&
                  "Không được để trống trường mật khẩu mới"}
                {errors.new_password?.type === "minLength" &&
                  "Mật khẩu mới phải có ít nhất 5 ký tự"}
                {errors.new_password?.type === "maxLength" &&
                  "Mật khẩu mới không được dài quá 20 ký tự"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="new_password_confirmation"
                className="form-label "
              >
                Nhập lại mật khẩu
              </label>
              <input
                id="new_password_confirmation"
                type="password"
                className={`form-control ${
                  errors.new_password_confirmation ? "is-invalid" : ""
                }`}
                {...register("new_password_confirmation", {
                  required: true,
                  validate: (value: string) => value === watch("new_password"),
                })}
              />
              <div className="invalid-feedback">
                {errors.new_password_confirmation?.type === "required" &&
                  "Không được để trống trường nhập lại mật khẩu"}
                {errors.new_password_confirmation?.type === "validate" &&
                  "Nhập lại mật khẩu chưa chính xác"}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit(handleChangePassword)}
          >
            Đổi mật khẩu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangePasswordModal;
