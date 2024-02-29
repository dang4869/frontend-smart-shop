"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getAllOrders, getDetailOrder } from "@/services/orderServices";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import DetailOrder from "@/components/modal/detail.order.modal";
function Admin() {
  const [orders, setOrders] = useState<IOrders[] | null>(null);
  const [orderSuccess, setOrderSuccess] = useState<number>(0);
  const [orderLoading, setOrderLoading] = useState<number>(0);
  const [orderCancel, setOrderCancel] = useState<number>(0);
  const [orderTotal, setOrderTotal] = useState<number>(0);
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
    const res:any = await getAllOrders(page);
    if (res && res.data) {
      setOrders(res.data.data);
      setOrderSuccess(res.order_success);
      setOrderLoading(res.order_loading);
      setOrderCancel(res.order_cancel);
      setOrderTotal(res.total);
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
  useEffect(() => {
    getAllOrder(1);
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">ĐƠN HÀNG THÀNH CÔNG</div>
            <div className="card-body">
              <h5 className="card-title">{orderSuccess}</h5>
              <p className="card-text">Đơn hàng giao dịch thành công</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">ĐANG XỬ LÝ</div>
            <div className="card-body">
              <h5 className="card-title">{orderLoading}</h5>
              <p className="card-text">Số lượng đơn hàng đang xử lý</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">DOANH SỐ</div>
            <div className="card-body">
              <h5 className="card-title">{formatter.format(orderTotal)}</h5>
              <p className="card-text">Doanh số hệ thống</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">ĐƠN HÀNG HỦY</div>
            <div className="card-body">
              <h5 className="card-title">{orderCancel}</h5>
              <p className="card-text">Số đơn bị hủy trong hệ thống</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header font-weight-bold">ĐƠN HÀNG MỚI</div>
        <div className="card-body">
          <table className="table table-striped">
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
                    <td>{item.order_status}</td>
                    <td>{item.created_at}</td>
                    <td>
                      <a
                        className="btn btn-primary btn-sm rounded-0 text-white"
                        type="button"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Chi tiết đơn hàng "
                        onClick={() => getOrderDetail(item.id)}
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

export default Admin;
