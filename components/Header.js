import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.height}>
      <div className={headerStyles.insider}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption d-md-block">
                <div className={headerStyles.captionseffects}>
                  <h3>Dessert</h3>
                  <p className={headerStyles.captionsbody}>
                    {" "}
                    Enjoy the sweet snacks of our dessert menu
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption  d-md-block">
                <div className={headerStyles.captionseffects}>
                  <h3>Combos</h3>
                  <p className={headerStyles.captionsbody}>
                    Fill your belly to your content with our delicious combos
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/452737/pexels-photo-452737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className={headerStyles.size}
                alt="..."
              />
              <div className="carousel-caption d-md-block mw-100">
                <div className={headerStyles.captionseffects}>
                  <h3>Drinks</h3>
                  <p className={headerStyles.captionsbody}>
                    Quench that thirst with a varity of our special offer drinks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
