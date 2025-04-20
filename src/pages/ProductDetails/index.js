import React, { useRef } from "react";
import { styled, emphasize } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { HiCheckBadge } from "react-icons/hi2";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import UserAvatarImgComponent from "../../components/UserAvatarImgComponent";
import { Button } from "@mui/material";
import { FaReply } from "react-icons/fa";

// breadcrumb code
const StyledBreadcrum = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {
  const productSliderBig = useRef();
  const productSliderSml = useRef();

  const goToSlide = (index) => {
    productSliderBig.current.slickGoTo(index);
    productSliderSml.current.slickGoTo(index);
  };
  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs area-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrum
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrum label="Products" component="a" href="#" />
            <StyledBreadcrum label="Product View" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Gallery</h6>
                <Slider
                  {...productSliderOptions}
                  ref={productSliderBig}
                  className="sliderBig mb-2"
                >
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/06.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/07.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                </Slider>

                <Slider
                  {...productSliderSmlOptions}
                  ref={productSliderSml}
                  className="sliderSml"
                >
                  <div className="item" onClick={() => goToSlide(0)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(5)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/06.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                  <div className="item" onClick={() => goToSlide(6)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/07.webp"
                      alt="productView"
                      className="w-100"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Product Details</h6>

                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>

                <div className="productInfo mt-4">
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategoryAlt />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Man's</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaTags />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>PARTY</span>
                          </li>
                          <li className="list-inline-item">
                            <span>DRESS</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SMART</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MAN</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosColorPalette />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>
                          <li className="list-inline-item">
                            <span>BLUE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>WHITE</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaShoppingCart />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(68) Piece</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdRateReview />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(03) Review</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <HiCheckBadge />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      <span>16 Jan 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h6 className="mt-4 mb-3">Product Description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium? Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>
            <br />
            <h6 className="mt-4 mb-4">Rating Analytics</h6>
            <div className="row">
              <div className="col-md-6" style={{ paddingLeft: "11rem" }}>
                <div className="ratingSection d-flex flex-column align-items-center">
                  <div className="ratingrow d-flex align-items-center">
                    <span className="col1">5 Star</span>
                    <span className="col2">
                      <div className="progress">
                        <div
                          className="progressBar"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </span>
                    <span className="col3">(45)</span>
                  </div>
                  <div className="ratingrow d-flex align-items-center">
                    <span className="col1">4 Star</span>
                    <span className="col2">
                      <div className="progress">
                        <div
                          className="progressBar"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </span>
                    <span className="col3">(40)</span>
                  </div>
                  <div className="ratingrow d-flex align-items-center">
                    <span className="col1">3 Star</span>
                    <span className="col2">
                      <div className="progress">
                        <div
                          className="progressBar"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </span>
                    <span className="col3">(25)</span>
                  </div>
                  <div className="ratingrow d-flex align-items-center">
                    <span className="col1">2 Star</span>
                    <span className="col2">
                      <div className="progress">
                        <div
                          className="progressBar"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </span>
                    <span className="col3">(5)</span>
                  </div>
                  <div className="ratingrow d-flex align-items-center">
                    <span className="col1">1 Star</span>
                    <span className="col2">
                      <div className="progress">
                        <div
                          className="progressBar"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </span>
                    <span className="col3">(10)</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="avgRating d-flex flex-column align-items-center  justify-content-center">
                  <h5>Total Reviews (125)</h5>
                  <span className="ratingBig">4.8</span>
                  <Rating
                    name="read-only"
                    defaultValue={4.6}
                    precision={0.1}
                    size="medium"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <br />
            <h6 className="mt-4 mb-4">Customer Reviews</h6>
            <div className="reviewsSection">
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="userInfoBox d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img={
                          "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        }
                        lg={true}
                      />
                      <div className="userInfo pl-3">
                        <h6>Swapnil Pawar</h6>
                        <p className="mb-0">25 minutes ago!</p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                      readOnly
                    />
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="ml-auto btn-blue btn-big">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="userInfoBox d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img={
                          "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        }
                        lg={true}
                      />
                      <div className="userInfo pl-3">
                        <h6>Swapnil Pawar</h6>
                        <p className="mb-0">25 minutes ago!</p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                      readOnly
                    />
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="ml-auto btn-blue btn-big">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow reply">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="userInfoBox d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img={
                          "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        }
                        lg={true}
                      />
                      <div className="userInfo pl-3">
                        <h6>Swapnil Pawar</h6>
                        <p className="mb-0">25 minutes ago!</p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                      readOnly
                    />
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="ml-auto btn-blue btn-big">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
              <div className="reviewsRow">
                <div className="row">
                  <div className="col-sm-7">
                    <div className="userInfoBox d-flex align-items-center mb-3">
                      <UserAvatarImgComponent
                        img={
                          "https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        }
                        lg={true}
                      />
                      <div className="userInfo pl-3">
                        <h6>Swapnil Pawar</h6>
                        <p className="mb-0">25 minutes ago!</p>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      defaultValue={4.5}
                      precision={0.5}
                      size="medium"
                      readOnly
                    />
                  </div>
                  <div className="col-sm-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="ml-auto btn-blue btn-big">
                        <FaReply /> &nbsp; Reply
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quo nostrum dolore fugiat ducimus labore debitis unde
                    autem recusandae? Eius harum tempora quis minima, adipisci
                    natus quod magni omnis quas.
                  </p>
                </div>
              </div>
            </div>
            <h6 className="mt-4 mb-4">Review Reply Form</h6>
            <form className="reviewForm">
              <textarea name="reviewForm" placeholder="write here"></textarea>
              <Button className="w-100 btn-blue btn-big mt-4">
                Drop Your Replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
