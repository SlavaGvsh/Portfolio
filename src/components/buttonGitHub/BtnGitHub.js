import "./BtnGitHub.css";
import imgGitHub from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={imgGitHub} alt="" />
      GitHub repositorie
    </a>
  );
};
export default BtnGitHub;
