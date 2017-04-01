const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

describe("TodoList", () => {
    it("should exist", () => {
        expect(TodoList).toExist();
    });

    it("should render one todo component for each todo items", () => {
        var todos = [
            {
                id: 1,
                text: "Start",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 2,
                text: "Stop",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            },
            {
                id: 3,
                text: "Pause",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];
        var store = configure({
            todos
        });
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it("should render empty message if no todos", () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find(".container__message").length).toBe(1);
    });
});