class Order{
    static init(){
        this._orderType = 'ASC';
        const existsTable = RenderTable.isRenderTable();
        existsTable.then(function(){//Me aseguro que la tabla ya esté renderizada antes de asignarle los eventos.
            Order.listenClick();
        });
    }

    /**
     * TODO:: Optimizar función. ¿Mostrar la flecha en la carga del DOM o hacerlo después en esta función?
     */
    static displayButtons(){
        let tr = document.querySelectorAll('#customTable thead tr')[0];
        tr.childNodes.forEach(function(element){
            element.innerHTML+='<span class="arrow"></span>';
        });
    }

    /**
     * Función en la que recojo la columna en la que se ha hecho clic
     * para después ordenar de forma ascendente o descendente dicha columna.
     */
    static listenClick(){
        let order = document.querySelectorAll("thead th:not(.actions-cTable)");//Cambiar selector
        
        order.forEach(function(el) {
            el.addEventListener("click", function() {
                let parent = el.closest('tr');
                parent.childNodes.forEach(function(element,index){
                    if(element ===el){
                        Order.sortTable(index);
                    }
                })
            });
        });
    }

    static sortTable(position){
        let keys = Table.getColumnsWithoutHiddenData();
        let index = keys[position];
        let content = Table.getContentModifiedInTable();
        if(content.length>0){
            content = this.sortElements(content, index);
        }else{
            content = Table.getContentTable();
            content = this.sortElements(content, index);
        }
        Table.setContentModifiedInTable(content);
        RenderTable.renderBodyByEvent();
    }

    static sortElements(element, index){
        let that = this;
        element.sort(function (a, b) {
            let elementA = a[index];
            let elementB = b[index];
            if(!isNaN(parseInt(elementA)) && !isNaN(parseInt(elementB))){
                elementA= parseInt(elementA);
                elementB= parseInt(elementB);
            }
            if(that._orderType=='ASC'){
                return Order.orderElements(elementA,elementB);
            }
            else{
                return Order.orderElements(elementB,elementA);
            }
        });
        if(this._orderType == 'ASC') this._orderType = 'DESC';
        else this._orderType = 'ASC';
        return element;
    }

    static orderElements(elementA, elementB){
        if (elementA > elementB) {
            return 1;
        }
        if (elementA < elementB) {
            return -1;
        }
        return 0;
    }
}