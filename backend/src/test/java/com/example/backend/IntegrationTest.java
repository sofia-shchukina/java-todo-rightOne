package com.example.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class IntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
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
    @DirtiesContext
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

    @DirtiesContext
    @Test
    void changeStatus() throws Exception {
        mockMvc.perform(post("/api/todo")
                        .content("""
                                {"description":"swim",
                                "status":"OPEN"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(put("/api/todo/{id}/update", 1)
                        .content("""
                                {"description":"swim",
                                "status":"IN_PROGRESS"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/todo/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {"description":"swim",
                        "status":"IN_PROGRESS"}
                        """));

    }
    @DirtiesContext
    @Test
    void deleteTaskByID() throws Exception {
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

        mockMvc.perform(delete("/api/todo/1"))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/todo"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        [ {"description":"run",
                        "status":"OPEN"}]
                        """));

    }
    @DirtiesContext
    @Test
    void advanceStatus() throws Exception {
        mockMvc.perform(post("/api/todo")
                        .content("""
                                {"description":"swim",
                                "status":"OPEN"}
                                """)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(put("/api/todo/{id}/", 1))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/todo/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {"description":"swim",
                        "status":"IN_PROGRESS"}
                        """));
        mockMvc.perform(put("/api/todo/{id}/", 1))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/todo/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {"description":"swim",
                        "status":"DONE"}
                        """));

    }
}