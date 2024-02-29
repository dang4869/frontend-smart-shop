"use client";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
} from "@/services/categoryProductServices";
import { useEffect, useState } from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UpdateCategoryProduct from "@/components/modal/update.category.product";
function CategoryProduct() {
  const [category, setCategory] = useState<ICategoryProduct[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [categoryParent, setCategoryParent] = useState<number | null>(null);
  const [id, setId] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({ mode: "all" });

  const getCategory = async () => {
    const res = await getAllCategory();
    if (res && res.data) {
      setCategory(res.data);
    }
  };
  useEffect(() => {
    getCategory();
    setLoading(false);
  }, []);
  const handleAddCategory = async (data: any) => {
    const res: any = await createCategory(data);
    if (res && res.data && res.status === true) {
      toast.success(res.message);
      getCategory();
    } else {
      toast.error("Thêm mới không thành công");
    }
    reset(data);
    handleSetValue();
  };
  const handleSetValue = () => {
    setValue("category_name", "");
    setValue("slug", "");
    setValue("category_parent", 0);
  };
  const handleDeleteCategory = (id: string) => {
    if (confirm(`Bạn muốn xóa người dùng có id là ${id} không?`)) {
      deleteCategory(id).then((res: any) => {
        if (res && res.status === true) {
          toast.success(res.message);
          getCategory();
        } else {
          toast.error(res.data.message);
        }
      });
    }
  };
  const ChangeToSlug =()=> {
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
  }
  if (isLoading) return <p>Loading...</p>;
  return (
    <div id="content" className="container-fluid pt-3">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header font-weight-bold">
              <h5>Thêm danh mục</h5>
            </div>
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
                  <option value="0">Danh mục cha</option>
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit(handleAddCategory)}
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-header font-weight-bold">
              <h5>Danh mục</h5>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên danh mục</th>
                    <th scope="col">Slug</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                {!category ? (
                  <div>Không tồn tại danh mục nào</div>
                ) : (
                  <tbody>
                    {category?.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          {item.category_parent === 0 ? (
                            <td>{item.category_name}</td>
                          ) : (
                            <td>|---{item.category_name}</td>
                          )}
                          <td>{item.slug}</td>
                          <td>{item.created_at}</td>
                          <td>
                            <a
                              className="btn btn-success btn-sm rounded-0 text-white me-2"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Chỉnh sửa"
                              onClick={() => {
                                setShow(true);
                                setCategoryName(item.category_name);
                                setSlug(item.slug);
                                setCategoryParent(item.category_parent);
                                setId(item.id);
                              }}
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </a>
                            <a
                              className="btn btn-danger btn-sm rounded-0 text-white"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Xóa danh mục"
                              onClick={() => handleDeleteCategory(item.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        <UpdateCategoryProduct
          show={show}
          setShow={setShow}
          categoryName={categoryName}
          setCategoryName={setCategoryName}
          slug={slug}
          setSlug={setSlug}
          categoryParent={categoryParent}
          setCategoryParent={setCategoryParent}
          id={id}
          setId={setId}
          getCategory={getCategory}
          // ChangeToSlug={ChangeToSlug}
          category={category}
        />
      </div>
    </div>
  );
}

export default CategoryProduct;
