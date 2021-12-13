import "./Challenge1.css";
import "./bbc1.jpg";
import "./bbc2.jpg";
import "./bbc3.jpg";
import "./bbc4.jpg";

const Challenge1 = () => {
  return (
    <div>
      <Slide
        image="./playground/bbc1.jpg"
        title="Don't Think pandemic is over Whitty warns"
        paragraph="Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says."
        clock=" 2h | "
        type=" Health | "
        comments=" yes "
      />

      <Slide
        image="./playground/bbc2.jpg"
        title="Pay rise was set to be 2.1% - NHS chief"
        paragraph="NHS England boss backs ministers
        over pay dispute but does not rule out a one-off bonus for workers."
        clock="1h |"
        type="UK Politics |"
        comments="No"
      />
      <Slide
        image="./playground/bbc3.jpg"
        title="Charity criticises Morgan's
        comments about Meghan"
        paragraph="Mental health charity Mind says it is
        disappointed by comments Piers
        Morgan made on Monday."
        clock="2h |"
        type="Entertainment & Arts |"
        comments="no"
      />
      <Slide
        image="./playground/bbc4.jpg"
        title="Unilever drops word 'normal'
        from beauty products"
        paragraph="The owner of Dove and Vaseline will
        remove the word from about 200
        products in a push for inclusivity."
        clock="10m |"
        type="Business |"
        comments="No"
      />
    </div>
  );
};
const Slide = (props) => {
  return (
    <div className="Slide">
      <Image image={props.image} />
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

const Image = (props) => {
  return <img src={props.image} alt="" />;
};
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