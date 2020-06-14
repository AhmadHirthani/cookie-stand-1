var seattle={
    location: 'Seattle',
    minCust : 23,
    maxCust : 65,
    avg : 6.3,
    noCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    }
}
var tokyo={
    location: 'Tokyo',
    minCust : 3,
    maxCust : 24,
    avg : 1.2,
    noCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    }
}
var dubai={
    location: 'Dubai',
    minCust : 11,
    maxCust : 38,
    avg : 3.7,
    noCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    }
}
var paris={
    location: 'Paris',
    minCust : 20,
    maxCust : 38,
    avg : 2.3,
    noCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    }
}
var lima={
    location: 'Lima',
    minCust : 2,
    maxCust : 16,
    avg : 4.6,
    noCust: function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    }
}
var purchased = function(location){
    var result=[],total=0;
    for(var i=0; i<= 13; i++){
        result.push(Math.floor(location.avg * location.noCust()));
        total +=result[i];
    }
    result.push(total);
    location['purchased']=result;
}
purchased(seattle);
purchased(tokyo);
purchased(dubai);
purchased(paris);
purchased(lima);

var list = function(location){
    var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','total'];
    var table = document.getElementById('table');
    var unorderedList = document.createElement('ul');
    unorderedList.id= location.location;
    var name = document.createElement('h4');
    name.id= location.location + 'name';
    name.textContent = location.location;
    unorderedList.appendChild(name);
    table.appendChild(unorderedList);
    for (let j = 0; j < location.purchased.length; j++) {
        var inList = document.createElement('li');
        inList.textContent= time[j] + ' : ' + location.purchased[j] + ' cookies';
        unorderedList.appendChild(inList);      
    } 
    table.appendChild(unorderedList);
}    

list(seattle);
list(tokyo);
list(dubai);
list(paris);
list(lima);
console.log(table);