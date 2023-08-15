import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = new Date();
  let day = weekday[currentDay.getDay()];

  let todaysAdvice = "GRIND";

  if (currentDay === 0 || currentDay === 6) {
    advice = todaysAdvice;
  }

  res.render("index.ejs", { dayType: day, advice: todaysAdvice });
});

app.listen(port, () => {
  console.log(`Server app is running on port ${port}`);
});
