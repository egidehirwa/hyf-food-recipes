const postRecipe = async(recipe) => {
    try {
        const res = await fetch('http://127.0.0.1:5002', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(recipe),
        })

        if(!res.ok){
            throw new Error(`Failed to post recipe with status ${res.status}`);
        }
    } catch (err) {
        console.error(err);
    }
}

export default postRecipe;