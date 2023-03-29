import "./ComparePage.scss";

function ComparePage() {
  return (
    <section className="main-section">
      <h2 className="main-section__header">Compare Page</h2>
    </section>
  );
}

//   {
/* <div class="dropdown">
        <button onclick={myFunction()} className="drop-button">
          Select player
        </button>
        <div id="my-dropdown" className="dropdown-content">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </div>
      </div> */
//   }

//Drop down menu functionality below

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

export default ComparePage;
