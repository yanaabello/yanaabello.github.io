<?php
$page = "home";

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  switch ($page) {
    case "home":
      $page = "home";
      break;
    case "playlist":
      $page = "playlist";
      break;
    case "profile":
      $page = "profile";
      break;
    default:
      header("Location: ?page=home");
      exit;
  }
} else {
  header("Location: ?page=home");
}
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Echo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap" rel="stylesheet">
  <link href="img/ico.ico" rel="icon" type="image/x-icon">
  <style>
    body {
      background-color: #121212;
      color: white;
      font-family: 'Poppins', sans-serif;
    }

    .navbar {
      background-color: #1C1C1C;
    }

    .navbar-brand {
      color: white !important;
    }

    .card {
      background-color: #1C1C1C;
      color: white;
    }

    .profilepic {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      float: left;
    }

    .sidebar-btn {
      background-color: transparent;
      color: #E6E6FA;
      border: none;
      text-align: left;
      padding: 12px 16px;
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 8px;
      transition: background-color 0.2s ease-in-out;
    }

    .sidebar-btn:hover {
      background-color: #2A2A2A;
      color: white;
    }

    a {
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .sidebar-text {
        display: none;
      }

      .sidebar-btn {
        justify-content: center;
        padding: 12px 8px;
      }

      .sidebar-btn i {
        font-size: 24px;
      }
    }

    @media (max-width: 768px) {
      #followList .d-flex {
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }

      #followList .profilepic {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
      }
    }
  </style>
</head>

<body>

  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="img/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        <span style="font-family: 'Special Gothic Expanded One', sans-serif;">Echo</span>
      </a>
    </div>
  </nav>

  <div class="container-fluid mt-3">
    <div class="row">

      <div class="col-2 col-sm-2 col-md-2 col-lg-3">
        <div class="card shadow rounded-5 p-3" style="height: 85vh">
          <h4 class="my-1 sidebar-text">Menu</h4>
          <a href="?page=home" class="sidebar-btn mt-2">
            <i class="bi bi-house-door-fill me-2"></i>
            <span class="sidebar-text">Home</span>
          </a>
          <a href="?page=playlist" class="sidebar-btn">
            <i class="bi bi-music-note-list me-2"></i>
            <span class="sidebar-text">Playlists</span>
          </a>
          <a href="?page=profile" class="sidebar-btn">
            <i class="bi bi-person-circle me-2"></i>
            <span class="sidebar-text">Profile</span>
          </a>
        </div>
      </div>

      <div class="col-8 col-sm-8 col-md-8 col-lg-6">
        <div class="card shadow rounded-5 p-4" style="height: 85vh; max-height: 85vh; overflow-x: hidden;">
          <?php
          include("shared/" . $page . ".php");
          ?>
        </div>
      </div>

      <div class="col-2 col-sm-2 col-md-2 col-lg-3">
        <div class="card shadow rounded-5 p-3" style="height: 85vh; max-height: 85vh; overflow-x: hidden;">
          <h5 class="sidebar-text">Artists to Follow</h5>

          <button class="sidebar-btn d-lg-none" data-bs-toggle="collapse" data-bs-target="#followList"
            aria-expanded="false" aria-controls="followList">
            <i class="bi bi-person-lines-fill"></i>
          </button>

          <div class="collapse d-lg-block" id="followList">
            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/PND.jpg" alt="DJ Cool" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">PARTYNEXTDOOR</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/kendrick.jpg" alt="Ella Grace" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Kendrick Lamar</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/frank.jpg" alt="John Doe" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Frank Ocean</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/joji.jpg" alt="John Doe" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Joji</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/roc.jpg" alt="John Doe" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Rex Orange County</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/chris.jpg" alt="John Doe" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Chris Brown</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/daniel.jpg" alt="John Doe" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Daniel Caesar</div>
            </div>

            <div class="p-3 m-1 d-flex align-items-center">
              <img src="img/drake.jpg" alt="John Doe" class="profilepic me-2">
              <div class="sidebar-text d-none d-lg-block">Drake</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>