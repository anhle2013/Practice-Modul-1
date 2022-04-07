function solveQuadratic(a,b,c) {
    let x1, x2;
    console.log(`Quadratic ax2 + bx + c = 0 with a=${a}, b=${b}, c=${c} has result:`);
    if (a==0) {
        if (b==0) {
            if (c==0) return `Infinitely many solutions`;
            else return `No solution`;
        } else return x1 = -c/b;
    }
    else {
        let delta = b*b - 4*a*c;
        if (delta<0) return 'No solution';
        else if (delta ==0) return x1=-b/(2*a);
        else {
            x1=(-b+Math.sqrt(delta))/(2*a);
            x2=(-b-Math.sqrt(delta))/(2*a);
            return [x1,x2];
        } 
    }
}
console.log(solveQuadratic(8,12,-20));
