const express = require("express");
const bodyParser = require("body-parser");
const server = express();

const PORT = 5000;
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

let blogList = [];

server.get("/blogs", (req, res) => {
  return res.status(200).json({
    data: blogList,
    success: true,
  });
});

server.post("/blogs", (req, res) => {
  blogList.push({
    title: req.body.title,
    content: req.body.content,
    id: Math.floor(Math.random() * 1000),
  });

  return res.status(201).json({
    success: true,
  });
});

server.get("/blogs/:id", (req, res) => {
  const result = blogList.filter((blog) => req.params.id == blog.id);
  return res.status(200).json({
    success: true,
    data: result,
  });
});

server.delete("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogList.findIndex((blog) => blog.id === id);

  if (index !== -1) {
    blogList.splice(index, 1);
    return res.status(200).json({
      success: true,
      message: `Blog with ID ${id} has been deleted.`,
    });
  } else {
    return res.status(404).json({
      success: false,
      message: `Blog with ID ${id} not found.`,
    });
  }
});

server.listen(PORT, () => {
  console.log("Server is running on PORT ", PORT);
});
