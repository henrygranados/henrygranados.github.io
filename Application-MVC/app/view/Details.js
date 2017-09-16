Ext.define('SE.view.Details', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.detailspanel',
	autoScroll: true,
	bodyPadding: 10,

	// tpl: 'Title: {title}',
	// data: {
	// 	title: 'This is a title'
	// }

	tpl: [
	  '<br/>Title: {title}',
	  '<tpl for = "presenters">',
	  '		<br/>Presenter: {firstName} {lastName}',
	  '</tpl>'
	]

	// Code below can be used to show images from endpoint
	/*'<br/>Title: {title}',
	   '<tpl for = "presenters">',
	   '		<br/>Presenter: {firstName}{lastName}',
	   '		<br/><img class = "leaderPhoto" src = "http://www.someWebsite.com/{imageUrl}?width=150"/>',
	   '</tpl>'
	 */
});