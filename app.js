const music = new Audio("audios/1.mp3");
// music.play();

const tracks = [
  {
    trackId: "audios/1.mp3",
    title: "Sukidakara",
    artist: "Yuika",
    poster: "imgs/1.png",
  },
  {
    trackId: "audios/2.mp3",
    title: "Love Is You",
    artist: "Naiko",
    poster: "imgs/2.png",
  },
  {
    trackId: "audios/3.mp3",
    title: "Coffee",
    artist: "Beabadoobee",
    poster: "imgs/3.png",
  },
  {
    trackId: "audios/4.mp3",
    title: "Memories",
    artist: "347aidan",
    poster: "imgs/4.png",
  },
  {
    trackId: "audios/5.mp3",
    title: "La Da Dee",
    artist: "Cody Simpson",
    poster: "imgs/5.png",
  },
  {
    trackId: "audios/6.mp3",
    title: "Lonely",
    artist: "Akon",
    poster: "imgs/6.png",
  },
  {
    trackId: "audios/7.mp3",
    title: "Death Bed",
    artist: "Powfu",
    poster: "imgs/7.png",
  },
  {
    trackId: "audios/8.mp3",
    title: "Toxic",
    artist: "BoyWithUke",
    poster: "imgs/8.png",
  },
  {
    trackId: "audios/9.mp3",
    title: "Dandelion",
    artist: "Ruth B",
    poster: "imgs/9.png",
  },
  {
    trackId: "audios/10.mp3",
    title: "Dancing with Your Ghost",
    artist: "Sasha Sloan",
    poster: "imgs/10.png",
  },
  {
    trackId: "audios/11.mp3",
    title: "ချစ်သော",
    artist: "FlokeRose",
    poster: "imgs/11.png",
  },
];

let scrollLeft = document.querySelector(".scroll-left");
let scrollRight = document.querySelector(".scroll-right");
const itemsContainer = document.querySelector(".songs-container");
let wave = document.getElementById("wave");
let poster = document.getElementById("poster");
let title = document.getElementById("title");
let backBtn = document.querySelector("#back");
let masterPlay = document.querySelector("#master__play");
let nextBtn = document.querySelector("#next");
let seek = document.querySelector("#seek");
let bar = document.querySelector("#bar");
let dot = document.querySelector(".dot");
let vol_icon = document.querySelector("#vol_icon");
let vol = document.querySelector("#vol");
let vol_bar = document.querySelector(".vol_bar");
let vol_dot = document.querySelector("#vol_dot");
const searchItemContainer = document.querySelector(".search-item-container");
const autoSearch = document.querySelector(".auto-search");
const avatar = document.querySelector("#avatar");
const subMenu = document.querySelector(".sub-menu");
const menuContainer = document.querySelector(".menu-container");
const hamburgerMenuContainer = document.querySelector(
  ".hamburger-menu-container"
);
const hamburgerLine1 = document.querySelector(".line1");
const hamburgerLine2 = document.querySelector(".line2");
const hamburgerLine3 = document.querySelector(".line3");
const menu = document.querySelector(".menu");
let downloadBtn = document.querySelector(".download-btn");

hamburgerMenuContainer.addEventListener("click", () => {
  hamburgerLine1.classList.toggle("translate1");
  hamburgerLine2.classList.toggle("hide");
  hamburgerLine3.classList.toggle("translate3");
  menu.classList.toggle("open-menu");
  document.querySelector(".user-name").classList.toggle("overlay");
});

avatar.addEventListener("click", () => {
  subMenu.classList.toggle("open-menu");
});

autoSearch.addEventListener("keyup", (event) => {
  searchItemContainer.innerHTML = "";
  const searchText = event.target.value.toLowerCase();
  if (searchText.length === 0) {
    return;
  }

  const filterTracks = tracks.filter((track) => {
    return track.title.toLowerCase().includes(searchText);
  });

  const showTracks = filterTracks.length > 0;
  if (showTracks) {
    for (let i = 0; i < filterTracks.length; i++) {
      let songItem = document.createElement("article");
      songItem.classList.add("song-item");
      songItem.innerHTML = `<img src=${filterTracks[i].poster} />
                        <h5>${filterTracks[i].title}<div class="name">${filterTracks[i].artist}</div></h5>
                         <i class="play bi bi-play-circle" id=${i}></i>
                      `;
      searchItemContainer.appendChild(songItem);
    }
  }
  Array.from(document.querySelectorAll(".play")).forEach((e, i) => {
    e.addEventListener("click", (element) => {
      playIcon();
      music.src = filterTracks[i].trackId;
      poster.src = filterTracks[i].poster;
      title.innerHTML = `<h5>${filterTracks[i].title}<div class="name">${filterTracks[i].artist}</div></h5>`;
      wave.classList.add("active");
      element.target.classList.remove("bi-play-circle");
      element.target.classList.add("bi-pause-circle");
      masterPlay.classList.remove("bi-play-circle");
      masterPlay.classList.add("bi-pause-circle");
      music.play();
    });
  });
});

function addSongItemstoUI(index) {
  let songItem = document.createElement("article");
  songItem.classList.add("song-item");
  songItem.innerHTML = `<img src=${tracks[index].poster} />
                        <h5>${tracks[index].title}<div class="name">${tracks[index].artist}</div></h5>
                         <i class="play bi bi-play-circle" id=${index}></i>
                      `;

  itemsContainer.appendChild(songItem);
}

for (let i = 0; i < tracks.length; i++) {
  addSongItemstoUI(i);
}

let loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});

scrollLeft.addEventListener("click", () => {
  itemsContainer.scrollLeft -= 400;
});

scrollRight.addEventListener("click", () => {
  itemsContainer.scrollLeft += 400;
});

function playIcon() {
  document.querySelectorAll(".play").forEach((e) => {
    e.classList.remove("bi-pause-circle");
    e.classList.add("bi-play-circle");
  });
}

document.querySelectorAll(".play").forEach((e, i) => {
  e.addEventListener("click", (element) => {
    playIcon();
    music.src = tracks[i].trackId;
    poster.src = tracks[i].poster;
    title.innerHTML = `${tracks[i].title}<div class="name">${tracks[i].artist}</div>`;
    wave.classList.add("active");
    element.target.classList.remove("bi-play-circle");
    element.target.classList.add("bi-pause-circle");
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
    music.play();

    downloadBtn.href = tracks[i].trackId;

    // backBtn.addEventListener("click", () => {
    //   if (i < 1) {
    //     i = tracks.length;
    //   }
    //   i--;
    //   music.src = tracks[i].trackId;
    //   poster.src = tracks[i].poster;
    //   title.innerHTML = `${tracks[i].title}<div class="name">${tracks[i].artist}</div>`;
    //   wave.classList.add("active");
    //   masterPlay.classList.remove("bi-play-circle");
    //   masterPlay.classList.add("bi-pause-circle");
    //   music.play();
    //   playIcon();
    //   document.getElementById(`${i}`).classList.remove("bi-play-circle");
    //   document.getElementById(`${i}`).classList.add("bi-pause-circle");
    // });

    // nextBtn.addEventListener("click", () => {
    //   if (i === tracks.length - 1) {
    //     i = -1;
    //   }
    //   i++;
    //   music.src = tracks[i].trackId;
    //   poster.src = tracks[i].poster;
    //   title.innerHTML = `${tracks[i].title}<div class="name">${tracks[i].artist}</div>`;
    //   wave.classList.add("active");
    //   masterPlay.classList.remove("bi-play-circle");
    //   masterPlay.classList.add("bi-pause-circle");
    //   music.play();
    //   playIcon();
    //   document.getElementById(`${i}`).classList.remove("bi-play-circle");
    //   document.getElementById(`${i}`).classList.add("bi-pause-circle");
    // });
  });
});

let index = 0;

music.addEventListener("ended", () => {
  index++;
  music.src = tracks[index].trackId;
  poster.src = tracks[index].poster;
  title.innerHTML = `${tracks[index].title}<div class="name">${tracks[index].artist}</div>`;
  wave.classList.add("active");
  masterPlay.classList.remove("bi-play-circle");
  masterPlay.classList.add("bi-pause-circle");
  music.play();
  playIcon();
  downloadBtn.href = tracks[index].trackId;
  document.getElementById(`${index}`).classList.remove("bi-play-circle");
  document.getElementById(`${index}`).classList.add("bi-pause-circle");
});

backBtn.addEventListener("click", () => {
  if (index < 1) {
    index = tracks.length;
  }
  index--;
  music.src = tracks[index].trackId;
  poster.src = tracks[index].poster;
  title.innerHTML = `${tracks[index].title}<div class="name">${tracks[index].artist}</div>`;
  wave.classList.add("active");
  masterPlay.classList.remove("bi-play-circle");
  masterPlay.classList.add("bi-pause-circle");
  music.play();
  playIcon();
  downloadBtn.href = tracks[index].trackId;
  document.getElementById(`${index}`).classList.remove("bi-play-circle");
  document.getElementById(`${index}`).classList.add("bi-pause-circle");
});

nextBtn.addEventListener("click", () => {
  if (index === tracks.length - 1) {
    index = -1;
  }
  index++;
  music.src = tracks[index].trackId;
  poster.src = tracks[index].poster;
  title.innerHTML = `${tracks[index].title}<div class="name">${tracks[index].artist}</div>`;
  wave.classList.add("active");
  masterPlay.classList.remove("bi-play-circle");
  masterPlay.classList.add("bi-pause-circle");
  music.play();
  playIcon();
  downloadBtn.href = tracks[index].trackId;
  document.getElementById(`${index}`).classList.remove("bi-play-circle");
  document.getElementById(`${index}`).classList.add("bi-pause-circle");
});

masterPlay.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    wave.classList.add("active");
    masterPlay.classList.remove("bi-play-circle");
    masterPlay.classList.add("bi-pause-circle");
  } else {
    music.pause();
    playIcon();
    wave.classList.remove("active");
    masterPlay.classList.remove("bi-pause-circle");
    masterPlay.classList.add("bi-play-circle");
  }
});

music.addEventListener("loadeddata", () => {
  const totalDuration = Math.floor(music.duration);
  const totalDurationText = minuteAndSecond(totalDuration);
  document.querySelector("#totle__time").textContent = totalDurationText;

  music.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(music.currentTime);
    const currentTimeText = minuteAndSecond(currentTime);
    document.querySelector("#current__time").textContent = currentTimeText;

    let progressBar = parseInt((currentTime / totalDuration) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

    seek.addEventListener("change", () => {
      music.currentTime = (seek.value * music.duration) / 100;
    });
  });
});

vol.addEventListener("change", () => {
  let songVol = vol.value;
  vol_bar.style.width = `${songVol}%`;
  vol_dot.style.left = `${songVol}%`;
  music.volume = songVol / 100;

  if (songVol == 0) {
    vol_icon.classList.remove("bi-volume-up");
    vol_icon.classList.remove("bi-volume-down");
    vol_icon.classList.add("bi-volume-mute");
  }

  if (songVol > 0) {
    vol_icon.classList.remove("bi-volume-up");
    vol_icon.classList.add("bi-volume-down");
    vol_icon.classList.remove("bi-volume-mute");
  }

  if (songVol > 60) {
    vol_icon.classList.add("bi-volume-up");
    vol_icon.classList.remove("bi-volume-down");
    vol_icon.classList.remove("bi-volume-mute");
  }
});

function minuteAndSecond(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const secText = seconds < 10 ? "0" + seconds.toString() : seconds;
  return minutes + "." + secText;
}
