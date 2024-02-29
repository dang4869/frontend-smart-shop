"use client";
import { Container } from "react-bootstrap";
import "./detailProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHouse,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import banner from "../../../../public/image/banner.png";
import img_pro_18 from "../../../../public/image/img-pro-18.png";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import { getProductListCategory, getProductToSlug } from "@/services/productService";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlices";
import { AddCart } from "@/redux/action";
function DetailProduct({ params }: { params: { slug: string } }) {
  const [detailProduct, setDetailProduct] = useState<IProduct | null>(null);
  const [productList, setProductList] = useState<IProduct[] | null>(null);
  const dispatch = useDispatch()

  // const { cartItems } = useSelector((state:any) => state.cart)
  // const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    dispatch(addToCart(detailProduct))
  }
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
  const DetailProduct = async () => {
    const res:any = await getProductToSlug(params.slug);
    if(res && res.data){
      setDetailProduct(res.data);
    }
  };
  const ProductCategryList = async () => {
    const res:any = await getProductListCategory(params.slug)
    if(res && res.data){
       setProductList(res.data);
    }
  }
  useEffect(() => {
    DetailProduct();
    ProductCategryList()
  }, []);
  
  
  return (
    <>
      <div id="main-content-wp" className="clearfix detail-product-page">
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
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ marginRight: 5 }}
                      />
                      Điện thoại
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-content-detail-wp">
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
                <div className="section" id="banner-wp">
                  <div className="section-detail">
                    <a href="" title="" className="thumb">
                      <Image src={banner} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-content fl-right">
                <div className="section" id="detail-product-wp">
                  <div className="section-detail clearfix">
                    <div className="thumb-wp fl-left">
                      <a href="" title="" id="main-thumb">
                        <img
                          id="zoom"
                          src="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_70aaf2_700x700_maxb.jpg"
                        />
                      </a>
                      <div id="list-thumb">
                        <a
                          href=""
                          data-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_70aaf2_700x700_maxb.jpg"
                        >
                          <img
                            id="zoom"
                            src="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_02d57e_50x50_maxb.jpg"
                          />
                        </a>
                        <a
                          href=""
                          data-image="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_70aaf2_700x700_maxb.jpg"
                        >
                          <img
                            id="zoom"
                            src="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_02d57e_50x50_maxb.jpg"
                          />
                        </a>
                        <a
                          href=""
                          data-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_70aaf2_700x700_maxb.jpg"
                        >
                          <img
                            id="zoom"
                            src="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_02d57e_50x50_maxb.jpg"
                          />
                        </a>
                        <a
                          href=""
                          data-image="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_70aaf2_700x700_maxb.jpg"
                        >
                          <img
                            id="zoom"
                            src="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_02d57e_50x50_maxb.jpg"
                          />
                        </a>
                        <a
                          href=""
                          data-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_70aaf2_700x700_maxb.jpg"
                        >
                          <img
                            id="zoom"
                            src="https://media3.scdn.vn/img2/2017/10_30/sxlpFs_simg_02d57e_50x50_maxb.jpg"
                          />
                        </a>
                        <a
                          href=""
                          data-image="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_ab1f47_350x350_maxb.jpg"
                          data-zoom-image="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_70aaf2_700x700_maxb.jpg"
                        >
                          <img
                            id="zoom"
                            src="https://media3.scdn.vn/img2/2017/10_30/BlccRg_simg_02d57e_50x50_maxb.jpg"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="thumb-respon-wp fl-left">
                      <img src="public/images/img-pro-01.png" alt="" />
                    </div>
                    <div className="info fl-right">
                      <h3 className="product-name">
                       {detailProduct?.product_name}
                      </h3>
                      <div className="desc">
                        <p>{detailProduct?.product_desc}</p>
                        <p>Cache upto 2.7 GHz</p>
                        <p>Bộ nhớ RAM :4 GB (DDR3 Bus 1600 MHz)</p>
                        <p>Đồ họa :Intel HD Graphics</p>
                        <p>Ổ đĩa cứng :500 GB (HDD)</p>
                      </div>
                      <div className="num-product">
                        <span className="title">Sản phẩm: </span>
                        <span className="status">Còn hàng</span>
                      </div>
                      <p className="price">{formatter.format(detailProduct?.price)}</p>
                      <div id="num-order-wp">
                        <a title="" id="minus">
                          <FontAwesomeIcon icon={faMinus} />
                        </a>
                        <input
                          type="text"
                          name="num-order"
                          value="1"
                          id="num-order"
                        />
                        <a title="" id="plus">
                          <i className="fa fa-plus"></i>
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                      </div>
                      <a
                        title="Thêm giỏ hàng"
                        className="add-cart"
                        onClick={addToCartHandler}
                      >
                        Thêm giỏ hàng
                      </a>
                    </div>
                  </div>
                </div>
                <div className="section" id="post-product-wp">
                  <div className="section-head">
                    <h3 className="section-title">Mô tả sản phẩm</h3>
                  </div>
                  <div className="section-detail">
                    {detailProduct?.product_detail}
                  </div>
                </div>
                <div className="section" id="same-category-wp">
                  <div className="section-head">
                    <h3 className="section-title">Cùng chuyên mục</h3>
                  </div>
                  <div className="section-detail">
                  <Carousel responsive={responsive} className="list-item">
                    {productList ? (
                      productList?.map((item) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <li key={item.id}>
                            <Link
                              href={`/san-pham/${item.slug}`}
                              title=""
                              className="thumb"
                            >
                              <Image src={img_pro_18} alt="" />
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
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default DetailProduct;
