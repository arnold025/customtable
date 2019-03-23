class Edit{

    static init(){
        this.displayButtons();
        this.listenClickButton();
        Modal.init();
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
        let addBtn = document.querySelector('.btn-create');
        let editBtn = document.querySelector('.btn-edit');
        let deleteBtn = document.querySelector('.btn-delete');
        addBtn.addEventListener('click', function(){
            Modal.openModal();
        });
        editBtn.addEventListener('click', function(){
            console.log('edito');
        });
        deleteBtn.addEventListener('click', function(){
            console.log('borrooo');
        });
    }
    
}