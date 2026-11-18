import { randomUUID } from 'node:crypto';
import type { Task } from './interfaces/task.ts';

const tasks: Task[] = [];

export async function createTask(title: string, userId: string): Promise<Task> {
  if (!title.trim() || !userId.trim()) {
    throw new Error('Task title and user ID are required.');
  }

  const task: Task = {
    id: randomUUID(),
    title,
    userId,
    completed: false,
  };

  tasks.push(task);
  return { ...task };
}

export async function completeTask(id: string): Promise<Task> {
  const task = tasks.find(task => task.id === id);

  if (!task) {
    throw new Error('Task not found.');
  }

  task.completed = true;
  return { ...task };
}
