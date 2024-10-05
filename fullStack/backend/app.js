import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());


app.get("/", (req, res) => {
  res.send("My name is prince");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why was the math book sad? Because it had too many problems.",
      category: "math",
    },
    {
      id: 2,
      joke: "Why did the scarecrow win an award? Because he was outstanding in",
      category: "scarecrow",
    },
    {
      id: 3,
      joke: "Why did the bicycle fall over? Because it was two-tired.",
      category: "bicycle",
    },
    {
      id: 4,
      joke: "What do you call a fake noodle? An impasta.",
      category: "food",
    },
    {
      id: 5,
      joke: "Why did the baker go to the bank? He needed dough.",
      category: "baker",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => `Server running on port ${port} 🔥`);
