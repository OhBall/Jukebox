var apiKey = 'AIzaSyBBaRnc0RTqC-L1XJqVmY03L6WUp0YjCJY';
//var gapi;

//callback for gapi.client.load(...)
function onYouTubeApiLoad(){
	gapi.client.setApiKey(apiKey);	
}
	
//loads youtube api on client load
function onClientLoad() {
	gapi.client.setApiKey(apiKey);
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
};

//function for searching youtube
function search(keyword){
	var request = gapi.client.youtube.search.list({
	    part: 'snippet',
	    q: keyword,
	    maxResults: 1,
	});
	request.execute(onSearchResponse);
};

function onSearchResponse(response){
	//showResponse(response);
	console.log(response);
	var vidID = response.items[0].id.videoId;
	$("#ytubeplayer")[0].src = 'https://www.youtube.com/embed/'+vidID+"?autoplay=1";
};

function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

$(document).ready(function(){
	
	//create searchbox
	var searchBox = document.createElement("input");
	searchBox.type = 'text';
	searchBox.id = 'searchBox';
	searchBox.placeholder = "Enter song here";
	$("#searchForm").append(searchBox);
	
	//create search button
	var searchButton = document.createElement("input");
	searchButton.type = "Submit"
	searchButton.value = "Play"
	$("#searchForm").append(searchButton);
	
	$("#searchForm").submit(function(){
		console.log("submitting");
		var keyword = $("#searchBox").val();
		search(keyword);
		return false;
	});
	
	//$(#"add2queue").click(function(){
	//	$(#)
	//});
	
	document.body.appendChild(document.createElement("br"));
	document.body.appendChild(document.createElement("br"));
	
	var miku = document.createElement("button");
	miku.append("Miku");
	document.body.appendChild(miku);
	$(miku).click(function(){
		video.src = "https://www.youtube.com/embed/Zve28o0HIXY?autoplay=1";	
		}
	);
	
	var levi = document.createElement("button");
	levi.append("Levi");
	document.body.appendChild(levi);
	$(levi).click(function(){
		video.src = "https://www.youtube.com/embed/tOmYCnU1-UU?rel=0";
		}
	);
	
	document.body.appendChild(document.createElement("br"));
	
	var video = document.createElement("iframe");
	video.width = width="300";
	video.height = height="300";
	video.id = "ytubeplayer"
	video.autoplay = 1;
	video.src = "";
	document.body.appendChild(video);
	
	
	var max = 1;
	var kwd = "popipo";
	//use the youtube api to search for videos with query
	//grab id of first video
	//set player src to first video's id
	//http://www.youtube.com/v/VIDEO_ID?version=3&enablejsapi=1
	
	//"https://www.googleapis.com/youtube/v3/search?part=snippet&q=".urlencode($kwd)."&maxResults=".$max."&order=viewCount&key={AIzaSyBBaRnc0RTqC-L1XJqVmY03L6WUp0YjCJY}"
	
	
	
	
});