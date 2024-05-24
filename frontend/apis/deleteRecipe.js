const deleteRecipe = async (id) => {
    try {
        const res = await fetch((`http://127.0.0.1:5002/${id}`), {
            method: 'DELETE',
        })

        if(!res.ok){
            throw new Error(`Failed to delete with status ${res.status}`)
        }
    } catch (err) {
        console.error(err);
    }
}

export default deleteRecipe;