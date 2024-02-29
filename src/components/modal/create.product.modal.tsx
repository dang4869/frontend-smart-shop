"use client";
import { getAllCategory } from "@/services/categoryProductServices";
import { createProduct } from "@/services/productService";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IProp {
  showCreateModal: boolean;
  setShowCreateModal: (value: boolean) => void;
  getProducts: (page: number, keyword:string) => Promise<void>
}

function CreateProductModal(props: IProp) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({ mode: "all" });
  const { showCreateModal, setShowCreateModal, getProducts } = props;
  const [categorys, setCategorys] = useState<ICategoryProduct[] | null>(null);
  const handleClose = () => setShowCreateModal(false);
  const getCategory = async () => {
    const res = await getAllCategory();
    if (res && res.data) {
      setCategorys(res.data);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  
  const ChangeToSlug = () => {
    var slug;

    //Lấy text từ thẻ input title
    slug = getValues("product_name");
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
  const handleCreateProduct = async (data: any) => {    
    const formData = new FormData();
    formData.append("thumbnail", data.thumbnail[0]);
    formData.append("product_name", data.product_name);
    formData.append("product_desc", data.product_desc);
    formData.append("product_detail", data.product_detail);
    formData.append("slug", data.slug);
    formData.append("category_product_id", data.category_product_id);
    formData.append("status", data.status);
    formData.append("price", data.price);
    const res:any = await createProduct(formData);
    if(res && res.data && res.status === true) {
       toast.success(res.message);
       setShowCreateModal(false);
       getProducts(1,'')
    }else{
        toast.error('Thêm mới không thành công')
    }
  };
  return (
    <>
      <Modal show={showCreateModal} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body">
            <div className="form-group mb-3">
              <label htmlFor="name">Tên sản phẩm</label>
              <input
                className={`form-control mt-2 ${
                  errors.product_name ? "is-invalid" : ""
                }`}
                type="text"
                id="name"
                {...register("product_name", {
                  required: true,
                  minLength: 6,
                })}
                onKeyUp={ChangeToSlug}
              />
              <div className="invalid-feedback">
                {errors.product_name?.type === "required" &&
                  "Không được để trống trường tên danh mục sản phẩm"}
                {errors.product_name?.type === "minLength" &&
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
              <label htmlFor="price">Giá tiền</label>
              <input
                type="number"
                id="price"
                className={`form-control mt-2 ${
                  errors.price ? "is-invalid" : ""
                }`}
                {...register("price", {
                  required: true,
                })}
              />
              <div className="invalid-feedback">
                {errors.price?.type === "required" &&
                  "Không được để trống trường giá tiền"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="thumbnail">Ảnh sảnh phẩm</label>
              <input
                type="file"
                id="thumbnail"
                className={`form-control mt-2 ${
                  errors.thumbnail ? "is-invalid" : ""
                }`}
                {...register("thumbnail", {
                  required: true,
                })}
              />
              <div className="invalid-feedback">
                {errors.thumbnail?.type === "required" &&
                  "Không được để trống trường ảnh sản phẩm"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="product_desc">Mô tả ngắn sản phẩm</label>
              <textarea
                className={`form-control mt-2 ${
                  errors.product_desc ? "is-invalid" : ""
                }`}
                id="product_desc"
                rows={3}
                {...register("product_desc", {
                  required: true,
                })}
              ></textarea>
              <div className="invalid-feedback">
                {errors.product_desc?.type === "required" &&
                  "Không được để trống trường mô tả ngắn sản phẩm"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="product_detail">Chi tiết sản phẩm</label>
              <textarea
                className={`form-control mt-2 ${
                  errors.product_detail ? "is-invalid" : ""
                }`}
                id="product_detail"
                rows={3}
                {...register("product_detail", {
                  required: true,
                })}
              ></textarea>
              <div className="invalid-feedback">
                {errors.product_detail?.type === "required" &&
                  "Không được để trống trường chi tiết sản phẩm"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="category">Danh mục sản phẩm</label>
              <select
                className={`form-control mt-2 ${
                  errors.category_product_id ? "is-invalid" : ""
                }`}
                id="category"
                {...register("category_product_id", {
                  required: true,
                })}
              >
                <option value="">Danh mục sản phẩm</option>
                {categorys?.map((category) => {
                  return (
                    <>
                      {category.category_parent !== 0 && (
                        <option key={category.id} value={category.id}>
                          {category.category_name}
                        </option>
                      )}
                    </>
                  );
                })}
              </select>
              <div className="invalid-feedback">
                {errors.category_product_id?.type === "required" &&
                  "Không được để trống trường danh mục sản phẩm"}
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="status">Trạng thái</label>
              <select
                id="status"
                className={`form-control mt-2 ${
                  errors.status ? "is-invalid" : ""
                }`}
                {...register("status", { required: true })}
              >
                <option value="">Chọn trạng thái</option>
                <option value="0">Còn hàng</option>
                <option value="1">Hết hàng</option>
              </select>
              <div className="invalid-feedback">
                {errors.status?.type === "required" &&
                  "Không được để trống trường trạng thái"}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSubmit(handleCreateProduct)}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProductModal;
