import html from "../core.js";

function Header() {
    return html`
        <Header class="header">
            <div class="input-wrap">
                <input
                    class="input"
                    type="text"
                    placeholder="What needs to be done?"
                    autofocus
                    onkeyup="
                        event.keyCode === 13
                        && dispatch('add', this.value.trim());                        
                    "    
                />    
                <button class="input-btn" onclick="
                    const inputValue = document.querySelector('.input').value;
                    dispatch('add', inputValue)
                ">ADD</button>
            </div>
        </Header>
    `;
};

export default Header;
