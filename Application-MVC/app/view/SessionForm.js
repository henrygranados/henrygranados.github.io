		// Creating Pop-Up using Ext.window.Window
		Ext.define('SE.view.SessionForm', {
			extend: 'Ext.window.Window',
			alias: 'widget.sessionform',
			padding: 5,
			width: 600,
			title: 'Edit Sessions',
			modal: true,
			bodyStyle: {
				'background-color': "#fff"
			},
			items: [
				{
					xtype: 'form',
				    border: 0,
					bodyPadding: 10,
					manageHeight: false,
					title: '',
					fieldDefaults: {
					  labelWidth: 90,
					  margin: '0 0 10',
					  labelAlign: 'right',
					  anchor: '90%'	
					},
					items: [
					       {
					       	xtype: 'textfield',
					       	name: 'title',
					       	fieldLabel: 'Title',
					       	allowBlank: false
					       },
					       {
					       	xtype: 'checkboxfield',
					       	name: 'approved',
					       	fieldLabel: 'Approved'
					       }			
					]
				},
				// Buttons on Pop Up
				{
					xtype: 'container',
					padding: '10 10 10 10',
					layout: {
						type: 'hbox',
						align: 'middle',
						pack: 'center'
					},
					items: [
					 {
						xtype: 'button',
						text: 'Save',
						formBind: true,
						margin: '5 5 5 5',
						handler: function(button){
							var form = button.up().up().down('form');
							form.updateRecord();
							button.up('window').destroy();
						}
					 },
					 {
						xtype: 'button',
						text: 'Cancel',
						margin: '5 5 5 5',
						handler: function(button){
							button.up('window').destroy();
						}
					 }
					]
				}	
			]
		})