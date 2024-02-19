const colors = ["#FF5733","#3366FF","#9932CC","#FFFF66","#66FFCC","OrangeRed","Dark Orchid","Teal","Maroon",
];


const btn = document.querySelector("button");
const colorName = document.getElementById("color-name");

btn.addEventListener("click", function () {
  const getRandomNumber = [Math.floor(colors.length * Math.random())]
  const getRandomColor = colors[getRandomNumber]
  document.body.style.backgroundColor = getRandomColor
  colorName.innerText = getRandomColor

});
