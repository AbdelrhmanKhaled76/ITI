const stringTruncator = {
    [Symbol.replace](str) {
        const maxLength = 15;
        
        if (typeof str !== 'string') {
        return str;
        }
        return str.length > maxLength 
        ? str.substring(0, maxLength) + "..." 
        : str;
    }
};


const longText = "This is a very long sentence that needs shrinking.";
console.log(longText.replace(stringTruncator));