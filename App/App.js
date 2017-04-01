const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

//Components
const TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
const TodoApi = require('TodoApi');

store.subscribe(() => {
    var state = store.getState();
    console.log('New State', state);
    TodoApi.setTodos(state.todos);
});

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

//css
require("style-loader!css-loader!sass-loader!./styles/app.scss");

const App = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    App
);
