import express from "express";
import cors from "cors";
import categorizeRoute from "./routes/categorizeRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5000",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// routers
app.use(categorizeRoute);

// server
app.get("/", (req, res) => {
  res.send("from started");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
