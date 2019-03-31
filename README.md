# customtable
Simple grid table with Vanilla JS

Example:
<div class='customTable'>
    <div id='toolsCustomTable'></div>
    <table id='customTable'>

    </table>
</div>

var Example = {
    keys : 'id',
    hidden : 'id',
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
    params : {
        filter : true,
        edit : true,
        order: true
    },
    config : {
        actions : true,
        confirmButtons : true,
        modal: true,
        preview: false,
        realTime: false,
    }
}
