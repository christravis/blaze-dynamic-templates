# blaze-dynamic-templates

Quick [Meteor](https://meteor.com) app to play around with [Blaze](https://github.com/meteor/blaze) Dynamic Templates to find out if a dynamically generated template can close / remove itself. Turns out it can't. However, if the dynamic template is created by a parent template, and inserted into the parent template's DOM, then you can get the parent template to listen for events which indicate that the dynamic template should be closed / removed. The parent template can then deal with closing / removing the template from the DOM :)
