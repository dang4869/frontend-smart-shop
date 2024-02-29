import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Page() {
  return (
    <div id="content" className="container-fluid pt-3">
      <div className="card">
        <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
          <h5 className="m-0 ">Danh sách bài viết</h5>
          <div className="form-search form-inline">
            <form action="#" style={{ display: "flex" }}>
              <input
                type=""
                className="form-control form-search me-3"
                placeholder="Tìm kiếm"
                name="keyword"
                value=""
              />
              <input
                type="submit"
                name="btn-search"
                value="Tìm kiếm"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
        <div className="card-body">
          <form
            action="https://haidang.unitopcv.com/admin/page/action"
            method=""
          >
            <div className="form-action form-inline py-3">
              <select className="form-control me-2" id="" name="act">
                <option>Chọn</option>
                <option value="delete">Xóa bài viết</option>
              </select>
              <input
                type="submit"
                name="btn-search"
                value="Áp dụng"
                className="btn btn-primary"
              />
            </div>
            <table className="table table-striped table-checkall">
              <thead>
                <tr>
                  <th scope="col">
                    <input name="checkall" type="checkbox" />
                  </th>
                  <th scope="col">STT</th>
                  <th scope="col">Tiêu đề trang</th>
                  <th scope="col">slug</th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" name="list_check[]" value="1" />
                  </td>
                  <td scope="row">1</td>
                  <td>
                    <a href="">Giới thiệu</a>
                  </td>
                  <td>Giới-thiệu</td>
                  <td>2022-10-22 08:10:36</td>
                  <td>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/edit/1"
                      className="btn btn-success btn-sm rounded-0 text-white me-2"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cập nhật trang"
                    >
                      <FontAwesomeIcon icon={faPenToSquare}/>
                    </a>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/delete/1"
                      className="btn btn-danger btn-sm rounded-0  text-white"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Xóa trang"
                    >
                      <FontAwesomeIcon icon={faTrash}/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="list_check[]" value="5" />
                  </td>
                  <td scope="row">2</td>
                  <td>
                    <a href="">Sản Phẩm</a>
                  </td>
                  <td>san-pham</td>
                  <td>2022-10-22 09:21:31</td>
                  <td>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/edit/5"
                      className="btn btn-success btn-sm rounded-0 text-white me-2"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cập nhật trang"
                    >
                      <FontAwesomeIcon icon={faPenToSquare}/>
                    </a>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/delete/5"
                      className="btn btn-danger btn-sm rounded-0  text-white"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Xóa trang"
                    >
                      <FontAwesomeIcon icon={faTrash}/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="list_check[]" value="6" />
                  </td>
                  <td scope="row">3</td>
                  <td>
                    <a href="">Tin tức</a>
                  </td>
                  <td>tin-tuc</td>
                  <td>2022-11-16 02:27:31</td>
                  <td>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/edit/6"
                      className="btn btn-success btn-sm rounded-0 text-white me-2"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cập nhật trang"
                    >
                      <FontAwesomeIcon icon={faPenToSquare}/>
                    </a>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/delete/6"
                      className="btn btn-danger btn-sm rounded-0  text-white"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Xóa trang"
                    >
                      <FontAwesomeIcon icon={faTrash}/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="list_check[]" value="7" />
                  </td>
                  <td scope="row">4</td>
                  <td>
                    <a href="">Liên hệ</a>
                  </td>
                  <td>lien-he</td>
                  <td>2022-11-16 02:32:38</td>
                  <td>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/edit/7"
                      className="btn btn-success btn-sm rounded-0 text-white me-2"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cập nhật trang"
                    >
                      <FontAwesomeIcon icon={faPenToSquare}/>
                    </a>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/delete/7"
                      className="btn btn-danger btn-sm rounded-0  text-white"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Xóa trang"
                    >
                      <FontAwesomeIcon icon={faTrash}/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" name="list_check[]" value="8" />
                  </td>
                  <td scope="row">5</td>
                  <td>
                    <a href="">Trang chủ</a>
                  </td>
                  <td>trang-chu</td>
                  <td>2022-11-16 02:33:53</td>
                  <td>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/edit/8"
                      className="btn btn-success btn-sm rounded-0 text-white me-2"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cập nhật trang"
                    >
                      <FontAwesomeIcon icon={faPenToSquare}/>
                    </a>
                    <a
                      href="https://haidang.unitopcv.com/admin/page/delete/8"
                      className="btn btn-danger btn-sm rounded-0  text-white"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Xóa trang"
                    >
                      <FontAwesomeIcon icon={faTrash}/>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
