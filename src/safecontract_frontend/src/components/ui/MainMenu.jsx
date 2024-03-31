import React from "react";
import LogIn from "./LogIn";
import image from "../../assets/app.png";

const MainMenu = () => {
  return (
    <>
      <div class="container p-5 rounded shadow mt-5 bg-secondary-subtle">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <h1
              style={{
                fontFamily: "Chakra Petch",
                fontWeight: 700,
                fontSize: 75,
              }}
            >
              {" "}
              SAFE CONTRACT{" "}
            </h1>
            <img src={image} alt="photo" class="img-fluid mb-3" />
            <a href="/login" class="btn btn-lg px-5 btn-success">
              Let's Begin
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
