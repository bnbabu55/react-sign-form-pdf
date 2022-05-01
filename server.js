import React from "react";
import ReactPDF from "@react-pdf/renderer";
import ConsentForm from "./consentform.js";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/generatepdf", (req, res) => {
  const fileName = `${__dirname}/forms/${req.body.name.replace(
    /\s+/g,
    "-"
  )}-consent.pdf`;
  console.log(fileName);
  console.log(req.body);
  ReactPDF.render(
    <ConsentForm
      name={req.body.name}
      date={req.body.date}
      signature={req.body.signature}
    />,
    `${fileName}`
  );
  res.send(`PDF file generated at ${fileName}`);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
