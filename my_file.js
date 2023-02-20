// print every answear to the console
for ( i=0; i<finances.length; i++) {
    console.log('All the profits and losses: ' + finances)
}

// Sum the total amount of months in the array
console.log('Total number of months: ' + finances.length);

// Total the array, aka the net total amount of Profit/Losses
function sumFinances(finances) {
  var sum = 0;
    for ( i=0; i<finances.length; i++) {
        sum += (finances[i][1])    
    };
    console.log('Total: ' + sum); 
    return sum
}

sumFinances(finances)


// Track the changes from month to month
for ( i=0; i<finances.length; i++) {
    console.log(finances[i][1])
}
// Find the average of the changes, perhaps a new array to track the changes?
// Find the greatest increase in profits (date and amount)
// Find the greatest decrease in losses (date and amount)