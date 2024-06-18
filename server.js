import express from "express";
import cors from "cors";
import appRouter from "./routes/index.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors("*"));
app.use("/api/v1", appRouter);
app.get("/api/v1/", (req, res) => res.send("Express on Vercel"));
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
