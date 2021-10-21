import React from "react";
import PropTypes from "prop-types";
import "./banners.css";

const SimpleBanner = ({
  children,
  imgWidth,
  imgHeight,
  imgSrc,
  imgSrcSet,
  imgSizes,
  sourceSrcSet,
  sourceSizes,
  sourceType,
  type,
}) => {
  // console.log("in simple banner");

  // console.log(backgroundImageData);
  return (
    <div style={{ display: "grid" }}>
      <picture
        className={`banner__photo banner_${type}`}
        style={{ gridArea: "1/1" }}
        layout="fullWidth"
      >
        <source type={sourceType} srcset={sourceSrcSet} sizes={sourceSizes} />
        <img
          width={imgWidth}
          height={imgHeight}
          sizes={imgSizes}
          src={imgSrc}
          srcset={imgSrcSet}
          alt=""
        />
        <div className="banner__content">{children}</div>
      </picture>
      <div
        className="future-background-image-styling"
        style={{ gridArea: "1/1", position: "relative", placeItems: "center", display: "grid" }}
      />
    </div>
  );
};

SimpleBanner.defaultProps = {
  backgroundImageData: {},
};

SimpleBanner.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImageData: PropTypes.object,
};

export default SimpleBanner;

// background position and background repeat, clip and size
// screen directive

{
  /* <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }} */
}

{
  /* <img width="630" height="630" data-main-image="" sizes="(min-width: 630px) 630px, 100vw" decoding="async" src="/static/285689cddebd462d451412a04b4fe224/7e8c6/home-top-hero.jpg" srcset="/static/285689cddebd462d451412a04b4fe224/80ba3/home-top-hero.jpg 210w,
/static/285689cddebd462d451412a04b4fe224/7e8c6/home-top-hero.jpg 630w" alt="" style="object-fit: cover; opacity: 1;"></img> */
}

{
  /* <source type="image/webp" srcset="/static/285689cddebd462d451412a04b4fe224/2f1ab/home-top-hero.webp 210w,
/static/285689cddebd462d451412a04b4fe224/4bb20/home-top-hero.webp 630w" sizes="(min-width: 630px) 630px, 100vw"></source> */
}
