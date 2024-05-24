import deleteHandler from "../handlers/deleteHandler.js";
import editHandler from "../handlers/editHandler.js";

const createRecipe = (recipe) => {

    // Container 
    const container = document.createElement('div');
    container.id = recipe._id;
    container.classList.add('recipe');

    // Content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    // Title
    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = recipe.title;

    // Ingredient
    const ingredients = document.createElement('p');
    ingredients.classList.add('ingredients');
    ingredients.innerText = recipe.ingredients;

    // Instructions
    const instructions = document.createElement('p');
    instructions.classList.add('instructions');
    instructions.innerText = recipe.instructions;

    // Buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = "Delete recipe";
    deleteBtn.addEventListener('click', () => {
        deleteHandler(recipe._id);
    })

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = "Edit recipe";
    editBtn.addEventListener('click', () => {
        editHandler(recipe);
    })

    buttonContainer.append(editBtn, deleteBtn);

    contentWrapper.append(title, ingredients, instructions, buttonContainer);

    // image wrapper
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    // Image
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = recipe.image;
    image.alt = recipe.title;

    imageWrapper.append(image);

    container.append(imageWrapper, contentWrapper);
    return container;

}

export default createRecipe;