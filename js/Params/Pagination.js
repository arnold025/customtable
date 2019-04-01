class Pagination {

    static init() {
        this.setConfig();
        this.initEventsByEditTable();
    }

    static initEventsByEditTable() {
        const existsTable = RenderTable.isRenderTable();
        existsTable.then(function () {//Me aseguro que la tabla ya esté renderizada antes de asignarle los eventos.
            Pagination.displayPaginationButtons();
        });
    }

    static displayPaginationButtons() {
        let table = RenderTable.getTable();
        table = table.parentNode;
        console.log(table);
        let container = document.querySelector('.cTable-buttons-container');
        if (!container) {
            container = document.createElement('div');
            container.classList.add('cTable-buttons-container');
        }
        let containerButtons = document.createElement('div');
        containerButtons.classList.add('cTable-pagination');
        let btnPagination = "";
        // let nElements= this._elements.length;
        let nElements= 60;
        let nPages = Math.ceil(nElements/this._numElementsPage);
        // let nButtons = (nPages>this._maxButtons) ? this._maxButtons : nPages;
        
        for (let i = this._currentPage; i <nPages; i++) {
            if(i == this._currentPage){
                btnPagination+=`<a href="#" class="cTable-currentPage">${i}</a>`
            }else if(this._currentPage > 1 && i==this._currentPage){
                btnPagination+=`<a href="#">&laquo;</a>`
            }else if(i==(nPages-1)){
                btnPagination+=`<a href="#">&raquo;</a>`
            }else{
                btnPagination+=`<a href="#">${i}</a>`
            }
        }
        containerButtons.innerHTML=btnPagination;
        container.appendChild(containerButtons);
        table.appendChild(container);
    }

    static setConfig() {
        const { elementsPage, maxButtonsPagination } = Table.getConfigTable();
        this._elements = Table.getContentTable();
        this._numElementsPage = elementsPage;
        this._currentPage = 1;
        this._maxButtons = maxButtonsPagination;
    }
}