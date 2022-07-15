package com.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Test
    void showAllTasks() throws Exception {
        mockMvc.perform(post("/api/todo")
                        .content("""
                                {"description":"swim",
                                "status":"OPEN"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                                .andExpect(status().isOk());

        mockMvc.perform(post("/api/todo")
                        .content("""
                                {"description":"run",
                                "status":"OPEN"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/todo"))
                        .andExpect(status().isOk())
                        .andExpect(content().json("""
                                [{"description":"swim",
                                "status":"OPEN"}, {"description":"run",
                                "status":"OPEN"}]
                                """));

    }

    @Test
    void showTaskByID() throws Exception {
        mockMvc.perform(post("/api/todo")
                        .content("""
                                {"description":"swim",
                                "status":"OPEN"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(post("/api/todo")
                        .content("""
                                {"description":"run",
                                "status":"OPEN"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/todo/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                {"description":"swim",
                                "status":"OPEN"}
                                """));
        mockMvc.perform(get("/api/todo/2"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                                {"description":"run",
                                "status":"OPEN"}
                                """));


    }


    @Test
    void changeStatus() throws Exception {

    }

    @Test
    void deleteTaskByID() {
    }

    @Test
    void advanceStatus() {
    }
}