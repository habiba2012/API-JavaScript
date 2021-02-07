//Fetch Api
 const getMealName =()=>{
fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then(res => res.json())
  .then(data =>displayMealName (data.meals))
  .catch(err => console.log(err));

const displayMealName = foods => {
  const mealDiv = document.getElementById("meals");
  foods.forEach(foodName=>{

       const foodDiv = document.createElement("div");
       foodDiv.className = 'foodName';
       const foodInfo=`
       <h3 class="food-name">${foodName.strMeal}</h3>`
       foodDiv.innerHTML=foodInfo
       console.log(foodInfo)
       mealDiv.appendChild(foodDiv);

  })
 
};

 } 