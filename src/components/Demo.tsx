import image from "../assets/image1.png";
import "./global.css";

export const Demo = () => {
  return (
    <section className="hero">
      <div className="main">
        <div className="left">
          <div className="heading">
            <h1>Visible Glow in 7 Days</h1>

            <span>
              A dermatologist-tested daily cleanser made for Indian skin,
              powered by gentle botanicals and barrier-safe actives.
            </span>

            <div className="btn">
              <button>
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3.33 8h9.33"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 3.33L12.66 8 8 12.66"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button>See How It Works</button>
            </div>

            <div className="rating">
              <span className="bada">⭐ 4.9/5</span>
              Rated |
              <span className="bada">10,000+</span>
              Happy Customers |
              <span className="bada">98%</span>
              Would Recommend
            </div>
          </div>
        </div>

        <div className="right">
          <img src={image} alt="product" width={500} />
          <div className="price">
            <div className="p-name">
              FROM <span className="rate">₹1,299</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="intro">
          <span>Sulfate & Paraben Free</span>
          <span>Dermatologist Tested</span>
          <span>Clinically Proven</span>
          <span>Safe for Sensitive Indian Skin</span>
        </div>
      </div>
    </section>
  );
};