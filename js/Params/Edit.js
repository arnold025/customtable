class Edit{

    static init(){
        this.displayButtons();
        this.listenClickButton();
    }

    static displayButtons(){
        let div = document.querySelector('#toolsCustomTable');
        let tbody = document.createElement('div');
        tbody.classList.add('buttons-table');
        let buttons = "<button class='btn-table btn-create'>New</button> "+
                    "<button class='btn-table btn-edit'>Edit</button>"+
                    "<button class='btn-table btn-delete'>Delete</button>";
        tbody.innerHTML=buttons;
        div.appendChild(tbody);
    }
    
    static listenClickButton(){
        let buttons = document.querySelectorAll(".btn-table");
        [].forEach.call(buttons, function(el) {
            el.addEventListener("click", function() {
            });
        });
    }
}