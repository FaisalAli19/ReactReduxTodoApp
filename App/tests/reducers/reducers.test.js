const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('reduxReducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: "SET_SEARCH_TEXT",
                searchText: "Read"
            };

            var res = reducers.searchTextReducer(df(""), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed to true', () => {
            var action = {
                type: "TOGGLE_SHOW_COMPLETED"
            };

            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add todos when add todo type get called', () => {
            var action = {
                type: "ADD_TODO",
                text: "Shadow ranger"
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle todo', () => {
            var todos = [{
                id: "123",
                text: "Tesing Testing",
                createdAt: 14598,
                completed: true,
                completedAt: 15000
            }];
            var action = {
                type: "TOGGLE_TODO",
                id: "123"
            };

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });

        it('should add existing todos', () => {
            var todos = [
                {
                    id: "111",
                    text: "some testing",
                    completed: false,
                    completedAt: undefined,
                    createdAt: 30000
                }
            ];
            var action = {
                type: "ADD_TODOS",
                todos
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});
