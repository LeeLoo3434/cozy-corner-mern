import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default function MyCarousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ maxHeight: "400px" }}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/Laskates.jpeg"
            className="d-block w-100"
            alt="skating"
          />
        </div>
        <div className="carousel-item">
          <img src="/drag.jpeg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img
            src="/bootblack.jpg"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/sunsetfest.jpeg"
            className="d-block w-100"
            alt="Slide 4"
          />
        </div>
        <div className="carousel-item">
          <img src="/marsha.jpg" className="d-block w-100" alt="Slide 5" />
        </div>
      </div>
    </div>
  );
}
