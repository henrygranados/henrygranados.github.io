Ext.define('SE.model.SessionPresenter', {
	extend: 'Ext.data.Model',

	requires: [
		'Ext.data.Field',
		'Ext.data.proxy.Rest',
		'Ext.data.reader.Json'
	],

	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'sessionId',
			type: 'int'	
		},
		{
			name: "presenterId",
			type: 'int'
		}
	],

	proxy: {
		type: 'rest',
		url: '/Application-MVC/data/Ext/sessionpresenters.json',
		reader: {
			type: 'json',
			root: 'data'
		}
	}
});