class Filter {

    static init(){
        this.displayFilter();
    }

    static displayFilter(){
        let div = document.querySelector('#toolsCustomTable');
        let container = document.createElement('div');
        container.classList.add('filter-table');
        container.innerHTML='<input type="text" id="searchTable" value="" onKeyUp="Filter.listenInput()" name="filter" placeholder="Search...">';
        div.appendChild(container);
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
        let hiddenData = Table.getHiddenData();
        let contentInTable = Table.getContentTable();
        let inTable = [];
        contentInTable.forEach(function(value){
            let coincidence = false;
            Object.keys(value).map(item => {
                if(item!=hiddenData){
                    let word = value[item].toUpperCase();
                    if(word.includes(search)){
                        coincidence = true;
                    }
                }
            });
            if(coincidence) inTable.push(value);
        });
        return inTable;
    }

}