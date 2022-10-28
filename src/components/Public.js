import { Link } from "react-router-dom";

/**
 * Components that returns a haeder with a title,
 * a main with an address and phone number, and a quick description
 * of the services customer is providing, and a footer with a Link to /login.
 */
const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Chris C. Computer Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Located in Downtown Computer World.</p>
        <p>
          Chris C. Computer Repairs provides a trained staff ready to meet your
          computer repair needs!
        </p>
        <address className="public__addr">
          Chris C. Computer Repairs
          <br />
          888 Tech Drive
          <br />
          Future City, CA 12345
          <br />
          <a href="tel:+17077077007">(707) 707-7007</a>
        </address>
        <br />
        <p>Owner: Chris Casillas</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
