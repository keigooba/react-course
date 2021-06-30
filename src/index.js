/**
 * const,let等の変数宣言
 */
//  var var1 = "var変数"

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言"; //不可

//上書きはlet

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";
//  constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// }
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

//オブジェクトの書き換えは可能.

// 配列
//  constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("mokey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は28歳です。」
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str) {
//    return str;
//  }
//  アロー関数 thisの扱いが違う
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => str
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 *  分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// // オブジェクトから指定のプロパティを抜ける
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [tt, ttt] = myProfile;
// const message4 = `名前は${tt}です。年齢は${ttt}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello("じゃけ");

/**
 * スプレッド構文... 順番に展開する
 */
//  配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// スプレッド構文でないと参照渡しになってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "ジャケぇ"];
// for (let index = 0; index< nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNUmArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNUmArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ジャケぇ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 *  三項演算子
 */
// ある条件 ？ 条件がtrueの時 ： 条件がfalseのとき
// const val1 = 1 < 0 ? 'tureです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if(flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

//  ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
