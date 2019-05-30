
/**
 * Module dependency.
 */

const statusCodes = require('./status-codes');

/**
 * Initialize `HttpStatus` with the given `status code`,
 *
 * @param {Object | Number} statusCode
 * @public
 */

class HttpStatus {
	constructor(obj){
		this._obj = obj;
		switch(typeof this._obj){
		case 'string': {
			const status = Number.parseInt(this._obj);
			this._constructor(status);
			break;
		}
		case 'number': 
			this._constructor(this._obj);
			break;
            
		case 'object': {
			const status = this._obj.statusCode;
			this._constructor(status);
			break;
		}
		}
	}
    
	_constructor(status){
		const codeName = Object.keys(statusCodes).find(key => statusCodes[key].value == status);
		if(typeof codeName == 'string'){
			this.value = statusCodes[codeName].value;
			this.name = codeName;
			this.description = statusCodes[codeName].description;
		}
		else{
			throw new Error('The provided value ' + this._obj + 'is not a valid HTTP Status');
		}
        
	}

	getName(){
		return this.name;
	}

	getCodeValue(){
		return this.value;
	}

	getDescription(){
		return this.description;
	}

	_getSeries(value){
		const series = parseInt(value / 100) ;
		if(series > 5){
			throw 'Invalid HTTP STAUS CODE SERIES';
		}
		return series;
	}

	is1xxInformational(){
		return series.INFORMATIONAL == this._getSeries(this.value );
	}
  
	is2xxSuccessful(){
		return series.SUCCESSFUL == this._getSeries(this.value);
	}
  
	is3xxRedirection(){
		return series.REDIRECTION == this._getSeries(this.value );
	}
    
	is4xxClientError(){
		return series.CLIENT_ERROR == this._getSeries(this.value );
	}
  
	is5xxServerError(){
		return series.SERVER_ERROR == this._getSeries(this.value );
	}

	isError(){
		return this.is4xxClientError() || this.is5xxServerError();
	}
}

const series = {
	INFORMATIONAL: 1,
	SUCCESSFUL: 2,
	REDIRECTION: 3,
	CLIENT_ERROR: 4,
	SERVER_ERROR:5 
};

/**
 * Expose `HttpStatus`.
 */

exports = module.exports =  HttpStatus;


/**
 * Expose `Status Codes`.
 */


exports.statusCodes = statusCodes;