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
        let tbody ="<tbody>"
        Object.keys(dataBody).map(item => {
            tbody+= "<tr>";
            Object.keys(dataBody[item]).map(element => {
                tbody+= `<td>${dataBody[item][element]}</td>`
            });
            tbody+= "</tr>";
        });
        tbody += "</tbody>";
        this._table.innerHTML+=tbody;
    }
}