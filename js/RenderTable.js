/**Clase en la que se renderizarán las tablas.
 * 
 */
class RenderTable{

    static init(dataHeader,dataBody){
        this._table = document.querySelector('#customTable');
        this.renderHeader(dataHeader);
        this.renderBody(dataBody);
    }
    static renderHeader(dataHeader){
        this._thead = document.createElement('thead');
        let rows = "<tr>";
        dataHeader.forEach(element => {
            rows += `<th>${element}</th>`;
        });
        rows += "</tr>";
        this._thead.innerHTML = rows;
        this._table.appendChild(this._thead);
    }
    
    static renderBody(dataBody){
        this._tbody = document.createElement('tbody');
        let content ="";
        Object.keys(dataBody).map(item => {
            content+= "<tr>";
            Object.keys(dataBody[item]).map(element => {
                content+= `<td>${dataBody[item][element]}</td>`
            });
            content+= "</tr>";
        });
        this._tbody.innerHTML=content.trim();
        this._table.appendChild(this._tbody);
    }

    static renderBodyBySearch(inTable){
        let body = document.querySelector('#customTable>tbody');
        this._table.removeChild(body);
        this.renderBody(inTable);
    }

    static getHeaderTable(){
        return this._thead;
    }

    static getBodyTable(){
        return this._tbody;
    }

    static displayActionsInTable(){
        this.displayColumnForActions();
        this.displayRowsForActions();
    }

    static displayColumnForActions(){
        let tr = this.getHeaderTable().children[0];
        let actions = document.createElement('th');
        actions.classList.add('actions-cTable');
        let message = 'Actions';
        actions.innerHTML=message;
        tr.appendChild(actions);
    }

    static displayRowsForActions(){
        let body = this.getBodyTable().children;
        console.log(body);
        let rows = document.createElement('td');
        let actions = `<i class="fas fa-plus"></i><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i>`;
        rows.innerHTML = actions;
        Object.keys(body).map(value => {
            console.log(body[value]);
        });
        
    }
}