```
# Blog Management API

This is a simple Node.js API for managing a list of blogs. It provides basic CRUD (Create, Read, Update, Delete) operations to create, retrieve, update, and delete blog entries. The API is built using the Express.js framework and utilizes the body-parser middleware for handling request bodies.

## Features

- **GET /blogs**: Retrieve the list of blogs.
- **POST /blogs**: Create a new blog entry.
- **GET /blogs/:id**: Retrieve a specific blog by its ID.
- **DELETE /blogs/:id**: Delete a blog entry with a given ID.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/your-username/blog-management-api.git
```

2. Install the dependencies using npm:

```shell
cd blog-management-api
npm install
```

## Usage

1. Start the server:

```shell
npm start
```

The server will start running at `http://localhost:5000`.

2. Interact with the API using your preferred tool (e.g., Postman, cURL, or web browser):

- Retrieve the list of blogs: Send a GET request to `http://localhost:5000/blogs`.
- Create a new blog entry: Send a POST request to `http://localhost:5000/blogs` with the `title` and `content` properties in the request body.
- Retrieve a specific blog by ID: Send a GET request to `http://localhost:5000/blogs/:id`, replacing `:id` with the ID of the desired blog.
- Delete a blog entry by ID: Send a DELETE request to `http://localhost:5000/blogs/:id`, replacing `:id` with the ID of the blog you want to delete.

Note: The blog entries are stored in-memory and will be lost when the server is restarted.

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js.
- body-parser: Node.js body parsing middleware.
