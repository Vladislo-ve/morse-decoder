const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let enCodeWord = [];
    const enCodeLetter = [];

    if (expr.indexOf('*')){
        enCodeWord = expr.split('**********');
    }
    enCodeWord.forEach((element, index) => {
      const countLetter = element.length / 10;
      
      for(let i = 0; i < countLetter; i++){
        enCodeLetter.push(element.slice(i * 10, (i + 1) * 10).replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''));
      }
      enCodeLetter.push(' ');
    });
    
  const decodeLetter = enCodeLetter.map(element => {
    if(element != ' ') {
      return MORSE_TABLE[element]
    } return element;
  });
  return decodeLetter.join('').trim();
}

module.exports = {
    decode
}