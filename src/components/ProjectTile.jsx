import Wrapper from "../assets/wrappers/ProjectTile";

const ProjectTile = ({ image, elements, title, purpose, link }) => {
  return (
    <Wrapper>
      <div className="box">
        <div className="img-container">
          <a href={link} target="_blank">
            <img src={image} alt={image} className="img" />
          </a>
        </div>
        <div className="box-inside">{elements}</div>
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="purpose">
          <p>{purpose}</p>
        </div>
        <div className="bottom-box">
          <a href={link} target="_blank">
            <button type="button"> {`Live ${"<~>"} `} </button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectTile;
