import type { User } from './interfaces/user.ts';
import { createTask, completeTask } from './tasks.ts';

const user: User = {
  id: 'user-1',
  name: 'Alex',
  email: 'alex@example.com',
};

// Success: await the Promise and use its result.
try {
  const task = await createTask('Learn async/await', user.id);
  console.log('Task created:', task);

  const completedTask = await completeTask(task.id);
  console.log('Task completed:', completedTask);
} catch (error) {
  console.error('Operation failed:', error instanceof Error ? error.message : error);
}

// Failure: catch the rejected Promise when a task does not exist.
try {
  await completeTask('missing-task');
} catch (error) {
  console.error('Operation failed:', error instanceof Error ? error.message : error);
}
