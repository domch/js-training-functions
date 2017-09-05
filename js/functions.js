/**
 * Please provide all functions here!
 *
 */


function sum(a, b){
    return a + b;
}
    
function substract(a, b){
    return a - b;
}
    
function calculateHypotenuse(a, b){
    return Math.sqrt(sum(Math.pow(a, 2), Math.pow(b, 2)));
}
    
function reverse(pWord){
    return pWord.split("").reverse().join("");
}
    
function getCurrentDate(pDate){
    return new String("")
                .concat(pDate.getDate()).concat("/")
                .concat(pDate.getMonth()+1).concat("/")
                .concat(pDate.getFullYear());
}
    
function rectngleArea(pLongEdge, pShortEdge){
    return pLongEdge * pShortEdge;
}
    
function circleArea(pDiameter){
    return Math.round(Math.PI * Math.pow(pDiameter, 2));
}
    
function getMonthName(pDate){
    var monthNames = ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasim", "Aralik"];
    return monthNames[pDate.getMonth()];
}

function getHoroscope(pDate){
    
}
    
function findFactorial(pLimit){
    return new Array(pLimit).reduce(function(pFactorial, pValue, pIndex){
        return pFactorial * pIndex;
    }, 1);
}
    
// Alternative way?
function capitalize(pWord){
    return pWord.split("")
                .map(function(pValue, pIndex, pArray){
                    if(pIndex == 0)
                        pArray[pIndex] = pArray[pIndex].toUpperCase();
                    return pValue;
                })
                .join("");
}
    
function findSocialLevel(150000){}
    
function findEvenNumbersTo(9){}
    
function findTheSequenceTo(13, 4){}
    
function concatSpecially("it", "club"){}  
   
function orderAlphabetically("itclub"){}
    
function findTheLongestWord("Herzlich willkommen zu unseren itclub Übungen. Hier sehen Sie Ihre Verbesserungspotenziel"){}
    
function findNumberOfVowel("Herzlich willkommen zu unseren itclub Übungen!"){} 
    
function maskTheString("Willkommen zu den Übungen!", ["l", "n"]){}
    
function sumEventNumbersTo(193){}    
    
function toCamelCase("it club volketwil"){}
 
function findWordsByChars("Every saturday, we have a it-club checkpoint!", ["o", "u"]){}
    
function generateRandomNumbers(){}
    
function suggestPassword(){}   
