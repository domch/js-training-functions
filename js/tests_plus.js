/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Additional - Simple Functions', () => {

    it('01) This function can add two numbers.', function(){
        let result = sum(1, 3);
        result.should.be.equal(4);
    });
    
    it('02) This function can substract two numbers.', () => {
        let result = substract(7, 5);
        result.should.be.equal(2);
    });
    
    it('03) This function finds the longest edge of a triangle.', () => {
        let result = calculateHypotenuse(3, 4);
        result.should.be.equal(5);
    });
    
    it('04) This function returns the reverse order of a string.', () => {
        let result = reverse("itclub");
        result.should.be.equal("bulcti");
    });    
    
    it('05) This function returns the current date with the following format "dd/mm/yyyy"', () => {
        let result = getCurrentDate(new Date(2017, 9-1, 4));
        result.should.be.equal("04/09/2017");
    });  
    
    it('07) Write a function that calculates the area of a rectangle.', () => {
        let result = rectngleArea(3, 9);
        result.should.be.equal(27);
    });
    
    it('08) Write a function that returns the area of a circle.', () => {
        let result1 = circleArea(3);
        result1.should.be.equal(28);
        
        let result2 = circleArea(5);
        result2.should.be.equal(79);
    });
    
    it('09) Write a function that returns the name of the given month.', () => {
        let result1 = getMonthName(new Date(2017, 9-1, 4));
        result1.should.be.equal("Eylül");
        
        let result2 = getMonthName(new Date(2017, 11, 7));
        result2.should.be.equal("Aralik");
    });
    
    it('10) Write a function that returns the horoscope of the given date.', () => {
        let result1 = getHoroscope(new Date(2017, 9-1, 4));
        result1.should.be.equal("Başak");
        
        let result2 = getHoroscope(new Date(2017, 3, 4));
        result2.should.be.equal("Boğa");
    });
    
    it('11) Write a function that calculates factorial of a number.', () => {
        let result = findFactorial(4);
        result.should.be.equal(24);
    });    
});