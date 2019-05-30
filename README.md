
# HTTP Status Code Module Inspired from Java Spring Boot

```js
const request = require('request-promise');
const  HttpStatus = require('http-status-response-codes');

const response = await request(options);
const httpStatus = new HttpStatus(response);
if(httpStatus.is2xxSuccessful()){
	return response;
}
else if(httpStatus.is4xxClientError()) {
		throw ('Client Error')
	} if(httpStatus.is5xxServerError())
		throw ('Server Error')	
	}
}

```

## Installation
Node.js 0.10 or higher is required.

```
$ npm install http-status-response-codes
```

## Usage


```js
const  HttpStatus = require('http-status-response-codes');
const { statusCodes } = require('http-status-response-codes');
``` 

The module export a HTTPStatus class by default and also a statusCode enum.
The HTTPStatus code module takes a String or Response Object as input.


```js
const  statusCode = new HttpStatus("406");
				   OR
const response = await request(options);
const httpStatus = new HttpStatus(response);

console.log(statusCode.getName()) // NOT_ACCEPTABLE
console.log(statusCode.getCodeValue()) // 406
console.log(statusCode.getDescription()) // 'Not Acceptable'
``` 

The statusCode enum has all the defined HTTP Statuses you might require.

```js
const { statusCodes } = require('http-status-response-codes');

console.log(statusCodes.BAD_REQUEST) // Will give '400'
``` 

 ## [Server error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Server_error_responses)[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Server_error_responses)

```js
const  HttpStatus = require('http-status-response-codes');
const statusCode = new HttpStatus('503');
console.log(httpStatus.is5xxServerError()) // console logs  true.

``` 

## [Client error responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Client_error_responses)[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Client_error_responses)

You can check if the given status code is a Client Side Error.

```js
const  HttpStatus = require('http-status-response-codes');
const statusCode = new HttpStatus('406');
console.log(httpStatus.is4xxClientError()) // console logs  true.

``` 
 
 ## Is Error 
Return true if status code is 4XX or 5XX

```js
const  HttpStatus = require('http-status-response-codes');
const statusCode = new HttpStatus('404');
console.log(httpStatus.isError()) // console logs  true.

const statusCode = new HttpStatus('505');
console.log(httpStatus.isError()) // console logs  true.

const statusCode = new HttpStatus('204');
console.log(httpStatus.isError()) // console logs  false.

```

## [Redirection messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages)[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages)

```js
const  HttpStatus = require('http-status-response-codes');
const statusCode = new HttpStatus('302');
console.log(httpStatus.is3xxRedirection()) // console logs  true.
``` 

 
## [Successful responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Successful_responses)[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Successful_responses)

```js
const  HttpStatus = require('http-status-response-codes');
const statusCode = new HttpStatus('200');
console.log(httpStatus.is2xxSuccessful()) // console logs  true.
``` 

## [Information responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Information_responses)[](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Information_responses)

```js
const  HttpStatus = require('http-status-response-codes');
const statusCode = new HttpStatus('100');
console.log(httpStatus.is1xxInformational()) // console logs  true.
``` 

