const React = require('react');
const { connect } = require('react-redux');
const moment = require('moment');

const actions = require('actions');

export var Todo = React.createClass({

    render: function() {
        var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
        var todoClassName = completed ? "todo todo-completed" : "todo";
        var renderDate = () => {
            var message = "Created: ";
            var timeStamp = createdAt;

            if(completed){
                message = "Completed: ";
                timeStamp = completedAt;
            }

            return message + moment.unix(timeStamp).format("MMM Do YYYY @ h:mm a");
        };
        return (
            <div className={todoClassName} onClick={() => {
                    dispatch(actions.toggleTodo(id))
                }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);
