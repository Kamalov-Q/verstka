import "./Brands.css";

//Brands Images Imported
import brandImg1 from "/brand1.png";
import brandImg2 from "/brand2.png";
import brandImg3 from "/brand3.png";
import brandImg4 from "/brand4.png";
import brandImg5 from "/brand5.png";
import brandImg6 from "/brand6.png";
import brandImg7 from "/brand7.png";
import mainImg from '/brandMainImg.png'
import rocket from '/Rocket.png'

const Brands = () => {
  return (
    <div className="container Brands">
      <div className="row">
        <div className="col-lg-12">
          <div className="Brands_header">50 dan ortiq brendlar</div>
        </div>
      </div>
      <div className="row Brand_Row">
        <div className="col Brands_col">
          <img src={brandImg1} className="brandMianImg" alt="" />
        </div>
        <div className="col Brands_col">
          <img src={brandImg2} className="brandMianImg" alt="" />
        </div>
        <div className="col Brands_col">
          <img src={brandImg3} className="brandMianImg" alt="" />
        </div>
        <div className="col Brands_col">
          <img src={brandImg4} className="brandMianImg" alt="" />
        </div>
        <div className="col Brands_col">
          <img src={brandImg5} className="brandMianImg" alt="" />
        </div>
        <div className="col Brands_col">
          <img src={brandImg6} className="brandMianImg" alt="" />
        </div>
        <div className="col Brands_col">
          <img src={brandImg7} className="brandMianImg" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 BrandsMainRow">
            <div className="BrandsLeftSide">
                <h2 className="BransLeftSide_header">Bepul sinab ko`ring!</h2>
                <p className="BrandsLeftSide_info">CRM tizimimizning afzalliklarini uch kun davomida bepul sinab ko`ring.
                </p>
                <form>
                    <div className="BrandsLeft_form_left">
                    <p className="BrandsLeftSide_form__header">Demoni 3 kun bepul ishlatib ko`ring!</p>
                    <input type="text" placeholder="Ismingiz..." id="name" name="Ismingiz" />
                    <input type="text" name="Tel raqam" id="phone" placeholder="+998  --  --- -- --" />
                    <button className="BrandsLeftSide_form__button">Jo`natish</button>
                    </div>
                    <div className="BrandsLeft_form_right">
                        <img src={rocket} className="BrandsLeft_form_right_img" alt="" />
                    </div>
                </form>
            </div>
            <img src={mainImg} className="Brand_mainImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
