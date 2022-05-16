import html from "../core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../store.js";

const connector = connect();

function TodoList({todos, filter, filters, editIndex}) {
    return html`
        <section class="main">
            <span>${todos.length === 0 && 'No work right now, create a new work'}</span>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => TodoItem(todo, index, editIndex))}
            </ul>
        </section>
    `;
};

export default connector(TodoList);