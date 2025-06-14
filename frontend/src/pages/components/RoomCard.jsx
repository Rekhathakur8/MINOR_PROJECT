import React, { useEffect, useState } from "react";
import "../../App.css";

function RoomCard() {
  const [rooms, setRooms] = useState("");
  useEffect(() => {
    console.log("hello");
    const fetchRandomRooms = async () => {
      const response = await fetch("http://localhost:5000/random-rooms");
      const data = await response.json();
      setRooms(data);
      console.log("hello");
      console.log(data);
    };
    fetchRandomRooms();
  }, []);

  return (
    <>
      <ul className="room-card-main">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <li key={room._id}>
              <div className="room-card-container">
                <div className="room-card">
                  <img src={room.image} alt="Room" className="room-image" />
                  <div className="room-details">
                    <h3 className="room-title">{room.hostelName}</h3>
                    <p className="room-price">₹{room.price}</p>
                    <p className="room-address">{room.address}</p>

                    <p className="room-contact">
                      Contact: {room.contactNumber}
                    </p>
                    <p className="room-institute">
                      Nearby: {room.nearbyInstitute}
                    </p>
                    <button className="room-btn">View Details</button>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>No rooms are available</li>
        )}
      </ul>
    </>
  );
}

export default RoomCard;
