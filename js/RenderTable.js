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
        let thead = "<thead><tr>";
        dataHeader.forEach(element => {
            thead += `<th>${element}</th>`;
        });
        thead += "</tr></thead>";
        this._table.innerHTML=thead;
    }
    
    static renderBody(dataBody){
        let tbody = document.createElement('tbody');
        let content ="";
        Object.keys(dataBody).map(item => {
            content+= "<tr>";
            Object.keys(dataBody[item]).map(element => {
                content+= `<td>${dataBody[item][element]}</td>`
            });
            content+= "</tr>";
        });
        tbody.innerHTML=content.trim();
        this._table.appendChild(tbody);
    }

    static renderBodyBySearch(inTable){
        let body = document.querySelector('#customTable>tbody');
        this._table.removeChild(body);
        this.renderBody(inTable);
    }
}