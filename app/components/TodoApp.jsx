var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Watch Movie'
                },
                {
                    id: 3,
                    text: 'Leave mail on porch'
                },
                {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        }
    },
    handleAddtodo: function (text) {
      alert(text);
    },
    handleSearch: function (showCompleted, searchText) {
      this.setState({
          showCompleted: showCompleted,
          searchText: searchText.toLowerCase()
      });
    },
    render: function () {
        var {todos} = this.state;


        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddtodo}/>
            </div>
        );
    }

});

module.exports = TodoApp;