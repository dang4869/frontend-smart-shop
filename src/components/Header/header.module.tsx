"use client";
import { Container } from "react-bootstrap";
import logo from "../../../public/image/logo.png";
import "./header.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import img_pro_11 from "../../../public/image/img-pro-11.png";
import Link from "next/link";
import { useSelector } from "react-redux";
function HeaderModule() {
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const { loading, cartItems, numberCart } = useSelector(
    (state: any) => state.cart
  );

  let TotalCart=0;
  Object.keys(cartItems).forEach(function(item){
      TotalCart+=cartItems[item].quantity * cartItems[item].price;
  });

  return (
    <div id="header-wp">
      <div id="head-top">
        <Container>
          <div className="wp-inner">
            <a href="" title="" id="payment-link">
              Hình thức thanh toán
            </a>
            <div id="main-menu-wp">
              <ul id="main-menu">
                <li>
                  <a href="?page=home" title="">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="?page=category_product" title="">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="?page=blog" title="">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="?page=detail_blog" title="">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="?page=detail_blog" title="">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div id="head-body">
        <Container>
          <div className="wp-inner">
            <Link href={"/"} title="" id="logo">
              <Image src={logo} alt="logo" />
            </Link>
            <div id="search-wp">
              <form method="POST" action="">
                <input
                  type="text"
                  name="s"
                  id="s"
                  placeholder="Nhập từ khóa tìm kiếm tại đây!"
                />
                <button type="submit" id="sm-s">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div id="action-wp">
              <div id="advisory-wp">
                <div className="support">
                  <span className="title">Tư vấn</span>
                  <span className="phone">0987.654.321</span>
                </div>
                <FontAwesomeIcon icon={faPhone} className="icon-phone" />
              </div>
              <div id="cart-wp">
                <div id="btn-cart">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="icon-cart"
                  />
                  <span id="num">
                    {numberCart}
                  </span>
                </div>
                {loading ? (
                  <p>Loading...</p>
                ) : cartItems.length == 0 ? (
                  <div id="dropdown">
                    <p className="desc">Không có sản phẩm nào trong giỏ hàng</p>
                  </div>
                ) : (
                  <div id="dropdown">
                    <p className="desc">
                      Có{" "}
                      <span>
                        {numberCart}
                        sản phẩm
                      </span>{" "}
                      trong giỏ hàng
                    </p>
                    <ul className="list-cart">
                      {cartItems.map((item:any) => {
                        return(
                          // eslint-disable-next-line react/jsx-key
                          <li>
                          <a href="" title="" className="thumb fl-left">
                            <Image src={img_pro_11} alt="" />
                          </a>
                          <div className="info fl-right">
                            <a href={`san-pham/${item.slug}`} title="" className="product-name">
                              {item.name}
                            </a>
                            <p className="price">{formatter.format(item.price)}</p>
                            <p className="qty">
                              Số lượng: <span>{item.quantity}</span>
                            </p>
                          </div>
                        </li>
                        )
                      })}
                    </ul>
                    <div className="total-price">
                      <p className="title fl-left">Tổng:</p>
                      <p className="price fl-right">{formatter.format(TotalCart)}</p>
                    </div>
                    <div className="action-cart">
                      <Link
                        href={"/gio-hang"}
                        title="Giỏ hàng"
                        className="view-cart"
                      >
                        Giỏ hàng
                      </Link>
                      <Link
                        href={"/thanh-toan"}
                        title="Thanh toán"
                        className="checkout"
                      >
                        Thanh toán
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default HeaderModule;
