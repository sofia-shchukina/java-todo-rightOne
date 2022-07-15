package com.example.backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TaskRepo {
    Map<Integer, Task> tasks= new HashMap<>();

    public void addNewTask(Task task) {
        tasks.put(task.getId(),task);
    }

    @Override
    public String toString() {
        return "TaskRepo{" +
                "tasks=" + tasks +
                '}';
    }

    public List <Task> showAllTasks() {
        List<Task> list = new ArrayList<>();
        for (Map.Entry<Integer, Task> entry: tasks.entrySet()
             ) {
            list.add(entry.getValue());
        }
        return list;
    }

    public Task showTaskByID(int id) {
        return tasks.get(id);
    }

    public void changeStatus(int id, Task task) {
        tasks.put(id, task);
    }

    public void deleteTaskByID(int id) {
        tasks.remove(id);
    }
}
