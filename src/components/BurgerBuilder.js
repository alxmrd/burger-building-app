import React, { useEffect } from "react";
import "./BurgerBuilder.css";

export default function BurgerBuilder(ingredient) {
  useEffect(() => {
    console.log(ingredient);
  }, [ingredient]);

  return (
    <div className="burger">
      <img src={"./breadTop.png"}></img>
      <div className="bacon">
        <img
          src={
            "https://xm-crm-react-exercise-server.herokuapp.com/img/bacon.png"
          }
        ></img>
      </div>
      <div className="egg">
        <img
          src={"https://xm-crm-react-exercise-server.herokuapp.com/img/egg.png"}
        ></img>
      </div>
      <div className="patty">
        <img
          src={
            "https://xm-crm-react-exercise-server.herokuapp.com/img/burger-patty.png"
          }
        ></img>
      </div>
      <img src={"./breadBase.png"}></img>
    </div>
  );
}
