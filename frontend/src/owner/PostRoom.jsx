import "../App.css";
import { useState } from "react";
import axios from "axios";
function PostRoom() {
  const [hostelName, setHostelName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [nearbyInstitute, setInstitute] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/post-room", {
        hostelName,
        contactNumber,
        nearbyInstitute,
        address,
        price,
        image,
        roomType,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="PR-main">
        <form className="PR-form" onSubmit={handleSubmit}>
          <h1>POST A NEW ROOM</h1>

          {/* Hostel/PG/Flat Name */}
          <div className="PR-1">
            <label>Hostel/PG/Flat Name</label>
            <input
              type="text"
              name="hostelName"
              onChange={(e) => setHostelName(e.target.value)}
              required
            />
          </div>

          {/* Owner Contact Number */}
          <div className="PR-1">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              pattern="[0-9]{10}"
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>

          {/* Nearby Institute */}
          <div className="PR-1">
            <label className="block mb-1 font-medium">
              Nearby Institute/College
            </label>
            <input
              type="text"
              name="nearbyInstitute"
              onChange={(e) => setInstitute(e.target.value)}
              required
            />
          </div>

          {/* Address */}
          <div className="PR-1">
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Price */}
          <div className="PR-1">
            <label>Price (₹/month)</label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* Room Type */}
          <div className="PR-1">
            <label>Room Type</label>
            <select
              name="roomType"
              className="PR-select"
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="PG">PG</option>
              <option value="Hostel">Hostel</option>
              <option value="Flat">Flat</option>
            </select>
          </div>

          {/* Sharing Type */}
          <div className="PR-1">
            <label>Sharing Type</label>
            <select name="sharingType" className="PR-select">
              <option value="Single">Single Sharing</option>
              <option value="Double">Double Sharing</option>
              <option value="Triple">Triple Sharing</option>
            </select>
          </div>

          {/* Room Image Upload */}
          <div className="PR-1">
            <label>Upload Room Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className=" PR-button">
            Post Room
          </button>
        </form>
      </div>
    </>
  );
}

export default PostRoom;
