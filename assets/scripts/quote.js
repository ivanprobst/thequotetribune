function Quote (options){
	options = options || {};

	// var init
    this._id			= options._id || ''; // ???
    this.authorID		= options.authorID || '';
    this.text			= options.text || ''; // fallback text?
    this.quotesomeUrl	= options.quotesomeUrl || '';
    this.pubDate		= options.pubDate || null;
    this.fontSize 		= options.fontSize || '48px';

    // return data on object form
    this.getObjectData = function(){
    	var jsonized = {};
    	if(this._id && this._id != '')
    		jsonized._id = this._id;
    	if(this.authorID && this.authorID != '')
    		jsonized.authorID = this.authorID;
    	if(this.text && this.text != '')
    		jsonized.text = this.text;
    	if(this.quotesomeUrl && this.quotesomeUrl != '')
    		jsonized.quotesomeUrl = this.quotesomeUrl;
    	if(this.pubDate && this.pubDate != '')
    		jsonized.pubDate = this.pubDate;
    	if(this.fontSize && this.fontSize != '')
    		jsonized.fontSize = this.fontSize;

    	return jsonized;
    }

    // pre-built quote templates
    this.setErrorQuote = function(){
	    this.authorID		= '_err_404';
	    this.text			= 'Something went wrong. We are mighty angry about it. We go have a look, and you stay back here.';
	    this.fontSize = '48px';

  		this._id			= '';
   		this.quotesomeUrl	= '';
    	this.pubDate		= null;
    }
    this.setUnpublishedQuote = function(){
	    this.authorID		= '_err_unpublished';
	    this.text			= 'You sneaky person, it\'s not yet time!';
	    this.fontSize = '48px';

  		this._id			= '';
   		this.quotesomeUrl	= '';
    	this.pubDate		= null;
    }
    // NO QUOTE FOUND FOR THE DAY ???
    this.setNoQuoteToday = function(){
	    this.authorID		= '_err_noquote';
	    this.text			= 'hey, nothing is up today, shame!';
	    this.fontSize = '48px';

  		this._id			= '';
   		this.quotesomeUrl	= '';
    	this.pubDate		= null;
    }
}

module.exports = Quote;
