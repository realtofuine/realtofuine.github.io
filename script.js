window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", ({ matches }) => {
    $("body").toggleClass("light-theme");
    console.log("changed");
  });

// $(".theme-switch").on("click", () => {
//   $("body").toggleClass("light-theme");
// });
