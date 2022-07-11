document.querySelectorAll(".dropbtn").forEach((element) => {
  element.addEventListener("click", () => {
    element.children[0].classList.toggle("reveal");
  });
});

//html

{
  /* <nav class="navbar">
<ul class="dropdownsflex">
    <li class="dropbtn">Title 1
        <ul class="drop-menu">
            <li>Home</li>
            <li>Profile</li>
            <li>Projects</li>
            <li>Friends</li>
            <li>Settings</li>
            <li>Help</li>
        </ul>
    </li>
    <li class="dropbtn">Title 2
        <ul class="drop-menu">
            <li>Home</li>
            <li>Profile</li>
            <li>Projects</li>
            <li>Friends</li>
            <li>Settings</li>
            <li>Help</li>
        </ul>
    </li>
</ul> */
}

//css

// .dropdownsflex li {
//     background-color: rgb(43, 220, 226);
//     padding: 20px 40px;
//     position: relative;
// }

// .drop-menu {
//     background-color: aquamarine;
//     position: absolute;
//     width: 100%;
//     top: 100%;
//     left: 0%;
//     padding: 0;
// }

// ul.drop-menu li {
//     display: none;
// }

// ul.reveal>li {
//     display: block;
// }
