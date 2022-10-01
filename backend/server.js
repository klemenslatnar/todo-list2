const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
require("dotenv").config({ path: "./config.env" });

const uri = process.env.ATLAS_URI;
const PORT = process.env.PORT;

const client = new MongoClient(uri);

let task = { name: "This is a test" };

app.use(express.json());

const insertDoc = async (taskName) => {
  const result = await client
    .db("tasks")
    .collection("allTasks")
    .insertOne({ name: taskName });
  console.log(
    `A document was inserted with the id: ${result.insertedId} and name ${taskName}`
  );
};

const deleteDoc = async (id) => {
  try {
    const query = { _id: new ObjectId(id) };

    const delResult = await client
      .db("tasks")
      .collection("allTasks")
      .deleteOne(query);

    console.log(`Document with id: ${id} has been deleted!`);
  } catch (err) {
    console.log(err);
  }
};

const displayAll = async () => {
  try {
    const findResult = await client
      .db("tasks")
      .collection("allTasks")
      .find()
      .toArray();

    return findResult;
  } catch (err) {
    console.log(err);
  }
};


app.get("/all-tasks", async (req, res) => {
  const result = await displayAll();
  const data = await result;

  res.send(data);
});

app.post("/new-task", (req, res) => {
  const body = req.body;

  insertDoc(body.taskName);
});

app.post("/remove-task", (req, res) => {
  const id = req.body.id;
  console.log(id);

  deleteDoc(id);
});

app.listen(PORT, () => {
  try {
    console.log(`Running on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
