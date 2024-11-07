import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Slava</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="/public/CV/CV_Havrysh_Vyacheslav.docx"
          className="btn"
          download
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
export default Header;
