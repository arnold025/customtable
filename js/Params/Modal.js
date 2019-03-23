class Modal{
    static init(){
        this.renderModal();
        this.closeModal();
    }
    
    static renderModal(){
        let parentModal = this.getParent();
        let modal = this.getContainerModal();
        // let headerModal = this.getHeader();
        // let contentModal = this.getContentModal();
        // let footerModal = this.getFooterModal();
        
        // modal.appendChild(headerModal);
        // modal.appendChild(contentModal);
        // modal.appendChild(footerModal);
        parentModal.appendChild(modal);
    }

    static getParent(){
        let parentModal = document.querySelector('footer');
        if(!parentModal) parentModal = document.querySelector('body');
        return parentModal;
    }

    static getContainerModal(){
        let modal = document.createElement('div');//Modal
        modal.classList.add('modal-cTable');
        
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
        let names = Table.getHeaderTable();
        console.log(names);
        let fields = Table.getContentTable()[0];
        console.log(fields);
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
        let buttonMsg ="Create";
        let footerModal = document.createElement('div');
        footerModal.classList.add('modal-footer');
        let button =`<button class="btn-table btn-modal">${buttonMsg}</button>`;
        footerModal.innerHTML=button;
        return footerModal;
    }

    static openModal(){
        
    }

    static closeModal(){
        let close = document.querySelector('.close-modal-cTable');
        close.addEventListener("click", function() {
            let modal = close.closest('.modal-cTable');
            modal.classList.add('hiddenModal');
        });
    }
}