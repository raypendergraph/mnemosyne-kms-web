grammar Creole;

document
  :(markup|text|LINEBREAK)+ EOF
  ;

text
  :TEXT_SEQUENCE
  ;

markup
  :bulletedList
  |numberedList
  |horizontalLine
  |bold
  |italics
  |paragraph
  |heading
  |link
  |image
  ;

bold
  :BOLD (text|LINEBREAK)+ BOLD
  ;

italics
  :ITALICS (text|LINEBREAK)+ ITALICS
  ;

paragraph
  :PARAGRAPH
  ;

bulletedItem
  :BULLET_LEVEL (bold|italics|text|link)
  ;

bulletedList
  : bulletedItem+
  ;

numberedItem
  :NUMBER_LEVEL (bold|italics|text|link)
  ;

numberedList
  : numberedItem+
  ;

heading
  : HEADING_LEVEL (bold|italics|text)
  ;

//[[URL]] or [[URL|linktext]]
link
  : LINK_LEFT (TEXT_SEQUENCE|TEXT_SEQUENCE '|' TEXT_SEQUENCE) LINK_RIGHT
  ;
//{{image.jpg}} or  {{image.jpg|title}}
image
  : IMAGE_LEFT (TEXT_SEQUENCE|TEXT_SEQUENCE '|' TEXT_SEQUENCE) IMAGE_RIGHT
  ;

horizontalLine
  : LINEBREAK '----'
  ;

fragment ANY_CHARACTER
  : (LETTER|DIGIT|SYMBOL|SPACE)
  ;

fragment DIGIT
  : [0-9]
  ;

fragment LETTER
  : [a-zA-Z]
  ;

fragment SYMBOL
  : '.'
  | ';'
  | ':'
  | ','
  | '('
  | ')'
  | '-'
  | '\\'
  | '\''
  | '~'
  | '"'
  | '+'
  ;

FORCED_LINEBREAK
  : '\\\\'
  ;


PARAGRAPH
  : (LINEBREAK LINEBREAK)
  ;

SPACE
  :(' '|'\t')
  ;

LINEBREAK
  :('\r\n'|'\n\r'|'\n'|'\r')
  ;

ITALICS
  : '//'
  ;

BULLET_LEVEL
  :(LINEBREAK|PARAGRAPH) '*'+
  ;

NUMBER_LEVEL
  :(LINEBREAK|PARAGRAPH) '#'+
  ;

HEADING_LEVEL
  :(LINEBREAK|PARAGRAPH) '='+
  ;

BOLD
  : '**'
  ;

LINK_LEFT
  : '[['
  ;
LINK_RIGHT
  : ']]'
  ;

IMAGE_LEFT
  : '{{'
  ;

IMAGE_RIGHT
  : '}}'
  ;


TEXT_SEQUENCE
  :ANY_CHARACTER+
  ;
