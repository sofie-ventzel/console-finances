// print every answear to the console
for ( i=0; i<finances.length; i++) {
    console.log('All the profits and losses: ' + finances)
}

// Sum the total amount of months in the array
console.log('Total number of months: ' + finances.length);

// Total the array, aka the net total amount of Profit/Losses
function sumFinances() {
  var sum = 0;
    for ( i=0; i<finances.length; i++) {
        sum += (finances[i][1])    
    };
    console.log('Total: ' + sum); 
    return sum
}

sumFinances(finances)


// Track the changes from month to month
function changes() {
    for ( i=0; i<finances.length; i++) {
        
        
    } 
    console.log('something')
    return; 
}

changes(finances)

// Find the average of the changes, perhaps a new array to track the changes?


// Find the greatest increase in profits (date and amount)
// if the index number is higher, compare to the next one
function greatestIncrease() {
    var sum = 0;
    for ( i=0; i<finances.length; i++) {
        if ((sum += (finances[i][1])) < (finances[i++][1]) => (sum === )) {
            sum = (finances[i++][1])
        }     
    };
    console.log('Greatest increase in profits: ' + sum ); 
    return; 
}

greatestIncrease(finances)
// Find the greatest decrease in losses (date and amount)