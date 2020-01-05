//3. Написати функцію, яка приймає параметром число. В залежності від числа зробити наступне: Якщо число  5 виводимо ‘Tiny’
//Якщо число 10 виводимо ‘Small’
//Якщо число  15 виводимо ‘Medium’
//Якщо число  20 виводимо ‘Large’
//Якщо число 30 виводимо ‘Huge’
//Зробити через Switch case



let arg = prompt("Введите число?");
switch (arg) {
  case '5':
    alert( 'Tiny' );
    break;
  case '10':
    alert( 'Small' );
    break;
  case '15':
    alert( 'Medium' );
    break;
   case"20": 
    console.log("Large");   
       break;
  default:
    alert( 'Невідоме число' );
}