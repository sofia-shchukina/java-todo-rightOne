package com.example.backend;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/todo")
public class Controller {
    TaskService taskService = new TaskService();

    @PostMapping()
    public void addNewTask(@RequestBody Task task) {
        taskService.addNewTask(task);
    }

    @GetMapping()
    public List<Task> showAllTasks() {
        return taskService.showAllTasks();
    }

    @GetMapping("/{id}")
    public Task showTaskByID(@PathVariable int id){
        return taskService.showTaskByID(id);
    }
    @PutMapping("/{id}/update")
    public void changeStatus(@PathVariable int id, @RequestBody Task task){
        taskService.changeStatus(id, task);
    }
    @DeleteMapping("/{id}")
    public void deleteTaskByID(@PathVariable int id){
        taskService.deleteTaskByID(id);
    }

}
