//Fetch Api
const inputSearchName =  document.getElementById('input-search');
 const getMealName =()=>{
   if((inputSearchName.value).length<1 ||(inputSearchName.value)===null ){
    alert('Please write your desired meal.')
   }else
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
          <button class="btn btn-success" onclick="displayFoodDetail('${foodName.str}')">Details</button>
          </div>
    </div>
    </div>
</div>`

    foodDiv.innerHTML=foodInfo
    mealDiv.appendChild(foodDiv);
    document.getElementById('input-search').value='';
      })
    } 

    const displayFoodDetail= mealId=>{
  
      const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => mealInfo(data))
        .then(err=>console.log(err));
    }
    
  const mealInfo = meal => {
  const ingredientsInfo = meal.meals[0];
  console.log(ingredientsInfo.strIngredient)
  const ingredientsDiv = document.getElementById('foodDetail');
  ingredientsDiv.innerHTML = `
      <h1>${meal.name}</h1>
      <p>Population: ${meal.strIngredient1}</p>
      <p>Area: ${country.area}</p>
      <img src="${country.flag}">
  `
 }
/*  document.getElementById('food-container').addEventListener('click',()=>{
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i={}';
    fetch('url')
    .then(res => res.json())
    .then(data => console.log(data.meals[0]));
  

  const createMeal = meal => {
    const ingredients = [];
  
    // Get all ingredients from the object. Up to 20
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        // Stop if there are no more ingredients
        break;
      }
    }
  
    const newInnerHTML = `
      <div class="row">
        <div class="columns five">
          <img src="${meal.strMealThumb}" alt="Meal Image">
          ${
            meal.strCategory
              ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
              : ''
          }
          ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
          ${
            meal.strTags
              ? `<p><strong>Tags:</strong> ${meal.strTags
                  .split(',')
                  .join(', ')}</p>`
              : ''
          }
          <h5>Ingredients:</h5>
          <ul>
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
      
      </div>
    
    `;
  const mealIngredientDiv = document.getElementById('foodDetail');
  mealIngredientDiv.innerHTML = newInnerHTML;
  
  };
})  */



};
