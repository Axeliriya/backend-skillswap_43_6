import app from "./src/app";
import dotenv from "dotenv";

dotenv.config();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
