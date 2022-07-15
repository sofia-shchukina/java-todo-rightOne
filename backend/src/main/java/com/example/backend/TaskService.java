package com.example.backend;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TaskService {
    TaskRepo taskRepo = new TaskRepo();

    public void addNewTask(Task task) {
    task.setId(taskRepo.tasks.size()+1);
    taskRepo.addNewTask(task);
    }


    public List<Task> showAllTasks() {
        return taskRepo.showAllTasks();
    }

    public Task showTaskByID(int id) {
        return taskRepo.showTaskByID(id);
    }

    public void changeStatus(int id, Task task) {
        taskRepo.changeStatus(id, task);
    }

    public void deleteTaskByID(int id) {
        taskRepo.deleteTaskByID(id);
    }

    public void advanceStatus(int id) {
        taskRepo.advanceStatus(id);
    }
}
