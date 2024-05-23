const getRecipes = async() => {
    try {
        const res = await fetch('http://localhost:5002');

        if(!res.ok){
            throw new Error(`Could not fetch because of status: ${res.status}`);
        }

        const recipies = await res.json();
        return recipies;
    } catch (err) {
        console.error(err)
    }
}

export default getRecipes;