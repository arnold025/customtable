class Order{
    static init(){
        // this.displayButtons();
        this.listenClick();
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
        
        [].forEach.call(order, function(el) {
            el.addEventListener("click", function() {
                console.log('entro')
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
        let keys = Object.keys(Table._content[0]);
        let index = keys[position];
        let content = Table.getContentModifiedInTable();
        if(content.length>0){
            content = this.sortElements(content, index);
        }else{
            content = Table.getContentTable();
            content = this.sortElements(content, index);
        }
        RenderTable.renderBodyBySearch(content);
    }

    static sortElements(element, index, type='ASC'){
        element.sort(function (a, b) {
            let elementA = a[index];
            let elementB = b[index];
            if(!isNaN(parseInt(elementA)) && !isNaN(parseInt(elementB))){
                elementA= parseInt(elementA);
                elementB= parseInt(elementB);
            }
            if(type=='ASC') return Order.orderElements(elementA,elementB);
            else return Order.orderElements(elementB,elementA);
        });
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