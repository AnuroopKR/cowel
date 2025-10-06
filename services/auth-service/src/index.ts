import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/auth/health", (req, res) => {
  res.json({ status: "Auth service running ✅" });
});

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => console.log(`Auth service on ${PORT}`));
