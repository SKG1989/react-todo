var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
   it('should exist', () => {
     expect(AddTodo).toExist();
   });

   it('should call onAddTodo prop with valid data', () =>{
       var todoitem = 'Check mail';
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoitem.value = todoitem;

      TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toHaveBeenCalledWith(todoitem);

   });

    it('should not call onAddTodo prop when invalid input', () =>{
        var todoitem = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoitem.value = todoitem;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    });
});