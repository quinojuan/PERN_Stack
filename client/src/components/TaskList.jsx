import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await axios("http://localhost:3001/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{color: "white"}}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => console.log("edit")}
                style={{ marginRight: ".5rem" }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="warning"
                onClick={() => console.log("delete")}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
