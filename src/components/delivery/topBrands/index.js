import React from "react";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";
import "./topBrands.css";

const brandList = [
  {
    id: 1,
    time: "20 min",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXzFDV5wqXidACSeDyldpon5EepBxr5E8rg&usqp=CAU",
  },
  {
    id: 2,
    time: "10 min",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HUKsQqTJnTRN94lU8BVFk5jBVUdEaWHEAA&usqp=CAU",
  },
  {
    id: 3,
    time: "30 min",
    cover: "https://www.oberoimall.com/img/food/Mc%20Donalds/MacD.webp",
  },
  {
    id: 4,
    time: "23 min",
    cover:
      "https://www.seekpng.com/png/detail/321-3211333_free-dominos-logo-png-dominos-pizza-logo-png.png",
  },
  {
    id: 5,
    time: "18 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/fa7df5f0a33f6171e7ce6131de3c3806_1617920053.png?output-format=webp",
  },
  {
    id: 6,
    time: "18 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png?output-format=webp",
  },
  {
    id: 7,
    time: "18 min",
    cover: "https://wallpapercave.com/wp/EOEybAl.png",
  },
  {
    id: 8,
    time: "14 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9cbf230b4128d7eb39ec5717b1d6d286_1617920031.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  PrevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => {
          return (
            <div key={brand.id}>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  alt="brand"
                  className="top-brands-image"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
