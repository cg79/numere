function m2Value(x) {
  var j = (x + 1) / 2;
  return (j * j) % x;
}

function isnOriNPlusunu(n) {
  var s = Math.sqrt(n) << 0;
  var p = s * (s + 1);
  if (p == n) {
    return true;
  } else {
    console.log("      ", n - p);
    return false;
  }
}

function test(a, b) {
  var n = a * b;
  var m2 = m2Value(n);
  var up = 15;
  var i = 1;
  var rez = 0;
  var possibleAnswer = 0;
  while (i < up) {
    rez = n * i + 1;
    possibleAnswer = rez - m2;
    console.log(possibleAnswer);
    if (isnOriNPlusunu(possibleAnswer)) {
      console.log("is >>>>>> ", possibleAnswer);
      i = up;
    }
    i++;
  }
}

function squares(a, b) {
  var n = a * b;
  var sqrt = (Math.sqrt(n) << 0) + 1;
  for (var i = 0; i < 20; i++) {
    var x = sqrt * sqrt - n;
    console.log(x, x % n);
    sqrt++;
  }
}

function squares1(a, b) {
  var n = a * b;
  var sqrt = (Math.sqrt(n) << 0) + 1;
  var x = 0;
  for (var i = 0; i < 2; i++) {
    x = sqrt * sqrt - n;
    console.log(x, x % n);
    sqrt++;
  }

  var y = x;
  while (y > 0) {
    y = y - 2;
    x = x + y;
    console.log(x, x % n);
  }
}

function mypow(baza, numar, n) {
  if (numar === 0) {
    return 1;
  }
  if (numar === 1) {
    return baza;
  }
  var p = baza;
  var i = 1;
  var posible = 1;
  while (posible * 2 <= numar) {
    p = (p * p) % n;
    posible = posible * 2;
  }
  return (p * mypow(baza, numar - posible, n)) % n;
}

function findPow(a, b) {
  return v2(a, b);
  var n = a * b;
  console.log(a, " * ", b, " = ", n);
  var jumate = (n + 1) / 2;
  console.log("jumatate = ", jumate);
  var modJumate = (jumate * jumate) % n;
  console.log("modJumate = ", modJumate);

  var lastObj = null;
  var response = [];

  var pdic = {};
  var val = modJumate;
  var temp = 0;
  var i = 0;
  var pow = 0;
  while (i < jumate) {
    temp = mypow(val, 2, n);
    if (pdic[temp]) {
      pdic[val] = { val: temp, i, pow, n: val };

      // debugger;
      lastObj = { i, val, temp, pow: 2 * pow + 2 };
      response.push(lastObj);
      console.log(pdic);
      //return pdic[val];
      break;
    }
    console.log(temp);
    pow = 2 * pow + 1;
    pdic[val] = { val: temp, i, pow };
    response.push({ i, val, temp, pow: pow + 1 });

    val = temp;
    i++;
  }

  // debugger;
  // var powerOne = lastObj.pow;
  var inMap = pdic[lastObj.temp];

  var position = lastObj.pow * 2 - inMap.pow - 1;

  var test = mypow(jumate, position, n);
  console.log(test);

  console.log("SOLUTION IS ", position, " si rezultatul modulo este ", test);

  // var optimizedPosition = position;
  // if (optimizedPosition > n) {
  //   optimizedPosition = optimizedPosition % (n-1);
  //     test = mypow(jumate, optimizedPosition, n);
  //     console.log(
  //       "SMALL SOLUTION IS ",
  //       optimizedPosition,
  //       " si rezultatul modulo este ",
  //       test
  //     );

  // debugger;
  // if (optimizedPosition % 2 === 0) {
  //   optimizedPosition = optimizedPosition / 2;
  //   test = mypow(jumate, optimizedPosition, n);
  //   console.log(
  //     "SMALL SOLUTION IS ",
  //     optimizedPosition,
  //     " si rezultatul modulo este ",
  //     test
  //   );
  // }
  // }

  return response;
}

function v1(a, b, modJumate) {
  var n = a * b;
  console.log(a, " * ", b, " = ", n);
  var jumate = (n + 1) / 2;
  console.log("jumatate = ", jumate);
  if (!modJumate) {
    modJumate = (jumate * jumate) % n;
  }

  console.log("modJumate = ", modJumate);

  var lastObj = null;
  var response = [];

  var pdic = {};
  var val = modJumate;
  var temp = 0;
  var i = 0;
  var pow = 0;
  while (i < jumate) {
    temp = mypow(val, 2, n);
    if (pdic[temp]) {
      pdic[val] = { val: temp, i, pow, n: val };

      // debugger;
      lastObj = { i, val, temp, pow: 2 * pow + 2 };
      response.push(lastObj);
      console.log(pdic);
      //return pdic[val];
      break;
    }
    console.log(temp);
    pow = 2 * pow + 1;
    pdic[val] = { val: temp, i, pow };
    response.push({ i, val, temp, pow: pow + 1 });

    val = temp;
    i++;
  }

  // debugger;
  // var powerOne = lastObj.pow;
  var inMap = pdic[lastObj.temp];

  var position = lastObj.pow * 2 - inMap.pow - 1;

  var test = mypow(jumate, position, n);
  console.log(test);

  console.log("SOLUTION IS ", position, " si rezultatul modulo este ", test);

  // var optimizedPosition = position;
  // if (optimizedPosition > n) {
  //   optimizedPosition = optimizedPosition % (n-1);
  //     test = mypow(jumate, optimizedPosition, n);
  //     console.log(
  //       "SMALL SOLUTION IS ",
  //       optimizedPosition,
  //       " si rezultatul modulo este ",
  //       test
  //     );

  // debugger;
  // if (optimizedPosition % 2 === 0) {
  //   optimizedPosition = optimizedPosition / 2;
  //   test = mypow(jumate, optimizedPosition, n);
  //   console.log(
  //     "SMALL SOLUTION IS ",
  //     optimizedPosition,
  //     " si rezultatul modulo este ",
  //     test
  //   );
  // }
  // }

  return response;
}

function store() {
  var list = [];
  var add = function (name) {
    list.push(name);
  };

  var getList = function () {
    return list;
  };

  return {
    add,
    getList,
  };
}
var storeObj = store();
storeObj.add("unu");
storeObj.getList();

function nminus1(a,b) {
  var n = a*b;

  var j = (n+1)/2;
  j = j*j %n;
  if(j % 2 ==1) {
    j*=2;
  }
  var x = j;
  var c = 1;
  while(x>0) {
    x = x-c;
    c = c+2;
    console.log(x,  x*x - n);
  }

}
