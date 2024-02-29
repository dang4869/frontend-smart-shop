"use client";
import FooterModule from "@/components/Footer/footer.module";
import HeaderModule from "@/components/Header/header.module";
import img_pro_11 from "../../../public/image/img-pro-11.png";
import img_pro_23 from "../../../public/image/img-pro-23.png";
import Image from "next/image";
import "./cart.scss";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouse,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/slices/cartSlices";
import { useEffect, useState } from "react";
import Link from "next/link";

function Cart() {


  const [product, setProduct] = useState<IProduct | null>(null);
  const dispatch = useDispatch()
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const { loading, cartItems, itemsPrice, totalPrice } = useSelector(
    (state: any) => state.cart
  );
  const [qty, setQty] = useState(1)

  let TotalCart=0;
  Object.keys(cartItems).forEach(function(item){
      TotalCart+=cartItems[item].quantity * cartItems[item].price;
  });
  return (
    <>
      <HeaderModule />
      <div id="main-content-wp" className="cart-page">
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
                      Giỏ hàng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="wrapper" className="wp-inner clearfix">
            <div className="section" id="info-cart-wp">
              <div className="section-detail table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td>STT</td>
                      <td>Ảnh sản phẩm</td>
                      <td>Tên sản phẩm</td>
                      <td>Giá sản phẩm</td>
                      <td>Số lượng</td>
                      <td colSpan={2}>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: any, index: any) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <a href="" title="" className="thumb">
                              <Image src={img_pro_11} alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="" title="" className="name-product">
                              {item.name}
                            </a>
                          </td>
                          <td>{formatter.format(item.price)}</td>
                          <td>
                          <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(decreaseQuantity(index))}>-</span>
                            <input
                              type="text"
                              name="num-order"
                              value={item.quantity}
                              className="num-order"
                            />
                            <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>dispatch(increaseQuantity(index))}>+</span>
                          </td>
                          <td>{formatter.format(item.price * item.quantity)}</td>
                          <td>
                            <a type="button" className="del-product" onClick={()=>dispatch(removeFromCart(index))}>
                              <FontAwesomeIcon icon={faTrash} />
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={7}>
                        <div className="clearfix" style={{ textAlign: "end" }}>
                          <p id="total-price" className="fl-right">
                            Tổng giá:{" "}
                            <span>{formatter.format(TotalCart)}</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={7}>
                        <div className="clearfix" style={{ textAlign: "end" }}>
                          <div className="fl-right">
                            <a href="" title="" id="update-cart">
                              Cập nhật giỏ hàng
                            </a>
                            <Link
                              href={'/thanh-toan'}
                              title=""
                              id="checkout-cart"
                            >
                              Thanh toán
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="section" id="action-cart-wp">
              <div className="section-detail">
                <p className="title">
                  Click vào <span>“Cập nhật giỏ hàng”</span> để cập nhật số
                  lượng. Nhập vào số lượng <span>0</span> để xóa sản phẩm khỏi
                  giỏ hàng. Nhấn vào thanh toán để hoàn tất mua hàng.
                </p>
                <a href="?page=home" title="" id="buy-more">
                  Mua tiếp
                </a>
                <br />
                <a href="" title="" id="delete-cart">
                  Xóa giỏ hàng
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <FooterModule />
    </>
  );
}

export default Cart;
