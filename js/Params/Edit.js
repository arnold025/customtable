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
        if(actions) RenderTable.displayActionsInTable();
    }
}