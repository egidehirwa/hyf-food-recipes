const getRecipes = async() => {
    try {
        const res = await fetch('http://127.0.0.1:5002');

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