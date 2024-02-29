"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/services/authServices";
import { toast } from "react-toastify";
function ResetPasswordToken({ params }: { params: { token: string } }) {
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
  const handleResetPasswordToken = async (data: any) => {
    const res: any = await resetPassword(params.token, data);
    if (res && res.success === true) {
      toast.success(res.message);
      router.push("/auth/login");
    } else {
      toast.error("Đặt lại mật khẩu không thành công");
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">Đặt lại mật khẩu</div>

          <div className="card-body">
            <div className="form-group row mb-3">
              <label
                htmlFor="password"
                className="col-md-4 col-form-label text-md-right"
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
                    "Không được để trống trường mật khẩu cũ"}
                  {errors.password?.type === "minLength" &&
                    "Mật khẩu cũ phải có ít nhất 5 ký tự"}
                  {errors.password?.type === "maxLength" &&
                    "Mật khẩu cũ không được dài quá 20 ký tự"}
                </div>
              </div>
            </div>

            <div className="form-group row mb-3">
              <label
                htmlFor="password_confirmation"
                className="col-md-4 col-form-label text-md-right"
              >
                Nhập lại mật khẩu
              </label>

              <div className="col-md-6">
                <input
                  id="password_confirmation"
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
                  onClick={handleSubmit(handleResetPasswordToken)}
                >
                  Đặt lại mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordToken;
