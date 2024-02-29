"use client";
import { useEffect, useState, useRef } from "react";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import UpdateUserModal from "@/components/modal/update.user.modal";
import { toast } from "react-toastify";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { deleteUser, getAllSearchUsers } from "@/services/userServices";

interface IProps {
  users: IUser[];
}
function User(props: IProps) {
  // const { users } = props;
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keywords, setKeywords] = useState<string>("");

  const getUser = async (page: number, keyword: string) => {
    const res = await getAllSearchUsers(page, keyword);
    if (res && res.data) {
      setUsers(res.data.data);
      setTotalPages(res.data.last_page);
      setRows(res.data.per_page);
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    getUser(1, keywords);
    setLoading(false);
  }, []);
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    getUser(+event.page + 1, keywords);
  };

  const handleDeleteUser = (id: string) => {
    if (confirm(`Bạn muốn xóa người dùng có id là ${id} không?`)) {
      deleteUser(id).then((res: any) => {
        if (res && res.status === true) {
          toast.success(res.message);
          getUser(currentPage, "");
        } else {
          toast.error("Xóa người dùng không thành công");
        }
      });
    }
  };
  const handleSearchUser = () => {
    getUser(currentPage, keywords);
  };

  if (isLoading) return <p>Loading...</p>;
  // if (!users) return <p>Không tồn tại người dùng nào</p>;
  return (
    <>
      <div id="content" className="container-fluid pt-3">
        <div className="card">
          <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 className="m-0 ">Danh sách thành viên</h5>
            <div className="form-search form-inline">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control form-search me-3"
                  placeholder="Tìm kiếm"
                  onChange={(e) => setKeywords(e.target.value)}
                />
                <input
                  type="submit"
                  name="btn-search"
                  value="Tìm kiếm"
                  className="btn btn-primary"
                  onClick={handleSearchUser}
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
            <div className="form-action form-inline py-3">
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
            <table className="table table-striped table-checkall">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="checkall" />
                  </th>
                  <th scope="col">#</th>
                  <th scope="col">Họ tên</th>
                  <th scope="col">Email</th>
                  <th scope="col">Quyền</th>
                  <th scope="col">Ngày tạo</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                {!users ? (
                  <p>Không tồn tại người dùng nào</p>
                ) : (
                  users?.map((user, index) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <tr key={user.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <th scope="row">
                          {(currentPage - 1) * rows + index + 1}
                        </th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>Admintrator</td>
                        <td>{user.created_at}</td>
                        <td>
                          <a
                            className="btn btn-success btn-sm rounded-0 text-white me-2"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit"
                            onClick={() => {
                              setName(user.name);
                              setPassword(user.password);
                              setId(user.id);
                              setShowUpdate(true);
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
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </a>
                        </td>
                      </tr>
                    );
                  })
                )}
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
        <UpdateUserModal
          showUpdate={showUpdate}
          setShowUpdate={setShowUpdate}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          id={id}
          setId={setId}
          getUser={getUser}
        />
      </div>
    </>
  );
}

export default User;
