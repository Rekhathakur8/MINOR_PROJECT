import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import "../../App.css";
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-One">
          <div className="nav-upper">
            <div>
              <Link to="/" className="logo-link">
                <h1 className="nav-upper-logo">ROOMLY</h1>
              </Link>
            </div>
            <div>
              <Link to="/post-room">
                <button className="nav-upper-post-room-button">
                  Post The Room
                </button>
              </Link>
              <Link to="/login">
                <button className="nav-upper-login-button">Login</button>
              </Link>
              <Link to="/register">
                <button className="nav-upper-register-button">Register</button>
              </Link>
            </div>
          </div>
          <div className="nav-bottom">
            <div className="nav-bottom-location">
              <FaLocationDot />
              <p>Jabalpur</p>
            </div>
            <div className="nav-bottom-search-area">
              <div className="nav-bottom-search-field-div">
                <input
                  type="text"
                  placeholder="Search"
                  className="nav-bottom-search-field"
                />
              </div>
              <button className="nav-bottom-button">Search</button>
            </div>

            <div className="nav-bottom-filter">
              <select name="gender" id="gender-filter">
                <option value="">Search by Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
              </select>

              <select name="institute" id="institute-filter">
                <option value="">Search by Institute</option>
                <option value="institute1">Institute 1</option>
                <option value="institute2">Institute 2</option>
              </select>

              <select name="landmark" id="landmark-filter">
                <option value="">Search by Landmark</option>
                <option value="landmark1">Landmark 1</option>
                <option value="landmark2">Landmark 2</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
