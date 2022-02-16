function combinePrefixPatterns(regexs) {
    var capturedGroupIndex = 0;
    var needToFoldCase = false;
    var ignoreCase = false;

    for (var i = 0, n = regexs.length; i < n; ++i) {
        var regex = regexs[i];
        if (regex.ignoreCase) {
            ignoreCase = true;
        } else if (/[a-z]/i.test(regex.source.replace(
            /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ''))) {
            needToFoldCase = true;
            ignoreCase = false;
            break;
        }
    }

    function decodeEscape(charsetPart) {
        var cc0 = charsetPart.charCodeAt(0);
        if (cc0 !== 92 ) {
            return cc0;
        }
        var c1 = charsetPart.charAt(1);
        cc0 = escapeCharToCodeUnit[c1];
        if (cc0) {
            return cc0;
        } else if ('0' <= c1 && c1 <= '7') {
            return parseInt(charsetPart.substring(1), 8);
        } else if (c1 === 'u' || c1 === 'x') {
            return parseInt(charsetPart.substring(2), 16);
        } else {
            return charsetPart.charCodeAt(1);
        }
    }

    console.log(capturedGroupIndex);
    console.log(needToFoldCase);
    console.log(decodeEscape);
}








