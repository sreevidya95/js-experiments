let lunch = [
    {item: "Chicken Fajitas", price: 19.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
  ];
let tax=8/100;//8%
let tip=18/100;//18%
let total=0;
for(let i=0;i<lunch.length;i++){
   total+=Number(lunch[i].price);
}
total+=tax+tip;
console.log(total);