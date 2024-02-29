"use client";
import { updateCategory } from "@/services/categoryProductServices";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IProp {
  show: boolean;
  setShow: (value: boolean) => void;
  categoryName: string;
  setCategoryName: (value: string) => void;
  slug: string;
  setSlug: (value: string) => void;
  categoryParent: number | null;
  setCategoryParent: (value: number | null) => void;
  id: string;
  setId: (value: string) => void;
  getCategory: () => Promise<void>;
  //   ChangeToSlug: () => void;
  category: ICategoryProduct[] | null;
}

function UpdateCategoryProduct(props: IProp) {
  const {
    show,
    setShow,
    categoryName,
    setCategoryName,
    slug,
    setSlug,
    setCategoryParent,
    categoryParent,
    id,
    setId,
    getCategory,
    category,
  } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({ mode: "all" });
  const handleClose = () => setShow(false);
  useEffect(() => {
    setValue("category_name", categoryName);
    setValue("slug", slug);
    setValue("category_parent", categoryParent);
  }, [categoryName, slug, categoryParent]);
  const handleUpdateCategory = async (data: any) => {
    const res: any = await updateCategory(data, id);
    console.log(res);
    if (res && res.success) {
      toast.success(res.message);
      handleClose();
      getCategory();
    } else {
      toast.error("Cập nhật không thành công!");
    }
  };
  const ChangeToSlug = () => {
    var slug;

    //Lấy text từ thẻ input title
    slug = getValues("category_name");
    slug = slug.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
    slug = slug.replace(/đ/gi, "d");
    //Xóa các ký tự đặt biệt
    slug = slug.replace(
      /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
      ""
    );
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-/gi, "-");
    slug = slug.replace(/\-\-/gi, "-");
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = "@" + slug + "@";
    slug = slug.replace(/\@\-|\-\@|\@/gi, "");
    //In slug ra textbox có id “slug”
    setValue("slug", slug);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="name">Tên danh mục</label>
              <input
                className={`form-control mt-2 ${
                  errors.category_name ? "is-invalid" : ""
                }`}
                type="text"
                id="name"
                {...register("category_name", {
                  required: true,
                  minLength: 6,
                })}
                onKeyUp={ChangeToSlug}
              />
              <div className="invalid-feedback">
                {errors.category_name?.type === "required" &&
                  "Không được để trống trường tên danh mục sản phẩm"}
                {errors.category_name?.type === "minLength" &&
                  "tên danh mục sản phẩm phải có ít nhất 6 ký tự"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="convert_slug mt-2">Link thân thiện</label>
              <input
                className={`form-control mt-2 ${
                  errors.slug ? "is-invalid" : ""
                }`}
                type="text"
                id="convert_slug"
                {...register("slug", {
                  required: true,
                  minLength: 6,
                })}
              />
              <div className="invalid-feedback">
                {errors.slug?.type === "required" &&
                  "Không được để trống trường tên link thân thiện"}
                {errors.slug?.type === "minLength" &&
                  "Link thân thiện phải có ít nhất 6 ký tự"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="">Danh mục cha</label>
              <select
                className={`form-control mt-2 ${
                  errors.category_parent ? "is-invalid" : ""
                }`}
                id=""
                {...register("category_parent", {
                  required: true,
                })}
              >
                <option value="0">Danh mục</option>
                {category?.map((category) => {
                  return (
                    <>
                      {category.category_parent === 0 ? (
                        <option key={category.id} value={category.id}>
                          {category.category_name}
                        </option>
                      ) : (
                        <option key={category.id} value={category.id}>
                          |---{category.category_name}
                        </option>
                      )}
                    </>
                  );
                })}
              </select>
              <div className="invalid-feedback">
                {errors.category_parent?.type === "required" &&
                  "Không được để trống trường danh mục cha"}
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
            onClick={handleSubmit(handleUpdateCategory)}
          >
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateCategoryProduct;
