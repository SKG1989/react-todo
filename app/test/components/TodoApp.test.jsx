var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('shoudl add todo to the todos state on handleAddTodo', () => {
       var todoText = 'Test Test';
       var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

       todoApp.setState({
          todos: []
       });
       todoApp.handleAddtodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

    });
});