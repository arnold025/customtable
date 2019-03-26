class Edit{

    static init(){
        this.displayEditableTableByOptions();
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
        header.push('Actions');
    }

    static displayRowsForActions(){
        let table = Table.getContentTable();
        let actions = '<i class="fas fa-edit btn-edit"></i><i class="fas fa-trash-alt btn-delete"></i>';
        Object.keys(table).map(value => {
            table[value]['actions'] = actions;
        });
    }
}