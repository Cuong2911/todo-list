import html from "../core.js";

function TodoItem(todo, index, editIndex) {
    return html`
        <li 
            class="
                todo-item 
                ${todo.completed && 'completed'}
                ${editIndex === index && 'edited'}
            "
        >
            <div class="view">
                <input
                    id="item${index}"
                    class="toggle"
                    type="checkbox" ${todo.completed && 'checked'}
                    onchange="dispatch('toggle', ${index});"
                />
                <label 
                    for="item${index}" 
                    ondblclick="dispatch('startEdit', ${index});"
                >${todo.title}</label>
                <button class="edit-btn" onclick="dispatch('startEdit', ${index})">
                    <i class="fa-solid fa-pen"></i>
                </button>                
                <button class="delete-btn" onclick="dispatch('delete', ${index})">
                    <i class="fa-solid fa-xmark"></i>
                </button>                
            </div>
            <div class="edit">
                <input 
                    class="edit-input" 
                    value="${todo.title}"
                    onkeyup="
                        event.keyCode === 13 && dispatch('endEdit', this.value.trim());
                    "
                    onblur="dispatch('endEdit', this.value.trim())"
                />
                <button class="edit-btn--check">
                    <i class="fa-solid fa-check"></i>
                </button>                
            </div>
        </li>
    `;
};
export default TodoItem;