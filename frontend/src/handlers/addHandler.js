import dom from "../dom.js";
import postRecipe from "../../apis/postRecipe.js";
import createRecipe from "../components/createRecipe.js";
import updateRecipe from "../../apis/updateRecipe.js";

const addHandler = async () => {
    const title = dom.title.value;
    const ingredients = dom.ingredients.value;
    const instructions = dom.instructions.value;
    const image = dom.image.value;

    if(!title || !ingredients || !instructions || !image){
        dom.error.innerText = "Please fill in all the inputs";

        setTimeout(() => {
            dom.error.innerText = '';
        }, 2000)
        return;
    }

    if(dom.btn.innerText === 'Update recipe'){
        const selectedRecipe = document.querySelector('.selected');
        const id = selectedRecipe.id;
        selectedRecipe.querySelector('.title').innerText = title;
        selectedRecipe.querySelector('.ingredients').innerText = ingredients;
        selectedRecipe.querySelector('.instructions').innerText = instructions;
        selectedRecipe.querySelector('.image').src = image;

        await updateRecipe(id, {title, ingredients, instructions, image});

        // Change button text
        dom.btn.innerText = "Add recipe";
        selectedRecipe.classList.remove('selected');
    } else {
        // Add recipe to DOM
        const recipeDom = createRecipe({title, ingredients, instructions, image});
        dom.recipes.append(recipeDom);

        await postRecipe({title, ingredients, instructions, image});
    }

    dom.title.value = '';
    dom.ingredients.value = '';
    dom.instructions.value = '';
    dom.image.value = '';

}

export default addHandler;