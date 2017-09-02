// Change the url to the domain of your app
exports.url = 'https://nahtamatudloomad-sendgrid.herokuapp.com';

exports.senderEmail = "info@nahtamatudloomad.ee";
exports.senderName = "Nähtamatud Loomad";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = '1871379';

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = "nahtamatudloomad@mailinator.com";
