		// Creating Grid
		Ext.define('SE.view.Sessions', {
			title: 'Customers',
			extend: 'Ext.grid.Panel',
			alias: 'widget.sessiongridpanel',
			// listeners: {
			// 	itemdblclick: function(gridpanel, record, item, e){
			// 		var formwindow = Ext.create('SE.view.SessionForm');
			// 		var form = formwindow.down('form');
			// 		console.log(record);
			// 		form.loadRecord(record);
			// 		formwindow.show();
			// 	}
			// },

			store: 'Sessions',
			columns: [
				{
				 xtype: 'gridcolumn',
				 text: "ID",
				 dataIndex: 'id'	
				},
				{
				 xtype: 'gridcolumn',
				 text: 'TITLE',
				 dataIndex: 'title',
				 flex: 1,
				 minWidth: 100,
                 width: 75	
				},
				{
				 text: 'APPROVED',	
				 xtype: 'gridcolumn',
				 dataIndex: 'approved',	
				},
				{
					dataIndex: 'sessionTimePretty',
					text: 'Session Start Time',
					width: 180
				}
			],
			features: [
				{
					ftype: 'grouping',
					groupHeaderTpl:[
                            '{[values.rows[0].get(\'sessionTimePretty\')]}(Session Count: {rows.length})'
                        ]
				}
			]
		});