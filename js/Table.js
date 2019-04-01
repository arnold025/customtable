/**
 * Clase principal.
 */
class Table{
    static init(data){
        const {keys, hidden, header, content, params, config } = data;
        this._header = header;  //Cabecera de la tabla.
        this._content = content;//Contenido de la tabla.
        this._keys = keys;      //Clave o claves que identifican una fila.
        this._hidden = hidden;  //Columnas que no se renderizan en la tabla.
        this._params = params;  //Parámetros adicionales, filtro, edición...
        this._config = config;  //Configuración de la tabla. (relacionados con los parámetros)
        this._dataModified = [];//Aquí se guardarán las modificaciones en el DOM que se realicen sobre la tabla.
        this.initContent();
    }
    
    static setContentModifiedInTable(content){
        this._dataModified = content;
    }
    
    static getContentModifiedInTable(){
        return this._dataModified;
    }

    static getContentTable(){
        return this._content;
    }

    static getHeaderTable(){
        return this._header;
    }

    static getKeysByTable(){
        let keys = this._keys;
        keys = keys.includes(',') ? keys.split(',').map(el => el.trim().toLowerCase()) : keys;
        return keys;
    }

    static getHiddenData(){
        let hiddenData = this._hidden;
        hiddenData = hiddenData.includes(',') ? hiddenData.split(',').map(el => el.trim().toLowerCase()) : hiddenData;
        return hiddenData;
    }

    static getColumnsWithoutHiddenData(){
        let hiddenData = this.getHiddenData();
        let contentTable = this.getContentTable()[0];
        let col = [];
        let cont=0;
        Object.keys(contentTable).forEach(function(el){
            if(el != hiddenData){
                col[cont]=el;
                cont++;
            }
        });
        return col;
    }

    /**
     * Función en la que se devuelve el objeto asociado a la key (o keys) que se pasan como parámetros al JSON inicial.
     */
    static getRowByKey(keyRow){
        let key = this.getKeysByTable();
        let data = this.getContentTable();
        data = data.filter(row => row[key] == keyRow)[0];
        let row ={};
        Object.keys(data).forEach(function(element){
            if(element!='actions') row[element] = data[element]
        });
        return row;
    }

    static initContent(){
        if(this._params){
            this.displayParamsTable();
        }
        RenderTable.init(this._header, this._content);
        // this.displayTable({header, body});
    }
    
    static displayParamsTable(){
        //TODO:: Esta función no sólo debe inicializar las clases, sino también cargarlas.
        //En la carga inicial del DOM sólo debe cargar la clase principal `Table` y desde aquí llamar a las que se requieran.
        const {filter, edit, order, pagination} = this._params;
        if(edit) Edit.init();
        if(filter) Filter.init();
        if(order) Order.init();
        if(pagination) Pagination.init();
    }

    static getConfigTable(){
        return this._config;
    }

    static getContentTableWithModifications(){
        let contentTable = this.getContentModifiedInTable();
        let editRows = Edit.getChanges();
        if(!editRows) return contentTable;
        let removedKeys = Object.keys(editRows['removed']);
        let modifiedData = editRows['edit'];
        // if(contentTable.length == 0) contentTable = this.getContentTable();// Si no se ha modificado la tabla antes, se recogen los datos de la clase Table.
        let key = this.getKeysByTable();
        let data = [];
        contentTable.forEach(function(element){
            let index = element[key].toString();
            if(removedKeys.indexOf(index)<0){
                if(Object.keys(modifiedData).indexOf(index)>=0){
                     Object.assign(element,modifiedData[index]);
                }
                data.push(element);
            }
        });
        return data;
    }
}
/**Example
 * TODO:: DELETE Example!!
 */
var Example = {
    keys : 'id',//TODO:: Preparar para trabajar con claves compuestas
    hidden : 'id',//Columnas que no se quiere mostrar en el DOM pero son necesarias para trabajar. Ejemplo: ID
	header : ['Name','Last name', 'Age', 'Ocupation', 'Sex'],//Cabecera de la tabla.
	content : [//Contenido de la tabla.
        {
            'id' : 862,
            'name' : 'David',
            'lastName' : 'Gonzales Romero',
            'Age' : '34',
            'Ocupation' : 'Teacher',
            'Sex' : 'Male'
		},
		{
            'id' : 323,
            'name' : 'Maria',
            'lastName' : 'Jimenez Arroyo',
            'Age' : '24',
            'Ocupation' : 'Student',
            'Sex' : 'Female'
		},
		{
            'id' : 543,
            'name' : 'Luis',
            'lastName' : '',
            'Age' : '29',
            'Ocupation' : 'Designer',
            'Sex' : 'Male'
		},
		{
            'id' : 653,
            'name' : 'Lucía',
            'lastName' : 'Lopez',
            'Age' : '28',
            'Ocupation' : 'Datamanager',
            'Sex' : 'Female'
		},
		{
            'id' : 193,
            'name' : 'Andrea',
            'lastName' : 'Rojas',
            'Age' : '43',
            'Ocupation' : 'Administrative',
            'Sex' : 'Female'
		},
		{
            'id' : 754,
            'name' : 'Arnold',
            'lastName' : 'Solorzano',
            'Age' : '23',
            'Ocupation' : 'Web developer',
            'Sex' : 'Male'
		}
    ],
    params : {//Parámetros básicos de la tabla.
        filter : true,
        edit : true,
        order: true,
        pagination : true
    },
    config : {//Configuración extra de la tabla. Van ligados a los parámetros anteriormente indicados. (Params)
        actions : true,//Despliega una columna más con botones de editar y borrar una fila en linea (Edit)
        confirmButtons : true,//Despliega botón de guardar para enviar los cambios a servidor (Edit)
        modal: true,//Despliega tres botones: Crear, editar y borrar que abren un modal de edición para realizar las modificaciones pertinentes. (Edit)
        preview: false,//Despliega un <div> con los cambios realizados y da la posibilidad de volver atrás. (Edit)
        realTime: false,//True indica que cada modificación de la tabla será enviada al servidor (Edit)
        elementsPage: 5,
        maxButtonsPagination: 5 //Número de botones que habrá en la paginación.
    }
}