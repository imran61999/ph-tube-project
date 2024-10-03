// create load categorys
const loadaCategores = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategores(data.categories))
        .catch(err => console.log(err))
}

// creat load videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log(err))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    // console.log(videos);
    videos.forEach((video) => {
        let nav = document.createElement("div");
        nav.classList = "card card-compact";
        nav.innerHTML = `
        <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `
        videoContainer.append(nav);
    });

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
loadVideos();