const statusCodes = {

	CONTINUE: {
		value: 100,
		description: 'Continue'
	},

	SWITCHING_PROTOCOLS: {
		value: 101,
		description: 'Switching Protocols'
	},

	PROCESSING: {
		value: 102,
		description: 'Processing'
	},
	CHECKPOINT: {
		value: 103,
		description: 'Checkpoint'
	},

	// 2xx Success


	OK: {
		value: 200,
		description: 'OK'
	},

	CREATED: {
		value: 201,
		description: 'Created'
	},

	ACCEPTED: {
		value: 202,
		description: 'Accepted'
	},

	NON_AUTHORITATIVE_INFORMATION: {
		value: 203,
		description: 'Non-Authoritative Information'
	},

	NO_CONTENT: {
		value: 204,
		description: 'No Content'
	},

	RESET_CONTENT: {
		value: 205,
		description: 'Reset Content'
	},

	PARTIAL_CONTENT: {
		value: 206,
		description: 'Partial Content'
	},

	MULTI_STATUS: {
		value: 207,
		description: 'Multi-Status'
	},

	ALREADY_REPORTED: {
		value: 208,
		description: 'Already Reported'
	},

	IM_USED: {
		value: 226,
		description: 'IM Used'
	},

	// 3xx Redirection


	MULTIPLE_CHOICES: {
		value: 300,
		description: 'Multiple Choices'
	},

	MOVED_PERMANENTLY: {
		value: 301,
		description: 'Moved Permanently'
	},

	FOUND: {
		value: 302,
		description: 'Found'
	},


	SEE_OTHER: {
		value: 303,
		description: 'See Other'
	},

	NOT_MODIFIED: {
		value: 304,
		description: 'Not Modified'
	},


	TEMPORARY_REDIRECT: {
		value: 307,
		description: 'Temporary Redirect'
	},

	PERMANENT_REDIRECT: {
		value: 308,
		description: 'Permanent Redirect'
	},

	// --- 4xx Client Error ---


	BAD_REQUEST: {
		value: 400,
		description: 'Bad Request'
	},

	UNAUTHORIZED: {
		value: 401,
		description: 'Unauthorized'
	},

	PAYMENT_REQUIRED: {
		value: 402,
		description: 'Payment Required'
	},

	FORBIDDEN: {
		value: 403,
		description: 'Forbidden'
	},

	NOT_FOUND: {
		value: 404,
		description: 'Not Found'
	},

	METHOD_NOT_ALLOWED: {
		value: 405,
		description: 'Method Not Allowed'
	},

	NOT_ACCEPTABLE: {
		value: 406,
		description: 'Not Acceptable'
	},

	PROXY_AUTHENTICATION_REQUIRED: {
		value: 407,
		description: 'Proxy Authentication Required'
	},

	REQUEST_TIMEOUT: {
		value: 408,
		description: 'Request Timeout'
	},

	CONFLICT: {
		value: 409,
		description: 'Conflict'
	},

	GONE: {
		value: 410,
		description: 'Gone'
	},

	LENGTH_REQUIRED: {
		value: 411,
		description: 'Length Required'
	},

	PRECONDITION_FAILED: {
		value: 412,
		description: 'Precondition Failed'
	},

	PAYLOAD_TOO_LARGE: {
		value: 413,
		description: 'Payload Too Large'
	},



	URI_TOO_LONG: {
		value: 414,
		description: 'URI Too Long'
	},



	UNSUPPORTED_MEDIA_TYPE: {
		value: 415,
		description: 'Unsupported Media Type'
	},

	REQUESTED_RANGE_NOT_SATISFIABLE: {
		value: 416,
		description: 'Requested range not satisfiable'
	},

	EXPECTATION_FAILED: {
		value: 417,
		description: 'Expectation Failed'
	},

	I_AM_A_TEAPOT: {
		value: 418,
		description: 'I\'m a teapot'
	},

	UNPROCESSABLE_ENTITY: {
		value: 422,
		description: 'Unprocessable Entity'
	},

	LOCKED: {
		value: 423,
		description: 'Locked'
	},

	FAILED_DEPENDENCY: {
		value: 424,
		description: 'Failed Dependency'
	},

	UPGRADE_REQUIRED: {
		value: 426,
		description: 'Upgrade Required'
	},

	PRECONDITION_REQUIRED: {
		value: 428,
		description: 'Precondition Required'
	},

	TOO_MANY_REQUESTS: {
		value: 429,
		description: 'Too Many Requests'
	},

	REQUEST_HEADER_FIELDS_TOO_LARGE: {
		value: 431,
		description: 'Request Header Fields Too Large'
	},

	UNAVAILABLE_FOR_LEGAL_REASONS: {
		value: 451,
		description: 'Unavailable For Legal Reasons'
	},

	// --- 5xx Server Error ---


	INTERNAL_SERVER_ERROR: {
		value: 500,
		description: 'Internal Server Error'
	},

	NOT_IMPLEMENTED: {
		value: 501,
		description: 'Not Implemented'
	},

	BAD_GATEWAY: {
		value: 502,
		description: 'Bad Gateway'
	},

	SERVICE_UNAVAILABLE: {
		value: 503,
		description: 'Service Unavailable'
	},

	GATEWAY_TIMEOUT: {
		value: 504,
		description: 'Gateway Timeout'
	},

	HTTP_VERSION_NOT_SUPPORTED: {
		value: 505,
		description: 'HTTP Version not supported'
	},

	VARIANT_ALSO_NEGOTIATES: {
		value: 506,
		description: 'Variant Also Negotiates'
	},

	INSUFFICIENT_STORAGE: {
		value: 507,
		description: 'Insufficient Storage'
	},

	LOOP_DETECTED: {
		value: 508,
		description: 'Loop Detected'
	},

	BANDWIDTH_LIMIT_EXCEEDED: {
		value: 509,
		description: 'Bandwidth Limit Exceeded'
	},

	NOT_EXTENDED: {
		value: 510,
		description: 'Not Extended'
	},

	NETWORK_AUTHENTICATION_REQUIRED: {
		value: 511,
		description: 'Network Authentication Required'
	}
};

module.exports = statusCodes;