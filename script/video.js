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

// const carddemo = {
//     {category_id: '1003', video_id: 'aaaf', thumbnail: 'https://i.ibb.co/5LRQkKF/stick-and-stones.jpg', title: 'Sticks & Stones',{profile_picture: 'https://i.ibb.co/rdTZrCM/dev.jpg', profile_name: 'Dave Chappelle', verified: true}
// }

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    // console.log(videos);
    videos.forEach((video) => {
        console.log(video);
        let nav = document.createElement("div");
        nav.classList = "card card-compact";
        nav.innerHTML = `
        <figure class="h-[200px relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      <span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${video.others.posted_date}</span>
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture} />
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-3">
    <p>${video.authors[0].profile_name}</p>
    ${video.authors[0].verified == true? '<img class="w-5" src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"/>' : ""}
    </div>
    <p></p>
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