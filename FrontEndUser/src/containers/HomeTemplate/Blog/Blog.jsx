import React from "react";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";

function BlogDetail() {
  return (
    <>
      <div>
        <section className="hero hero-normal">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars" />
                    <span>All departments</span>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Fresh Meat</a>
                    </li>
                    <li>
                      <a href="#">Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Fruit &amp; Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                      <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                      <a href="#">Butter &amp; Eggs</a>
                    </li>
                    <li>
                      <a href="#">Fastfood</a>
                    </li>
                    <li>
                      <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                      <a href="#">Papayaya &amp; Crisps</a>
                    </li>
                    <li>
                      <a href="#">Oatmeal</a>
                    </li>
                    <li>
                      <a href="#">Fresh Bananas</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <SearchProduct />
                  <div className="hero__search__phone">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+65 11.188.888</h5>
                      <span>support 24/7 time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
        <section
          className="breadcrumb-section set-bg"
          style={{
            backgroundImage: "url(" + "assets/img/breadcrumb.jpg" + ")",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Blog</h2>
                  <div className="breadcrumb__option">
                    <a href="./">Home</a>
                    <span>Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Blog Section Begin */}
        <section className="blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="blog__sidebar">
                  <div className="blog__sidebar__search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit">
                        <span className="icon_search" />
                      </button>
                    </form>
                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Categories</h4>
                    <ul>
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Beauty (20)</a>
                      </li>
                      <li>
                        <a href="#">Food (5)</a>
                      </li>
                      <li>
                        <a href="#">Life Style (9)</a>
                      </li>
                      <li>
                        <a href="#">Travel (10)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Recent News</h4>
                    <div className="blog__sidebar__recent">
                      <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src="assets/img/blog/sidebar/sr-1.jpg" />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>
                            09 Kinds Of Vegetables
                            <br /> Protect The Liver
                          </h6>
                          <span>MAR 05, 2019</span>
                        </div>
                      </a>
                      <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src="assets/img/blog/sidebar/sr-2.jpg" />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>
                            Tips You To Balance
                            <br /> Nutrition Meal Day
                          </h6>
                          <span>MAR 05, 2019</span>
                        </div>
                      </a>
                      <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src="assets/img/blog/sidebar/sr-3.jpg" />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>
                            4 Principles Help You Lose <br />
                            Weight With Vegetables
                          </h6>
                          <span>MAR 05, 2019</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Search By</h4>
                    <div className="blog__sidebar__item__tags">
                      <a href="#">Apple</a>
                      <a href="#">Beauty</a>
                      <a href="#">Vegetables</a>
                      <a href="#">Fruit</a>
                      <a href="#">Healthy Food</a>
                      <a href="#">Lifestyle</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="assets/img/blog/blog-2.jpg" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o" /> May 4,2019
                          </li>
                          <li>
                            <i className="fa fa-comment-o" /> 5
                          </li>
                        </ul>
                        <h5>
                          <a href="#">6 ways to prepare breakfast for 30</a>
                        </h5>
                        <p>
                          Sed quia non numquam modi tempora indunt ut labore et
                          dolore magnam aliquam quaerat{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="assets/img/blog/blog-3.jpg" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o" /> May 4,2019
                          </li>
                          <li>
                            <i className="fa fa-comment-o" /> 5
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Visit the clean farm in the US</a>
                        </h5>
                        <p>
                          Sed quia non numquam modi tempora indunt ut labore et
                          dolore magnam aliquam quaerat{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="assets/img/blog/blog-1.jpg" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o" /> May 4,2019
                          </li>
                          <li>
                            <i className="fa fa-comment-o" /> 5
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Cooking tips make cooking simple</a>
                        </h5>
                        <p>
                          Sed quia non numquam modi tempora indunt ut labore et
                          dolore magnam aliquam quaerat{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="assets/img/blog/blog-4.jpg" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o" /> May 4,2019
                          </li>
                          <li>
                            <i className="fa fa-comment-o" /> 5
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Cooking tips make cooking simple</a>
                        </h5>
                        <p>
                          Sed quia non numquam modi tempora indunt ut labore et
                          dolore magnam aliquam quaerat{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="assets/img/blog/blog-4.jpg" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o" /> May 4,2019
                          </li>
                          <li>
                            <i className="fa fa-comment-o" /> 5
                          </li>
                        </ul>
                        <h5>
                          <a href="#">
                            The Moment You Need To Remove Garlic From The Menu
                          </a>
                        </h5>
                        <p>
                          Sed quia non numquam modi tempora indunt ut labore et
                          dolore magnam aliquam quaerat{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="assets/img/blog/blog-6.jpg" />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-o" /> May 4,2019
                          </li>
                          <li>
                            <i className="fa fa-comment-o" /> 5
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Cooking tips make cooking simple</a>
                        </h5>
                        <p>
                          Sed quia non numquam modi tempora indunt ut labore et
                          dolore magnam aliquam quaerat{" "}
                        </p>
                        <a href="#" className="blog__btn">
                          READ MORE <span className="arrow_right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="product__pagination blog__pagination">
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">
                        <i className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogDetail;
