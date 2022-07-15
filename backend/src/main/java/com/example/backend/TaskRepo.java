package com.example.backend;

import java.util.*;

public class TaskRepo {
    Map<Integer, Task> tasks = new HashMap<>();

    public void addNewTask(Task task) {
        tasks.put(task.getId(), task);
    }

    @Override
    public String toString() {
        return "TaskRepo{" +
                "tasks=" + tasks +
                '}';
    }

    public List<Task> showAllTasks() {
        List<Task> list = new ArrayList<>();
        for (Map.Entry<Integer, Task> entry : tasks.entrySet()
        ) {
            list.add(entry.getValue());
        }
        return list;
    }

    public Task showTaskByID(int id) {
        try {return tasks.get(id);}
        catch (Exception e){ throw
            new NoSuchElementException("There is no element with this id");
        }
    }

    public void changeStatus(int id, Task task) {
        try {tasks.put(id, task);}
        catch (Exception e){ throw
                new NoSuchElementException("There is no element with this id");
        }
    }

    public void deleteTaskByID(int id) {
        try {tasks.remove(id);}
        catch (Exception e){ throw
                new NoSuchElementException("There is no element with this id");
        }
    }

    public void advanceStatus(int id) {
        try {Task taskToUpdate = tasks.get(id);
            if (taskToUpdate.getStatus().equals(Status.OPEN)) {
                taskToUpdate.setStatus(Status.IN_PROGRESS);
            }
            else if (taskToUpdate.getStatus().equals(Status.IN_PROGRESS)){
                taskToUpdate.setStatus(Status.DONE);
            }}
        catch (Exception e){ throw
                new NoSuchElementException("There is no element with this id");
        }

    }
}
