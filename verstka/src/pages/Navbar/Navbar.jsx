import './Navbar.css'
const Navbar = () => {
  return (
    <div className='container Navbar'>
      <div className="navbar-brand">
        <h3>AutoZapchast</h3>
      </div>
      <div className='navbar_links'>
        <ul className='navbar-item'>
          <li className='navbar-items'>
            <a href="">Qulayliklar</a>
          </li>
          <li className='navbar-items'>
            <a href="">Foydalanuvchilar</a>
          </li>
          <li className='navbar-items'>
            <a href="">Hamkorlar</a>
          </li>
          <li className='navbar-items'>
            <button className='navbar-links_button'>Demo olish</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
