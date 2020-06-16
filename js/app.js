var locations = [];
function Location (location,minCust,maxCust,avg){
    this.location=location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avg=avg;
    this.noCust= function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    };
    this.purchased = function(){
        var result=[],total=0;
        for(var i=0; i<= 13; i++){
            result.push(Math.floor(this.avg * this.noCust()));
            total +=result[i];
        }
        result.push(total);
        this['purchased']=result;
    };
    locations.push(this);  
}

var seattle= new Location('Seattle',23,65,6.3);
var tokyo=new Location('Tokyo',3,24,1.2);
var dubai= new Location('Dubai',11,38,3.7);
var paris= new Location('Paris',20,38,2.3);
var lima= new Location('Lima',2,16,4.6);

seattle.purchased();
tokyo.purchased();
dubai.purchased();
paris.purchased();
lima.purchased();

var table = document.createElement('table');
var parentE = document.getElementById('table').appendChild(table);
var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total'];    

var header = function(){
    var empty = document.createElement('td');
    table.appendChild(empty);   
    for (let i = 0; i < time.length; i++) {
        var header = document.createElement('th');
        header.textContent = time[i];
        table.appendChild(header);     
    }   
}
var footer = function(){
    var total = 0;
    var footer = document.createElement('tr');
    var rowTotal = document.createElement('td');
    rowTotal.textContent='Totals';
    footer.appendChild(rowTotal);
    for (let i = 0; i < time.length; i++) {
        for (let j = 0; j < locations.length; j++) {
            total += locations[j].purchased[i];
        }
    var footerData = document.createElement('td');
    footerData.textContent = total;
    footer.appendChild(footerData); 
    }
    table.appendChild(footer); 
}
Location.prototype.list = function(){
    var row = document.createElement('tr');
    var rowName = document.createElement('td');
    rowName.textContent=this.location;
    row.appendChild(rowName);
    for (let i = 0; i < time.length; i++){
        var rowData = document.createElement('td');
        rowData.textContent = this.purchased[i];
        row.appendChild(rowData); 
    }
    table.appendChild(row); 
}
header();
seattle.list();
tokyo.list();
dubai.list();
paris.list();
lima.list();
footer();
