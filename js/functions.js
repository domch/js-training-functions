/**
 * Please provide all functions here!
 *
 */


function sum(1, 3){}
    
substract(7, 5){}
    
calculateHypotenuse(3, 4){}
    
reverse("itclub"){}
    
getCurrentDate(new Date(2017, 9-1, 4))
    
rectngleArea(3, 9)
    
circleArea(3)
    
getMonthName(new Date(2017, 9-1, 4))

getHoroscope(new Date(2017, 9-1, 4))
    
findFactorial(4)  
    
capitalize("volki");
    
findSocialLevel(150000)
    
findEvenNumbersTo(9)
    
findTheSequenceTo(13, 4)  
    
concatSpecially("it", "club")  
   
    it('16) Write a function that rearrange a string in alphatical order', () => {
        let result = orderAlphabetically("itclub");
        result.should.be.equal("bciltu");
    }); 
    
    it('17) Write a function that accepts a string and find the longest word in it', () => {
        let result = findTheLongestWord("Herzlich willkommen zu unseren itclub Übungen. Hier sehen Sie Ihre Verbesserungspotenziel");
        result.should.be.equal("Verbesserungspotenziel");
    });  
    
    it('18) Write a function that find the number of vowels.', () => {
        let result = findNumberOfVowel("Herzlich willkommen zu unseren itclub Übungen!");
        result.should.be.equal(14);
    });   
    
    it('19) Write a function that masks with * by the given characters.', () => {
        let result = maskTheString("Willkommen zu den Übungen!", ["l", "n"]);
        result.should.be.equal("Wi**komme* zu de* Übu*ge*!");
    });   
    
    it('20) Write a function that sums all even numbers to the given upper limit.', () => {
        let result = sumEventNumbersTo(193);
        result.should.be.equal(9312);
    });    
    
    it('21) Write a function to convert a string into camel case.', () => {
        let result = toCamelCase("it club volketwil");
        result.should.be.equal("itClubVolketswil");
    });    
 
    it('22) Implement a function that finds words in a string which includes any of the given chars.', () => {
        let result = findWordsByChars("Every saturday, we have a it-club checkpoint!", ["o", "u"]);
        result.should.be.deepEqual(["saturday", "it-club", "checkpoint"]);
    });
    
    it('23) Implement a function which produces random numbers between 1 and 10', () => {
        let result = generateRandomNumbers();
        result.should.be.withIn(1, 10);
    });
    
    it('24) Write a function which create a complex password with 8 chars including at least one letter and one numner', () => {
        let result = suggestPassword();
        result.length.should.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    });     
});