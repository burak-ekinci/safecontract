import NavBar from "../ui/NavBar";

const BaseLayout = ({ children }) => {
  
  
  return (
    <div>
      <NavBar />
      <div className="m-5">{children}</div>
    </div>
  );
};

export default BaseLayout;
