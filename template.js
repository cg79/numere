function pow(baza, putere, moduloN) {
    //debugger;
    if (putere === 1)
        return baza % moduloN;

    i = 1;
    var rez = baza;
    while (i * 2 < putere) {
        rez = (rez * rez) % moduloN;
        i = i * 2;
    }
    return rez * pow(baza, putere - i, moduloN) % moduloN;
}

function createMatrix(n) {
    var matrix = [
        []
    ];
    var index = 0;
    for (var i = 2; i < n; i++) {
        matrix[i - 2] = [];
        for (var j = 1; j < n; j++) {
            matrix[i - 2][j - 1] = pow(i, j, n);
        }
    }
    return matrix;
}

function printMatrix(m) {
    var result = "\n";
    for (var i = 0; i < m.length; i++) {
        var line = m[i];
        logLine = "\n";
        for (var j = 0; j < line.length; j++) {
            logLine += line[j] + "\t";
        }
        result += logLine + '\n';

    }
    console.log(result);
}

// var m = createMatrix(39);
// printMatrix(m);


function generateRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateGuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    // then to call it, plus stitch in '4' in the third group
    var guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    return guid;

}

function getRandom(n, min, max) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        arr.push(generateRandomNo(min, max));

    }
    return arr;
}

function generateRandomNo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sixOf49(n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        arr.push({
            i: i + 1,
            rand: generateRandomNo(2, 100)
        });
    }

    arr.sort((a, b) => a.rand - b.rand);


    return arr.slice(0, 6).map(el => { return el.i });
}
console.log(sixOf49(49));

// console.log(getRandom(2, 9, 20));
// console.log(sixOf49(49));

function printMatrix(m) {
    var result = "\n";
    for (var i = 0; i < m.length; i++) {
        var line = m[i];
        logLine = "\n";
        for (var j = 0; j < line.length; j++) {
            logLine += line[j] + "\t";
        }
        result += logLine + '\n';

    }
    console.log(result);
}

function populateMatrix(rows, cols) {

    var matrix = [];

    for (var i = 0; i < rows; i++) {

        // Creates an empty line
        matrix[i] = [];

        for (var j = 0; j < cols; j++) {
            // Initializes:
            matrix[i][j] = generateRandomNo(5, 50);
        }
    }

    return matrix;
}

function calculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function returnSumOfMatrixLines(m) {
    var arr = [];
    for (var i = 0; i < m.length; i++) {
        arr.push(calculateSum(m[i]));
    }
    return arr;
}

// var mat = populateMatrix(2, 2);

// printMatrix(mat);
// var sums = returnSumOfMatrixLines(mat);
// console.log(sums);
// console.log(m);

function mod1(n) {
    console.log(n);
    
    var index = 4;


    var a = index-1;
    var b = index+1;
    var ab = n- a*b;
    console.log(ab);
    while(ab>0)
    {
    	debugger;
    	index = index+ 4;
    	a = index-1;
    	b = index+1;
    	ab = n- a*b;
    	console.log(ab);
    }

    return [];

}

function t56(n) {
    console.log(n);
    
    var a = 5;
    var b = 6;
    var s = a+b;
    
    while(n%s != 0)
    {
        b+=2;
        s = s+b;    
        console.log(s);
    }

    console.log(s);

}

function ab(a,b){
    return 2*(a*b) -(a+b)+1; 
}
function modSpecial(n){
    var p=1;
    for(var i=1;i<n-1;i++)
    {
        p = ab(p,2) % n;
        console.log(p);
    }
}

// modSpecial(11);
// 3 * 7 = 5-2 5+2

function nplus(a,b){
	// debugger;
    var n = a*b;
    console.log('\n' + a + " * " + b + " = n = " +n);
    var y = (a+b)/2;
    var dif = y-a;
    console.log( y + " - "+ dif);
    
    var p =1;
    var pp=(n+1)/2;
    if(pp%2 == 0 ){
        console.log("PAR");
        p = pp/2;
    }else{
    	p = (n+pp)/2;	
    }
    
    
    var s= p;
    var i=0;
    console.log(n+ " *x + " + p + " = SQRT");

    while(Math.sqrt(s) % 1 !== 0 && i< 100)
    {
        i=i+1;
        s=  (n*i)+p;
        console.log(i + " " + s);       
    }
    var pf = Math.sqrt(s);
    var jumate = pf*2;
    var j = (jumate*jumate) % n; 
    console.log(jumate + " ==== " + j);

    console.log(pf + "^2 % " + n + " = " + (s % n) );
}




var xxx = 7*29;
var tests = [];
tests.push({a:7,b:11});
tests.push({a:3,b:17});
tests.push({a:7,b:17});
tests.push({a:7,b:19});
tests.push({a:7,b:23});
tests.push({a:7,b:29});

for(var i=0;i<tests.length;i++)
{
	nplus(tests[i].a,tests[i].b);	
}

function xpatratmodn(x){
	var p=1;
	for(var i=1;i<x;i++){
		p = (i*i) % x;
		console.log( i+ " " + p);
	}
}

xpatratmodn(77);
// var m1 = t56(xxx);
// for (var x = 0; x < m1.length; x++) {
//     if (m1[x].v1 == m1[x].v2) {
//         console.log(x + "\t"+"%c" + JSON.stringify(m1[x]) + " " + ((m1[x].v1 * m1[x].v2)-1)/xxx, "color: yellow; font-style: italic; background-color: blue;padding: 2px");
//     } else {
//         if (m1[x].v1 * 2 == m1[x].v2) {
//             console.log(x + "\t"+"%c" + JSON.stringify(m1[x]), "color: yellow; font-style: italic; background-color: green;padding: 2px");
//         } else {
//             console.log(x + "\t"+JSON.stringify(m1[x]));
//         }
//         // console.log(m1[x]);
//     }
// }
// console.log(m1);