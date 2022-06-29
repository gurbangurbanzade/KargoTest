// function view(e) {
//   console.log("sasa" + e.path.id);
//   let menuArr = [1, 2, 3, 4, 5];
//   for (let item of e.path) {
//     let a = item.id[4];
//     console.log(a);
//     for (let number of menuArr) {
//       if (a == number) {
//         console.log(number);
//         let viewMenu = document.getElementById(`${number}`);
//         console.log(viewMenu);
//         viewMenu.classList.remove("displayNone");
//       } else {
//         console.log(number);
//         let viewMenu = document.getElementById(`${number}`);
//         console.log(viewMenu.classList);
//         viewMenu.classList.add("displayNone");
//       }
//     }
//   }
// }

function view(e) {
  //   console.log(e.target.id[4]);
  //   console.log(typeof parseInt(e.target.id[4]));
  let viewMenu = document.getElementById(`${e.target.id[4]}`);
  viewMenu.classList.remove("displayNone");
  let elementClass = Object.values(viewMenu.classList);

  let elements = document.querySelector(".tabMenuItems").children;
  console.log(elements);
  for (let i = 0; i <= elements.length; i++) {
    if (i !== parseInt(e.target.id[4])) {
      elements[i].classList.add("displayNone");
      console.log(elements[i]);
    } else {
      elements[i].classList.remove("displayNone");
    }
  }

  function displeyHide() {
    let elements = document.querySelector(".tabMenuItems").children;
    console.log(elements);
    for (let i = 0; i <= elements.length; i++) {
      elements[i].classList.add("displayNone");
      console.log(elements[i].classList);
    }
  }
}
