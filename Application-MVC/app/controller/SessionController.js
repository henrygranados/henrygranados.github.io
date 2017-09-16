Ext.define('SE.controller.SessionController', {
	extend: 'Ext.app.Controller',

	stores: [
		'Sessions', 'Presenters', 'SessionPresenters'
	],

	// This is a way to have a reference to any component from Controller
	refs: [
		{
			ref: 'details',
			selector: 'detailspanel'
		},
		{
			ref: 'presenters',
			selector: 'presenters'
		},
		{
			ref: 'sessions',
			selector: 'sessiongridpanel'
		}
	],

	// Declaring this helper function outside so it can be call later
	onItemdblclick: function(gridpanel, record, item, e){
					var formwindow = Ext.create('SE.view.SessionForm');
					var form = formwindow.down('form');
					console.log(record);
					form.loadRecord(record);
					formwindow.show();
	},

	init: function(){
		this.control({
			"sessiongridpanel": {
				itemdblclick: this.onItemdblclick,

				select: function(rowmodel, record, index, eOpts){
					Ext.suspendLayouts();
					var sessionId = record.get("id"); // Gets the ID
					console.log(sessionId); // prints out the id of the session (row)

					var presentersIds = [];

					/*
					We are accessing the JSON file (sessionpresenters.json)
					by simply having a reference to all the stores (stores property... line 5),
					then to access the json file we need to do get[storeName]Store()
					*/
					var spStore = this.getSessionPresentersStore();
					//console.log(spStore);

					spStore.each(function(rec){
						if(rec.get('sessionId') === sessionId){
							presentersIds.push(rec.get('id'));	
						}
					});

					this.getPresentersStore().clearFilter();
					this.getPresentersStore().filterBy(function(rec){
						
						var foundMatch = false;

						for(var i = 0; i < presentersIds.length; i++){
							if(rec.get('id') === presentersIds[i]){
								foundMatch = true;	
							}	
						}
						return foundMatch;
					});

					// Fill in details on right side for session

					var sessions = record.getData();
					sessions.presenters = [];
					this.getPresentersStore().each(function(presenterRecord){
						sessions.presenters.push(presenterRecord.getData())
					});

					var detailsPanel = this.getDetails(); // doing get[ref to Details] (First letter must be upperCase)
					// detailsPanel.update({
					// 	title: 'from controller'
					// });

					detailsPanel.update(sessions); // will print out title because its declared in template (Details.js) tpl

					Ext.resumeLayouts();
				}
			}
		});
	}

});