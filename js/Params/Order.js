class Order{
    static init(){
        this.displayButtons();
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
        // let order = document.querySelectorAll("thead th");//Cambiar selector
        [].forEach.call(document.querySelectorAll("thead th"), function(el) {
            el.addEventListener("click", function() {
                let parent = el.closest('tr');
                parent.childNodes.forEach(function(element,index){
                    if(element ===el){
                        Order.orderTable(index);
                    }
                })
            });
        });
    }

    static orderTable(position){
        let keys = Object.keys(Table._content[0]);
        let order = keys[position];
        Table._content.sort(function (a, b) {
            if(!isNaN(parseInt(a[order])) && !isNaN(parseInt(a[order]))){
                a[order]= parseInt(a[order]);
                b[order]= parseInt(b[order]);
            }
            if (a[order] > b[order]) {
                return 1;
            }
            if (a[order] < b[order]) {
                return -1;
            }
            return 0;
        });
        RenderTable.renderBodyBySearch(Table._content);
    }
}