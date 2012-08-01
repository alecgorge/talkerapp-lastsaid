(function () {
	var pos = 0;
	plugin.onLoaded = function () {
		Talker.getMessageBox().bind('keydown', function(e) {
			function t() {
				Talker.getMessageBox().val($(matches[matches.length - pos]).text());
			}

			var matches = $('#log tr[author='+Talker.currentUser.name+']').find('.line');
			if(e.which == 38) { // up
				if(pos + 1 <= matches.length) {
					pos++; t();
				}
			}
			else if(e.which == 40) { // down
				if(pos <= 1) {
					return;
				}
				pos--; t();
			}
		});
	}

	plugin.onMessageSend = function () {
		pos = 0;
	}
})();