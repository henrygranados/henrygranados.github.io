// Searchbar Handler
$(document).ready(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

	//We do "return false" so form gets restricted from submitting
	$('#search-form').submit(function(){
		return false;
	});
});

//Creating the call 
function searchVideo(){
	// Clear Results
	$('#results').html('');
	$('#buttons').html('');
	
	// Get Form Input
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			type:'video',
			key: 'AIzaSyCvk3NNMQASZgFkCNxIp9jH-l8O0PXhDUo'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item){
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
				
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				// Display Buttons
				$('#buttons').append(buttons);
			}
	);
}

// Next Page Function
function nextPage(){
	var token = $('#next-button').data('token');
	var q = $('#next-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');
	
	// Get Form Input
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			pageToken: token,
			type:'video',
			key: 'AIzaSyCvk3NNMQASZgFkCNxIp9jH-l8O0PXhDUo'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item){
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
				
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				// Display Buttons
				$('#buttons').append(buttons);
			}
	);
}


// Prev Page Function
function prevPage(){
	var token = $('#prev-button').data('token');
	var q = $('#prev-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');
	
	// Get Form Input
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet, id',
			q: q,
			pageToken: token,
			type:'video',
			key: 'AIzaSyCvk3NNMQASZgFkCNxIp9jH-l8O0PXhDUo'},
			function(data){
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				
				// Log Data
				console.log(data);
				
				$.each(data.items, function(i, item){
					// Get Output
					var output = getOutput(item);
					
					// Display Results
					$('#results').append(output);
				});
				
				var buttons = getButtons(prevPageToken, nextPageToken);
				
				// Display Buttons
				$('#buttons').append(buttons);
			}
	);
}

// Build Output
function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;
	
	// Build Output String
	var output = '<li>' +
	'<div class="list-left">' +
	'<a><img class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'"src="'+thumb+'"></a>' +
	'</div>' +
	'<div class="list-right">' +
	'<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/'+videoId+'"><span class = "videoTitle">'+title+'</span></a></h3>' +
	'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
	'<p>'+description+'</p>' +
	'</div>' +
	'</li>' +
	'';
	
	return output;
}

// Build the buttons
function getButtons(prevPageToken, nextPageToken){
	if(!prevPageToken){
		var btnoutput = '<div class="button-container">'+'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></div>';
	} else {
		var btnoutput = '<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+prevPageToken+'" data-query="'+q+'"' +
		'onclick="prevPage();">Prev Page</button>' +
		'<button id="next-button" class="paging-button" data-token="'+nextPageToken+'" data-query="'+q+'"' +
		'onclick="nextPage();">Next Page</button></div>';
	}
	
	return btnoutput;
}