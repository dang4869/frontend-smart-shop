"use client";
import { getAllCategory } from "@/services/categoryProductServices";
import { deleteProduct, getAllSearchProduct } from "@/services/productService";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { toast } from "react-toastify";
import CreateProductModal from "@/components/modal/create.product.modal";
import UpdateCategoryProduct from "@/components/modal/update.category.product";
import UpdateProductModal from "@/components/modal/update.product.modal";
import { useForm } from "react-hook-form";

function Product() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({ mode: "all" });
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [thumbnail, setThumbnail] = useState<any>();
  const [productDesc, setProductDesc] = useState<string>("");
  const [productDetail, setProductDetail] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [status, setStatus] = useState<number | null>(null);
  const [categoryProductId, setCategoryProductId] = useState<number | null>(
    null
  );
  const [id, setId] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const getProducts = async (page: number, keyword: string) => {
    const res = await getAllSearchProduct(page, keyword);
    if (res && res.data.data) {
      setProducts(res.data.data);
      setTotalPages(res.data.last_page);
      setRows(res.data.per_page);
      setCurrentPage(page);
    }
  };
  const handleDeleteProduct = (id: string) => {
    if (confirm(`Bạn muốn xóa người dùng có id là ${id} không?`)) {
      deleteProduct(id).then((res: any) => {
        if (res && res.status === true) {
          toast.success(res.message);
          getProducts(currentPage, "");
        } else {
          toast.error("Xóa người dùng không thành công");
        }
      });
    }
  };
  useEffect(() => {
    getProducts(1, keywords);
  }, []);
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    getProducts(+event.page + 1, keywords);
  };
const handleSearch = () => {
  getProducts(currentPage, keywords)
}

  return (
    <div id="content" className="container-fluid pt-3">
      <div className="card">
        <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
          <h5 className="m-0 ">Danh sách sản phẩm</h5>
          <div className="form-search form-inline">
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="form-control form-search me-3"
                placeholder="Tìm kiếm"
                onChange={(e)=>setKeywords(e.target.value)}
              />
              <input
                type="submit"
                name="btn-search"
                value="Tìm kiếm"
                className="btn btn-primary"
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="analytic">
            <a href="" className="text-primary">
              Trạng thái 1<span className="text-muted">(10)</span>
            </a>
            <a href="" className="text-primary">
              Trạng thái 2<span className="text-muted">(5)</span>
            </a>
            <a href="" className="text-primary">
              Trạng thái 3<span className="text-muted">(20)</span>
            </a>
          </div>
          <div className="form-action form-inline py-3 row">
            <div className="col-md-11">
              <select className="form-control me-2" id="">
                <option>Chọn</option>
                <option>Tác vụ 1</option>
                <option>Tác vụ 2</option>
              </select>

              <input
                type="submit"
                name="btn-search"
                value="Áp dụng"
                className="btn btn-primary"
              />
            </div>
            <div className="col-md-1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowCreateModal(true)}
              >
                Thêm mới
              </button>
            </div>
          </div>
          <table className="table table-striped table-checkall">
            <thead>
              <tr>
                <th scope="col">
                  <input name="checkall" type="checkbox" />
                </th>
                <th scope="col">#</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Danh mục</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr key={product.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{(currentPage - 1) * rows + index + 1}</td>
                    <td>
                      <img src="http://via.placeholder.com/80X80" alt="" />
                    </td>
                    <td>
                      <a>{product.product_name}</a>
                    </td>
                    <td>{formatter.format(product.price)}</td>
                    <td>{product.category_product.category_name}</td>
                    <td>{product.created_at}</td>
                    {product.status === 0 && (
                      <td>
                        <span className="badge text-bg-success">Còn hàng</span>
                      </td>
                    )}
                    {product.status === 1 && (
                      <td>
                        <span className="badge text-bg-secondary">
                          Hết hàng
                        </span>
                      </td>
                    )}

                    <td>
                      <a
                        className="btn btn-success btn-sm rounded-0 text-white me-2"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                        onClick={() => {
                          setShowUpdateModal(true);
                          setProductName(product.product_name);
                          setCategoryProductId(product.category_product_id);
                          setId(product.id);
                          setProductDesc(product.product_desc);
                          setProductDetail(product.product_detail);
                          setThumbnail(product.thumbnail);
                          setSlug(product.slug);
                          setStatus(product.status);
                          setPrice(product.price);
                        }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </a>
                      <a
                        className="btn btn-danger btn-sm rounded-0 text-white"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <Paginator
              first={first}
              rows={rows}
              totalRecords={totalPages * 10}
              onPageChange={onPageChange}
            />
          </nav>
        </div>
      </div>
      <CreateProductModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        getProducts={getProducts}
      />
      <UpdateProductModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        productName={productName}
        price={price}
        thumbnail={thumbnail}
        productDesc={productDesc}
        productDetail={productDetail}
        slug={slug}
        status={status}
        categoryProductId={categoryProductId}
        id={id}
        getProducts={getProducts}
      />
    </div>
  );
}

export default Product;
