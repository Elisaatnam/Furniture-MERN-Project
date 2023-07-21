import "./Home.css";
import Nav from "../../components/Nav/Nav.jsx";
import BigStuffImg from "../../assets/Img/big_stuff_img.jpeg"
import NSBSImg from "../../assets/Img/nsbs_stuff_img.jpeg"
import SmallStuffImg from "../../assets/Img/small_stuff_img.jpeg"


const Home = () => {
	return (
		<>
		<header>
		<Nav />
			<h1>MY FURNITURE</h1>
		</header>
		<main>
			<div className="home-card">
				<img src={BigStuffImg} alt="" />
				<h3>BIG STUFF</h3>
			</div>
			<div className="home-card">
				<img src={NSBSImg} alt="" />
				<h3>NOT SO BIG STUFF</h3>
			</div>
			<div className="home-card">
				<img src={SmallStuffImg} alt="" />
				<h3>SMALL STUFF</h3>
			</div>
			
			
		</main>
		</>
	);
};

export default Home;
