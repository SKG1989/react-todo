var expect = require('expect');
var $ = require('jquery');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

   it('should exist', () => {
       expect(TodoAPI).toExist();
   })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
           var todos = [{
                id: 23,
               text: 'test all files',
               completed: false
           }] ;

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badtodos = {
                a: 'b'
            };

            TodoAPI.setTodos(badtodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it('should return valid array for localstorage data', () => {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }] ;

            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
       var todos = [{
           id: 1,
           text: 'Some Text here',
           completed: true
       },{
           id: 2,
           text: 'Other Text here',
           completed: false
       },{
           id: 3,
           text: 'Some Text here',
           completed: true
       }];

       it('should return all items if showCompleted is true', () => {
          var filterdTodos = TodoAPI.filterTodos(todos, true, '');
          expect(filterdTodos.length).toBe(3);
       });

        it('should return non completed todos items if showCompleted is false', () => {
            var filterdTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filterdTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filterdTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterdTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filterdTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filterdTodos.length).toBe(2);
        });

        it('should return all items if searchText is empty', () => {
            var filterdTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterdTodos.length).toBe(3);
        });

    });
});