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

    /**
     * Función en la que se devuelve el objeto asociado a la key (o keys) que se pasan como parámetros al JSON inicial.
     */
    static getRowByKey(keyRow){
        let key = this.getKeysByTable();
        let data = this.getContentTable();
        return data.filter(row => row[key] == keyRow)[0];
    }

    static initContent(){
        if(this._params){
            this.displayParamsTable();
        }
        RenderTable.init(this._header, this._content);
        // this.displayTable({header, body});
    }
    
    static displayParamsTable(){
        const {filter, edit, order} = this._params;
        if(edit) Edit.init();
        if(filter) Filter.init();
        if(order) Order.init();
    }

    static getConfigTable(){
        return this._config;
    }
}
/**Example
 * TODO:: DELETE Example!!
 */
var Example = {
    keys : 'id',
    hidden : 'id',
	header : ['Name','Last name', 'Age', 'Ocupation', 'Sex'],
	content : [
        {
            'id' : 862,
            'name' : 'Arnold',
            'lastName' : 'Solorzano Moreno',
            'Age' : '23',
            'Ocupation' : 'Web developer',
            'Sex' : 'Male'
		},
		{
            'id' : 323,
            'name' : 'Amanda',
            'lastName' : 'Cañamás Morelli',
            'Age' : '27',
            'Ocupation' : 'Scientist',
            'Sex' : 'Female'
		},
		{
            'id' : 543,
            'name' : 'Dani',
            'lastName' : 'Bogdán',
            'Age' : '3',
            'Ocupation' : 'Tocapelotas',
            'Sex' : 'Male'
		},
		{
            'id' : 653,
            'name' : 'Franz',
            'lastName' : 'Solorzano Moreno',
            'Age' : '28',
            'Ocupation' : 'Administrative',
            'Sex' : 'Male'
		},
		{
            'id' : 193,
            'name' : 'Blacky',
            'lastName' : '',
            'Age' : '6',
            'Ocupation' : '',
            'Sex' : 'Male'
		}
    ],
    params : {
        filter : true,
        edit : true,
        order: true
    },
    config : {
        actions : true,
        realTime: false,
        preview: true,
        inlineEdit : false,
        modal: true
    }
}