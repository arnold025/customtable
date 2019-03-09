/**
 * Clase principal.
 */
class Table{
    static init(data){
        const { header, content, params,config } = data;
        this._header = header;//Cabecera de la tabla.
        this._content = content;//Contenido de la tabla.
        this._params = params;//Parámetros adicionales, filtro, edición...
        this._config = config;//Configuración de la tabla.
        this.initContent();
    }
    
    static initContent(){
        RenderTable.init(this._header, this._content);
        if(this._params){
            this.displayParamsTable();
        }
        // this.displayTable({header, body});
    }
    
    static displayParamsTable(){
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
            'Sex' : 'Male'
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
		},
		{
            'name' : 'Franz',
            'lastName' : 'Solorzano Moreno',
            'Age' : '27',
            'Ocupation' : 'administrative',
            'Sex' : 'Male'
		}
    ],
    params : {
        filter : true,
        edit : false
    }
	
}