const React = require('react');
const { connect } = require('react-redux');

const actions = require('actions');

export var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var { dispatch } = this.props
        var newTodo = this.refs.todo.value;


        if(newTodo.length > 0){
            this.refs.todo.value = "";
            dispatch(actions.addTodo(newTodo))
        }else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todos" ref="todo" placeholder="What you need to do?"/>
                    <button type="submit" className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

export default connect()(AddTodo);
