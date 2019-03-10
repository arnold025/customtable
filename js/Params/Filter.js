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
        let inTable = this.searchInTable(input.toUpperCase());
        Table.setContentModifiedInTable(inTable);
        RenderTable.renderBodyBySearch(inTable);
    }

    //Función que busca en el objeto table.
    static searchInTable(search){
        // if(!search) return Table._content;
        let inTable = [];
        Table._content.forEach(function(value){
            let coincidence = false;
            Object.keys(value).map(item => {
                let word = value[item].toUpperCase();
                if(word.includes(search)){
                    coincidence = true;
                }
            });
            if(coincidence) inTable.push(value);
        });
        return inTable;
    }

}