/**
 * Clase principal.
 */
class Table{
    constructor(data){
        const { header, content, params,config } = data;
        this._header = header;//Cabecera de la tabla.
        this._content = content;//Contenido de la tabla.
        this._params = params;//Parámetros adicionales, filtro, edición...
        this._config = config;//Configuración de la tabla.
        this.initContent(); //Remove
    }

    initContent(){
        RenderTable.init(this._header, this._content);
        if(this._params){
            this.displayParamsTable();
        }
        // this.displayTable({header, body});
    }
    
    displayParamsTable(){
        const {filter, edit} = this._params;
        if(filter) Filter.init();
    }
}
/**Example
 * TODO:: DELETE Example!!
 */
var Example = {
	header : ['Name','Last name', 'Age', 'Ocupation', 'Sex'],
	content : [
        {
            'name' : 'Arnold',
            'lastName' : 'Solorzano Moreno',
            'Age' : '23',
            'Ocupation' : 'Web developer',
            'Sex' : 'Masculine'
		},
		{
            'name' : 'Amanda',
            'lastName' : 'Cañamás Morelli',
            'Age' : '27',
            'Ocupation' : 'Scientist',
            'Sex' : 'Female'
		},
		{
            'name' : 'Paca',
            'lastName' : 'Cañamás',
            'Age' : '27',
            'Ocupation' : 'Studient',
            'Sex' : 'Female'
		}
    ],
    params : {
        filter : true,
        edit : false
    }
	
}