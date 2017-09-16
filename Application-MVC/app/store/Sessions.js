Ext.define('SE.store.Sessions', {
	extend: 'Ext.data.Store',
	model: 'SE.model.Session',
	sorters:[
      {
        property: 'title'
      }
    ],

    // Grouping	
    groupField: 'sessionTimeDateTime',
				
	autoLoad: true,
	autoSync: true,
});