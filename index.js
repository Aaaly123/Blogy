import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Store blogs in an array
const blogs = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs });

});


app.post("/submit", (req, res) => {

  const blogName = req.body["bName"]; 
  const blogContent = req.body["bContent"];

   // Add the new blog to the blogs array
   blogs.push({ name: blogName, content: blogContent });

   res.redirect("/"); // Redirect to the homepage to show all blogs

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
