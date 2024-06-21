import React from "react";
import "./Gallery.css"; // Import your CSS file for styling

// Import images from assets folder
import image1 from "/assets/Gallery-1.jpg";
import image2 from "/assets/Gallery-2.jpg";
import image3 from "/assets/Gallery-3.jpg";
import image4 from "/assets/Gallery-4.jpg";
import image5 from "/assets/Gallery-5.jpg";
import image6 from "/assets/Gallery-6.jpg";
import image7 from "/assets/Gallery-7.jpg";
import image8 from "/assets/Gallery-8.jpg";
import image9 from "/assets/Gallery-9.jpg";
import image10 from "/assets/Gallery-10.jpg";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="photo-grid">
        <div className="card card-tall-three card-wide-three hidden">
          <div className="sub-card bordered-grid">
            <p className="big-font">GALLERY</p>
          </div>
        </div>

        <div className="card card-wide-two">
          <div className="sub-card">
            <img src={image1} alt="" />
          </div>
        </div>

        <div className="card card-wide-three card-tall-two delay hidden">
          <div className="sub-card bordered-grid">
            <p className="small-font">
              Discover the remarkable smile transformation our patients have
              experienced through our comprehensive dental services.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="sub-card">
            <img src={image2} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="sub-card">
            <img src={image3} alt="" />
          </div>
        </div>

        <div className="card card-tall-two card-wide-two">
          <div className="sub-card">
            <img src={image4} alt="" />
          </div>
        </div>
        <div className="card card-wide-two card-tall-two delay hidden">
          <div className="sub-card bordered-grid">
            <p className="small-font">
              Our modern well-equipped dental office is designed with your
              comfort and convenience in mind.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="sub-card">
            <img src={image5} alt="" />
          </div>
        </div>

        <div className="card card-wide-two">
          <div className="sub-card">
            <img src={image6} alt="" />
          </div>
        </div>
      </div>
      <div className="photo-grid">
        <div className="card media-selected card-tall-two">
          <div className="sub-card">
            <img src={image7} alt="" />
          </div>
        </div>

        <div className="card card-tall-two card-wide-three delay hidden">
          <div className="sub-card bordered-grid">
            <p className="small-font">
              Experience the difference that dedicated, compassionate, and
              innovative dental care can make in your life at{" "}
              <span>Belleville</span> Dental
            </p>
          </div>
        </div>

        <div className="card card-wide-two">
          <div className="sub-card">
            <img src={image8} alt="" />
          </div>
        </div>

        <div className="card card-wide-two">
          <div className="sub-card">
            <img src={image9} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="sub-card">
            <img src={image10} alt="" />
          </div>
        </div>

        <div className="card card-wide-two">
          <div className="sub-card">
            <img src={image7} alt="" />
          </div>
        </div>
        <div className="card card-wide-three delay hidden">
          <div className="sub-card bordered-grid">
            <p className="big-font">SMILE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
