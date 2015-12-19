// ==UserScript==
// @name            IMDB Links
// @description    Add some direct search links to subtitles, torrent and movie information pages from IMDb.
// @version    
// @author                   mikypilot,vishal mods
// @updateURL      
// @downloadURL    
// @scriptsource   
// @uso:script     []+/
// @namespace      http://userscripts.org/users/29110
// @homepage       http://userscripts.org/users/29110
// @icon           http://www.gravatar.com/avatar/ba4d6f904251cb649572aab891fda0e7?r=PG&s=60&default=identicon
// @screenshot     http://s3.amazonaws.com/uso_ss/11669/large.jpg
// @include        http://*.imdb.com/title/*/
// @include        http://*.imdb.com/title/*/#*
// @include        http://*.imdb.com/title/*/combined*
// @include        http://*.imdb.com/title/*/maindetails*
// @include        http://*.imdb.com/title/*/?*
// @include        http://imdb.com/title/*/
// @include        http://imdb.com/title/*/#*
// @include        http://imdb.com/title/*/combined*
// @include        http://imdb.com/title/*/maindetails*
// @include        http://imdb.com/title/*/?*
// @grant          GM_log
// @grant          GM_openInTab
// @grant          GM_addStyle
// ==/UserScript==



var trackers = new Array();
var cleanTitle = new String(getCleanTitle());
var imdbCode = new String(getImdbCode());

//-----------------------------------
//------------SUBTITLES-------------- 
//-----------------------------------


//KickAss
var kat_title = new String(getTitle());
kat_title = kat_title.replace(/ /g,"%20");
trackers.push(new SearchEngine("Torrent: KickAss", "https://kat.cr/usearch/"+kat_title+" category:movies/?field=seeders&sorder=desc", false, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAACj0lEQVQ4jW2RW0hUURiFvzlzHGccsdFBx7wg4QUVtAgzynqYHjKaXsRIMqEwekmQqKheujx2eTKiCKykl/BFkFLMKEOLEilKKtMyRwcveRnHy1ycfY7Tg55pvCzYsP+11r/+n71hFdXHS2wPbp+Yq6m212rcpZrSZ0/qTvkjuYtnDzbcuXZ0SKt12uXqece7fcVZJQBO14zXZIwy2BLjojR9fHIuaDIaZEucSQJ43t575d7jjlsyQFV5cUJB7ta9qqoAkJ6yxQyg1QBJVrMhkstIi68FVgJizYYzxmi9TlH+NwDsKDlJeuYePNNOulpvrtEyM6wplWVFCSsBMYZSdbVZkmTiE7ehqkFsaYUAjDk/oa4L1wHRBv1hGUCWdUlCEQDExiWw33F5jTm/qJz8onI+vr6Pa7A7zMuyLlcCCC2rkiIEihAE/Iv0vK1ncqwvbHT2d+GeGsI9OYTmU4RgeVmVZYBFX2BCKCIPQMxP0ff1JdbkHJJS8vAuTNPZdpfN4PMHv8kAc/P+TkUIe6RoirEAMDU+gCLEhuagUPH5llolgIXFwCOfL4AQInxkQwwASwEfQggs1ow1+uDwzERz+0+3DNDc3u9KtZkH8rOsOdqE2ekREpOzyCk4QEb2bkTQz9O6qvAGrlHPQwBJI0bGPJVefyAkFIFQBB/eNCCCfnQ6Cb/XQ0vjdTTtj8s92/ii74b2nWFUOLLrdxXaTmu1xZqGxZqKa/AzqrryDos+sdzT+9fe0uHs3BAAUHEkq2l7nrVM0m2QWPAK9cuP6WMtHcNNGqdfb/o+4G40GvQjJqP+kDFakkOhEKFQiF/Oud99g7M72zpd3ZH+jWMi4LCnX4iNkR1uT/Dcq/ejvZt5/gHI7C0FIQ1BBgAAAABJRU5ErkJggg=="));

//Torrentz
trackers.push(new SearchEngine("Torrent: Torrentz", "http://www.torrentz.com/search?q="+cleanTitle, false, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAA0ZpxMG+fNAAAAAXRSTlMAQObYZgAAACNJREFUCJljqP/H8P8/CDUfZGA+gA3dZ2A+xMB8hIH5BJANAL3/EC6qfK0AAAAAAElFTkSuQmCC"));

//ThePirateBay
trackers.push(new SearchEngine("Torrent: Thepiratebay (Video)", "https://pirateproxy.sx/search/%title/0/7/200", false, "data:image/x-icon;base64,Qk04AwAAAAAAADYAAAAoAAAAEAAAABAAAAABABgAAAAAAAAAAADgTAAA4EwAAAAAAAAAAAAA/////////////////////////////////////////////////////v7+/////////////Pz8vb297Ozs////////////////////////////////4uLiSUlJ3d3d////////8/PzEhIScnJy8fHx////////////////////8fHxwsLCWFhYAAAAyMjI////////5+fnEBAQICAgQkJCV1dXZWVli4uLiYmJUlJSKioqPT09bm5uHh4eYWFhwcHBubm5bGxsQEBAp6end3d3FBQUAAAAFBQUOTk5ISEhGRkZPT09WVlZQkJCKioqJycnenp6AAAAQUFBPz8/YGBgjo6O0dHR+/v7////////7+/vxcXFnZ2dg4ODExMTQEBAv7+/AAAAgoKCjo6OpaWltra2qqqqpqampaWlpKSkra2tr6+vsbGx5eXll5eXW1tb1NTUcXFxmJiYAwMDAAAANzc3VFRUGxsbAAAAX19fPDw8ERERAAAAQUFB/v7+/Pz8////////nJycAAAAAAAAAAAAHx8fCwsLAAAAJiYmBQUFAAAAAAAAKysr+vr6////////////nJycAAAAAAAADw8PAAAAAAAAAAAAAAAADQ0NAwMDAAAANjY2+vr6////////////rq6uAAAANjY25eXlWVlZHx8fJycnIyMj0dHRhoaGAAAAV1dX////////////////r6+vAAAALS0t0tLSX19fsrKy2dnZZWVlsrKyiIiIAAAAWVlZ////////////////r6+vAAAAAAAABQUFAgICExMTEBAQAwMDAwMDAQEBAAAAWlpa////////////////q6urAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVFRU////////////////19fXSUlJQUFBQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQkJCQkJCqKio/////////////////////////v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////AAA="));


//---------------------------------------------
//---- Movie Information/Critics (English/Spanish) ----
//---------------------------------------------

//Criticker
trackers.push(new SearchEngine("Info: Criticker", "http://www.criticker.com/?st=movies&h=%title&g=Go", false, "data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAABMLAAATCwAAAAEAAAAAAADq5N4A+vn4ALyolQCojncAuKOPAGEyBABkNggAxralAK+XgQDPwbMAqpJ5ANrQxQC5pJAAq5J9ANnOwwCZe10A1Me6ALSeiQC0nYgAvKmVANrPxAD39fIAxLKiAMi4qADm39cAbUIYAPXx7gCVdlgAqY93ANfMwQCznYcA9PHuALunlADh2NAA7+rmALiijgBaKgAAjWxMAOHXzwDSxbgA08a5APXy8ABxRx8Ajm1OAOXe1wCslHwA3tXLAN3UygD7+fgAhGA8ANnOwgDb0MYA6+XgAIlnRgDGtaQA59/ZAKWKcAC3oYwA5+DZANHDtQD9/PwA6ePdAGU3DACQcFAAo4hwANzSxwDJuqoAnYBkAKeOdgCuln8A4tnQAO3o4wDNvq8A/v39AGU3CgB5USoAqI11AKuSewDKuqsAsJmBAGI0BgC+q5gAhmI/AM6/sACjiG4ArpaBAPj39QDXyr8AimdGAF8wAQCJZUMAYTMEAIhlQgCWd1kA2s7DAKeNdAC2oYwA3dPIALWgiwDv6+YAybipAGIzBgBrQBUAiWZFANbJvQDg184A8+/rAOni3ADl3NUAXi8FAN/WzACnjXUArZV9ANjMwQDUx7sA7ObhAKaMcgBjNQgA0cS3AN3TyQC4pI8AooZrAM7AsgCfgmcAoodvAMKwoABgMQMArpaCAPDr5wBfMQEAuaWTAPby7wDArZsAZjgMAGAyBQCulX4A8+/sAHBGGwDGtaUA3NHGAPf08gCObU0AyLinAJp8XgCqknwAm35hAJZ2WAC5pJEAr5eAAOLYzwD6+fcA7unlALCYhADVybwAkG9PAMm5qgC6pZIA18vAAMWzogDBr54Awa+cAPLt6QCTc1QApYtzAPbz8AC9qpcAt6KNAOTc1ACRcVMAspuFAPXy7wCJZkQArZR9AKeOdQB7VC0A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr6+vr6+vSRU0FAeUP5+iNq8hDl9Uja4ZBmUFbasycFOvik9LUpJ0pgdXGGt7Iytyr55/F6+vr6+vr6+ICJUNHTx9giivr6+vr6+vc12YNWkBAlWLr6+vr6+vrwASN0RsVnisUXGZECc7CQmTmodaR4OlqT6FSgZQW35ZJAQ9OIAaERwLOqdGbmELXgQbTWeMoQgKqq+vr6+vr69ooCx8KSKcOR+vr6+vr6+vm0MDqDAAYkVqr6+vr6+vrxaEL6MBJmAlKlwPLRN6LpcgA62Rr0Fkb5CPMYl1BYGGZkJ2Cq+knTOvr6+WY3eOHlgMQHmvr6+vr6+vr6+vr68CSE5MrwAAdQAAAGUAAABRAAAAZQAAAHkAAAB5AAAAZQAAAEEAAABsAAAAaQAAAHMAAABlAAAAAAAAAGMAAAABCgAAAAw="));

//Movielens

var movie_title = new String(getTitle());
movie_title = movie_title.split(" ").join("+");
//  |\\s*:\\s*|\\s*,\\s
trackers.push(new SearchEngine("Info: Criticker", "https://movielens.org/explore?q="+movie_title, false, "http://www.google.com/s2/favicons?domain=www.movielens.org"));


//Jinni
trackers.push(new SearchEngine("Info: Foundd", "https://foundd.com/search/"+movie_title, false, "http://www.google.com/s2/favicons?domain=https://foundd.com/"));

trackers.push(new SearchEngine("Info: Foundd", "http://www.allmovie.com/search/all/"+movie_title, false, "http://www.google.com/s2/favicons?domain=http://www.allmovie.com/"));


//Jinni
//trackers.push(new SearchEngine("Info: Movienr", "http://www.movienr.com/search/movies/"+movie_title, false, "http://www.google.com/s2/favicons?domain=http://www.movienr.com/"));

//Jinni
//trackers.push(new SearchEngine("Info: Movli", "http://www.movli.com/search?q="+movie_title, false, "http://www.google.com/s2/favicons?domain=http://www.movli.com/"));

//Trakt
trackers.push(new SearchEngine("Info: Takt", "http://trakt.tv/search?utf8=%E2%9C%93&query="+movie_title, false, "http://www.google.com/s2/favicons?domain=trakt.tv/"));

//Filmaffinity
trackers.push(new SearchEngine("Info: Filmaffinity - Spanish", "http://www.filmaffinity.com/en/search.php?stext="+cleanTitle, false, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAA2JJREFUOI11jX1M1HUcx1/f3+93j8hDCB1HSZxiGukhGRotHEJLM2E9WLSJc82a2R+uXK1Vf7Tyv/6o8I/mmm2Vc87Z5sqHplPHREXwgRPMU0+IhwMuHg449O7H3e/49Jcu3Xr99d577wclIjLBZd1FUHPSmOI/9MfJCQ4xLw3lvd2heiut3MWPl3xe7ydwL2MAPMLyNCwH4FiIpUrxVMKkLNB68lB3MLAqMZPUTdNE2eysWr85We+fd/9EhcbFlpV7fU0GweeSY23+j5uK/OOjsSdSlkXCtBBJYppJzFQKm8NJQVHJ2Jubt1Zt8hP85hy6Ubfhs92NL97c+NHaVocSIUfVcrZv4azbYaUN3dR0Da38aZ+qqVzGviMt3Or+O+/aEG/jh84wmh6biOws9emP1VbMYGr50n4zE4ceVQ2VHdpbK6+qjl6v2tLQIHU1FRTkZbH3aKtq7QhmX5h6vuzgO0wbuY7osT/Oev237lST5VZqSUFIDuxoUaP/uDjRVUgsnpL4TEr1DQyw0r9A6lYvlz37WsqvJ6gG0CIj80+5U2G2V7ehMUFHTxYYsxy4uJjGXWs5F9AYn4hyo2+Ew6fa1c4PXrUKF3i5fe7wegANQrdtqTvDd6YhMsXs2ZtOem5k8MLCMF9ubOOLDc3EpsKU+HzsOXSG/Jw5xs73X4FwyxuLdrFYl6aZ6Q+PzC3ff6lwaW/Um76bEL3Yc1deW93HM/lR+kbSaiy9Ql5/qYZnlxRjtxmqsqyE88Gw/eLAomGN7WLZrck2zClwCMxmSFu3RzGL2n1modr2/ctyucdQgDp9KaTqtzcxOj7J3q8bKXWeeNcAmG9Nd/5FwrTSSScut1wJP8pQj5t1y6J8mmsnZgqA3BiK03IyqDZ98i3VpXmMtV/wGQCBbVxz/DzTRSpeoWfnExr2EBj0sq6qV570xekfHOO7H35SV5vPQ6KL4/tPc9wciaFn/moohSEilvZj1m4tGavQdJ20cli/NM/jVuekYfV30TtwhR3HI9Ok44PZTu1Mpkr9GYZmsWITRCKii4h4s21b9NwFooprRXnKBFeRgGdUYTvqgq+AWgG7PAT31Ynf5rrd7t9tDtew22HfOwfeq/J5Vjxc+P8BEZF4f87WNdnFUxLTHgiBIRJ9wLvHv0ps5Pc+OKMpAAAAAElFTkSuQmCC"));


//Metacritic
trackers.push(new SearchEngine("Info: Metacritic", "http://www.metacritic.com/search/all/%title/results", false, "data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAEgAAABIAAAAAAEAAAAAAAAzAAAAsp+fAJl/fwD///8A5d/fAE0gIADMv78AQBAQANnPzwBZMDAAv6+vAKWPjwDy7+8AmYCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJDAgHAAAAAAAAAAAAAAAJDAMDAgAAAAAAAAAAAAAJDAMDAQAAAAAAAAAAAAAJDAMDAQAAAAIHAAAAAAAJDAMDAQAAAAEDCAcAAAAFDAMDBAAAAAEDAwwJAAAAAAEMDAoAAAEDAwwJAAAAAAAABQYDCwYDAwwJAAAHAQcAAAACAwMDAwMJAAAHCAMIAAAAAAYDAwMLAAAHCAMDCAAAAAAACQkDAgAJCAMDCAcAAAAAAAAAAwMGAwMDCAcAAAAAAAAAAAEDAwMDBgcAAAAAAAAAAAAHCgMMDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="));

//Rotten Tomatoes via IMDb-ID
trackers.push(new SearchEngine("Info: Rotten Tomatoes via IMDb-ID", "http://www.rottentomatoes.com/alias?type=imdbid&s=%imdb-id", true, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAA1ZJREFUOI01zktonFUchvH3f843M8lkLpnJpJ3ESVO8YlQab0UhKgaNKHRRRCzWGxQRBVcKuvSCogiu3bgLSEURqtKCWC/VNBSs0dRqSEozyeQyyWQuX+aS+b5zzutC+qx+ywckHUk6Omtpw9B2DUnusd44Pv3c7x3DFknSupDXcs5dowIgACgQpaA8T0VVA+U/i83L5eiVxeSyPvtjF93VQMEzNBagg4iQBAAK6SwgqotmuYbK1m691P/ZuY/97auVoa0zm9ncE/v+fv7oM/WH+16+Hf3RJAFFWKugFUmR/+cCKh3Zmy9Pf/fm5+8/kopfl716aRex+apN35PVA7cmzdTwzVceHDuCwuADA+hL5mgtRWuIM8aK1iooXVz+9It349vFjYHtQsy100pvhaLygxE7OltX+SVfSvsZZCZuW3vphU+aaRwcAx3Ekkb9+tPKN28cHzjoelJ3NIWnDydl+tEsjny1xXN3JyXWH+F7H2y4SCByKWdVsRAUj370ZYt3HR4TLi6VMPmY7farA6tjifDngvIW9sVww2aAF3/xZb1m8eGreRz7wce9F3zqZNyw2ozEbyqs4PSpXv12Kvvazh+zo/ZQxjEDPZpJ4H6jZcI30kgL8mWDRCmEjShcvxpKNWIVU3HaYikeGxnZ8Tg3n5G4RxWB5Pp7ER3NCuNRtKLbiC2FaGU0btwMsRs16PYIYk6gQ4u2pyPJ87Pa85Wk6RxIILCOphtCAKiug3OAA5DoEImmRegJnKMYwNUAlas3Ai8dmo2dPeRZN2AvhFIFtQIbXbAegk0CjqASWEe2SbTppGJCN5hJhx4emmiqmRknW4QL2srtWlEKtG0rLBvQt7AkugSboDRM6FpasBLu2fGnn0wIa3Ufk4/vVtZKw9HBtDHsaGglDADXdggs0QLhO4e6CV0n3usWNkpe4c7xxWMzvw0LSYfvz17GU8+mKp4eUYk+gKA1xrVAadLBB1AFZccZWSivQ6USxXf++VfU0NCIMAwNPU9k7q91vP5W0Lg4l6/C9bZjPeILUHMWm5021ps+t2gat0xOrr1y8mRC5XKjdM4KScJaQmuBtU18fapivj2D5fMzXKpWk+WgE+7tH0Rm/FDtvhMnzIGpqRGIZGitFa31f9T8FfmY3AdBAAAAAElFTkSuQmCC"));



// --------------- END OF SEARCH ENGINES ---------------  


function xpath(query, context) {
	context = context ? context : document;
	
	return document.evaluate(query, context, null,
		XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

function SearchEngine(shortname, searchurl, usesIMDBID, icon) {
	this.shortname = shortname;
	this.searchurl = searchurl;
	this.usesIMDBID = usesIMDBID;
	this.icon = icon;
	
	this.getHTML = function (title, id) {
		var html = "<a href=\"" + this.getSearchUrl(title, id) + "\"><img class=\"img\" style=\"-moz-opacity: 0.4;\" border=\"0\" src=\"" + this.icon + "\" title=\"" + this.shortname + "\"><\/a>&nbsp;";
		return html;
	}
	
	this.getSearchUrl = function (title, id) {
		var searchUrl = this.searchurl;
		if (this.usesIMDBID) {


			searchUrl = searchUrl.replace(/%imdb\-id/, id);
			
			var adres=window.location.href;
			var ilk='imdb.com/title/';

			var imdbKod=adres.substring(adres.indexOf(ilk)+15);
			//remove everything after first slash
			//regexp = /\/.*/g;
			//remove everything after first alphanumeric character
			regexp = /[^a-zA-Z0-9].*/g;
			imdbKod = imdbKod.replace(regexp, "");

			searchUrl = searchUrl.replace(/%imdbkod/, imdbKod);
		}
		else {
			searchUrl = searchUrl.replace(/%title/, encodeURIComponent(title));
		}
		
		return searchUrl;
	}	
}

function openAllInTabs(title, id, inclIMDBID) {
	for (var i = 0; i < trackers.length; i++) {
		if (trackers[i].usesIMDBID && !inclIMDBID)
			continue;
		else
			GM_openInTab(trackers[i].getSearchUrl(title, id));
	}
}

function getTitle() {
	var title = document.title;
	title = title.replace("IMDb - ", "");
	title = title.match(/^(.*) \(/)[1];
	regexp = /\(.*\)/g;
	title = title.replace(regexp, "");
	return title;
}

function getCleanTitle() {
	var title = document.title;
	title = title.replace("IMDb - ", "");
	title = title.match(/^(.*) \(/)[1];
	regexp = /\(.*\)/g;
	title = title.replace(regexp, "");
	regexp = /,|:|;/g;
	title = title.replace(regexp, " ");
	regexp = /'|"/g;
	title = title.replace(regexp, "");
	return title;
}

function getImdbCode() {
	var adres=window.location.href;
	var ilk='imdb.com/title/';
	var imdbCode=adres.substring(adres.indexOf(ilk)+15);
	//remove everything after first slash
	//regexp = /\/.*/g;
	//remove everything after first alphanumeric character
	regexp = /[^a-zA-Z0-9].*/g;
	imdbCode = imdbCode.replace(regexp, "");
	return imdbCode;
}


function getId() {
	with (location.href) {
		var id = match(/title\/tt(.*?)\//i)[1];
	}
	return id;
}


function addIconBarIcons(title, id, trackers) {
 var iconbar = xpath("//div[@id='titleAwardsRanks']", document); //xpath("//h1", document);
    console.log("found element"+iconbar)
    if (!iconbar || iconbar.snapshotLength != 1) {
    GM_log("Error! Couldn't find icon bar. Quitting!");
    return;
  }

	iconbar = iconbar.snapshotItem(0);
	iconbar.id = "iconbar";
	
   var tdimg;
        tdimg = document.createElement("br");
        iconbar.appendChild(tdimg);
  for (var i = 0; i < trackers.length; i++) {
    tdimg = document.createElement("span");
    tdimg.innerHTML = trackers[i].getHTML(title, id);
    iconbar.appendChild(tdimg);
	}

	
	if (GM_openInTab) {
		var tdopenall = document.createElement("a");
		var aopenall = document.createElement("a");
		aopenall.innerHTML = "Open All";
		//aopenall.innerHTML = ""; //Open all stopped
		aopenall.href = "javascript:;";
		aopenall.setAttribute("class", "openall");
		aopenall.addEventListener("click", function () { openAllInTabs(title, id, true); }, false);
		tdopenall.appendChild(aopenall);
		
		iconbar.appendChild(tdopenall);
	}
}

function addStyles() {
	var open_all_class = "a.openall {\n" +
	"	font-weight: bold;\n" + 
	"	font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;\n" +
	"	font-size: 10px\n" +
	"}";
	
	GM_addStyle(open_all_class);
}


addStyles();
var title = getTitle();
var id = getId();
addIconBarIcons(title, id, trackers);
//addAkaIcons(id, trackers);


(function()
{
    try
    {
        var tr = document.evaluate("//TR[TD/@class='lhscol'][1]/TD[last()]//TR[1]",
                document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                null).snapshotItem(0);
        if (tr)
        {
            tr.deleteCell(tr.cells.length - 1);
        }
    }
    catch (e)
    {
        alert("UserScript exception: " + e);
    }
}
)();
