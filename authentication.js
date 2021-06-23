module.exports = {
	label: "Connect to Monday",
	mock_input: {
		api_key: "/*Monday.com account API Key here*/"
	},
	validate: function (input, output) {
		// validate function will used for validating user input while adding connection for this connector
		// credential will be available in input.auth object
		// var apikey = input.auth.api_key;
		// callback pattern
		// output(error, success)
		output(null, true);
	}
}