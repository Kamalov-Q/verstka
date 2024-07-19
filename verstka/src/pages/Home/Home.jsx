/* eslint-disable no-unused-vars */
import "./Home.css";

//Home Image Imported
import homeImg from "/headerImg.png";
import homeImage from "/headerImg2.png";

const Home = () => {
  return (
    <div className="container Home">
      <div className="row">
        <h1 className="Home__header">
          <span>Ehtiyot qisimlarni</span>
          <div className="colored"> online sotish vaqti keldi</div>
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-12 Home__main_col">
          <p className="Home__info">
            Yangi texnologiya biznes imkoniyatlarini ochib beradi. Avtomobil
            qismlarini onlayn sotishni boshlang va raqamli bozordan to`liq
            foydalaning. Mijozlaringiz qulaylikdan, siz esa savdo hajmi
            oshganidan mamnun bo`lasiz.
          </p>
          <form className="Home__form">
            <h3 className="Home__form_header">Bepul konsultatsiya oling</h3>
            <input
              type="text"
              name="Ismingiz"
              id="name"
              placeholder="Ismingiz..."
            />
            <input
              type="text"
              name="Phone Number"
              id="phone"
              placeholder="+998 -- --- -- --"
            />
            <button className="Home__form_btn">Jo`natish</button>
          </form>
          <img src={homeImage} className="Home__homeImage" alt="" />
          <img src={homeImg} className="Home__homeImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
