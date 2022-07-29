// Hello World!
//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

// variable
let myVariable;
myVariable = 'Bob';
myVariable = 'Steve';

// comment
/*
comment
*/

// operators
// 加算
let a = 1 + 2;
let b = 'hello' + 'world';
// 減算・除算・乗算
let c = 9 - 1;
let d = 2 * 1;
let e = 2 / 1;
// 代入
let f = d;
// 等価 （値と型が等しいかどうか）
let g = (a === 3);
// 否定・非等価
let h = !(a === 3);

// 条件文
let iceCream = 'チョコレート';
if (iceCream === 'チョコレート') {
	alert('やった、チョコレート大好き！');
} else {
	alert('あれれ、でもチョコレートは私のお気に入り...');
}

// 関数
function multiply(num1, num2) {
	let result = num1 * num2;
	return result;
}

// イベント ブラウザの機能
document.querySelector('p').onclick = function () {
	alert('痛っ! つつくのはやめて!');
}

// 画像の切り替えの追加
let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', "images/firefox-icon2.png");
	} else {
		myImage.setAttribute('src', "images/firefox-icon.png");
	}
}

// パーソナライズされた挨拶メッセージ Web Storage APIを使う
/**
 * Web Storage API
 * 参考: https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API
 *   Web Storage API は、クッキーを使用するよりも直感的な方法で、ブラウザーがキーと値のペアを保存できる仕組みを提供します。
 * 
 * settionStorage:
 *   sessionStorage は、ページのセッション中 (ページの再読み込みや復元を含む、ブラウザーを開いている間) に使用可能な、オリジンごとに区切られた保存領域を管理します。 
 *   セッションデータのみを保存します。つまり、データはブラウザ（またはタブ）が閉じられるまで保存されます。
 *   データがサーバに転送されることはありません。
 *   ストレージの制限がクッキーよりも大きいです（最大 5MB ）
 * localStorage:
 *   有効期限なしでデータを保存し、 JavaScript を介してクリアされます。もしくは、ブラウザキャッシュ/ローカルに保存したデータのクリアによりクリアされます。
 *   ストレージ制限は3つの中で最大です。
 */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('あなたのなまえを入力してください');
	// キャンセル押されたときはnullがreturnされる
	if (myName === null) {
		return;
	// 空文字は再入力を求める
	} else if (!myName) {
		setUserName();
	// 入力があるときはそれを採用
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Mozilla はすばらしいよ、' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storageName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozillaはすばらしいよ、' + storageName;
}

myButton.onclick = function() {
	setUserName();
}