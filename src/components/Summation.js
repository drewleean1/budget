import React from 'react'; 

function Summation({expenses}) {
    
    let totalSum = 0; 

    for (let i = 0; i < expenses.length; i++) {
        totalSum += expenses[i]["amount"]
      }

    const conPrice = totalSum.toLocaleString('en-US', {     
        style: 'currency',     
        currency: 'USD',   
        });

    return (
        conPrice
    );
}

export default Summation;