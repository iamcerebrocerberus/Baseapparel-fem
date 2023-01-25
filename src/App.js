import Form from "./Form.js";
import heroDesktop from "./images/hero-desktop.jpg";
import heroMobile from "./images/hero-mobile.jpg";
import logo from "./images/logo.svg";

function App() {
  return (
    <section className="container">
      <h1 className="sr-only">Base Apparel</h1>
      <div className="BaseLogo">
        <img src={logo} style={{}} alt="Base Apparel logo" className="logo" />
      </div>
      <div className=" [ flow ] [ BaseApp ] [ text-center ]">
        <div className="BaseApp__right">
          <picture>
            <source srcSet={heroDesktop} media="(min-width: 1189px)" />
            <img src={heroMobile} alt="" />
          </picture>
        </div>
        <div className="BaseApp__left flow">
          <div className="BaseLogo Desktop">
            <img
              src={logo}
              style={{}}
              alt="Base Apparel logo"
              className="logo"
            />
          </div>
          <h2 className="[ BaseApp__head ] [ cl-dark-gry-red text-uppercase fnt-w-400 spc-lt-14px ]">
            <span className="[ cl-des-red fnt-w-300 ]">we're</span>
            <span>coming</span>
            <span> soon</span>
          </h2>
          <p className="BaseApp__text cl-des-red">
            Hello fellow shoppers!. We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default App;
