const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./routes/web");

const app = express();
require("dotenv").config();

const port = process.env.PORT;
const domain = process.env.DOMAIN;
const baseUrl = `http://${domain}:${port}/`;
console.log(baseUrl);

app.set("view engine", "hbs");
app.engine(
    "hbs",
    handlebars.engine({
        layoutDir: __dirname + "/views/layouts",
        extname: "hbs",
        defaultLayout: "main",

        helpers: {
            baseUrl: (path) => {
                return baseUrl + path;
            },
            eq: function (x, y) {
                return (x == y);
            },
            section: function (name, options) {
                if (!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            },
        },
    })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// app.use(routes);
// app.get("/", (req, res) => {
//     res.send("dome");
// });

app.use(routes)

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

app.listen(port, () => {
    console.log(`Listening at port: ${port}`);
});
