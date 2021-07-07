import { Link } from "react-router-dom";

// image
import NotFoundImage from "../images/not-found.svg";

const NotFound: React.FC = () => {
   return <div className="not-found">
      <img src={NotFoundImage} alt="Not Found" />
      <Link to="/">Go To The Home Page</Link>
   </div>;
};

export default NotFound;
