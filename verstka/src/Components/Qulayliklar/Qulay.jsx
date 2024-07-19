/* eslint-disable no-unused-vars */
import "./Qulay.css";

//Qulayliklar Images Imported
import mainImg from "/comfortMain.png";
import bill from "/comfortImg1.png";
import phone from "/comfortImg2.png";
import home from "/comfortImg3.png";

const Comfort = () => {
  return (
    <div className="container Comfort">
      <div className="row Comfort_mainRow">
        <div className="col-lg-6">
          <img src={mainImg} className="Comfort__mainImg" alt="Comfort Image" />
        </div>
        <div className="col-lg-6">
          <span className="Comfort_main_span">Qulayliklar</span>
          <h3 className="Comfort_main_header">
            <span className="Comfort_colored">Tizim</span> qulayliklari bilan{" "}
            <span className="Comfort_colored">tanishing!</span>
          </h3>
          <div className="row">
            <div className="col-lg-12">
              <div className="row Comfort_mainCol">
                <div className="col Comfort_col">
                  <img
                    src={bill}
                    className="Comfort_sideImg"
                    alt="Comfort Image"
                  />
                </div>
                <div className="col Comfort_col">
                <div className="Comfort_col_header">Narxi</div>
                <p className="Comfort_col_info">
                  Bizning tariflarimiz har qanday byudjetga mos keladi.
                </p>
              </div>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row Comfort_mainCol">
                <div className="col Comfort_col">
                  <img
                    src={phone}
                    className="Comfort_sideImg"
                    alt="Comfort Image"
                  />
                </div>
                <div className="col Comfort_col">
                  <div className="Comfort_col_header">
                    24/7 qo`llab-quvvatlash
                  </div>
                  <p className="Comfort_col_info">
                    Bizning texnik yordamimiz doimo aloqada.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row Comfort_mainCol">
                <div className="col Comfort_col">
                  <img
                    src={home}
                    className="Comfort_sideImg"
                    alt="Comfort Image"
                  />
                </div>
                <div className="col Comfort_col">
                  <div className="Comfort_col_header">24/7 dostup</div>
                  <p className="Comfort_col_info">
                    Tizimda istalgan vaqtda ishlang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comfort;
