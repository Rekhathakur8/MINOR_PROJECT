import Nav from "./components/Nav";
import Banner from "./components/Banner";
import "../App.css";
import RoomCard from "./components/RoomCard";
function Home() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <RoomCard></RoomCard>
    </>
  );
}

export default Home;
