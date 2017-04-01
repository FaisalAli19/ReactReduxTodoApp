const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const { Todo } = require('Todo');

describe("Todo", () => {
    it("should exist", () => {
        expect(Todo).toExist();
    });

    it("should dispatch TOGGLE_TODO action on clicks", () => {
        var todoData = {
            id: 1999,
            text: "write todo.test.js test",
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith({
            type: "TOGGLE_TODO",
            id: todoData.id
        });
    });
});
