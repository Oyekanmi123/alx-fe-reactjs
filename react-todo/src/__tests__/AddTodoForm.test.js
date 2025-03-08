import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";
import "@testing-library/jest-dom";

test("adds a new todo", () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm onAddTodo={mockAddTodo} />);

  const input = screen.getByTestId("todo-input");
  const addButton = screen.getByTestId("add-todo-button");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(mockAddTodo).toHaveBeenCalledWith("New Todo");
  expect(input.value).toBe(""); // Input should be cleared after adding
});