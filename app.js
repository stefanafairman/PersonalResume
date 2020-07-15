var express     = require("express"),
    app         = express(),
    mainRoutes  = require("./routes/main");

app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/public"));
app.use("/", mainRoutes);

app.listen(3000, function(){
    console.log("Server has started!")
});