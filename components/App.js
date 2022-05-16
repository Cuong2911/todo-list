import html from "../core.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";

function App() {
    return html`
        <div class="app-container">
            <h1 class="app-title">TODO APP</h1>
            <section class="app">
                ${Header()}
                ${TodoList()}
                ${Footer()}
            </section> 
        </div>
    `;
};

/* {app}

*/

export default App;