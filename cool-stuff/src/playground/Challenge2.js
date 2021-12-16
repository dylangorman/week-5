import "./Challenge2.css";
import image1 from "../playground/air1.jpg";
import image2 from "../playground/air2.jpg";
import image3 from "../playground/air3.jpg";
import image4 from "../playground/air4.jpg";

const Challenge2 = () => {
  return (
    <div>
      <Slide url={image1} paragraph="Entire homes" />
      <Slide url={image2} paragraph="Unique stays" />
      <Slide url={image3} paragraph="Cabins and cottages" />
      <Slide url={image4} paragraph="Pets allowed" />
    </div>
  );
};
const Slide = (props) => {
  return (
    <div className="Slide">
      <img src={props.url} alt="" />
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Challenge2;
