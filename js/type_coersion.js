//if two values compared are different types, one of them will be converted
1 == '1' //true (dynamic compare)
1 === '1' //false (hard compare)


if (1){ //converted to bool -> true
    console.log(6);
}