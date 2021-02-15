import { withRouter } from "react-router-dom";
import Directory from "../../components/ditectory/directory.component";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
