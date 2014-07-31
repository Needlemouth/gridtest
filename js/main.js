(function () {

	$.getJSON( "js/mydata.js", function(json) {
		console.log(json.object_list[0]);
		var id = 0;
		$.each(json.object_list, function (key, val) {
			console.log(val);
			$('#container').append('<div class="item"><h2>' + val.network + '</h2><p>' + val.all_text + '<p></div>');
		});
	})
	.always(function() {
		console.log( "complete" );
		magic();
	});

})();

function magic() {
	var $container = $('#container');

	// init
	$container.packery({
		itemSelector: '.item',
		gutter: 10
	});
}