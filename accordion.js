const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".accordion-body");

console.log(acc_btns);
// console.log();

acc_btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    acc_contents.forEach(function (acc) {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_btns.forEach(function (btn) {
          btn.classList.remove("active");
        });
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = function (e) {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    acc_contents.forEach(function (acc) {
      acc.classList.remove("active");
    });
  }
};
