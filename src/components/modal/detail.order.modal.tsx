import { updateOrderSatus } from "@/services/orderServices";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
interface IProp {
  show: boolean;
  setShow: (value: boolean) => void;
  order: any;
  setOrder: (value: IOrders | null) => void;
  detailOrder: IOrderDetail[] | null;
  getAllOrder: (page: any) => Promise<void>;
  currentPage: number;
}
function DetailOrder(props: IProp) {
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const [status, setStatus] = useState<number | string>();
  const { show, setShow, order, detailOrder, getAllOrder, currentPage } = props;

  const handleClose = () => setShow(false);
  let listActions = ["Đang xử lý", "Đang vận chuyển", "Hoàn Thành", "Đã hủy"];
  const updateStatus = async (id: any) => {
    const res:any = await updateOrderSatus(id, { status: status });
    if (res && res.status === true) {
      toast.success("Cập nhật trạng thái thành công");
      getAllOrder(currentPage);
    }
  };

  return (
    <>
      {order ? (
        <Modal show={show} onHide={handleClose} fullscreen={true}>
          <Modal.Header closeButton>
            <Modal.Title>Chi tiết đơn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card">
              <div>
                <div className="card-header font-weight-bold">
                  Thông tin khách hàng
                </div>
                <div className="card-body">
                  <table className="table table-striped table-checkall">
                    <tbody>
                      <tr>
                        <td>Mã đơn hàng:</td>
                        <td colSpan={2}>{order.order_code}</td>
                      </tr>
                      <tr>
                        <td>Tên khách hàng:</td>
                        <td colSpan={2}>{order.order_name}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td colSpan={2}>{order.email}</td>
                      </tr>
                      <tr>
                        <td>Địa chỉ:</td>
                        <td colSpan={2}> {order.address}</td>
                      </tr>
                      <tr>
                        <td>Số điện thoại:</td>
                        <td colSpan={2}>{order.phone}</td>
                      </tr>
                      <tr>
                        <td>Ngày tạo:</td>
                        <td colSpan={2}>{order.created_at}</td>
                      </tr>
                      <tr>
                        <td>Ghi chú:</td>
                        <td colSpan={2}>{order.notes}</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="text-uppercase font-weight-bold">
                            Tổng tiền:
                          </h6>
                        </td>
                        <td>
                          <h6 className="text-uppercase font-weight-bold">
                            {formatter.format(order.price_total)}
                          </h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="form-group mb-2">
                    <label>Cập nhật trạng thái</label>
                  </div>
                  <div className="form-group mx-sm-3 mb-2">
                    <select
                      className="form-control"
                      name="order_status"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      {listActions.map((act, index) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <option
                            value={index}
                            selected={index == order.order_status}
                          >
                            {act}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 mr-3"
                    value="status_update"
                    name="status_update_btn"
                    onClick={() => updateStatus(order.id)}
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header font-weight-bold">
                  Chi tiết đơn hàng
                </div>
                <div className="card-body">
                  <table className="table table-striped table-checkall">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detailOrder?.map((item, index) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src="http://localhost/smartshop/public/uploads/product/DS-3WR12GC.jpg"
                                alt=""
                                height="auto"
                                width="80px"
                              />
                            </td>
                            <td>
                              <a href="">{item.product.product_name}</a>
                            </td>
                            <td>{formatter.format(item.product.price)}</td>
                            <td>{item.product_qty}</td>
                            <td>{formatter.format(item.total)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}

export default DetailOrder;
