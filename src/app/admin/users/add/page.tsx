"use client";
import { createUser } from "@/services/userServices";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddUser() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const handleAddUser = async (data: any) => {
    const res: any = await createUser(data);
    if (res && res.data && res.status === true) {
      router.push("/admin/users");
      toast.success(res.message);
    } else {
      let errEmail: [] = res.data.error.email;
      errEmail.forEach((err) => {
        toast.error(err);
      });
    }
  };

  return (
    <>
      <div id="content" className="container-fluid pt-3">
        <div className="card">
          <div className="card-header font-weight-bold">
            <h5>Thêm người dùng</h5>
          </div>
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Họ và tên
              </label>
              <input
                className={`form-control ${
                  errors.name?.type === "required" ? "is-invalid" : ""
                }`}
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              <div className="invalid-feedback">
                {errors.name && "Không được để trống trường họ và tên"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                type="text"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
              />
              <div className="invalid-feedback">
                {errors.email?.type === "required" &&
                  "Không được để trống trường email"}
                {errors.email?.type === "pattern" &&
                  "Email Không đúng định dạng"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Mật khẩu
              </label>
              <input
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
              />
              <div className="invalid-feedback">
                {errors.password?.type === "required" &&
                  "Không được để trống trường mật khẩu"}
                {errors.password?.type === "minLength" &&
                  "Mật khẩu phải có ít nhất 5 ký tự"}
                {errors.password?.type === "maxLength" &&
                  "Mật khẩu không được dài quá 20 ký tự"}
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="" className="form-label">
                Nhóm quyền
              </label>
              <select className="form-control" id="">
                <option>Chọn quyền</option>
                <option>Danh mục 1</option>
                <option>Danh mục 2</option>
                <option>Danh mục 3</option>
                <option>Danh mục 4</option>
              </select>
            </div>

            <button
              className="btn btn-primary"
              onClick={handleSubmit(handleAddUser)}
            >
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
