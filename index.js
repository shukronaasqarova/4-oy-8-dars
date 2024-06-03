// 1 - masala

// alert("massivning barcha elementlarining yigingisini hisoblaydigan funksiya yozing");
// function sumArr(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum = sum + arg[i];
//   }
//   return sum;
// }
// console.log(sumArr([1,2,3,4]));

// 2 - masala

// alert("massivning eng katta elementini topadigan funksiya yozing");
// function maxArr(arg) {
//   let max = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (max > arg[i]) {
//       max = max;
//     } else {
//       max = arg[i];
//     }
//   }
//   return max;
// }
// console.log(maxArr([4, 6, 2, 7]));

// 3 - masala

// alert("massivning eng kichik elementini topadigan funksiya yozing");
// function minArr(arg) {
//   let min;
//   for (let i = 0; i < arg.length; i++) {
//     if (min < arg[i]) {
//       min = min;
//     } else {
//       min = arg[i];
//     }
//   }
//   return min;
// }
// console.log(minArr([4, 6, 2, 7]));


// 5 - masala

// alert("massivdagi har bir elementni 2 baravariga oshiradigan funksiya yozing");
// function x2 (arg){
//     let a =2;
//     for (let i = 0; i < arg.length; i++){
//         console.log(arg[i]*a);
//     }
//     return x2;
// }
// console.log(x2([4,3,8]));

// 6 - masala

// alert("massivdagi barcha juft sonlarni olib tashlaydigan funksiya yozing");
// function toq (arg){
//     let m = [];
//         for (let i = 0; i < arg.length; i++){
//         if(arg[i]%2==1){
//             m = m + arg[i];
//         }
//     }
//     return m;
// }
// console.log(toq([4,3,8]));

// 7 - masala

// alert ("massivdagi barcha toq sonlarni olib tashlaydigan funksiya yozing")
// function juft (arg){
//     let m = [];
//         for (let i = 0; i < arg.length; i++){
//         if(arg[i]%2==0){
//             m = m + arg[i];
//         }
//     }
//     return m;
// }
// console.log(juft([4,3,8]));

// 8 - masala

// alert("massivdagi elementlarni mavjudligini aniqlovchi funksiya tuzing");
// function mav(arg) {
//     let a = +prompt ("a ni kiriting");
//     for(let i = 0 ; i < arg.length ; i++ ){
//     if(a == arg[i]){
//     console.log("mavjud");
//     }
//     }
//     return mav;
// }
// console.log(mav([1,8,3,9]));

// 9 - masala

// alert("massivdagi barcha elementlarni teskari tartibda chiqaradigan funksiya yozing");
// function teskari(arg) {
//     for(let i = arg.length ; i >= 0 ; i--){
//     console.log(arg[i]);
//     }
// }
// console.log(teskari([1,2,3,4,5,6,7,8,9]));

// 11 - masala

// alert("massivdagi barcha elementni 1ga oshiradigan funksiya yozing");
// function oshirish(arg) {
//     let a = [] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     a.push(arg[i]+1);
//     }
//     console.log(a);
// }
// console.log(oshirish([1,2,3,4,5,6,7,8,9]));

// 12 - masala

// alert("massivdagi berilgan elementning indexini topadigan funksiya yozing");
// function index(arg) {
//     let a = +prompt("a ni kiriting");
//     for(let i = 0 ; i < arg.length ; i++){
//     if(a === arg[i]){
//     console.log(i);
//     }
//     }
// }
// console.log(index([1,2,3,4,5,6,7]));

// 13 - masala

// alert(
//   "massivning barcha elementlari orasida berilgan qiymatning nechta ekanligini toping"
// );
// function qiymat(arg) {
//   let a = +prompt("ani kiriting");
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (a === arg[i]) {
//       counter += 1;
//     }
//   }
//   console.log(counter);
// }
// console.log(qiymat([1,2,3,4,5,6,7,8]));


// 14- masala


// alert("massivdagi faqat musbat sonlardan iborat massiv yaratadigan funksia yozing");
// function musbatMassiv(arg) {
//     let a = [] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] > 0 ){
//     a.push(arg[i]);
//     }
//     }
//     console.log(a);
// }
// console.log(musbatMassiv([1,2, 3,-4,-5,-6]));


// 15-mmasala

// alert("massivdagi faqat manfiy sonlardan iborat massiv yaratadigan funksia yozing");
// function manfiyMassiv(arg) {
//     let a = [] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     if(arg[i] < 0 ){
//     a.push(arg[i]);
//     }
//     }
//     console.log(a);
// }
// console.log(manfiyMassiv([1,2, 3,-4,-5,-6]));


// 16 - masala

// alert("massivdagi barcha elementlarni satrga aylantiradigan funksiya yozing");
// function satr(arg) {
//     for(let i = 0 ; i < arg.length ; i++ ){
//     console.log(arg[i]);
//     }
// }
// console.log(satr([1,2,3,4,5,6]));


// 17 - masala


// alert("massivdagi har bir elementning kvadratini qaytaradigan funksiya yozing");
// function kv(arg) {
//     let k = [] ;
//     for( let i = 0 ; i < arg.length ; i++ ){
//     k.push(arg[i]**2);
//     }
//     console.log(k);
// }
// console.log(kv([1,2,3,4,5,6,7,8]));


// 18 - masala

// alert("massivdagi barcha elementlarni boshqa massivga nusxalaydigan funksiya yozing");
// function nusxa(arg) {
//     let a = ['massiv a'] ;
//     for(let i = 0 ; i < arg.length ; i++){
//     a.push(arg[i]);
//     }
//     console.log(a);
// }
// console.log(nusxa([1,2,3,4,5,6,7,8]));
