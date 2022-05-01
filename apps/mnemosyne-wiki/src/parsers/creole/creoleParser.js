// Generated from creole.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import creoleListener from './creoleListener.js';
import creoleVisitor from './creoleVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0013\u00b5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0005\u0002 \n\u0002\u0003\u0002\u0007\u0002#\n\u0002\f\u0002\u000e",
    "\u0002&\u000b\u0002\u0003\u0003\u0006\u0003)\n\u0003\r\u0003\u000e\u0003",
    "*\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00048\n\u0004\u0003\u0005\u0006\u0005;\n\u0005\r\u0005\u000e\u0005",
    "<\u0003\u0005\u0003\u0005\u0007\u0005A\n\u0005\f\u0005\u000e\u0005D",
    "\u000b\u0005\u0003\u0006\u0003\u0006\u0006\u0006H\n\u0006\r\u0006\u000e",
    "\u0006I\u0003\u0006\u0005\u0006M\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0006\u0007R\n\u0007\r\u0007\u000e\u0007S\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0006\b]\n\b\r\b\u000e",
    "\b^\u0005\ba\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0006",
    "\bi\n\b\r\b\u000e\bj\u0003\b\u0003\b\u0005\bo\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0006\u000bx\n\u000b\r\u000b",
    "\u000e\u000by\u0003\u000b\u0003\u000b\u0006\u000b~\n\u000b\r\u000b\u000e",
    "\u000b\u007f\u0003\u000b\u0005\u000b\u0083\n\u000b\u0003\f\u0003\f\u0006",
    "\f\u0087\n\f\r\f\u000e\f\u0088\u0006\f\u008b\n\f\r\f\u000e\f\u008c\u0003",
    "\f\u0003\f\u0007\f\u0091\n\f\f\f\u000e\f\u0094\u000b\f\u0003\r\u0003",
    "\r\u0006\r\u0098\n\r\r\r\u000e\r\u0099\u0006\r\u009c\n\r\r\r\u000e\r",
    "\u009d\u0003\r\u0003\r\u0007\r\u00a2\n\r\f\r\u000e\r\u00a5\u000b\r\u0003",
    "\u000e\u0006\u000e\u00a8\n\u000e\r\u000e\u000e\u000e\u00a9\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u00ae\n\u000e\f\u000e\u000e\u000e\u00b1\u000b",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0002\u0010\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0002\u0003",
    "\u0004\u0002\u000f\u000f\u0013\u0013\u0002\u00c7\u0002$\u0003\u0002",
    "\u0002\u0002\u0004(\u0003\u0002\u0002\u0002\u00067\u0003\u0002\u0002",
    "\u0002\b:\u0003\u0002\u0002\u0002\nE\u0003\u0002\u0002\u0002\fN\u0003",
    "\u0002\u0002\u0002\u000en\u0003\u0002\u0002\u0002\u0010p\u0003\u0002",
    "\u0002\u0002\u0012t\u0003\u0002\u0002\u0002\u0014\u0082\u0003\u0002",
    "\u0002\u0002\u0016\u008a\u0003\u0002\u0002\u0002\u0018\u009b\u0003\u0002",
    "\u0002\u0002\u001a\u00a7\u0003\u0002\u0002\u0002\u001c\u00b2\u0003\u0002",
    "\u0002\u0002\u001e \u0005\u0004\u0003\u0002\u001f\u001e\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002",
    "!#\u0007\u0011\u0002\u0002\"\u001f\u0003\u0002\u0002\u0002#&\u0003\u0002",
    "\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\u0003",
    "\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\')\u0005\u0006\u0004",
    "\u0002(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003",
    "\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+\u0005\u0003\u0002\u0002",
    "\u0002,8\u0005\n\u0006\u0002-8\u0005\f\u0007\u0002.8\u0005\u000e\b\u0002",
    "/8\u0005\u001a\u000e\u000208\u0005\u0012\n\u000218\u0005\b\u0005\u0002",
    "28\u0005\u0014\u000b\u000238\u0005\u0010\t\u000248\u0005\u0018\r\u0002",
    "58\u0005\u0016\f\u000268\u0005\u001c\u000f\u00027,\u0003\u0002\u0002",
    "\u00027-\u0003\u0002\u0002\u00027.\u0003\u0002\u0002\u00027/\u0003\u0002",
    "\u0002\u000270\u0003\u0002\u0002\u000271\u0003\u0002\u0002\u000272\u0003",
    "\u0002\u0002\u000273\u0003\u0002\u0002\u000274\u0003\u0002\u0002\u0002",
    "75\u0003\u0002\u0002\u000276\u0003\u0002\u0002\u00028\u0007\u0003\u0002",
    "\u0002\u00029;\t\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002",
    "=B\u0003\u0002\u0002\u0002>?\u0007\u0003\u0002\u0002?A\u0005\b\u0005",
    "\u0002@>\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002C\t\u0003\u0002\u0002\u0002DB",
    "\u0003\u0002\u0002\u0002EG\u0007\u0004\u0002\u0002FH\u0005\u0006\u0004",
    "\u0002GF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IG\u0003\u0002",
    "\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002\u0002KM\u0007",
    "\u0004\u0002\u0002LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002",
    "M\u000b\u0003\u0002\u0002\u0002NO\u0007\u0013\u0002\u0002OQ\u0007\u0013",
    "\u0002\u0002PR\u0005\u0006\u0004\u0002QP\u0003\u0002\u0002\u0002RS\u0003",
    "\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002",
    "TU\u0003\u0002\u0002\u0002UV\u0007\u0013\u0002\u0002VW\u0007\u0013\u0002",
    "\u0002W\r\u0003\u0002\u0002\u0002XY\u0007\u000b\u0002\u0002Y`\u0005",
    "\b\u0005\u0002Z\\\u0007\u0005\u0002\u0002[]\u0005\u0006\u0004\u0002",
    "\\[\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\\\u0003\u0002",
    "\u0002\u0002^_\u0003\u0002\u0002\u0002_a\u0003\u0002\u0002\u0002`Z\u0003",
    "\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002",
    "bc\u0007\f\u0002\u0002co\u0003\u0002\u0002\u0002de\u0007\r\u0002\u0002",
    "ef\u0005\b\u0005\u0002fh\u0007\u0005\u0002\u0002gi\u0005\u0006\u0004",
    "\u0002hg\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jh\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0007",
    "\u000e\u0002\u0002mo\u0003\u0002\u0002\u0002nX\u0003\u0002\u0002\u0002",
    "nd\u0003\u0002\u0002\u0002o\u000f\u0003\u0002\u0002\u0002pq\u0007\r",
    "\u0002\u0002qr\u0005\b\u0005\u0002rs\u0007\u000e\u0002\u0002s\u0011",
    "\u0003\u0002\u0002\u0002tu\u0007\u0006\u0002\u0002u\u0013\u0003\u0002",
    "\u0002\u0002vx\u0007\u0007\u0002\u0002wv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{\u0083\u0005\u0006\u0004\u0002|~\u0007\n",
    "\u0002\u0002}|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002",
    "\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u0083\u0005\u0006\u0004\u0002",
    "\u0082w\u0003\u0002\u0002\u0002\u0082}\u0003\u0002\u0002\u0002\u0083",
    "\u0015\u0003\u0002\u0002\u0002\u0084\u0086\u0007\b\u0002\u0002\u0085",
    "\u0087\u0005\u0006\u0004\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003\u0002\u0002\u0002\u008a",
    "\u0084\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c",
    "\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0003\u0002\u0002\u0002\u008e\u0092\u0007\u0005\u0002\u0002\u008f",
    "\u0091\u0007\u0010\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0003\u0002\u0002\u0002\u0093\u0017\u0003\u0002\u0002\u0002\u0094",
    "\u0092\u0003\u0002\u0002\u0002\u0095\u0097\u0007\u0005\u0002\u0002\u0096",
    "\u0098\u0005\u0006\u0004\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098",
    "\u0099\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0003\u0002\u0002\u0002\u009a\u009c\u0003\u0002\u0002\u0002\u009b",
    "\u0095\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d",
    "\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0003\u0002\u0002\u0002\u009f\u00a3\u0007\u0005\u0002\u0002\u00a0",
    "\u00a2\u0007\u0010\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2",
    "\u00a5\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u0019\u0003\u0002\u0002\u0002\u00a5",
    "\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a8\u0007\t\u0002\u0002\u00a7",
    "\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
    "\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0003\u0002\u0002\u0002\u00ab\u00af\u0005\u0006\u0004\u0002\u00ac",
    "\u00ae\u0007\t\u0002\u0002\u00ad\u00ac\u0003\u0002\u0002\u0002\u00ae",
    "\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00b0\u001b\u0003\u0002\u0002\u0002\u00b1",
    "\u00af\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u0012\u0002\u0002\u00b3",
    "\u001d\u0003\u0002\u0002\u0002\u001a\u001f$*7<BILS^`jny\u007f\u0082",
    "\u0088\u008c\u0092\u0099\u009d\u00a3\u00a9\u00af"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class creoleParser extends antlr4.Parser {

    static grammarFileName = "creole.g4";
    static literalNames = [ null, "'\\\\'", "'**'", "'|'", "'----'", "'*'", 
                            "'|='", "'='", "'#'", "'[['", "']]'", "'{{'", 
                            "'}}'", null, null, null, null, "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "HASH", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", 
                             "TEXT", "WS", "CR", "NOWIKI", "RSLASH" ];
    static ruleNames = [ "document", "line", "markup", "text_", "bold", 
                         "italics", "href", "image", "hline", "listitem", 
                         "tableheader", "tablerow", "title", "nowiki" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = creoleParser.ruleNames;
        this.literalNames = creoleParser.literalNames;
        this.symbolicNames = creoleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, creoleParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.CR) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0)) {
	                this.state = 28;
	                this.line();
	            }

	            this.state = 31;
	            this.match(creoleParser.CR);
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, creoleParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.markup();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
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
	    this.enterRule(localctx, 4, creoleParser.RULE_markup);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.bold();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.italics();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.href();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 45;
	            this.title();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 46;
	            this.hline();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 47;
	            this.text_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 48;
	            this.listitem();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 49;
	            this.image();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 50;
	            this.tablerow();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 51;
	            this.tableheader();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 52;
	            this.nowiki();
	            break;

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



	text_() {
	    let localctx = new Text_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, creoleParser.RULE_text_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 55;
	        		_la = this._input.LA(1);
	        		if(!(_la===creoleParser.TEXT || _la===creoleParser.RSLASH)) {
	        		this._errHandler.recoverInline(this);
	        		}
	        		else {
	        			this._errHandler.reportMatch(this);
	        		    this.consume();
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 58; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 60;
	                this.match(creoleParser.T__0);
	                this.state = 61;
	                this.text_(); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	    this.enterRule(localctx, 8, creoleParser.RULE_bold);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(creoleParser.T__1);
	        this.state = 69; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 68;
	        		this.markup();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 71; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 73;
	            this.match(creoleParser.T__1);

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



	italics() {
	    let localctx = new ItalicsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, creoleParser.RULE_italics);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(creoleParser.RSLASH);
	        this.state = 77;
	        this.match(creoleParser.RSLASH);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 78;
	        		this.markup();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 81; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 83;
	        this.match(creoleParser.RSLASH);
	        this.state = 84;
	        this.match(creoleParser.RSLASH);
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



	href() {
	    let localctx = new HrefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, creoleParser.RULE_href);
	    var _la = 0; // Token type
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case creoleParser.LBRACKET:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(creoleParser.LBRACKET);
	            this.state = 87;
	            this.text_();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===creoleParser.T__2) {
	                this.state = 88;
	                this.match(creoleParser.T__2);
	                this.state = 90; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 89;
	                    this.markup();
	                    this.state = 92; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
	            }

	            this.state = 96;
	            this.match(creoleParser.RBRACKET);
	            break;
	        case creoleParser.LBRACE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.match(creoleParser.LBRACE);
	            this.state = 99;
	            this.text_();
	            this.state = 100;
	            this.match(creoleParser.T__2);
	            this.state = 102; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 101;
	                this.markup();
	                this.state = 104; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << creoleParser.T__1) | (1 << creoleParser.T__2) | (1 << creoleParser.T__3) | (1 << creoleParser.T__4) | (1 << creoleParser.T__5) | (1 << creoleParser.T__6) | (1 << creoleParser.HASH) | (1 << creoleParser.LBRACKET) | (1 << creoleParser.LBRACE) | (1 << creoleParser.TEXT) | (1 << creoleParser.NOWIKI) | (1 << creoleParser.RSLASH))) !== 0));
	            this.state = 106;
	            this.match(creoleParser.RBRACE);
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



	image() {
	    let localctx = new ImageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, creoleParser.RULE_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(creoleParser.LBRACE);
	        this.state = 111;
	        this.text_();
	        this.state = 112;
	        this.match(creoleParser.RBRACE);
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



	hline() {
	    let localctx = new HlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, creoleParser.RULE_hline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(creoleParser.T__3);
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



	listitem() {
	    let localctx = new ListitemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, creoleParser.RULE_listitem);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case creoleParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 116;
	            		this.match(creoleParser.T__4);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 119; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 121;
	            this.markup();
	            break;
	        case creoleParser.HASH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 122;
	            		this.match(creoleParser.HASH);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 125; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 127;
	            this.markup();
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



	tableheader() {
	    let localctx = new TableheaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, creoleParser.RULE_tableheader);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 130;
	            this.match(creoleParser.T__5);
	            this.state = 132; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 131;
	            		this.markup();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 134; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 138; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===creoleParser.T__5);
	        this.state = 140;
	        this.match(creoleParser.T__2);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===creoleParser.WS) {
	            this.state = 141;
	            this.match(creoleParser.WS);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	tablerow() {
	    let localctx = new TablerowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, creoleParser.RULE_tablerow);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 147;
	        		this.match(creoleParser.T__2);
	        		this.state = 149; 
	        		this._errHandler.sync(this);
	        		var _alt = 1;
	        		do {
	        			switch (_alt) {
	        			case 1:
	        				this.state = 148;
	        				this.markup();
	        				break;
	        			default:
	        				throw new antlr4.error.NoViableAltException(this);
	        			}
	        			this.state = 151; 
	        			this._errHandler.sync(this);
	        			_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        		} while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 155; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 157;
	        this.match(creoleParser.T__2);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===creoleParser.WS) {
	            this.state = 158;
	            this.match(creoleParser.WS);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, creoleParser.RULE_title);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 164;
	        		this.match(creoleParser.T__6);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 167; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 169;
	        this.markup();
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 170;
	                this.match(creoleParser.T__6); 
	            }
	            this.state = 175;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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



	nowiki() {
	    let localctx = new NowikiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, creoleParser.RULE_nowiki);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(creoleParser.NOWIKI);
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

creoleParser.EOF = antlr4.Token.EOF;
creoleParser.T__0 = 1;
creoleParser.T__1 = 2;
creoleParser.T__2 = 3;
creoleParser.T__3 = 4;
creoleParser.T__4 = 5;
creoleParser.T__5 = 6;
creoleParser.T__6 = 7;
creoleParser.HASH = 8;
creoleParser.LBRACKET = 9;
creoleParser.RBRACKET = 10;
creoleParser.LBRACE = 11;
creoleParser.RBRACE = 12;
creoleParser.TEXT = 13;
creoleParser.WS = 14;
creoleParser.CR = 15;
creoleParser.NOWIKI = 16;
creoleParser.RSLASH = 17;

creoleParser.RULE_document = 0;
creoleParser.RULE_line = 1;
creoleParser.RULE_markup = 2;
creoleParser.RULE_text_ = 3;
creoleParser.RULE_bold = 4;
creoleParser.RULE_italics = 5;
creoleParser.RULE_href = 6;
creoleParser.RULE_image = 7;
creoleParser.RULE_hline = 8;
creoleParser.RULE_listitem = 9;
creoleParser.RULE_tableheader = 10;
creoleParser.RULE_tablerow = 11;
creoleParser.RULE_title = 12;
creoleParser.RULE_nowiki = 13;

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
        this.ruleIndex = creoleParser.RULE_document;
    }

	CR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.CR);
	    } else {
	        return this.getToken(creoleParser.CR, i);
	    }
	};


	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitDocument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitDocument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_line;
    }

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

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = creoleParser.RULE_markup;
    }

	bold() {
	    return this.getTypedRuleContext(BoldContext,0);
	};

	italics() {
	    return this.getTypedRuleContext(ItalicsContext,0);
	};

	href() {
	    return this.getTypedRuleContext(HrefContext,0);
	};

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	hline() {
	    return this.getTypedRuleContext(HlineContext,0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	listitem() {
	    return this.getTypedRuleContext(ListitemContext,0);
	};

	image() {
	    return this.getTypedRuleContext(ImageContext,0);
	};

	tablerow() {
	    return this.getTypedRuleContext(TablerowContext,0);
	};

	tableheader() {
	    return this.getTypedRuleContext(TableheaderContext,0);
	};

	nowiki() {
	    return this.getTypedRuleContext(NowikiContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterMarkup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitMarkup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitMarkup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Text_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_text_;
    }

	text_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Text_Context);
	    } else {
	        return this.getTypedRuleContext(Text_Context,i);
	    }
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.TEXT);
	    } else {
	        return this.getToken(creoleParser.TEXT, i);
	    }
	};


	RSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.RSLASH);
	    } else {
	        return this.getToken(creoleParser.RSLASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterText_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitText_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitText_(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = creoleParser.RULE_bold;
    }

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

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterBold(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitBold(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitBold(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = creoleParser.RULE_italics;
    }

	RSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.RSLASH);
	    } else {
	        return this.getToken(creoleParser.RSLASH, i);
	    }
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

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterItalics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitItalics(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitItalics(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HrefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_href;
    }

	LBRACKET() {
	    return this.getToken(creoleParser.LBRACKET, 0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	RBRACKET() {
	    return this.getToken(creoleParser.RBRACKET, 0);
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

	LBRACE() {
	    return this.getToken(creoleParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(creoleParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterHref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitHref(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitHref(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = creoleParser.RULE_image;
    }

	LBRACE() {
	    return this.getToken(creoleParser.LBRACE, 0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	RBRACE() {
	    return this.getToken(creoleParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterImage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitImage(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitImage(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_hline;
    }


	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterHline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitHline(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitHline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListitemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_listitem;
    }

	markup() {
	    return this.getTypedRuleContext(MarkupContext,0);
	};

	HASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.HASH);
	    } else {
	        return this.getToken(creoleParser.HASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterListitem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitListitem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitListitem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TableheaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_tableheader;
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.WS);
	    } else {
	        return this.getToken(creoleParser.WS, i);
	    }
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

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterTableheader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTableheader(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitTableheader(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TablerowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_tablerow;
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(creoleParser.WS);
	    } else {
	        return this.getToken(creoleParser.WS, i);
	    }
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

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterTablerow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTablerow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitTablerow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_title;
    }

	markup() {
	    return this.getTypedRuleContext(MarkupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitTitle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitTitle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NowikiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = creoleParser.RULE_nowiki;
    }

	NOWIKI() {
	    return this.getToken(creoleParser.NOWIKI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.enterNowiki(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof creoleListener ) {
	        listener.exitNowiki(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof creoleVisitor ) {
	        return visitor.visitNowiki(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




creoleParser.DocumentContext = DocumentContext; 
creoleParser.LineContext = LineContext; 
creoleParser.MarkupContext = MarkupContext; 
creoleParser.Text_Context = Text_Context; 
creoleParser.BoldContext = BoldContext; 
creoleParser.ItalicsContext = ItalicsContext; 
creoleParser.HrefContext = HrefContext; 
creoleParser.ImageContext = ImageContext; 
creoleParser.HlineContext = HlineContext; 
creoleParser.ListitemContext = ListitemContext; 
creoleParser.TableheaderContext = TableheaderContext; 
creoleParser.TablerowContext = TablerowContext; 
creoleParser.TitleContext = TitleContext; 
creoleParser.NowikiContext = NowikiContext; 
