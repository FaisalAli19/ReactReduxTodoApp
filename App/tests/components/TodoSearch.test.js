const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import { TodoSearch } from 'TodoSearch';

describe("TodoSearch", () => {
    it("should exist", () => {
        expect(TodoSearch).toExist();
    });

    it("should dispatch setSearchText on input change", () => {
        var searchText = "dog";
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it("should dispatch toggleShowCompleted when checkbox checked", () => {
        var spy = expect.createSpy();
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"
        };
        var todoChecked = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoChecked.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoChecked.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    })
});