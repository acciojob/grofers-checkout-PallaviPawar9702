const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let sum = 0;
  prices.forEach((price) =>{
    sum += Number(price.innerHTML)
  })

  let row = document.createElement("tr")
  let cell = document.createElement("td")
  cell.innerHTML = sum
  row.appendChild(cell)
  document.querySelector("table").appendChild(row)
//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

