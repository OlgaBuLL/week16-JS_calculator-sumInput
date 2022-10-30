// let newArray = [];
// let anyNumber;
// var regex = /^[0-9]+$/;

// document
//   .querySelector("#number")
//   .addEventListener("keypress", function (enter) {
//     if (enter.key === "Enter") {
//       let someNumber = document.getElementById("number").value;
//       if (someNumber == "") {
//         document.getElementById("errorMessage").innerHTML +=
//           "Поле не заполнено<br>";
//         document.querySelector("#number").value = "";
//       } else if (!someNumber.match(regex)) {
//         document.getElementById("errorMessage").innerHTML +=
//           "Введите цифры<br>";
//         document.querySelector("#number").value = "";
//         document.querySelector("#errorMessage").innerHTML = "";
//       } else {
//         newArray.push(someNumber);
//         document.querySelector("#number").value = "";
//         document.querySelector("#errorMessage").innerHTML = "";
//       }
//     }
//   });

// function sumInput() {
//   let summ = 0;
//   document.getElementById("summ").innerHTML = "";
//   document.getElementById("array").innerHTML = "";
//   for (i = 0; i < newArray.length; i++) {
//     document.querySelector("#array").innerHTML += newArray[i] + ", ";
//     summ += +newArray[i];
//   }
//   document.getElementById("summ").innerHTML += "Сумма: " + summ;
// }
// function resetArray() {
//   newArray = [];
//   document.getElementById("summ").innerHTML = "";
//   document.getElementById("array").innerHTML = "";
// }

// function changeTheme() {
//   if (document.getElementById("theme-option").value == "standard") {
//     document.getElementById("theme").style.background = "white";
//     document.getElementById("theme").style.color = "black";
//   }
//   if (document.getElementById("theme-option").value == "dark") {
//     document.getElementById("theme").style.background = "gray";
//     document.getElementById("theme").style.color = "white";
//   }
//   if (document.getElementById("theme-option").value == "gradient") {
//     document.getElementById("theme").style.background =
//       "linear-gradient(45deg, lightgoldenrodyellow, lightgreen)";
//     document.getElementById("theme").style.color = "darkgreen";
//   }
// }

// let changeColor = document.querySelector("select");
// changeColor.addEventListener("change", function changeTheme() {
//   document.getElementById("theme").style.background = "dimgray";
//   document.getElementById("theme").style.color = "pink";
// });

let input = document.querySelector("input");
let error = document.querySelector(".errorMessage");
let array = document.querySelector(".array");
let result = document.querySelector(".result");
let sort = document.querySelector(".sort");
let summ = document.querySelector(".summ");
let newArray = [];

input.addEventListener("change", () => {
  error.textContent = "";
  if (input.value !== "" && !/[^0-9\.]/g.test(input.value)) {
    newArray.push(Number(input.value));
    console.log(newArray);
    input.value = "";
  } else {
    error.textContent = "Введите цифры!";
    input.value = "";
  }
});

function sumInput() {
  newArray.sort(function (a, b) {
    return a - b;
  });
  console.log(newArray);
  let sum = 0;
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  document.querySelector(".array").innerHTML = newArray;
  document.querySelector(".summ").innerHTML = "Итоговая сумма: " + sum;
}

function resetArray() {
  newArray.splice(0, newArray.length);
  // newArray.length = 0;
  // newArray = [];
  console.log(newArray);
  array.innerHTML = "";
  summ.innerHTML = "";
}
