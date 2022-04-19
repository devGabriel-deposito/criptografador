var alphabet = ['¹', '³', '²',

    '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.',
    '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':',
    ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^',
    '!', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '{', '|', '}', '~', 'Ç', 'ü', 'é', 'â',
    'ä', 'à', 'å', 'ç', 'ê', 'ë', 'è', 'ï', 'î', 'ì', 'Ä', 'Å',
    'É', 'æ', 'Æ', 'ô', 'ö', 'ò', 'û', 'ù', 'ÿ', 'Ö', 'Ü', 'ø',
    '£', 'Ø', '×', 'ƒ', 'á', 'í', 'ó', 'ú', 'ñ', 'Ñ', 'ª', 'º',
    '¿', '®', '¬', '½', '¼', '¡', '«', '»', '_', 'Á', 'Â', 'À',
    '©', '¦', '¢', '¥', '"', 'ã', 'Ã', '+', '¤', 'ð', 'Ð', 'Ê',
    'Ë', 'È', 'i', 'Í', 'Î', 'Ï', 'Ì', 'Ó', 'ß', 'Ô', 'Ò', 'Õ',
    'Õ', 'µ', 'Þ', 'Þ', 'Ú', 'Û', 'Ù', 'ý', 'Ý', '¯', '´', ' ',
    '±', '¾', '¶', '§', '÷', '¸', '°', '¨', '·', '¹', '³', '²',

    '#', '$', '%',];


function encrypt() {
    var textFromTextArea = $('#firstTextArea').val();
    var text = ''
    for (var i = 0; i < textFromTextArea.length; i++) {
        for (var j = 0; j < 192; j++) if (textFromTextArea[i] == alphabet[j]) var indice = parseInt(j) + 3;
        text += alphabet[indice];
        console.log(indice);
    };
    $('#secondTextArea').val(text);
};

function decrypt() {
    var textFromTextArea = $('#secondTextArea').val();
    var text = ''
    for (var i = 0; i < textFromTextArea.length; i++) {
        for (var j = 0; j < 192; j++) if (textFromTextArea[i] == alphabet[j]) var indice = parseInt(j) - 3;
        text += alphabet[indice];
        console.log(indice);
    };
    $('#firstTextArea').val(text);
};