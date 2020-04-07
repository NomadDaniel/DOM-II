// MVP Goals ==>
//   * [ ] Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc. See list below.
//   * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
//   * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// ---------------My code below--------------- //


//  * [ 1 and 2 ] `mouseover and mouseleave`
const button = document.querySelectorAll('.btn')
button.forEach(item => {
  item.addEventListener("mouseover", event => {
    event.target.style.background = "green"
  })
})

button.forEach(item => {
  item.addEventListener("mouseleave", event => {
    event.target.style.background = "red"
  })
})

// 	* [ 3 and 4 ] `keydown and keyup`
const keyPress = document.querySelector("body")
keyPress.addEventListener("keydown", event => {
    alert("is your cat on the keyboard?")
});

keyPress.addEventListener("keyup", event => {
    alert("that's better")
    // event.stopPropagation() //This will be the 2nd MVP objective
    });
// ---------------------------------------------//

// 	* [ 5 and 6 ] `wheel` + `zoom`
const mapImgWheel = document.querySelector("body > div > section:nth-child(2) > div.img-content > img")

mapImgWheel.addEventListener('wheel', zoom);

function zoom(event) {
  event.preventDefault(); //This is the third MVP objective

  scale += event.deltaY * -0.1;

  // Restrict scale
  scale = Math.min(Math.max(1, scale), 2);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("section:nth-child(2) > div.img-content > img");
el.onwheel = zoom;
// ---------------------------------------------//

// 	* [ ] `drag / drop`


// ---------------------------------------------//

// 	* [ 7 ] `load`
window.addEventListener("load", () => {
  alert("Page is fully loaded...let's do this!")
})
// ---------------------------------------------//

// // 	* [ 8 and 9 ] `focus and blur'
const navAs = document.querySelectorAll("nav a")
navAs.forEach(item => {
    item.addEventListener('focus', event => {
        event.target.style.color = "green"
        // event.preventDefault()
    })
})

navAs.forEach(item => {
  item.addEventListener('blur', event => {
      event.target.style.color = 'red'
  })
})
// ---------------------------------------------//


// // 	* [ 10 and 11 ] `focusin and focusout` 
// const navAs = document.querySelectorAll("nav a")
// navAs.forEach(item => {
//     item.addEventListener('focusin', event => {
//         event.target.style.color = "green"
//         // event.preventDefault()
//     })
// })

// navAs.forEach(item => {
//   item.addEventListener('focusout', event => {
//       event.target.style.color = 'red'
//   })
// })


// ---------------------------------------------//

// 	* [ 12 and 13 ] `resize`
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// ---------------------------------------------//

// 	* [ ] `scroll`

// ---------------------------------------------//

// 	* [ ] `select`

// ---------------------------------------------//

// 	* [ 14 ] `dblclick`
const logo = document.querySelector("h1")
logo.addEventListener("dblclick", event => {
    event.target.textContent = "You dbl-clicker!"
    // event.target.textContent = "seriously?"
    // event.stopPropagation()
})


document.getElementById("demo").addEventListener("dblclick", myFunction);
  function myFunction() {
    document.getElementById("demo").innerHTML = "I was double-clicked!";
  }

// const logoDblClick = document.querySelector("body > header > div > h1");

// logoDblClick.addEventListener('dblclick', event => {
//   logoDblClick.classList.toggle('large');
// });
// ---------------------------------------------//


