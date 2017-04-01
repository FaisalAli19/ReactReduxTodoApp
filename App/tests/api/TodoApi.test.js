const expect = require('expect');

const TodoApi = require('TodoApi');

describe("TodoApi", () => {
    beforeEach(() => {
        localStorage.removeItem("todos");
    });

    it("should exist", () => {
        expect(TodoApi).toExist();
    });

    describe("setTodos", () => {
        it("should set valid todos array", () => {
            var todos = [{
                id: 155,
                text: "Test all files",
                completed: false
            }];
            TodoApi.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem("todos"));

            expect(actualTodos).toEqual(todos);
        });

        it("should not set invalid todos array", () => {
            var badTodos = {a: "b"};

            TodoApi.setTodos(badTodos);

            expect(localStorage.getItem("todos")).toBe(null);
        });
    });

    describe("getTodos", () => {
        it("should return empty array for bad localStorage data", () =>{
            var actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it("should return valid array", () =>{
            var todos = [{
                id: 125,
                text: "Test all files",
                completed: false
            }];

            localStorage.setItem("todos", JSON.stringify(todos));
            var actualTodos = TodoApi.getTodos();

            expect(actualTodos).toEqual(todos);

        });
    });

    describe("filterTodos", () =>{
        var todos = [
            {
                id: 1,
                text: "Some text",
                completed: true
            },
            {
                id: 2,
                text: "Some other text",
                completed: false
            },
            {
                id: 3,
                text: "Some another text",
                completed: true
            }
        ];

        it("should return all item if isCompleted is true", () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, "");

            expect(filteredTodos.length).toBe(3);
        });

        it("should return filter item if isCompleted is false", () => {
            var filteredTodos = TodoApi.filterTodos(todos, false, "");

            expect(filteredTodos.length).toBe(1);
        });

        it("should sort by completed status", () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, "");

            expect(filteredTodos[0].completed).toBe(false);
        });

        it("should filter item by searchText", () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, "some text");

            expect(filteredTodos.length).toBe(1);
        });

        it("should return all item if searchText is empty", () => {
            var filteredTodos = TodoApi.filterTodos(todos, true, "");

            expect(filteredTodos.length).toBe(3);
        });
    });
});
