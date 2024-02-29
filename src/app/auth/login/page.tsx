"use client";
import "./login.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginUser } from "@/services/authServices";
import { setCookie } from "cookies-next";
function Login() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const handleLoginUser = async (data: any) => {
    const res: any = await loginUser(data);
    console.log(res);

    if (res && res.access_token) {
      setCookie('token', res.access_token);
      localStorage.setItem("token", res.access_token);
      toast.success("Đăng nhập thành công");
      router.push("/admin");
    } else {
      if (res && res.status === 401) toast.error(res.data.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Đăng nhập</div>

          <div className="card-body">
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
              <div className="col-md-6 offset-md-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />

                  <label className="form-check-label" htmlFor="remember">
                    Ghi nhớ đăng nhập
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group row mb-0">
              <div className="col-md-8 offset-md-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit(handleLoginUser)}
                >
                  Đăng nhập
                </button>

                <Link className="btn btn-link" href={"/auth/forgotpassword"}>
                  Quên mật khẩu?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
