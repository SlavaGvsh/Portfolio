import Header from "../components/header/Header";

const Heme = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML5, CSS3, SCSS; Flex, Bootstrap; Gulp was used to automate
                the development and build tasks of the project; BEM; Git &
                GitHub; Figma, Adobe Photoshop, Avocode; Wordpress.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>I haven't mastered this section yet.))</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Heme;
