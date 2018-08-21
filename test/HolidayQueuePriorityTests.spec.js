describe("PriorityQueue", function(){
    describe("Given a gift and priority", function() {        
    it("Should add to the queue and return the length of the queue", function () {
        //Arrange
        let sut = new PriorityQueue();
        let gift = 'Water Gun';
        let priority = 1; 
        //Act
        let actual = sut.Queue(gift,priority);
        //Assert
        expect(actual).toBe(1);
       });
    });
});