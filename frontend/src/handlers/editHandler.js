import dom from "../dom.js";

const editHandler = async (recipe) => {
    const title = recipe.title;
    const ingredients = recipe.ingredients;
    const instructions = recipe.instructions;
    const image = recipe.image;
    const id = recipe._id;

    dom.title.value = title;
    dom.ingredients.value = ingredients;
    dom.instructions.value = instructions;
    dom.image.value = image;
    document.getElementById(id).classList.add('selected');

    dom.btn.innerText = "Update recipe";
}

export default editHandler;