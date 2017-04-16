
$(document).ready(function(){
  
	var searchterm;
	
	if (window.location.search.substring(1)){
		searchterm = $.QueryString.param;
	}
	
	$.ajax({
		url: "https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchterm+"&limit=10&namespace=0&format=json",
		type: "GET",
		dataType: "json",
		success: function(data) {
			console.log(data);
			$("#result").html(data[1][1]+ " - " + data[2][1]);//data[1] is array of titles, data[2] is corresponding array of first sentences, data[3] is the corresponding url.
		},
		error: function(e) {
			$("#result").html("Something went wrong.");
		}
	});
	
	
	$("#search-icon").on("click", function(){
		$(this).fadeOut();
		$("#search-form").fadeIn();
	});
	
	
});

//Jquery plugin for capturing GET parameters
(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=', 2);
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
})(jQuery);