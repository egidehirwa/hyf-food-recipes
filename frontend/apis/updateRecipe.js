const updateRecipe = async (id, recipe) => {
    try {
        const res = await fetch((`http://127.0.0.1:5002/${id}`), {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(recipe),
        });

        if(!res.ok){
            throw new Error(`Failed to update recipe with status ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (err) {
        console.error(err);
    }
}

export default updateRecipe;