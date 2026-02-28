import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.json());

let users = [
  {
    image: "werwerwer",
    name: "amit",
    email: "amit@gmail.com",
    phone: "9876543210",
  },
  {
    image: "krunal",
    name: "jay",
    email: "jay@gmail.com",
    phone: "98766555555",
  },
  {
    image: "krunal",
    name: "krunal",
    email: "krunal@gmail.com",
    phone: "98766555555",
  },
];

app.get("/", (req, res) => {
  app.render("index", { users });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const { image, name, email, phone } = req.body;

  const newUsers = {
    id: new Date().getTime(),
    image,
    name,
    email,
    phone,
  };

  usersList.push(newUsers);

  res.redirect("/");
});

const port = 5000;

app.listen(port, () => {
  console.log("Server Listing On Port", port);
});
