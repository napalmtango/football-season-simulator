$(document).ready(function () {
  // localStorage.clear();
  console.log(localStorage.getItem("theme"));
});

let themeValue = localStorage.getItem("theme");

if (themeValue === null) {
  $(`body`).addClass("pigskin");
  $(`h1`).addClass("h1pigskin");
  $(`h2`).addClass("h2pigskin");
  $(`button`).addClass("btnpigskin");
}
if (themeValue === "pigskin") {
  $(`body`).addClass("pigskin");
  $(`h1`).addClass("h1pigskin");
  $(`h2`).addClass("h2pigskin");
  $(`button`).addClass("btnpigskin");
}

if (themeValue === "nfl") {
  $(`body`).addClass("nfl");
  $(`h1`).addClass("h1nfl");
  $(`h2`).addClass("h2nfl");
  $(`button`).addClass("btnnfl");
}
if (themeValue === "turf") {
  $(`body`).addClass("turf");
  $(`h1`).addClass("h1turf");
  $(`h2`).addClass("h2turf");
  $(`button`).addClass("btnturf");
}

// buttons
$("#pigskin").click(function () {
  localStorage.setItem("theme", "pigskin");
  console.log("new theme: " + localStorage.getItem("theme"));
  $(`body`).removeClass("pigskin nfl turf");
  $(`h1`).removeClass("h1pigskin h1nfl h1turf");
  $(`h2`).removeClass("h2pigskin h2nfl h2turf");
  $(`button`).removeClass("btnpigskin btnnfl btnturf");
  $(`body`).addClass("pigskin");
  $(`h1`).addClass("h1pigskin");
  $(`h2`).addClass("h2pigskin");
  $(`button`).addClass("btnpigskin");
});

$("#nfl").click(function () {
  localStorage.setItem("theme", "nfl");
  console.log("new theme: " + localStorage.getItem("theme"));
  $(`body`).removeClass("pigskin nfl turf");
  $(`h1`).removeClass("h1pigskin h1nfl h1turf");
  $(`h2`).removeClass("h2pigskin h2nfl h2turf");
  $(`button`).removeClass("btnpigskin btnnfl btnturf");
  $(`body`).addClass("nfl");
  $(`h1`).addClass("h1nfl");
  $(`h2`).addClass("h2nfl");
  $(`button`).addClass("btnnfl");
});

$("#turf").click(function () {
  localStorage.setItem("theme", "turf");
  console.log("new theme: " + localStorage.getItem("theme"));
  $(`body`).removeClass("pigskin nfl turf");
  $(`h1`).removeClass("h1pigskin h1nfl h1turf");
  $(`h2`).removeClass("h2pigskin h1nfl h2turf");
  $(`button`).removeClass("btnpigskin btnnfl btnturf");
  $(`body`).addClass("turf");
  $(`h1`).addClass("h1turf");
  $(`h2`).addClass("h2turf");
  $(`button`).addClass("btnturf");
});
