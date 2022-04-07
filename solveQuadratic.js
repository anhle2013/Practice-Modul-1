function solveQuadratic(a,b,c) {
    console.log(`Quadratic ax2 + bx + c = 0 with a=${a}, b=${b}, c=${c} has result:`);
    if (a==0) {
        if (b==0) {
            if (c==0) return console.log(`Infinitely many solutions`);
            else return console.log(`No solution`);
        } else return console.log(`Solution x = ${-c/b}`);
    }
    else {
        let delta = b*b - 4*a*c;
        if (delta<0) return console.log(`No solution`);
        else if (delta ==0) return console.log(`Double solution x1=x2=${-b/(2*a)}`);
        else return console.log(`2 solution: x1=${(-b+Math.sqrt(delta))/(2*a)} and x2=${(-b-Math.sqrt(delta))/(2*a)}`);
    }
}
solveQuadratic(8,12,-20);
