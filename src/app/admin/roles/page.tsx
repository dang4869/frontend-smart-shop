import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Role() {
  return (
    <div id="content" className="container-fluid pt-3">
      <div className="card">
        <div className="card-header font-weight-bold">
            <h5 className="m-0">Danh sách quyền</h5>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên quyền</th>

                <th scope="col">Ngày tạo</th>
                <th scope="col">Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Quản lý bán hàng</td>

                <td>2022-11-21 02:40:18</td>
                <td>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/edit/12"
                    className="btn btn-success btn-sm rounded-0 text-white me-2"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chỉnh sửa"
                  >
                   <FontAwesomeIcon icon={faPenToSquare}/>
                  </a>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/delete/12"
                    className="btn btn-danger btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <FontAwesomeIcon icon={faTrash}/>
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Quản lý sản phẩm</td>

                <td>2022-11-03 09:00:36</td>
                <td>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/edit/11"
                    className="btn btn-success btn-sm rounded-0 text-white me-2"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chỉnh sửa"
                  >
                    <FontAwesomeIcon icon={faPenToSquare}/>
                  </a>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/delete/11"
                    className="btn btn-danger btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <FontAwesomeIcon icon={faTrash}/>
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Quản lý bài viết</td>

                <td>2022-11-03 02:09:27</td>
                <td>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/edit/9"
                    className="btn btn-success btn-sm rounded-0 text-white me-2"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chỉnh sửa"
                  >
                    <FontAwesomeIcon icon={faPenToSquare}/>
                  </a>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/delete/9"
                    className="btn btn-danger btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <FontAwesomeIcon icon={faTrash}/>
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Toàn quyền</td>

                <td>2022-11-02 15:10:42</td>
                <td>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/edit/8"
                    className="btn btn-success btn-sm rounded-0 text-white me-2"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chỉnh sửa"
                  >
                    <FontAwesomeIcon icon={faPenToSquare}/>
                  </a>
                  <a
                    href="https://haidang.unitopcv.com/admin/role/delete/8"
                    className="btn btn-danger btn-sm rounded-0 text-white"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <FontAwesomeIcon icon={faTrash}/>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Role;
