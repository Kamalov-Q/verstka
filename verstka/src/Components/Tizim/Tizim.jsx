/* eslint-disable no-unused-vars */
import "./Tizim.css";

//Tizim Images Imported
import faCart from "/fa-cart.png";
import faUser from "/fa-user.png";
import faBill from "/fa-bill.png";

const Tizim = () => {
  return (
    <div className="container Tizim">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="Tizim_main_header">Tizim qanday ishlaydi?</h2>
        </div>
        <div className="col-lg-12">
          <p className="Tizim_main_info">
            Bizning kuchli CRM tizimimiz bilan avto ehtiyot qismlar sotuvini
            ossonlashtiring
          </p>
        </div>
      </div>
      <div className="row Tizim_main_row">
        {[
          {
            id: 1,
            classNameImgCont: "Tizim__img_container",
            src: faCart,
            h3: "Jarayonlarni avtomatlashtirish",
            p: "Bizning CRM tizimi, mijozlar ma`lumotlar bazasini saqlash, tranzaktsiyalarni kuzatish va kontaktlarni boshqarish kabi ko`plab h vazifalarni avtomatlashtirishga imkon beradi",
            classNameImg: "Tizim__img",
            classNameH3: "Tizim__header",
            classNameP: "Tizim__info",
          },
          {
            id: 2,
            classNameImgCont: "Tizim__img_container",
            src: faUser,
            h3: "Mijozlar bilan yaqinroq boling",
            p: "Bizning CRM tizimimiz tufayli siz mijozlar bilan muloqotni yanada samarali boshqarishingiz mumkin bo'ladi",
            classNameImg: "Tizim__img",
            classNameH3: "Tizim__header",
            classNameP: "Tizim__info",
          },
          {
            id: 3,
            classNameImgCont: "Tizim__img_container",
            src: faBill,
            h3: "Savdo tahlili",
            p: "Bizning CRM tizimi ma'lumotlarni tahlil qilish va hisobot berish uchun kuchli vositalarni taqdim etadi.",
            classNameImg: "Tizim__img",
            classNameH3: "Tizim__header",
            classNameP: "Tizim__info",
          },
        ]?.map((div) => (
          <div className="col-lg-4 Tizim_main_col" key={div?.id}>
            <div className={div?.classNameImgCont}>
              <img src={div?.src} alt={div?.h3} className={div?.classNameImg} />
            </div>
            <h3 className={div?.classNameH3}>{div?.h3}</h3>
            <p className={div?.classNameP}>{div?.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tizim;
