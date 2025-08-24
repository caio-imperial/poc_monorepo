"use client";
import { Button } from "ui";
import { Task } from "types";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const fetchTasks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button label="Click me" />
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col gap-2 bg-gray-800 p-4 rounded-md">
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <p className="text-sm text-gray-500">{task.description}</p>
          <p className="text-sm text-gray-500">{task.completed ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </div>
  );
}
