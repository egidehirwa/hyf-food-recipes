import dom from "../dom.js";
import postRecipe from "../../apis/postRecipe.js";
import createRecipe from "../components/createRecipe.js";

const addHandler = async () => {
debugger;
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

    // Add recipe to DOM
    const recipeDom = createRecipe({title, ingredients, instructions, image});
    

    const res = await postRecipe({title, ingredients, instructions, image});

}

export default addHandler;