const loadaCategores = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategores(data.categories))
        .catch(err => console.log(err))
}

const displayCategores = (data) => {

    const categoryContainer = document.getElementById("categorys");
    for (item of data) {

        // creat button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category

        // add button to category cotainer
        categoryContainer.append(button);


    }
}

loadaCategores();