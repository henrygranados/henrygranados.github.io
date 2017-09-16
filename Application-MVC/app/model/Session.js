Ext.define('SE.model.Session', {
	extend: 'Ext.data.Model',

	fields: [
			'id', 
			{
				name: 'title',
				sortType: 'asUCText'
			},
			'approved',
			{
                dateFormat: 'c',
                 name: 'sessionTimeDateTime',
                 sortType: 'asDate',
                 type: 'date'
            },
            {
            // Conveting date format to pretty format
            convert: function (v, rec) {
               var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a'),
                   pretty = convertIt(rec.get('sessionTimeDateTime'));
                  return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
            }

	],
	// Using Proxy instead of hardcoded data
	proxy: {
			type: 'rest',
			url: '/Application-MVC/data/Ext/sessions.json',
			reader:{
				type: 'json',
				root: 'data'
			}
	}
});