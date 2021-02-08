
const inputSearchName =  document.getElementById('input-search');
 const getMealName =()=>{
   //check input value
   if((inputSearchName.value).length<1 ||(inputSearchName.value)===null ){
    alert('Please write your desired meal.')
   }else
   //Fetch Api
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearchName.value}`)
  .then(res => res.json())
  .then(data =>displayMealName(data.meals))
  .catch(err => alert('Please write proper meal name.'));

  const displayMealName = foods => {
  const mealDiv = document.getElementById("meals");
  foods.forEach(foodName=>{

       const foodDiv = document.createElement("div");
       foodDiv.className = 'foodName';
       const foodInfo=`
          <div id="food-container">
          <img src="${foodName.strMealThumb}" class="card-img-top" alt="food image">
          <h5 class="card-title">${foodName.strMeal}</h5>
          <button class="btn btn-success" onclick="displayFoodDetail('${foodName.strMeal}') ">Details</button>
          </div>
    </div>
    </div>
</div>`
    foodDiv.innerHTML=foodInfo
    mealDiv.appendChild(foodDiv);
    document.getElementById('input-search').value='';
   })
  } 
};

//Show meal details with button click
const displayFoodDetail= (nameMeal)=>{
 
  const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`;
  console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => mealInfo(data.meals[0]))
    .then(err=>console.log(err));

}

const mealInfo = meals => {
  const ingredientsDiv = document.getElementById('foodDetail');
  ingredientsDiv.innerHTML = `
  <img src="${meals.strMealThumb}" class="card-img-top" alt="food image">
  <h5 class="card-title">${meals.strMeal}</h5>
  <h5>Meal Ingredients List:</h5>
  <ul id="ingredients-list"></ul>
`
  const mealIndigents=[meals.strIngredient1, meals.strIngredient2, meals.strIngredient3, meals.strIngredient4, meals.strIngredient5, meals.strIngredient6,
  meals.strIngredient7, meals.strIngredient8, meals.strIngredient9, meals.strIngredient10];

  for(let i=0; i<mealIndigents.length; i++){
    const item = mealIndigents[i];
    if(item===""||item===null){
      return item;
    }else{
      console.log(item)
     
    const ul = document.getElementById('ingredients-list');
    const li = document.createElement('li');
    li.innerHTML= item;
    ul.appendChild(li);

    }
  }
}