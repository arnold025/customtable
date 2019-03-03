/**
 * Clase principal.
 */
class Table{
    constructor(data){
        const { header, content, config, params } = data;
        this._header = header;
        this._content = content;
        this._config = config;
        this._params = params;
        this.initContent(); //Remove
    }

    initContent(){
        RenderTable.init(this._header, this._content);
        // this.displayTable({header, body});
    }

    displayTable({header,body}){
        
    }
}
/**Example
 * TODO:: DELETE Example!!
 */
var Example = {
	header : {
        1: 'Name',
        2: 'Last name',
        3: 'Age',
		4: 'Ocupation',
		5: 'Sex'
	},
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
    ]
	
}