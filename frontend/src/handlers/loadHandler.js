import getRecipes from "../../apis/getRecipes.js";
import dom from "../dom.js";
import createRecipe from "../components/createRecipe.js";

const loadHandler = async() => {
    // Send a request to the server
    const recipies = await getRecipes();
    
    recipies.forEach((recipe) => {
        const recipeDom = createRecipe(recipe);

        dom.recipes.append(recipeDom);
    })

    // Loop through the data
    // Create dom element
}

export default loadHandler;