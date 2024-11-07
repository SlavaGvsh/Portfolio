import { NavLink } from "react-router-dom";
import "./Project.css";

const Project = ({ title, img, index, subtitle }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
        <strong className="project__subtitle">{subtitle}</strong>
      </li>
    </NavLink>
  );
};

export default Project;
