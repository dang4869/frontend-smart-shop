import { Container } from "react-bootstrap";
import img_pro_17 from "../../../public/image/img-pro-17.png"
import banner from "../../../public/image/banner.png"
import "./categoryProduct.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
function CategoryProduct() {
  return (
    <div id="main-content-wp" className="clearfix category-product-page">
      <Container>
        <div className="wp-inner">
          <div className="secion" id="breadcrumb-wp">
            <div className="secion-detail">
              <ul className="list-item clearfix">
                <li>
                  <a href="" title="">
                    <FontAwesomeIcon icon={faHouse} />
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="" title="">
                    <FontAwesomeIcon icon={faChevronRight} style={{marginRight:5}}/>
                    Điện thoại
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wp-content-main">
            <div className="sidebar fl-left">
              <div className="section" id="category-product-wp">
                <div className="section-head">
                  <h3 className="section-title">Danh mục sản phẩm</h3>
                </div>
                <div className="secion-detail">
                  <ul className="list-item">
                    <li>
                      <a href="?page=category_product" title="">
                        Điện thoại
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="?page=category_product" title="">
                            Iphone
                          </a>
                        </li>
                        <li>
                          <a href="?page=category_product" title="">
                            Samsung
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="?page=category_product" title="">
                                Iphone X
                              </a>
                            </li>
                            <li>
                              <a href="?page=category_product" title="">
                                Iphone 8
                              </a>
                            </li>
                            <li>
                              <a href="?page=category_product" title="">
                                Iphone 8 Plus
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="?page=category_product" title="">
                            Oppo
                          </a>
                        </li>
                        <li>
                          <a href="?page=category_product" title="">
                            Bphone
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="?page=category_product" title="">
                        Máy tính bảng
                      </a>
                    </li>
                    <li>
                      <a href="?page=category_product" title="">
                        laptop
                      </a>
                    </li>
                    <li>
                      <a href="?page=category_product" title="">
                        Tai nghe
                      </a>
                    </li>
                    <li>
                      <a href="?page=category_product" title="">
                        Thời trang
                      </a>
                    </li>
                    <li>
                      <a href="?page=category_product" title="">
                        Đồ gia dụng
                      </a>
                    </li>
                    <li>
                      <a href="?page=category_product" title="">
                        Thiết bị văn phòng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section" id="filter-product-wp">
                <div className="section-head">
                  <h3 className="section-title">Bộ lọc</h3>
                </div>
                <div className="section-detail">
                  <form method="POST" action="">
                    <table>
                      <thead>
                        <tr>
                          <td colSpan={2}>Giá</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>Dưới 500.000đ</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>500.000đ - 1.000.000đ</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>1.000.000đ - 5.000.000đ</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>5.000.000đ - 10.000.000đ</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>Trên 10.000.000đ</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <td colSpan={2}>Hãng</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="radio" name="r-brand" />
                          </td>
                          <td>Acer</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-brand" />
                          </td>
                          <td>Apple</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-brand" />
                          </td>
                          <td>Hp</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-brand" />
                          </td>
                          <td>Lenovo</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-brand" />
                          </td>
                          <td>Samsung</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-brand" />
                          </td>
                          <td>Toshiba</td>
                        </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                        <tr>
                          <td colSpan={2}>Loại</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>Điện thoại</td>
                        </tr>
                        <tr>
                          <td>
                            <input type="radio" name="r-price" />
                          </td>
                          <td>Laptop</td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </div>
              <div className="section" id="banner-wp">
                <div className="section-detail">
                  <a href="?page=detail_product" title="" className="thumb">
                    <Image src={banner} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="main-content fl-right">
              <div className="section" id="list-product-wp">
                <div className="section-head clearfix">
                  <h3 className="section-title fl-left">Laptop</h3>
                  <div className="filter-wp fl-right">
                    <p className="desc">Hiển thị 45 trên 50 sản phẩm</p>
                    <div className="form-filter">
                      <form method="POST" action="">
                        <select name="select">
                          <option value="0">Sắp xếp</option>
                          <option value="1">Từ A-Z</option>
                          <option value="2">Từ Z-A</option>
                          <option value="3">Giá cao xuống thấp</option>
                          <option value="3">Giá thấp lên cao</option>
                        </select>
                        <button type="submit">Lọc</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="section-detail">
                  <ul className="list-item clearfix">
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                       <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                    <li>
                      <a href="?page=detail_product" title="" className="thumb">
                      <Image src={img_pro_17} alt=""/>
                      </a>
                      <a
                        href="?page=detail_product"
                        title=""
                        className="product-name"
                      >
                        Laptop HP Probook 4430s
                      </a>
                      <div className="price">
                        <span className="new">17.900.000đ</span>
                        <span className="old">20.900.000đ</span>
                      </div>
                      <div className="action clearfix">
                        <a
                          href="?page=cart"
                          title="Thêm giỏ hàng"
                          className="add-cart fl-left"
                        >
                          Thêm giỏ hàng
                        </a>
                        <a
                          href="?page=checkout"
                          title="Mua ngay"
                          className="buy-now fl-right"
                        >
                          Mua ngay
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section" id="paging-wp">
                <div className="section-detail">
                  <ul className="list-item clearfix">
                    <li>
                      <a href="" title="">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="" title="">
                        3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategoryProduct;
