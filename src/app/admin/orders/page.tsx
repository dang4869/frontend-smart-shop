"use client";
import { deleteOrder, getAllOrders, getDetailOrder } from "@/services/orderServices";
import {
  faEllipsis,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import DetailOrder from "@/components/modal/detail.order.modal";
import { toast } from "react-toastify";

function Order() {
  const [orders, setOrders] = useState<IOrders[] | null>(null);
  const [rows, setRows] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [first, setFirst] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [order, setOrder] = useState<IOrders | null>(null);
  const [detailOrder, setDetailOrder] = useState<IOrderDetail[] | null>(null);
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });

  const getAllOrder = async (page: any) => {
    const res = await getAllOrders(page);
    if (res && res.data) {
      setOrders(res.data.data);
      setTotalPages(res.data.last_page);
      setRows(res.data.per_page);
      setCurrentPage(page);
    }
  };
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    getAllOrder(+event.page + 1);
  };
  const getOrderDetail = async (id: any) => {
    const res:any = await getDetailOrder(id);
    if (res && res.data) {
      setOrder(res.order);
      setDetailOrder(res.data);
      setShow(true);
    }
  };
  const handleDeleteOrder = async (id: any) => {
   if(confirm(`Ban có muốn xóa đơn hàng có ${id} không ?`)){
    const res:any = await deleteOrder(id);
    if(res && res.status === true) {
        toast.success('Đã xóa đơn hàng thành công')
        getAllOrder(currentPage)
    }
   }
  }
  useEffect(() => {
    getAllOrder(1);
  }, []);
  return (
    <div id="content" className="container-fluid pt-3">
      <div className="card">
        <div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
          <h5 className="m-0 ">Danh sách đơn hàng</h5>
          <div className="form-search form-inline">
            <form action="#" style={{ display: "flex" }}>
              <input
                type=""
                className="form-control form-search me-3"
                placeholder="Tìm kiếm"
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
                <th scope="col">STT</th>
                <th scope="col">Mã Đơn</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Giá trị</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Hình thức thanh toán</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((item, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr>
                    <th scope="row">{(currentPage - 1) * rows + index + 1}</th>
                    <td>{item.order_code}</td>
                    <td>{item.order_name}</td>
                    <td>{item.phone}</td>
                    <td>{formatter.format(item.price_total)}</td>
                    {item.order_status == 0 && (
                      <td>
                        <span className="badge text-bg-warning">
                          Đang xử lý
                        </span>
                      </td>
                    )}
                    {item.order_status == 1 && (
                      <td>
                        <span className="badge text-bg-primary">
                          Đang vận chuyển
                        </span>
                      </td>
                    )}
                    {item.order_status == 2 && (
                      <td>
                        <span className="badge text-bg-success">
                          Đã hoàn thành
                        </span>
                      </td>
                    )}
                    {item.order_status == 3 && (
                      <td>
                        <span className="badge text-bg-danger">Đã hủy</span>
                      </td>
                    )}
                    {item.payment == 1 && (
                      <td>
                        <span className="badge text-bg-primary">
                          Thanh toán tại nhà
                        </span>
                      </td>
                    )}
                    {item.payment == 2 && (
                      <td>
                        <span className="badge text-bg-success">
                          Đã thanh toán online
                        </span>
                      </td>
                    )}
                    <td>{item.created_at}</td>
                    <td>
                    <a
                        className="btn btn-danger btn-sm rounded-0 text-white mx-2"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Chi tiết đơn hàng"
                        onClick={()=>handleDeleteOrder(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                      <a
                        className="btn btn-primary btn-sm rounded-0 text-white"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Chi tiết đơn hàng"
                        onClick={()=>getOrderDetail(item.id)}
                      >
                        <FontAwesomeIcon icon={faEllipsis} />
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
      <DetailOrder
        show={show}
        setShow={setShow}
        order={order}
        detailOrder={detailOrder}
        setOrder={setOrder}
        getAllOrder={getAllOrder}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Order;
