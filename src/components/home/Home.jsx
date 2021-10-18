import React, { useState, useEffect } from "react";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,

} from "../../server";
import { Footer } from "../Footer/Footer";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import './Aminition/Home.css';
import { Link } from "react-router-dom";
import InfiniteCarousel from "react-leaf-carousel";
export function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [video] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };
    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_ids) => {
    setMovieByGenre(await fetchMovieByGenre(genre_ids));
  };


  const movies = nowPlaying.slice(0, 30).map((item, index) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
        </div>
        <div className="carousel-center">
          <a href={youtubeUrl + video.key}>
            <i
              className="far fa-play-circle"
              style={{ fontSize: 95, color: "#f4c10f" }}
            ></i>
          </a>

        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          <h1> {item.title} </h1>
        </div>
      </div>
    );
  });

  const genreList = genres.map((item, index) => {
    return (
      <nav className="link-effect-1" key={index}>
        <div className="Link-hover" key={index} onClick={() => {
          handleGenreClick(item.id);
        }}><span data-hover={item.name}> {item.name}</span></div>
      </nav>
    );
  });


  const movieList = movieByGenre.slice(0, 18).map((value, i) => {
    return (
      <div className="col-md-2 col-sm-6" key={i}>
        <div className="card-img">
          <Link to={`/movie/${value.id}`}>
            <img className="img-fluids" src={value.poster} alt={value.title}></img>
          </Link>
          <a className="info" href={`/movie/${value.id}`}>Xem</a>
        </div>
        <div className="title-movie">
          {value.title}
        </div>
      </div>
    );
  });
  const trendingPersons = persons.slice(0, 50).map((p, i) => {
    return (
      // <div key={i}>
      //   <Link to={`/person/${p.id}`}>
      //     <img
      //       className="img-person"
      //       src={p.profileImg}
      //       alt={p.name}
      //     />
      //   </Link>

      //   <p className="font-weight-bold text-center">{p.name}</p>
      //   <p
      //     className="font-weight-light text-center"
      //     style={{ color: "#5a606b" }}
      //   >
      //     Trending for {p.known}
      //   </p>
      // </div>
      <div key={i} style={{ textAlign: "center" }}>
        <div className="card">
          <Link to={`/person/${p.id}`}>
            <img className="img-fluid" src={p.profileImg} alt={p.name}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{p.name}</p>
          <p style={{ fontWeight: "bolder" }}>Trending For {p.known}</p>
        </div>

      </div >
    );
  });
  // Các phim được đánh giá cao nhất 
  const topRatedList = topRated.slice(0, 30).map((item, index) => {
    return (
      // <div className="col-md-2" key={index}>
      //   <div className="card-img">
      //     <Link to={`/movie/${item.id}`}>
      //       <img className="img-fluids" src={item.poster} alt={item.title}></img>
      //     </Link>
      //   </div>
      //   <div className="mt-3">
      //     <p style={{ fontWeight: "bolder", textAlign: "center" }}>{item.title}</p>
      //     <p style={{ textAlign: "center" }}>Rated: {item.rating}</p>
      //     {/* <ReactStars
      //       count={item.rating}
      //       size={20}
      //       color1={"#f4c10f"}
      //     ></ReactStars> */}
      //   </div >
      // </div>
      <div key={index} style={{ textAlign: "center" }}>
        <div className="card">
          <Link to={`/person/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p style={{ fontWeight: "bolder" }}>Rated: {item.rating}</p>
        </div>

      </div >
    );
  });
  // Lấy các tấm hình:
  const images = movieByGenre.slice(0, 12).map((i, index) => {
    return (
      <img src={i.poster} alt={i.title} className="pic" key={index} />
    );
  });

  return (
    <div className="main-container">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav>
                <ul className="menu">
                  <li className="nav-hover"><a href="/">Home</a></li>
                  <li className="nav-hover"><a href="/discover/tv">TV</a></li>
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
                <CarouselTrendingPerson />
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
              <CarouselTopRatedList />
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5" ></hr>

      <Footer></Footer>
    </div>
  );
  function CarouselTrendingPerson() {
    return (
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        lazyLoad={false}
        autoCycle={true}
        cycleInterval={5000}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={5}
        scrollOnDevice={true}
      >
        {trendingPersons}
      </InfiniteCarousel>
    );
  }
  function CarouselTopRatedList() {
    return (
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        lazyLoad={false}
        autoCycle={true}
        cycleInterval={3000}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={6}
        scrollOnDevice={true}
      >
        {topRatedList
        }
      </InfiniteCarousel>
    );
  }
}
