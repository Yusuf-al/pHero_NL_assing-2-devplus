import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Server is run");
});
app.listen(port, () => {
    console.log("====================================");
    console.log("Server is listenig on PORT 300");
    console.log("====================================");
});
//# sourceMappingURL=server.js.map