import "../App.css";

function RoomCardOwner() {
  return (
    <>
      <div className="room-card">
        <h3>Krishna Niwas</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <strong>Rent:</strong> ₹2550
        </p>
        <p>
          <strong>Rooms Available:</strong>Available now
        </p>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}

export default RoomCardOwner;
