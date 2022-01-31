let n1 = 29

for (let n1 = 1; n1 <= 29; n1++) {
    if (n1 % 3 == 0 && n1 % 5 == 0)
        console.log("TzStriker")
    else if (n1 % 3 == 0)
        console.log("Tz")
    else if (n1 % 5 == 0)
        console.log("Striker")
    
    else {
        console.log(n1)
    }
}