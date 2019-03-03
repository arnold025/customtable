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
        this._inTable = [];
        this._notInTable = [];
        this.searchInTable(input.toUpperCase());
    }

    static searchInTable(search){
        let tbody = document.querySelector('#customTable tbody').children;
        for(let i=0;i<tbody.length;i++){
            let row = tbody[i].children;
            console.log(tbody[i]);
            let rowContent = false;
            for(let j = 0;j<row.length;j++){
                let word = row[j].textContent.toUpperCase();
                if(word.includes(search)){
                    rowContent = true;
                }
            }
            if(rowContent){
                this._inTable.push(tbody[i]);
            }else{
                this._notInTable.push(tbody[i]);
            }
        }
    }

    
    static restoreTable(){
        //Función para restaurar tabla a un estado inicial.
    }

}