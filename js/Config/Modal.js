class Modal{
    static init(){
        this.displayButtons();
        this.listenClickButton();
        this._modal = this.renderModal();
        this.closeModal();
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
    
    static getModal(){
        return this._modal;
    }

    static renderModal(){
        let parentModal = this.getParent();
        let modal = this.getContainerModal();
        return parentModal.appendChild(modal);
    }

    static getParent(){
        let parentModal = document.querySelector('footer');
        if(!parentModal) parentModal = document.querySelector('body');
        return parentModal;
    }

    static getContainerModal(){
        let modal = document.createElement('div');//Modal
        modal.classList.add('modal-cTable', 'hiddenModal');
        
        let contentModal = document.createElement('div');//Contenedor dentro del modal
        contentModal.classList.add('modal-cTable-content');

        contentModal.appendChild(this.getHeader());
        contentModal.appendChild(this.getContentModal());
        contentModal.appendChild(this.getFooterModal());
        modal.appendChild(contentModal);
        return modal;
    }

    static getHeader(){
        let headerMsg = 'Create new entry';
        let headerModal = document.createElement('div');//Header del Modal
        headerModal.classList.add('modal-cTable-header');
        headerModal.innerHTML = `<span class="close-modal-cTable">&times;</span><h2>${headerMsg}</h2>`;
        return headerModal;
    }

    static getContentModal(){
        let bodyModal = document.createElement('div');
        bodyModal.classList.add('modal-cTable-body');
        let names = Table.getHeaderTable();// Recojo los nombres del header de la tabla especificados en el JSON
        let fields = Table.getContentTable()[0];// Recojo los nombres de los campos que hay en el body de la tabla (keys del J-SON)
        fields = Object.keys(fields);
        let inputs = "";
        fields.forEach(function(el, index){
            inputs+=`<div class='modal-fields'>
                        <label for='${el}'>${names[index]}</label>
                        <input type="text" id='${el}'><br>
                    </div>`;
        });
        bodyModal.innerHTML=inputs;
        return bodyModal;
    }
    
    static getFooterModal(){
        let buttonMsg ="Send";
        let footerModal = document.createElement('div');
        footerModal.classList.add('modal-footer');
        let button =`<button class="btn-table btn-modal">${buttonMsg}</button>`;
        footerModal.innerHTML=button;
        return footerModal;
    }

    static openModal(){
        let modal = this.getModal();
        modal.classList.remove('hiddenModal');
    }

    static closeModal(){
        let close = document.querySelector('.close-modal-cTable');
        close.addEventListener("click", function() {
            let modal = close.closest('.modal-cTable');
            modal.classList.add('hiddenModal');
        });
    }
}