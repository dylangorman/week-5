import "./Challenge3.css";
import image1 from "../playground/net1.jpg";
import image2 from "../playground/net2.jpg";
import image3 from "../playground/net3.jpg";
import image4 from "../playground/net4.jpg";
import image5 from "../playground/net5.jpg";

const Challenge3 = () => {
  return (
    <div>
      <Slide url={image1} />
      <Slide url={image2} />
      <Slide url={image3} />
      <Slide url={image4} />
      <Slide url={image5} />
    </div>
  );
};
const Slide = (props) => {
  return (
    <div className="Slide">
      <img src={props.url} alt="" />
    </div>
  );
};

export default Challenge3;
