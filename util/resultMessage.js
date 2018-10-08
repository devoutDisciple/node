module.exports = {
	success: (data) => {
		return {
			status: 200,
			success: true,
			data: data
		};
	},
	error: (err) => {
		return {
			status: 500,
			success: false,
			message: err.message
		};
	}
};
