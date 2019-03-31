class Edit {

    static init() {
        this.displayEditableTableByOptions();
        const existsTable = RenderTable.isRenderTable();
        existsTable.then(function () {//Me aseguro que la tabla ya esté renderizada antes de asignarle los eventos.
            Edit.listenClick();
            Edit.displayButtonsToSaveChanges();
        })
        this._modifiedData = []; // Array en el que se almacenarán los datos modificados.
        this._removedData = []; // Array en el que se almacenarán los datos que van a guardarse.
    }

    /**
     * Función en la que despliego diferentes llamadas a clases en relación a los parámetros que se han pasado en la posición 'config'.
     */
    static displayEditableTableByOptions() {//Función que recoge parámetros propios de la clase Edit.
        const { modal, actions, confirmButtons, preview, realTime } = Table.getConfigTable();
        if (modal) Modal.init();
        if (actions) this.displayActionsInTable();//Despliego columna al final de la tabla para el editor en línea.
        // if (confirmButtons) this.displayButtonsToSaveChanges();
        if (preview) this.displayPreviewChanges();
    }

    /* #region  Actions */
    static displayActionsInTable() {
        this.displayColumnForActions();
        this.displayRowsForActions();
    }

    static displayColumnForActions() {
        let header = Table.getHeaderTable();
        if (header.indexOf('Actions') < 0) header.push('Actions');
    }

    static displayRowsForActions() {
        let table = Table.getContentTable();
        let actions = '<div class="actions-cTable"><i class="fas fa-edit btn-edit-inline"></i><i class="fas fa-trash-alt btn-delete-inline"></i></div>';
        Object.keys(table).map(value => {
            table[value]['actions'] = actions;
        });
    }

    static listenClick() {
        let btnEdit = document.querySelectorAll('.btn-edit-inline');
        let btnDelete = document.querySelectorAll('.btn-delete-inline');
        if(btnEdit.length >0){
            Tools.bindEvent(btnEdit, "click", this.editRow);
            Tools.bindEvent(btnDelete,"click", this.removeRow);
        }
    }

    /**
     * Función que hace que una fila sea editable.
     * @param {*} element -> elemento al que se ha hecho click
     */
    static editRow(element) {
        let cols = Table.getColumnsWithoutHiddenData();//Columnas editables (que son visibles)
        let row = element.closest('tr');//Fila del DOM
        let rows = row.children;
        Object.keys(rows).forEach(function (el) {
            if (rows[el].children.length == 0) {// 
                rows[el].innerHTML = `<input class="inline-cTable" data-key="${cols[el]}" data-value="${rows[el].textContent}"
                                    type="text" value ="${rows[el].textContent}">`;
            }
        });
        Edit.listenChangesInLine();
    }

    static listenChangesInLine() {
        let that = this;
        let inputs = document.querySelectorAll('.inline-cTable');
        inputs.forEach(function (el) {
            el.addEventListener('blur', function () {
                that.setChangesInRow(this);
            })
        });
    }

    static setChangesInRow(element) {
        let id = element.closest('tr').dataset['idrow'];
        let key = element.dataset['key'];
        let oldValue = element.dataset['value'];
        let value = element.value;
        if (oldValue == value) return;
        let data = {
            id,
            [key]: value
        };
        this.setEditChanges(data, id);
    }

    static setEditChanges(data, id) {
        if (!this._modifiedData[id]) {
            this._modifiedData[id] = data;
        } else {
            let mergedData = Object.assign(this._modifiedData[id], data);
            this._modifiedData[id] = mergedData;
        }
    }

    static removeRow(element) {
        // if(!confirm('This line will be erased, are you sure?')) return;
        let row = element.closest('tr');
        let id = row.dataset['idrow'];
        let field = Table.getRowByKey(id);
        Edit._removedData[id] = field;

        if (Edit._modifiedData[id]) {
            delete Edit._modifiedData[id];
        }
        row.remove();
    }

    static getChanges() {
        let data = {
            edit: this._modifiedData,
            removed: this._removedData
        }
        return data;
    }
    /* #endregion */

    /* #region  Buttons Save-Cancel */
    static displayButtonsToSaveChanges() {
        let table = RenderTable.getTable();
        table = table.parentNode;
        let container = document.createElement('div');
        container.classList.add('cTable-buttons-container');
        let buttons = `<button class="btn-table btn-save">Save</button><button class="btn-table btn-cancel">Cancel</button>`;
        container.innerHTML = buttons;
        table.appendChild(container);
        this.listenClickInSaveButtons();
    }

    static listenClickInSaveButtons(){
        let btnSave = document.querySelector('.btn-save');
        let btnCancel = document.querySelector('.btn-cancel');
        Tools.bindEvent(btnSave, 'click', this.saveChanges);
        Tools.bindEvent(btnCancel,'click', this.discardChanges);
    }

    static saveChanges(ee){
        //TODO:: Por implementar Clase AjaxTable
    }

    static discardChanges(ee){
        Edit._modifiedData = [];
        Edit._removedData = [];
        RenderTable.renderBodyByEvent();
    }
    /* #endregion */
}