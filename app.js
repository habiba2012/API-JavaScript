//Fetch Api
 const getMealName =()=>{
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(res => res.json())
  .then(data =>displayMealName (data.meals))
  .catch(err => console.log(err));

const displayMealName = foods => {
  const mealDiv = document.getElementById("meals");
  foods.forEach(foodName=>{

       const foodDiv = document.createElement("div");
       foodDiv.className = 'foodName';
       const foodInfo=`
       <div id="food-container">
             
          <img src="${foodName.strMealThumb}" class="card-img-top" alt="food image">
       
            <h5 class="card-title">${foodName.strMeal}</h5>
          </div>
    </div>
 
</div>
</div>
    
       `
          foodDiv.innerHTML=foodInfo
       console.log(foodInfo)
       mealDiv.appendChild(foodDiv);
       document.getElementById('input-search').value='';
     

  })
 
};
const displayFoodDetail = ()=> {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(data => console.log(data.meals[0]));
}
displayFoodDetail()

/* const mealInfo = meal => {
  const ingredientsDiv = document.getElementById('foodDetail');
  ingredientsDiv.innerHTML = `
      <h1>${meal.name}</h1>
      <p>Population: ${country.population}</p>
      <p>Area: ${country.area}</p>
      <img src="${country.flag}">
  `
} */
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

	meal_container.innerHTML = newInnerHTML;
};

 } 
