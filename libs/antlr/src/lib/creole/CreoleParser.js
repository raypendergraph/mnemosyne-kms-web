// Generated from Creole.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CreoleListener from './CreoleListener.js';
const serializedATN = [4,1,16,122,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,4,0,32,8,0,11,0,12,0,33,1,0,1,0,1,1,1,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,3,1,3,1,3,4,3,54,8,3,11,3,12,3,55,
1,3,1,3,1,4,1,4,1,4,4,4,63,8,4,11,4,12,4,64,1,4,1,4,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,3,6,76,8,6,1,7,4,7,79,8,7,11,7,12,7,80,1,8,1,8,1,8,1,8,1,8,3,8,88,
8,8,1,9,4,9,91,8,9,11,9,12,9,92,1,10,1,10,1,10,1,10,3,10,99,8,10,1,11,1,
11,1,11,1,11,1,11,3,11,106,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,3,12,
115,8,12,1,12,1,12,1,13,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,0,0,134,0,31,1,0,0,0,2,37,1,0,0,0,4,48,1,0,0,0,6,50,1,0,0,0,8,59,
1,0,0,0,10,68,1,0,0,0,12,70,1,0,0,0,14,78,1,0,0,0,16,82,1,0,0,0,18,90,1,
0,0,0,20,94,1,0,0,0,22,100,1,0,0,0,24,109,1,0,0,0,26,118,1,0,0,0,28,32,3,
4,2,0,29,32,3,2,1,0,30,32,5,6,0,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,
0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,5,0,0,
1,36,1,1,0,0,0,37,38,5,16,0,0,38,3,1,0,0,0,39,49,3,14,7,0,40,49,3,18,9,0,
41,49,3,26,13,0,42,49,3,6,3,0,43,49,3,8,4,0,44,49,3,10,5,0,45,49,3,20,10,
0,46,49,3,22,11,0,47,49,3,24,12,0,48,39,1,0,0,0,48,40,1,0,0,0,48,41,1,0,
0,0,48,42,1,0,0,0,48,43,1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,
0,48,47,1,0,0,0,49,5,1,0,0,0,50,53,5,11,0,0,51,54,3,2,1,0,52,54,5,6,0,0,
53,51,1,0,0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,
57,1,0,0,0,57,58,5,11,0,0,58,7,1,0,0,0,59,62,5,7,0,0,60,63,3,2,1,0,61,63,
5,6,0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,
0,0,0,65,66,1,0,0,0,66,67,5,7,0,0,67,9,1,0,0,0,68,69,5,4,0,0,69,11,1,0,0,
0,70,75,5,8,0,0,71,76,3,6,3,0,72,76,3,8,4,0,73,76,3,2,1,0,74,76,3,22,11,
0,75,71,1,0,0,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,13,1,0,0,0,
77,79,3,12,6,0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,
15,1,0,0,0,82,87,5,9,0,0,83,88,3,6,3,0,84,88,3,8,4,0,85,88,3,2,1,0,86,88,
3,22,11,0,87,83,1,0,0,0,87,84,1,0,0,0,87,85,1,0,0,0,87,86,1,0,0,0,88,17,
1,0,0,0,89,91,3,16,8,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,1,
0,0,0,93,19,1,0,0,0,94,98,5,10,0,0,95,99,3,6,3,0,96,99,3,8,4,0,97,99,3,2,
1,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,21,1,0,0,0,100,105,5,12,
0,0,101,106,5,16,0,0,102,103,5,16,0,0,103,104,5,1,0,0,104,106,5,16,0,0,105,
101,1,0,0,0,105,102,1,0,0,0,106,107,1,0,0,0,107,108,5,13,0,0,108,23,1,0,
0,0,109,114,5,14,0,0,110,115,5,16,0,0,111,112,5,16,0,0,112,113,5,1,0,0,113,
115,5,16,0,0,114,110,1,0,0,0,114,111,1,0,0,0,115,116,1,0,0,0,116,117,5,15,
0,0,117,25,1,0,0,0,118,119,5,6,0,0,119,120,5,2,0,0,120,27,1,0,0,0,14,31,
33,48,53,55,62,64,75,80,87,92,98,105,114];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CreoleParser extends antlr4.Parser {

    static grammarFileName = "Creole.g4";
    static literalNames = [ null, "'|'", "'----'", "'\\\\'", null, null, 
                            null, "'//'", null, null, null, "'**'", "'[['", 
                            "']]'", "'{{'", "'}}'" ];
    static symbolicNames = [ null, null, null, "FORCED_LINEBREAK", "PARAGRAPH", 
                             "SPACE", "LINEBREAK", "ITALICS", "BULLET_LEVEL", 
                             "NUMBER_LEVEL", "HEADING_LEVEL", "BOLD", "LINK_LEFT", 
                             "LINK_RIGHT", "IMAGE_LEFT", "IMAGE_RIGHT", 
                             "TEXT_SEQUENCE" ];
    static ruleNames = [ "document", "text", "markup", "bold", "italics", 
                         "paragraph", "bulletedItem", "bulletedList", "numberedItem", 
                         "numberedList", "heading", "link", "image", "horizontalLine" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CreoleParser.ruleNames;
        this.literalNames = CreoleParser.literalNames;
        this.symbolicNames = CreoleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CreoleParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 31;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 28;
	                this.markup();
	                break;

	            case 2:
	                this.state = 29;
	                this.text();
	                break;

	            case 3:
	                this.state = 30;
	                this.match(CreoleParser.LINEBREAK);
	                break;

	            }
	            this.state = 33; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CreoleParser.PARAGRAPH) | (1 << CreoleParser.LINEBREAK) | (1 << CreoleParser.ITALICS) | (1 << CreoleParser.BULLET_LEVEL) | (1 << CreoleParser.NUMBER_LEVEL) | (1 << CreoleParser.HEADING_LEVEL) | (1 << CreoleParser.BOLD) | (1 << CreoleParser.LINK_LEFT) | (1 << CreoleParser.IMAGE_LEFT) | (1 << CreoleParser.TEXT_SEQUENCE))) !== 0));
	        this.state = 35;
	        this.match(CreoleParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CreoleParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(CreoleParser.TEXT_SEQUENCE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	markup() {
	    let localctx = new MarkupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CreoleParser.RULE_markup);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CreoleParser.BULLET_LEVEL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.bulletedList();
	            break;
	        case CreoleParser.NUMBER_LEVEL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.numberedList();
	            break;
	        case CreoleParser.LINEBREAK:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.horizontalLine();
	            break;
	        case CreoleParser.BOLD:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.bold();
	            break;
	        case CreoleParser.ITALICS:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 43;
	            this.italics();
	            break;
	        case CreoleParser.PARAGRAPH:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 44;
	            this.paragraph();
	            break;
	        case CreoleParser.HEADING_LEVEL:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 45;
	            this.heading();
	            break;
	        case CreoleParser.LINK_LEFT:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 46;
	            this.link();
	            break;
	        case CreoleParser.IMAGE_LEFT:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 47;
	            this.image();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bold() {
	    let localctx = new BoldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CreoleParser.RULE_bold);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(CreoleParser.BOLD);
	        this.state = 53; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 53;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case CreoleParser.TEXT_SEQUENCE:
	                this.state = 51;
	                this.text();
	                break;
	            case CreoleParser.LINEBREAK:
	                this.state = 52;
	                this.match(CreoleParser.LINEBREAK);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===CreoleParser.LINEBREAK || _la===CreoleParser.TEXT_SEQUENCE);
	        this.state = 57;
	        this.match(CreoleParser.BOLD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	italics() {
	    let localctx = new ItalicsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CreoleParser.RULE_italics);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(CreoleParser.ITALICS);
	        this.state = 62; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case CreoleParser.TEXT_SEQUENCE:
	                this.state = 60;
	                this.text();
	                break;
	            case CreoleParser.LINEBREAK:
	                this.state = 61;
	                this.match(CreoleParser.LINEBREAK);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===CreoleParser.LINEBREAK || _la===CreoleParser.TEXT_SEQUENCE);
	        this.state = 66;
	        this.match(CreoleParser.ITALICS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraph() {
	    let localctx = new ParagraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CreoleParser.RULE_paragraph);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(CreoleParser.PARAGRAPH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bulletedItem() {
	    let localctx = new BulletedItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CreoleParser.RULE_bulletedItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(CreoleParser.BULLET_LEVEL);
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CreoleParser.BOLD:
	            this.state = 71;
	            this.bold();
	            break;
	        case CreoleParser.ITALICS:
	            this.state = 72;
	            this.italics();
	            break;
	        case CreoleParser.TEXT_SEQUENCE:
	            this.state = 73;
	            this.text();
	            break;
	        case CreoleParser.LINK_LEFT:
	            this.state = 74;
	            this.link();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bulletedList() {
	    let localctx = new BulletedListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CreoleParser.RULE_bulletedList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 77;
	        		this.bulletedItem();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 80; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberedItem() {
	    let localctx = new NumberedItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CreoleParser.RULE_numberedItem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(CreoleParser.NUMBER_LEVEL);
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CreoleParser.BOLD:
	            this.state = 83;
	            this.bold();
	            break;
	        case CreoleParser.ITALICS:
	            this.state = 84;
	            this.italics();
	            break;
	        case CreoleParser.TEXT_SEQUENCE:
	            this.state = 85;
	            this.text();
	            break;
	        case CreoleParser.LINK_LEFT:
	            this.state = 86;
	            this.link();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberedList() {
	    let localctx = new NumberedListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CreoleParser.RULE_numberedList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 89;
	        		this.numberedItem();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 92; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	heading() {
	    let localctx = new HeadingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CreoleParser.RULE_heading);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(CreoleParser.HEADING_LEVEL);
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CreoleParser.BOLD:
	            this.state = 95;
	            this.bold();
	            break;
	        case CreoleParser.ITALICS:
	            this.state = 96;
	            this.italics();
	            break;
	        case CreoleParser.TEXT_SEQUENCE:
	            this.state = 97;
	            this.text();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	link() {
	    let localctx = new LinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CreoleParser.RULE_link);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(CreoleParser.LINK_LEFT);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 101;
	            this.match(CreoleParser.TEXT_SEQUENCE);
	            break;

	        case 2:
	            this.state = 102;
	            this.match(CreoleParser.TEXT_SEQUENCE);
	            this.state = 103;
	            this.match(CreoleParser.T__0);
	            this.state = 104;
	            this.match(CreoleParser.TEXT_SEQUENCE);
	            break;

	        }
	        this.state = 107;
	        this.match(CreoleParser.LINK_RIGHT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	image() {
	    let localctx = new ImageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CreoleParser.RULE_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(CreoleParser.IMAGE_LEFT);
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 110;
	            this.match(CreoleParser.TEXT_SEQUENCE);
	            break;

	        case 2:
	            this.state = 111;
	            this.match(CreoleParser.TEXT_SEQUENCE);
	            this.state = 112;
	            this.match(CreoleParser.T__0);
	            this.state = 113;
	            this.match(CreoleParser.TEXT_SEQUENCE);
	            break;

	        }
	        this.state = 116;
	        this.match(CreoleParser.IMAGE_RIGHT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	horizontalLine() {
	    let localctx = new HorizontalLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CreoleParser.RULE_horizontalLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(CreoleParser.LINEBREAK);
	        this.state = 119;
	        this.match(CreoleParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CreoleParser.EOF = antlr4.Token.EOF;
CreoleParser.T__0 = 1;
CreoleParser.T__1 = 2;
CreoleParser.FORCED_LINEBREAK = 3;
CreoleParser.PARAGRAPH = 4;
CreoleParser.SPACE = 5;
CreoleParser.LINEBREAK = 6;
CreoleParser.ITALICS = 7;
CreoleParser.BULLET_LEVEL = 8;
CreoleParser.NUMBER_LEVEL = 9;
CreoleParser.HEADING_LEVEL = 10;
CreoleParser.BOLD = 11;
CreoleParser.LINK_LEFT = 12;
CreoleParser.LINK_RIGHT = 13;
CreoleParser.IMAGE_LEFT = 14;
CreoleParser.IMAGE_RIGHT = 15;
CreoleParser.TEXT_SEQUENCE = 16;

CreoleParser.RULE_document = 0;
CreoleParser.RULE_text = 1;
CreoleParser.RULE_markup = 2;
CreoleParser.RULE_bold = 3;
CreoleParser.RULE_italics = 4;
CreoleParser.RULE_paragraph = 5;
CreoleParser.RULE_bulletedItem = 6;
CreoleParser.RULE_bulletedList = 7;
CreoleParser.RULE_numberedItem = 8;
CreoleParser.RULE_numberedList = 9;
CreoleParser.RULE_heading = 10;
CreoleParser.RULE_link = 11;
CreoleParser.RULE_image = 12;
CreoleParser.RULE_horizontalLine = 13;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_document;
    }

	EOF() {
	    return this.getToken(CreoleParser.EOF, 0);
	};

	markup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MarkupContext);
	    } else {
	        return this.getTypedRuleContext(MarkupContext,i);
	    }
	};

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	LINEBREAK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.LINEBREAK);
	    } else {
	        return this.getToken(CreoleParser.LINEBREAK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitDocument(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_text;
    }

	TEXT_SEQUENCE() {
	    return this.getToken(CreoleParser.TEXT_SEQUENCE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitText(this);
		}
	}


}



class MarkupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_markup;
    }

	bulletedList() {
	    return this.getTypedRuleContext(BulletedListContext,0);
	};

	numberedList() {
	    return this.getTypedRuleContext(NumberedListContext,0);
	};

	horizontalLine() {
	    return this.getTypedRuleContext(HorizontalLineContext,0);
	};

	bold() {
	    return this.getTypedRuleContext(BoldContext,0);
	};

	italics() {
	    return this.getTypedRuleContext(ItalicsContext,0);
	};

	paragraph() {
	    return this.getTypedRuleContext(ParagraphContext,0);
	};

	heading() {
	    return this.getTypedRuleContext(HeadingContext,0);
	};

	link() {
	    return this.getTypedRuleContext(LinkContext,0);
	};

	image() {
	    return this.getTypedRuleContext(ImageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterMarkup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitMarkup(this);
		}
	}


}



class BoldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_bold;
    }

	BOLD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.BOLD);
	    } else {
	        return this.getToken(CreoleParser.BOLD, i);
	    }
	};


	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	LINEBREAK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.LINEBREAK);
	    } else {
	        return this.getToken(CreoleParser.LINEBREAK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterBold(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitBold(this);
		}
	}


}



class ItalicsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_italics;
    }

	ITALICS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.ITALICS);
	    } else {
	        return this.getToken(CreoleParser.ITALICS, i);
	    }
	};


	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	LINEBREAK = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.LINEBREAK);
	    } else {
	        return this.getToken(CreoleParser.LINEBREAK, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterItalics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitItalics(this);
		}
	}


}



class ParagraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_paragraph;
    }

	PARAGRAPH() {
	    return this.getToken(CreoleParser.PARAGRAPH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterParagraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitParagraph(this);
		}
	}


}



class BulletedItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_bulletedItem;
    }

	BULLET_LEVEL() {
	    return this.getToken(CreoleParser.BULLET_LEVEL, 0);
	};

	bold() {
	    return this.getTypedRuleContext(BoldContext,0);
	};

	italics() {
	    return this.getTypedRuleContext(ItalicsContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	link() {
	    return this.getTypedRuleContext(LinkContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterBulletedItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitBulletedItem(this);
		}
	}


}



class BulletedListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_bulletedList;
    }

	bulletedItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BulletedItemContext);
	    } else {
	        return this.getTypedRuleContext(BulletedItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterBulletedList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitBulletedList(this);
		}
	}


}



class NumberedItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_numberedItem;
    }

	NUMBER_LEVEL() {
	    return this.getToken(CreoleParser.NUMBER_LEVEL, 0);
	};

	bold() {
	    return this.getTypedRuleContext(BoldContext,0);
	};

	italics() {
	    return this.getTypedRuleContext(ItalicsContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	link() {
	    return this.getTypedRuleContext(LinkContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterNumberedItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitNumberedItem(this);
		}
	}


}



class NumberedListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_numberedList;
    }

	numberedItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberedItemContext);
	    } else {
	        return this.getTypedRuleContext(NumberedItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterNumberedList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitNumberedList(this);
		}
	}


}



class HeadingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_heading;
    }

	HEADING_LEVEL() {
	    return this.getToken(CreoleParser.HEADING_LEVEL, 0);
	};

	bold() {
	    return this.getTypedRuleContext(BoldContext,0);
	};

	italics() {
	    return this.getTypedRuleContext(ItalicsContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterHeading(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitHeading(this);
		}
	}


}



class LinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_link;
    }

	LINK_LEFT() {
	    return this.getToken(CreoleParser.LINK_LEFT, 0);
	};

	LINK_RIGHT() {
	    return this.getToken(CreoleParser.LINK_RIGHT, 0);
	};

	TEXT_SEQUENCE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.TEXT_SEQUENCE);
	    } else {
	        return this.getToken(CreoleParser.TEXT_SEQUENCE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterLink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitLink(this);
		}
	}


}



class ImageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_image;
    }

	IMAGE_LEFT() {
	    return this.getToken(CreoleParser.IMAGE_LEFT, 0);
	};

	IMAGE_RIGHT() {
	    return this.getToken(CreoleParser.IMAGE_RIGHT, 0);
	};

	TEXT_SEQUENCE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CreoleParser.TEXT_SEQUENCE);
	    } else {
	        return this.getToken(CreoleParser.TEXT_SEQUENCE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterImage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitImage(this);
		}
	}


}



class HorizontalLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CreoleParser.RULE_horizontalLine;
    }

	LINEBREAK() {
	    return this.getToken(CreoleParser.LINEBREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.enterHorizontalLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CreoleListener ) {
	        listener.exitHorizontalLine(this);
		}
	}


}




CreoleParser.DocumentContext = DocumentContext; 
CreoleParser.TextContext = TextContext; 
CreoleParser.MarkupContext = MarkupContext; 
CreoleParser.BoldContext = BoldContext; 
CreoleParser.ItalicsContext = ItalicsContext; 
CreoleParser.ParagraphContext = ParagraphContext; 
CreoleParser.BulletedItemContext = BulletedItemContext; 
CreoleParser.BulletedListContext = BulletedListContext; 
CreoleParser.NumberedItemContext = NumberedItemContext; 
CreoleParser.NumberedListContext = NumberedListContext; 
CreoleParser.HeadingContext = HeadingContext; 
CreoleParser.LinkContext = LinkContext; 
CreoleParser.ImageContext = ImageContext; 
CreoleParser.HorizontalLineContext = HorizontalLineContext; 
