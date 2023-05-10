$(document).ready(function () {
  const screenContent = $(".screen-content");
  $("#minus").on("click", () => {
    let minus = Number(screenContent.text()) - 1;
    screenContent.text(minus);
  });
  $("#plus").on("click", () => {
    let plus = Number(screenContent.text()) + 1;
    screenContent.text(plus);
  });
});
