import React, { useState, useEffect } from "react";
import {
  fetchMovieByGenre,
} from "../../server";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../Home/Aminition/Home.css';
import { Link } from "react-router-dom";

export function Genres( match ) {
  let params = match.params;
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovieByGenre(await fetchMovieByGenre(params.id));
    };
    fetchAPI();
  }, []);



  return (

    <div className="main-container">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav>
                <ul className="menu">
                  <li className="nav-hover"><a href="/">Home</a></li>
                  <li className="nav-hover">
                     <div className="login-templeta">
                        <a href="/login">Login</a>
                       </div>
                  </li>
                  <li className="nav-hover">
                     <div className="login-templeta">
                        <a href="#">Register</a>
                       </div>
                  </li>
                </ul>

              </nav>
            </div>
          </div>
        </div>

        <div className="baner-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-effect">
                  <h1 className="neon" data-text="THE MOVIE">THE MOVIE</h1>
                  <div className="gradient"></div>
                  <div className="spotlight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="baner-movie">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RBCarousel
                autoplay={true}
                pauseOnVisibility={true}
                slidesshowSpeed={5000}
                version={4}
                indicators={false}
              >
                {movies}
              </RBCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* Thể loại phim */}
      <div className="genre-list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="content">
                <section className="links">
                  {genreList}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Danh sách phim */}
      <div className="list-movie">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <div className="list-movie">
                <div className="row mt-3">{movieList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Xu hướng phim */}

      <div className="person-list">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="person">
                <p className="font-weight-bold-1  line-1" style={{ color: "white", paddingTop: 30 }}>
                  <a href="#" className="hover-trending">NHỮNG DIỄN VIÊN</a> XU HƯỚNG TRONG TUẦN
                </p>
                <div className="knowwn">
                  <div className="row">
                    <div className="list-person list-sroll">
                      {trendingPersons}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Phim có đánh giá cao nhất */}

      <div className="top-rate">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="font-weight-bold-1  line-1" style={{ color: "white" }}>
                <a href="#" className="hover-trending"> TOP PHIM ĐƯỢC ĐÁNH GIÁ CAO</a>
              </p>
              <div className="knowwn">
                <div className="row">
                  <div className="list-person list-sroll">
                    {topRatedList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5" style={{ border: "1px solid #5a606b" }}></hr>
      <div className="footer-container">

        <div className="container">


          <div className="row">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="col-md-5 col-sm-6" style={{ color: "#5a606b" }}>
              <h3>THÔNG TIN</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
                dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
                earum?
              </p>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <span>Facebook</span>
              </div>
              <div className="button">
                <div className="icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
              </div>
              <div className="button">
                <div className="icon">

                  <i className="fab fa-twitter"></i>
                </div>
                <span>Twitter</span>
              </div>

              <div className="button">
                <div className="icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <span>Youtube</span>
              </div>
            </div>
            <div className="col-md-7 col-sm-6" style={{ color: "#5a606b" }}>
              <div className="main-top">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="bg-blog">
                        <div className="pic-ctn bore">
                          {images}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}
