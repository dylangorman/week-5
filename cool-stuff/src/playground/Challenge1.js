import "./Challenge1.css";
import image1 from "../playground/bbc1.jpg";
import image2 from "../playground/bbc2.jpg";
import image3 from "../playground/bbc3.jpg";
import image4 from "../playground/bbc4.jpg";

const Challenge1 = () => {
  return (
    <div>
      <Slide
        url={image1}
        title="Don't Think pandemic is over Whitty warns"
        paragraph="Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says."
        // icon=""
        clock=" 2h | "
        type=" Health | "
        comments=" comments "
      />

      <Slide
        url={image2}
        title="Pay rise was set to be 2.1% - NHS chief"
        paragraph="NHS England boss backs ministers
        over pay dispute but does not rule out a one-off bonus for workers."
        // icon=""
        clock="1h |"
        type="UK Politics |"
        comments=""
      />
      <Slide
        url={image3}
        title="Charity criticises Morgan's
        comments about Meghan"
        paragraph="Mental health charity Mind says it is
        disappointed by comments Piers
        Morgan made on Monday."
        // icon=""
        clock="2h |"
        type="Entertainment & Arts |"
        comments=""
      />
      <Slide
        url={image4}
        title="Unilever drops word 'normal'
        from beauty products"
        paragraph="The owner of Dove and Vaseline will
        remove the word from about 200
        products in a push for inclusivity."
        // icon=""
        clock="10m |"
        type="Business |"
        comments=""
      />
    </div>
  );
};
const Slide = (props) => {
  return (
    <div className="Slide">
      <img src={props.url} alt="" />
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <div>
        <Clock clock={props.clock} />
        <Type type={props.type} />
        <Comments comments={props.comments} />
      </div>
    </div>
  );
};

// const Image = (props) => {
//   return <img src={props.image} alt="" />;
// };
// // const FontAwesomeIcon = (props) => {
// //   return <p>{props.icon}</p>;
// // };
const Clock = (props) => {
  return <p>{props.clock}</p>;
};
const Type = (props) => {
  return <p> {props.type}</p>;
};
const Comments = (props) => {
  return <p>{props.comments}</p>;
};

export default Challenge1;
