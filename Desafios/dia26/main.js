[...document.getElementsByTagName("button")].forEach(function (item) {
  item.addEventListener("click", function () {
    obj[this.id]();
  });
});

var obj = {
  1: function () {
    document.documentElement.style.setProperty("--player", "#ea1616");
    document.documentElement.style.setProperty("--player-shadow", "#840931");
  },
  
  2: function () {
    document.documentElement.style.setProperty("--player", "#132fd2");
    document.documentElement.style.setProperty("--player-shadow", "#09158e");
  },
  
  3: function () {
    document.documentElement.style.setProperty("--player", "#107f2c");
    document.documentElement.style.setProperty("--player-shadow", "#0a4d2d");
  },
  
  4: function () {
    document.documentElement.style.setProperty("--player", "#ed53b9");
    document.documentElement.style.setProperty("--player-shadow", "#ac2cad");
  },
  
  5: function () {
    document.documentElement.style.setProperty("--player", "#ef7d0e");
    document.documentElement.style.setProperty("--player-shadow", "#b53f15");
  },
  
  6: function () {
    document.documentElement.style.setProperty("--player", "#f5f558");
    document.documentElement.style.setProperty("--player-shadow", "#c28722");
  },
  
  7: function () {
    document.documentElement.style.setProperty("--player", "#3f484e");
    document.documentElement.style.setProperty("--player-shadow", "#1e1f25");
  },
  
  8: function () {
    document.documentElement.style.setProperty("--player", "#d5e0ef");
    document.documentElement.style.setProperty("--player-shadow", "#8295bc");
  },
  
  9: function () {
    document.documentElement.style.setProperty("--player", "#6b30bc");
    document.documentElement.style.setProperty("--player-shadow", "#3c177c");
  },
  
  10: function () {
    document.documentElement.style.setProperty("--player", "#72491e");
    document.documentElement.style.setProperty("--player-shadow", "#5e2613");
  },
  
  11: function () {
    document.documentElement.style.setProperty("--player", "#39fedb");
    document.documentElement.style.setProperty("--player-shadow", "#24a9be");
  },
  
  12: function () {
    document.documentElement.style.setProperty("--player", "#50ef3a");
    document.documentElement.style.setProperty("--player-shadow", "#16a941");
  }

};

