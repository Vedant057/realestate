import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Real estate website is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
            <h1>2000+</h1>
            <h2>Property Ready</h2>
            </div>
            <div className="box">
              <h1>Location</h1>
              <h2>Property Available Globally</h2>
            </div>
            <div className="box">
              <h1>Accessibility</h1>
              <h2>Remotly Property Inspection</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg6.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
