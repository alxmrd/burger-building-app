import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Logout from "../components/Logout";
import Typography from "@mui/material/Typography";
import "./HomePage.css";
import BurgerBuilder from "../components/BurgerBuilder";

export default function HomePage() {
  const [puttyCounter, setPuttyCounter] = useState(0);
  const [baconCounter, setBaconCounter] = useState(0);
  const [eggCounter, setEggCounter] = useState(0);
  const [ingredients, setIngredients] = React.useState();
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    fetch("https://xm-crm-react-exercise-server.herokuapp.com/ingredients", {
      method: "GET", // or GET
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json()) // if response is json, for text use res.text()
      .then((response) => setIngredients(response))
      .catch((error) => console.error("Error:", error));
  }, []);

  const setIngredientCount = (ingredientName, number) => {
    switch (ingredientName) {
      case "burger patty":
        setPuttyCounter((puttyCounter) => puttyCounter + number);
        break;
      case "bacon":
        setBaconCounter((baconCounter) => baconCounter + number);
        break;
      case "egg":
        setEggCounter((eggCounter) => eggCounter + number);
        break;
      default:
        // Do nothing.
        break;
    }
  };

  const getIngredientCount = (ingredientName) => {
    switch (ingredientName) {
      case "burger patty":
        return puttyCounter;
      case "bacon":
        return baconCounter;
      case "egg":
        return eggCounter;
      default:
        // Do nothing.
        break;
    }
  };

  //add Ingredient
  const add = (name) => {
    setIngredientCount(name, 1);
  };

  //remove Ingredient
  const remove = (name) => {
    setIngredientCount(name, -1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Bon Apetit
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign="right">
          <Logout></Logout>
        </Grid>
        <Grid item xs={4}>
          <div className="cardComponent">
            {ingredients ? (
              ingredients.map((ingredient) => (
                <CardComponent
                  handleAddClick={add}
                  handleRemoveClick={remove}
                  canRemove={Boolean(getIngredientCount(ingredient.name))}
                  key={ingredient.id}
                  name={ingredient.name}
                  src={ingredient.src}
                ></CardComponent>
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  size: "50px",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </div>
        </Grid>
        <Grid item xs={8}>
          <BurgerBuilder putty={puttyCounter} egg={eggCounter} bacon={baconCounter}></BurgerBuilder>
        </Grid>
      </Grid>
    </Box>
  );
}
