import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

// just a bunch of attractive colors I like
// on app render a random color will be passed down
// the line of components
const colors = [
  "#fd908b",
  "#3f5876",
  "#79dd69",
  "#ffc24c",
  "#5c7bff",
  "#1BC891",
  "#FA4D4F",
  "#404141",
  "#27E29E",
  "#8D92FB",
  "#1AEFA4",
  "#2EC6A4",
  "#A986F9",
  "#FCB8B3",
  "#F7B591",
  "#8170E0"
];
const idx = Math.floor(Math.random() * colors.length);
const color = colors[7];

document.body.style.backgroundColor = color;

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App color={color} />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
