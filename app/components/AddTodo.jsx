var React = require('react');

var AddTodo = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var todoitem = this.refs.todoitem.value;

        if(todoitem.length > 0){
            this.refs.todoitem.value = '';
            this.props.onAddTodo(todoitem);
        }else{
            this.refs.todoitem.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="todoitem" placeholder="what do you need to do?"/>
                    </div>
                    <div>
                        <button className="button expanded">Add</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;