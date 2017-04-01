const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="page-title">React Redux Todo App</h1>
                <div className="row">
                    <div className="small-centered small-11 medium-6 large-5 column">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;
