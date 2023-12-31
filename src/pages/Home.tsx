import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Header} from '../components/Header';
import {Task, TasksList} from '../components/TasksList';
import {TodoInput} from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTasks = tasks

    newTasks.push({
      id: newTasks.length + 1,
      title: newTaskTitle,
      done: false
    })

    setTasks(newTasks)
  }

  function handleToggleTaskDone(id: number) {
    const newTasks = tasks.map(task => ({
      ...task,
      done: task.id === id ? !task.done : task.done
    }))

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id)

    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length}/>

      <TodoInput addTask={handleAddTask}/>

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
