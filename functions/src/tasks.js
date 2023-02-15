import { getFirestoreInstance } from "./utils.js";

export async function getAllTasks(req, res) {
  const db = await getFirestoreInstance();
  db.collection('tasks').get()
  .then(collection => {
      const tasks = collection.docs.map(doc => ({ taskId: doc.id, ...doc.data() }));
      res.send(tasks);
    })
    .catch(err => res.status(500).send({ error: err.message }));
}

