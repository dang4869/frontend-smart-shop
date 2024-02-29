"use client";
import FooterModule from "@/components/Footer/footer.module";
import HeaderModule from "@/components/Header/header.module";
import "./checkout.scss";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons/fa1";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addOrder, addOrderDetail } from "@/services/orderServices";
import { toast } from "react-toastify";
function CheckOut() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({ mode: "all" });
  const { loading, cartItems } = useSelector((state: any) => state.cart);
  let TotalCart = 0;
  Object.keys(cartItems).forEach(function (item) {
    TotalCart += cartItems[item].quantity * cartItems[item].price;
  });
  const handleCheckOut = async (data: any) => {
    data.price_total = TotalCart;
    const resAddOrder = await addOrder(data);
    console.log(resAddOrder);
    let orderId = 0;
    if (resAddOrder && resAddOrder.data) {
      orderId = resAddOrder.data;
    }
    let orderData: any = {};
    cartItems.forEach((item: any) => {
      orderData.order_id = orderId;
      orderData.product_id = item.id;
      orderData.product_qty = item.quantity;
      orderData.total = item.quantity * item.price;
      addOrderDetail(orderData)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    });
    toast.success("Thêm mới đơn hàng thành công");
  };
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  return (
    <>
      <HeaderModule />
      <div id="main-content-wp" className="checkout-page">
        <Container>
          <div className="section" id="breadcrumb-wp">
            <div className="wp-inner">
              <div className="section-detail">
                <ul className="list-item clearfix">
                  <li>
                    <a href="?page=home" title="">
                      <FontAwesomeIcon icon={faHouse} />
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="" title="">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ marginRight: 5 }}
                      />
                      Thanh toán
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="wrapper" className="wp-inner clearfix">
            <div className="section" id="customer-info-wp">
              <div className="section-head">
                <h1 className="section-title">Thông tin khách hàng</h1>
              </div>
              <div className="section-detail">
                <div className="form-row clearfix">
                  <div className="form-col fl-left">
                    <label htmlFor="fullname">Họ tên</label>
                    <input
                      type="text"
                      id="fullname"
                      className={`form-control mt-2 ${
                        errors.order_name ? "is-invalid" : ""
                      }`}
                      {...register("order_name", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    <div className="invalid-feedback">
                      {errors.order_name?.type === "required" &&
                        "Không được để trống trường họ và tên"}
                      {errors.order_name?.type === "minLength" &&
                        "Họ và tên phải có ít nhất 6 ký tự"}
                    </div>
                  </div>
                  <div className="form-col fl-right">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} />
                  </div>
                </div>
                <div className="form-row clearfix">
                  <div className="form-col fl-left">
                    <label htmlFor="address">Địa chỉ</label>
                    <input
                      type="text"
                      id="address"
                      className={`form-control mt-2 ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      {...register("address", {
                        required: true,
                        minLength: 4,
                      })}
                    />
                    <div className="invalid-feedback">
                      {errors.address?.type === "required" &&
                        "Không được để trống trường địa chỉ"}
                      {errors.address?.type === "minLength" &&
                        "Địa chỉ phải có ít nhất 6 ký tự"}
                    </div>
                  </div>
                  <div className="form-col fl-right">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                      type="tel"
                      id="phone"
                      className={`form-control mt-2 ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      {...register("phone", {
                        required: true,
                      })}
                    />
                    <div className="invalid-feedback">
                      {errors.phone?.type === "required" &&
                        "Không được để trống trường số điện thoại"}
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="notes">Ghi chú</label>
                    <textarea {...register("notes")}></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="section" id="order-review-wp">
              <div className="section-head">
                <h1 className="section-title">Thông tin đơn hàng</h1>
              </div>
              <div className="section-detail">
                <table className="shop-table">
                  <thead>
                    <tr>
                      <td>Sản phẩm</td>
                      <td>Tổng</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: any) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr className="cart-item">
                          <td className="product-name">
                            {item.name}
                            <strong className="product-quantity">x {item.quantity}</strong>
                          </td>
                          <td className="product-total">{formatter.format(item.quantity * item.price)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="order-total">
                      <td>Tổng đơn hàng:</td>
                      <td>
                        <strong className="total-price">{formatter.format(TotalCart)}</strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div id="payment-checkout-wp">
                  <ul id="payment_methods">
                    <li>
                      <input
                        type="radio"
                        id="direct-payment"
                        value="1"
                        {...register("payment")}
                        checked
                      />
                      <label htmlFor="direct-payment">Thanh toán tại nhà</label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="payment-home"
                        value="2"
                        {...register("payment")}
                      />
                      <label htmlFor="payment-home">Thanh toán online</label>
                    </li>
                  </ul>
                </div>
                <div className="place-order-wp clearfix">
                  <input
                    type="submit"
                    id="order-now"
                    value="Đặt hàng"
                    onClick={handleSubmit(handleCheckOut)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <FooterModule />
    </>
  );
}

export default CheckOut;
