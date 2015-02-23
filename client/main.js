Template.main.events({
	'click button.go': function(evt, tpl){
		if (!tpl.template) {
			console.log('creating a dynamic template');

			tpl.template = Blaze.renderWithData(
				Template.display_msg,
				'Hello World',
				tpl.find('#test')
			);
			console.log('created');
		} else {
			console.log('already exists');
		}

		console.log(tpl.template);
	},

	'click button.close': function(evt, tpl){
		if (tpl.template) {
			Blaze.remove(tpl.template);
			tpl.template = null;
			console.log('closed');
		} else {
			console.log('does not exist');
		}
		console.log(tpl.template);
	}
});
