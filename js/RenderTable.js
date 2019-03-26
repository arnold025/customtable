/**Clase en la que se renderizarán las tablas.
 * 
 */
class RenderTable{

    static init(dataHeader,dataBody){
        this._table = document.querySelector('#customTable');
        this.renderHeader(dataHeader);
        this.renderBody(dataBody);
        this._renderTable= true;
    }

    static async isRenderTable(){
        return this._renderTable || false;
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
        let hiddenItems = Table.getHiddenData();
        let key = Table.getKeysByTable();
        this._tbody = document.createElement('tbody');
        let content ="";
        let td="";
        Object.keys(dataBody).map(item => {
            Object.keys(dataBody[item]).map(element => {
                if(!hiddenItems.includes(element.toLowerCase()) ){
                    td += `<td>${dataBody[item][element]}</td>`
                }
            });
            content+= `<tr data-idrow="${dataBody[item][key]}">${td}</tr>`;
            td="";
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
}