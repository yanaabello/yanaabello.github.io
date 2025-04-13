<style>
  .playlist-btn {
    background-color: transparent;
    color: #E6E6FA;
    border: none;
    text-align: left;
    padding: 0.5rem 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease-in-out;
    gap: 1rem;
  }

  .playlist-btn:hover {
    background-color: #2A2A2A;
    color: white;
  }
</style>

<div>
  <h3>Your Playlists</h3>
</div>

<div class="d-flex flex-column mt-3">
  <button class="playlist-btn">
    <img src="img/p1.jpg" class="playlist-img" style="width: 50px; height: 50px; order-radius: 4px; object-fit: cover;">
    <span class="playlist-name">playlist ng mga pogi</span>
  </button>
  <button class="playlist-btn">
    <img src="img/p2.jpg" class="playlist-img" style="width: 50px; height: 50px; order-radius: 4px; object-fit: cover;">
    <span class="playlist-name">concert habang naliligo</span>
  </button>
  <button class="playlist-btn">
    <img src="img/p3.jpg" class="playlist-img" style="width: 50px; height: 50px; order-radius: 4px; object-fit: cover;">
    <span class="playlist-name">nostalgia</span>
  </button>
  <button class="playlist-btn">
    <img src="img/p4.jpg" class="playlist-img" style="width: 50px; height: 50px; order-radius: 4px; object-fit: cover;">
    <span class="playlist-name">tugtog ni papa tuwing umaga</span>
  </button>
  <button class="playlist-btn">
    <img src="img/p5.jpg" class="playlist-img" style="width: 50px; height: 50px; order-radius: 4px; object-fit: cover;">
    <span class="playlist-name">geng geng</span>
  </button>
</div>
