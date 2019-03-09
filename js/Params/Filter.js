class Filter {

    static init(){
        this.displayFilter();
    }

    static displayFilter(){
        let div = document.querySelector('#toolsCustomTable');
        div.innerHTML='<input type="text" id="searchTable" value="" onKeyUp="Filter.listenInput()" name="filter" placeholder="Search...">';
    }

    static listenInput(){
        let input = document.querySelector('#searchTable').value;
        // if(!input) this.restoreTable();
        let inTable = this.searchInTable(input.toUpperCase());
        RenderTable.renderBodyBySearch(inTable);
    }
    
    //Función que busca en el objeto table.
    static searchInTable(search){
        if(search=="") return Table._content;
        let inTable = [];
        Table._content.forEach(function(value){
            let control = false;
            Object.keys(value).map(item => {
                let word = value[item].toUpperCase();
                if(word.includes(search)){
                    control = true;
                }
            });
            if(control) inTable.push(value);
        });
        return inTable;
    }

}