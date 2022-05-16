import storage from './ultil/storage.js';

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    },
    editIndex: null,
};

const actions = {
    add({ todos }, title) {
        if(title) {
            todos.unshift({
                title,
                completed: false
            });
            storage.set(todos);
        };
    },
    toggle({todos}, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    },
    delete({ todos }, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    switchFilter(state, filter) {
        state.filter = filter;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    startEdit(state, index) {
        state.editIndex = index;
    },
    endEdit(state, title) {
        if (state.editIndex !== null) {
            state.todos[state.editIndex].title = title
            state.editIndex = null;
            storage.set(state.todos);
        };
    },
};

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
};