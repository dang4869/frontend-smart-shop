"use client";
import Image from "next/image";
import HeaderModule from "@/components/Header/header.module";
import FooterModule from "@/components/Footer/footer.module";
import "./home.scss";
import icon_1 from "../../public/image/icon-1.png";
import icon_2 from "../../public/image/icon-2.png";
import icon_3 from "../../public/image/icon-3.png";
import icon_4 from "../../public/image/icon-4.png";
import icon_5 from "../../public/image/icon-5.png";
import img_pro_16 from "../../public/image/img-pro-16.png";
import img_pro_13 from "../../public/image/img-pro-13.png";
import img_pro_17 from "../../public/image/img-pro-17.png";
import img_pro_5 from "../../public/image/img-pro-05.png";
import { Carousel as Carousels, Container } from "react-bootstrap";
import slide_1 from "../../public/image/slider-01.png";
import slide_2 from "../../public/image/slider-02.png";
import slide_3 from "../../public/image/slider-03.png";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getLaptop,
  getNewProduct,
  getOutstanding,
  getPhone,
} from "@/services/homeService";
import { useDispatch } from "react-redux";
import { hideLoading } from "@/redux/slices/cartSlices";

export default function Home() {
  const dispatch = useDispatch()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const formatter = new Intl.NumberFormat("vi", {
    style: "currency",
    currency: "VND",
  });
  const [productNews, setProductNews] = useState<IProduct[] | null>(null);
  const [productOutstanding, setProductOustanding] = useState<
    IProduct[] | null
  >(null);
  const [productPhone, setProductPhone] = useState<IProduct[] | null>(null);
  const [productLaptop, setProductLaptop] = useState<IProduct[] | null>(null);
  const getProductNew = async () => {
    const res = await getNewProduct();
    if (res && res.data) {
      setProductNews(res.data);
    }
  };
  const getProductOutstanding = async () => {
    const res = await getOutstanding();
    if (res && res.data) {
      setProductOustanding(res.data);
    }
  };
  const getProductPhone = async () => {
    const res = await getPhone();
    if (res && res.data) {
      setProductPhone(res.data);
    }
  };
  const getProductLaptop = async () => {
    const res = await getLaptop();
    if (res && res.data) {
      setProductLaptop(res.data);
    }
  };
  useEffect(() => {
    dispatch(hideLoading())
    getProductNew();
    getProductOutstanding();
    getProductPhone();
    getProductLaptop();
  }, [dispatch]);
  
  
  return (
    <>
      <HeaderModule />
      <div id="main-content-wp" className="home-page clearfix">
        <Container>
          <div className="wp-inner">
            <div className="sidebar fl-left">
              <div className="section" id="category-product-wp">
                <div className="section-head">
                  <h3 className="section-title">Danh mục sản phẩm</h3>
                </div>
                <div className="secion-detail">
                  <ul className="list-item">
                    <li>
                      <Link href={"/san-pham"} title="">
                        Điện thoại
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href={'/detailproduct/laptop'} title="">
                            Iphone
                          </Link>
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
              <div className="section" id="selling-wp">
                <div className="section-head">
                  <h3 className="section-title">Sản phẩm mới nhất</h3>
                </div>
                <div className="section-detail">
                  <ul className="list-item">
                    {productNews?.map((item) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li className="pro-sell" key={item.id}>
                          <Link
                            href={`/san-pham/${item.slug}`}
                            title=""
                            className="thumb fl-left"
                          >
                            <Image src={img_pro_13} alt="" />
                          </Link>
                          <div className="info fl-right">
                            <Link
                              href={`/san-pham/${item.slug}`}
                              title=""
                              className="product-name"
                            >
                              {item.product_name}
                            </Link>
                            <div className="price">
                              <span className="new">
                                {formatter.format(item.price)}
                              </span>
                            </div>
                            <a href="" title="" className="buy-now">
                              Mua ngay
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="section" id="banner-wp">
                <div className="section-detail">
                  <a href="" title="" className="thumb">
                    <img src="public/images/banner.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="main-content fl-right">
              <div className="section" id="slider-wp">
                <Carousels>
                  <Carousels.Item>
                    <Image src={slide_1} alt="First slide" />
                  </Carousels.Item>

                  <Carousels.Item>
                    <Image src={slide_2} alt="Second slide" />
                  </Carousels.Item>

                  <Carousels.Item>
                    <Image src={slide_3} alt="Third slide" />
                  </Carousels.Item>
                </Carousels>
              </div>
              <div className="section" id="support-wp">
                <div className="section-detail">
                  <ul className="list-item clearfix">
                    <li>
                      <div className="thumb">
                        <Image src={icon_1} alt="" />
                      </div>
                      <h3 className="title">Miễn phí vận chuyển</h3>
                      <p className="desc">Tới tận tay khách hàng</p>
                    </li>
                    <li>
                      <div className="thumb">
                        <Image src={icon_2} alt="" />
                      </div>
                      <h3 className="title">Tư vấn 24/7</h3>
                      <p className="desc">1900.9999</p>
                    </li>
                    <li>
                      <div className="thumb">
                        <Image src={icon_3} alt="" />
                      </div>
                      <h3 className="title">Tiết kiệm hơn</h3>
                      <p className="desc">Với nhiều ưu đãi cực lớn</p>
                    </li>
                    <li>
                      <div className="thumb">
                        <Image src={icon_4} alt="" />
                      </div>
                      <h3 className="title">Thanh toán nhanh</h3>
                      <p className="desc">Hỗ trợ nhiều hình thức</p>
                    </li>
                    <li>
                      <div className="thumb">
                        <Image src={icon_5} alt="" />
                      </div>
                      <h3 className="title">Đặt hàng online</h3>
                      <p className="desc">Thao tác đơn giản</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section" id="feature-product-wp">
                <div className="section-head">
                  <h3 className="section-title">Sản phẩm nổi bật</h3>
                </div>
                <div className="section-detail">
                  <Carousel responsive={responsive} className="list-item">
                    {productOutstanding ? (
                      productOutstanding?.map((item) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <li key={item.id}>
                            <Link
                              href={`/san-pham/${item.slug}`}
                              title=""
                              className="thumb"
                            >
                              <Image src={img_pro_5} alt="" />
                            </Link>
                            <Link
                              href={`/san-pham/${item.slug}`}
                              title=""
                              className="product-name"
                            >
                              {item.product_name}
                            </Link>
                            <div className="price">
                              <span className="new">
                                {formatter.format(item.price)}
                              </span>
                            </div>
                            <div className="action clearfix">
                              <a
                                href="?page=cart"
                                title=""
                                className="add-cart fl-left"
                              >
                                Thêm giỏ hàng
                              </a>
                              <a
                                href="?page=checkout"
                                title=""
                                className="buy-now fl-right"
                              >
                                Mua ngay
                              </a>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <div />
                    )}
                  </Carousel>
                </div>
              </div>
              <div className="section" id="list-product-wp">
                <div className="section-head">
                  <h3 className="section-title">Điện thoại</h3>
                </div>
                <div className="section-detail">
                  <ul className="list-item clearfix">
                    {productPhone?.map((item) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li>
                          <Link
                            href={`/san-pham/${item.slug}`}
                            title=""
                            className="thumb"
                          >
                            <Image src={img_pro_16} alt="" />
                          </Link>
                          <Link
                            href={`/san-pham/${item.slug}`}
                            title=""
                            className="product-name"
                          >
                            {item.product_name}
                          </Link>
                          <div className="price">
                            <span className="new">
                              {formatter.format(item.price)}
                            </span>
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
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="section" id="list-product-wp">
                <div className="section-head">
                  <h3 className="section-title">Laptop</h3>
                </div>
                <div className="section-detail">
                  <ul className="list-item clearfix">
                    {productLaptop?.map((item) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li>
                          <Link
                            href={`/san-pham/${item.slug}`}
                            title=""
                            className="thumb"
                          >
                            <Image src={img_pro_17} alt="" />
                          </Link>
                          <Link
                            href={`/san-pham/${item.slug}`}
                            title=""
                            className="product-name"
                          >
                            {item.product_name}
                          </Link>
                          <div className="price">
                            <span className="new">
                              {formatter.format(item.price)}
                            </span>
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
                      );
                    })}
                  </ul>
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
