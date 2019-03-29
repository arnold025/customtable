class Edit{

    static init(){
        this.displayEditableTableByOptions();
        const existsTable = RenderTable.isRenderTable();
        existsTable.then(function(){//Me aseguro que la tabla ya esté renderizada antes de asignarle los eventos.
            Edit.listenClick();
        })
        this._modifiedData = []; // Array en el que se almacenarán los datos modificados.
    }
    
    /**
     * Función en la que despliego diferentes llamadas a clases en relación a los parámetros que se han pasado en la posición 'config'.
     */
    static displayEditableTableByOptions(){//Función que recoge parámetros propios de la clase Edit.
        const {modal, actions, inlineEdit, preview, realTime} = Table.getConfigTable();
        if(modal) Modal.init();
        if(actions) this.displayActionsInTable();
    }

    static displayActionsInTable(){
        this.displayColumnForActions();
        this.displayRowsForActions();
    }

    static displayColumnForActions(){
        let header = Table.getHeaderTable();
        if(header.indexOf('Actions')<0) header.push('Actions');
    }

    static displayRowsForActions(){
        let table = Table.getContentTable();
        let actions = '<div class="actions-cTable"><i class="fas fa-edit btn-edit-inline"></i><i class="fas fa-trash-alt btn-delete-inline"></i></div>';
        Object.keys(table).map(value => {
            table[value]['actions'] = actions;
        });
    }

    static listenClick(){
        let btnEdit = document.querySelectorAll('.btn-edit-inline');
        let btnDelete = document.querySelectorAll('.btn-delete-inline');
        let that = this;
        btnEdit.forEach(function(el) {
            el.addEventListener("click", function() {
                that.editRow(this);
            });
        });
        btnDelete.forEach(function(el) {
            el.addEventListener("click", function() {
                that.removeRow(this);
            });
        });
    }
    /**
     * Función que hace que una fila sea editable.
     * @param {*} element -> elemento al que se ha hecho click
     */
    static editRow(element){
        // let cols = Table.getColumnsWithoutHiddenData();//Columnas editables (que son visibles)
        let row = element.closest('tr');//Fila del DOM
        let keyRow = row.dataset["idrow"];
        let originalRow = Table.getRowByKey(keyRow);//Almaceno los valores originales de la fila.
        let rows = row.children;
        
        Object.keys(rows).forEach(function(el){
            if(rows[el].children.length==0){// data-${cols[el]}=${rows[el].textContent}
                rows[el].innerHTML=`<input class="inline-cTable"
                                    type="text" value ="${rows[el].textContent}">`;
            }
        });
    }

    static removeRow(element){
        let row = element.closest('tr');
        console.log(row);
    }
}