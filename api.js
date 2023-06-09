const loadData=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
loadData();

const displaySingleUser = user =>{
    // console.log(user);
}


// meal db

const toggoleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
    document.getElementById('search-field').value = '';
}

const loadMeals = searchText =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    
    const container = document.getElementById('meals');
    container.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
       const div = document.createElement('div');
       div.innerHTML = `
       <h1>${meal.strMeal}</h1>
       <button onclick="loadMealDetail('${meal.strMeal}')">Click me</button>
       `;
       container.appendChild(div)
    });
}
loadMeals('fish');

const loadMealDetail = mealName =>{
    console.log(mealName);
}