var person = function(name,year,job){
    this.name = name;
    this.year = year;
    this.job = job;
    
}
person.prototype.calculateAge = function() {
    console.log(2016 - this.year);  
}
var john = new person('john', 1991,'teacher');
john.calculateAge();