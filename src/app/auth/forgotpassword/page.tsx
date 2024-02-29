"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/services/authServices";
import { toast } from "react-toastify";
function ForgotPassword() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });
  const handleSendMaiResetPassword = async (data: any) => {
    const res: any = await forgotPassword(data);
    if (res && res.message) {
      toast.success(res.message);
    } else {
      toast.error("Email không tồn tại");
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Đặt lại mật khẩu</div>
          <div className="card-body">
            <div className="form-group mb-3 row">
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
            <div className="form-group mb-3 row mb-0">
              <div className="col-md-6 offset-md-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit(handleSendMaiResetPassword)}
                >
                  Gửi đường link đặt lại mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
