import express from "express";
import router from "./routes/routes";
const app = express();
const port = 3000;
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Server is running ");
// });
app.use("api/v1/", router);
app.listen(port, () => {
    console.log("====================================");
    console.log("Server is listenig on PORT 300");
    console.log("====================================");
});
//# sourceMappingURL=server.js.map