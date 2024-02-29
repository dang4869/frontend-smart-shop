"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/authServices";
import { toast } from "react-toastify";
function Register() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "all" });

  const handleRegister = async (data: any) => {
    const res: any = await registerUser(data);
    if (res && res.user) {
      toast.success(res.message);
      router.push("/auth/login");
    }
    if (res && res.status === 400) {
      toast.error("Email đã tồn tại");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Đăng ký</div>
          <div className="card-body">
            <div className="form-group row  mb-3">
              <label
                htmlFor="name"
                className="col-md-4 col-form-label text-md-end"
              >
                Họ và tên
              </label>

              <div className="col-md-6">
                <input
                  id="name"
                  type="text"
                  className={`form-control ${
                    errors.name?.type === "required" ? "is-invalid" : ""
                  }`}
                  {...register("name", { required: true })}
                />
                <div className="invalid-feedback">
                  {errors.name && "Không được để trống trường họ và tên"}
                </div>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="email"
                className="col-md-4 col-form-label text-md-end"
              >
                E-Mail
              </label>

              <div className="col-md-6">
                <input
                  id="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                <div className="invalid-feedback">
                  {errors.email?.type === "required" &&
                    "Không được để trống trường email"}
                  {errors.email?.type === "pattern" &&
                    "Email Không đúng định dạng"}
                </div>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="password"
                className="col-md-4 col-form-label text-md-end"
              >
                Mật khẩu
              </label>

              <div className="col-md-6">
                <input
                  id="password"
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
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
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="password-confirm"
                className="col-md-4 col-form-label text-md-end"
              >
                Nhập lại mật khẩu
              </label>

              <div className="col-md-6">
                <input
                  id="password-confirm"
                  type="password"
                  className={`form-control ${
                    errors.password_confirmation ? "is-invalid" : ""
                  }`}
                  {...register("password_confirmation", {
                    required: true,
                    validate: (value: string) => value === watch("password"),
                  })}
                />
                <div className="invalid-feedback">
                  {errors.password_confirmation?.type === "required" &&
                    "Không được để trống trường nhập lại mật khẩu"}
                  {errors.password_confirmation?.type === "validate" &&
                    "Nhập lại mật khẩu chưa chính xác"}
                </div>
              </div>
            </div>

            <div className="form-group row mb-0">
              <div className="col-md-6 offset-md-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit(handleRegister)}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
