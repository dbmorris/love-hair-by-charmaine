jQuery.fn.spectragram.accessData = {
	accessToken: '640201490.1677ed0.e37bd781535a4ccf8dbe71aec19efd3f'
};

$('#instafeed').spectragram('getUserFeed',{
	max: 6,
	size: "big",
	wrapEachWith: '<a>'
});
