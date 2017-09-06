
/**
 * Please provide all functions here!
 *
 */


function sum(a, b){
    
}
    
function substract(a, b){
    
}
    
function calculateHypotenuse(a, b){
    
}
    
function reverse(pWord){
    
}

function getCurrentDate (myDate){   // dd/mm/yyy  
    var yy = myDate.getFullYear();     
    var mm = myDate.getMonth() + 1;     
    var dd = myDate.getDate();
    
    return   dd.padStart(2, '0').concat("/")
               .concat(mm.padStart(2, '0')).concat("/")
               .concat(yy); 
}
    
function rectngleArea(pLongEdge, pShortEdge){
    
}
    
function circleArea(pDiameter){
    return Math.round(Math.PI * pDiameter * pDiameter);
}
    
function getMonthName(pDate){
    var monthNames = ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylül", "Ekim", "Kasim", "Aralik"];
    return monthNames[pDate.getMonth()];
}

function getHoroscope(pDate){
    var month = pDate.getMonth() + 1;
    var day = pDate.getDate();
    
    let horoscope = null;
    
    if( (month == 1 && day <= 20) || (month == 12 && day >=22)) {
        horoscope = "Oğlak";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        horoscope = "Kova";
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        horoscope = "Balık";
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        horoscope = "Koç";
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        horoscope = "Boğa";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        horoscope = "İkizler";
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        horoscope = "Yengeç";
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        horoscope = "Aslan";
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        horoscope = "Başak";
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        horoscope = "Terazi";
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        horoscope = "Akrep";
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        horoscope = "Yay";
    }
    
    return horoscope;
}
    
/**
 * 5! = 5*4*3*2*1 = 120;
 */
function findFactorial(pLimit){
    let result = 1;
    
    for(let i=1; i < pLimit+1; i++){
        result *= i; // result = result * i;
    }
    
    return result;
}

 
function findFactorialAlternative(pLimit){
    return new Array(pLimit).reduce((pFactorial, pValue, pIndex) => pFactorial * (pIndex+1), 1);
}

function capitalize(pWord){
    
}
// Alternative way?
function capitalizeAlternative(pWord){
    
}
    
function findSocialLevel(pSalary){
    
}
    
function findEvenNumbersTo(pLimit){
    
}
    
function findTheSequenceTo(pLimit, pStep){
    return new Array(pLimit)
        .map(function(pValue, pIndex){
           return pIndex; 
        })
        .filter(function(pValue){
            return pValue % pStep == 0;
        })
}
  
function findTheSequenceToAlternative(pLimit, pStep){
    let result = [];
    
    for(let i=0; i<pLimit; i++){
        if(i % pStep == 0){
            result.push(i);
        }
    }
    
    return result;
}
 


function concatSpecially(pFirstWord, pSecondWord){
    
}  
   
function orderAlphabetically(pWord){
    
}
    
function findTheLongestWord(pSentence){
    
}
    
function findNumberOfVowel(pSentence){
    
} 
    
function maskTheString(pSentence, pLetterList){
    
}
    
function sumEventNumbersTo(pLimit){
    
}    
    
function toCamelCase(pSentence){
    
}
 
function findWordsByChars("Every saturday, we have a it-club checkpoint!", ["o", "u"]){}
    
function generateRandomNumbers(){}
    
function suggestPassword(){}   
