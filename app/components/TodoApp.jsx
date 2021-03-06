var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
      TodoAPI.setTodos(this.state.todos);
    },
    handleAddtodo: function (text) {
      this.setState({
          todos: [
              ...this.state.todos,
              {
                  id: uuid(),
                  text: text,
                  completed: false
              }
          ]
      })
    },
    handleSearch: function (showCompleted, searchText) {
      this.setState({
          showCompleted: showCompleted,
          searchText: searchText.toLowerCase()
      });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map( (todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddtodo}/>
            </div>
        );
    }

});

module.exports = TodoApp;