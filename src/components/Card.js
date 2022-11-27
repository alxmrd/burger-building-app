import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CardComponent({ handleAddClick, canRemove, handleRemoveClick, name, src }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="auto"
        src={`https://xm-crm-react-exercise-server.herokuapp.com/img/${src}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="secondary" disabled={!canRemove} aria-label="remove" onClick={() => handleRemoveClick(name)}>
          <RemoveIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add" onClick={() => handleAddClick(name)}>
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
