const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import  ConnectedTodo, { AddTodo } from 'AddTodo';

describe("AddTodo", () => {
    it("should exist", () => {
        expect(AddTodo).toExist();
    });

    it("should dispatch ADD_TODO when valid Todo", () => {
        var todoText = "Check Email";
        var action = {
            type: "ADD_TODO",
            text: todoText
        };
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it("should not dispatch ADD_TODO when Invalid todo text", () => {
        var todoText = "";
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
