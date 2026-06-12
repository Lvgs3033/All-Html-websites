<?php
session_start();
$isLoggedIn = isset($_SESSION["user"]);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dhvtisu - Building Digital Product</title>

  <!-- 
    - favicon
  -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="./assets/css/style1.css">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

</head>

<body id="top">

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">Dhvtisu</a>

      
<nav class="navbar" data-navbar>

  <div class="wrapper">
    <a href="index.php" class="logo">Dhvtisu</a>

    <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
      <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
    </button>
  </div>

  <ul class="navbar-list">

    <li class="navbar-item">
      <a href="index.php" class="navbar-link" data-nav-link>Home</a>
    </li>

    <li class="navbar-item">
      <a href="#service" class="navbar-link" data-nav-link>Services</a>
    </li>

    <li class="navbar-item">
      <a href="#feature" class="navbar-link" data-nav-link>Features</a>
    </li>

    <li class="navbar-item">
      <a href="#project" class="navbar-link" data-nav-link>Portfolio</a>
    </li>

    <li class="navbar-item">
      <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
    </li>

    <li class="navbar-item">
      <a href="#contcat" class="navbar-link" data-nav-link>Contact</a>
    </li>

    <li class="navbar-item">
      <a href="#register" class="navbar-link" data-nav-link>Register</a>
    </li>

  </ul>

</nav>


      <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

      <a href="#" class="btn btn-primary has-before has-after">Let's Talk 👋</a>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero" id="home" aria-label="hero">
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 hero-title">
              Building Digital <span class="has-before">Product</span>, Brand and Experience
            </h1>

            <p class="hero-text">
              At Dhvtisu we specialize in designing, building, shipping and scaling beautiful, usable products with
              blazing-fast
              efficiency
            </p>

            <div class="wrapper">
              <a href="#" class="btn btn-primary has-before has-after">How It Works</a>

              <button class="hero-btn" aria-label="Dhvtisu promo">
                <ion-icon name="play-outline" aria-hidden="true"></ion-icon>

                <span class="span">Behind the scenes</span>
              </button>
            </div>

            <ul class="social-list">

              <li>
                <a href="#" class="social-link" style="--color: hsl(241, 77%, 63%);">
                  <ion-icon name="logo-facebook"></ion-icon>

                  <span class="span">Facebook</span>
                </a>
              </li>

              <li>
                <a href="#" class="social-link" style="--color: hsl(0, 100%, 50%);">
                  <ion-icon name="logo-youtube"></ion-icon>

                  <span class="span">Youtube</span>
                </a>
              </li>

              <li>
                <a href="#" class="social-link" style="--color: hsl(203, 89%, 53%);">
                  <ion-icon name="logo-twitter"></ion-icon>

                  <span class="span">Twitter</span>
                </a>
              </li>

            </ul>

          </div>

          <figure class="hero-banner">
            <img src="./assets/images/hero-banner.png" width="794" height="637" alt="hero banner" class="w-100">
          </figure>

        </div>
      </section>





    
      <!-- 
        - #SERVICE
      -->

      <section class="section service" id="service" aria-label="service">
        <div class="container">

          <p class="section-subtitle has-before text-center">Our Services</p>

          <h2 class="h2 section-title text-center">Managing you business with our <span class="has-before">best
              service</span></h2>

          <ul class="grid-list">

            <?php
            // Example of how you could dynamically generate service items
            $services = [
                ['url' => 'app.php', 'icon' => './assets/images/service-icon-1.png', 'title' => 'App Development', 'color' => '174, 77%, 50%'],
                ['url' => 'web.php', 'icon' => './assets/images/service-icon-2.png', 'title' => 'Web Development', 'color' => '267, 76%, 57%'],
                ['url' => 'content.php', 'icon' => './assets/images/service-icon-3.png', 'title' => 'Content Writing', 'color' => '17, 100%, 68%'],
                ['url' => 'seo.php', 'icon' => './assets/images/service-icon-4.png', 'title' => 'SEO', 'color' => '343, 98%, 60%'],
                ['url' => 'design.php', 'icon' => './assets/images/service-icon-5.png', 'title' => 'Design and Virtual Machine', 'color' => '210, 100%, 53%'],
                ['url' => 'cyber.php', 'icon' => './assets/images/service-icon-6.png', 'title' => 'Cyber Securiy Developer', 'color' => '157, 89%, 44%'],
                ['url' => 'ai.php', 'icon' => './assets/images/service-icon-7.png', 'title' => 'Ai Professional', 'color' => '52, 98%, 50%'],
                ['url' => 'video.php', 'icon' => './assets/images/service-icon-7.png', 'title' => 'VideoGrapher', 'color' => '52, 98%, 50%']
            ];

            // Uncomment to use dynamic generation
            /*
            foreach ($services as $service) {
                echo '<li>
                    <div class="service-card" style="--color: ' . $service['color'] . '">
                        <div class="card-icon">
                            <img src="' . $service['icon'] . '" width="30" height="30" loading="lazy" alt="service icon">
                        </div>
                        <h3 class="h3">
                            <a href="' . $service['url'] . '" class="card-title">' . $service['title'] . '</a>
                        </h3>
                    </div>
                </li>';
            }
            */
            ?>

            <!-- Static service items (can be replaced with the dynamic PHP code above) -->
            <li>
              <div class="service-card" style="--color: 174, 77%, 50%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-1.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="app.php" class="card-title">App Development</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 267, 76%, 57%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-2.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="web.php" class="card-title">Web Development</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 17, 100%, 68%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-3.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="content.php" class="card-title">Content Writing</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 343, 98%, 60%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-4.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="seo.php" class="card-title">SEO</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 210, 100%, 53%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-5.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="design.php" class="card-title">Design and Virtual Machine</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 157, 89%, 44%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-6.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="cyber.php" class="card-title">Cyber Securiy Developer</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 52, 98%, 50%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-7.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="ai.php" class="card-title">Ai Professional</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style="--color: 52, 98%, 50%">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-7.png" width="30" height="30" loading="lazy"
                    alt="service icon">
                </div>

                <h3 class="h3">
                  <a href="video.php" class="card-title">VideoGrapher</a>
                </h3>

              </div>
            </li>

          </ul>

        </div>
    </section>



      <!-- 
        - #FEATURE
      -->

      <section class="section feature" id="feature" aria-label="feature">
        <div class="container">

          <figure class="feature-banner">
            <img src="./assets/images/feature-banner.png" width="582" height="585" loading="lazy" alt="feature banner"
              class="w-100">
          </figure>

          <div class="feature-content">

            <p class="section-subtitle has-before">Why Choose us</p>

            <h2 class="h2 section-title">
              Specialist in aviding clients of financial <span class="has-before">challenges</span>
            </h2>

            <ul class="feature-list">

              <li>
                <div class="feature-card">

                  <div class="card-icon" style="--color: 174, 77%, 50%">
                    <ion-icon name="rocket-sharp" aria-hidden="true"></ion-icon>
                  </div>

                  <div>
                    <h3 class="h3 card-title">Fast working process</h3>

                    <p class="card-text">
                      At Dhvtisu we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon" style="--color: 241, 77%, 63%;">
                    <ion-icon name="people-sharp" aria-hidden="true"></ion-icon>
                  </div>

                  <div>
                    <h3 class="h3 card-title">Didicated team</h3>

                    <p class="card-text">
                      At Dhvtisu we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon" style="--color: 343, 98%, 60%;">
                    <ion-icon name="headset-sharp" aria-hidden="true"></ion-icon>
                  </div>

                  <div>
                    <h3 class="h3 card-title">24/7 hours support</h3>

                    <p class="card-text">
                      At Dhvtisu we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>





      <!-- 
        - #PROJECT
      -->

      <section class="section project" id="project" aria-label="project">
        <div class="container">

          <p class="section-subtitle has-before text-center">Projects</p>

          <h2 class="h2 section-title text-center">
            Dhvtisu complete <span class="has-before">project</span>
          </h2>
<!-- 
          <ul class="filter-list">

            <li>
              <button class="filter-btn active" data-filter-btn>Website</button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>Landing Page</button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>iOS App</button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>Landing Page</button>
            </li>

            <li>
              <button class="filter-btn" data-filter-btn>Branding Design</button>
            </li>

          </ul> -->

          <ul class="grid-list">

            <?php
            // Example of how you could dynamically generate project items
            $projects = [
                ['img' => './assets/images/project-1.jpg', 'title' => 'Web development', 'tag' => 'Branding', 'width' => '835', 'height' => '429', 'link' => 'https://eklavy.vercel.app/'],
                ['img' => './assets/images/project-2.jpg', 'title' => 'Graphic Design', 'tag' => 'Design', 'width' => '416', 'height' => '429','link' => 'https://cosmicclender.vercel.app/'],
                ['img' => './assets/images/project-3.jpg', 'title' => '3d Digital Art', 'tag' => 'Design', 'width' => '416', 'height' => '429','link' => 'https://d-project-iddu.vercel.app/'],
                ['img' => './assets/images/project-4.jpg', 'title' => 'Web Design', 'tag' => 'Design', 'width' => '416', 'height' => '429','link' => 'https://eklavy.vercel.app/'],
                ['img' => './assets/images/project-5.jpg', 'title' => 'Mobile App Design', 'tag' => 'Design', 'width' => '416', 'height' => '429']
            ];

            // Uncomment to use dynamic generation
            /*
            foreach ($projects as $project) {
                echo '<li>
                    <div class="project-card">
                        <figure class="card-banner img-holder" style="--width: ' . $project['width'] . '; --height: ' . $project['height'] . ';">
                            <img src="' . $project['img'] . '" width="' . $project['width'] . '" height="' . $project['height'] . '" loading="lazy" alt="' . $project['title'] . '" class="img-cover">
                        </figure>
                        <div class="card-content">
                            <h3 class="h3">
                                <a href="#" class="card-title">' . $project['title'] . '</a>
                            </h3>
                            <a href="#" class="card-tag">' . $project['tag'] . '</a>
                        </div>
                    </div>
                </li>';
            }
            */
            ?>

            <!-- Static project items (can be replaced with the dynamic PHP code above) -->
            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 835; --height: 429;">
                  <img src="./assets/images/project-1.jpg" width="835" height="429" loading="lazy" alt="Book art design"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h3">
                    <a href="https://eklavy.vercel.app/" class="card-title">Web technologies</a>
                  </h3>

                  <a href="https://cosmicclender.vercel.app/" class="card-tag">App development</a>
                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 416; --height: 429;">
                  <img src="./assets/images/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h3">
                    <a href="https://d-project-iddu.vercel.app/" class="card-title">Graphic Design</a>
                  </h3>

                  <a href="https://d-project-iddu.vercel.app/" class="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 416; --height: 429;">
                  <img src="./assets/images/project-3.jpg" width="416" height="429" loading="lazy" alt="3d Digital Art"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h3">
                    <a href="https://d-project-iddu.vercel.app/" class="card-title">3d Digital Art</a>
                  </h3>

                  <a href="https://d-project-iddu.vercel.app/" class="card-tag">Design</a>
                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 416; --height: 429;">
                  <img src="./assets/images/project-4.jpg" width="416" height="429" loading="lazy" alt="Web Design"
                    class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h3">
                    <a href="https://d-project-iddu.vercel.app/" class="card-title">Writing</a>
                  </h3>

                  <a href="https://d-project-iddu.vercel.app/" class="card-tag">Graphics Design</a>
                </div>

              </div>
            </li>

            <li>
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 416; --height: 429;">
                  <img src="./assets/images/project-5.jpg" width="416" height="429" loading="lazy"
                    alt="Mobile App Design" class="img-cover">
                </figure>

                <div class="card-content">
                  <h3 class="h3">
                    <a href="https://d-project-iddu.vercel.app/" class="card-title">Flutter App development/a>
                  </h3>

                  <a href="https://d-project-iddu.vercel.app/" class="card-tag">React native</a>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #NEWSLETTER
      -->

      <section class="section newsletter has-bg-image" aria-label="newsletter"
        style="background-image: url('./assets/images/newsletter-bg.jpg')">
        <div class="container">

          <figure class="newsletter-banner">
            <img src="./assets/images/newsletter-banner.png" width="355" height="356" loading="lazy"
              alt="newsletter banner" class="w-100">
          </figure>

          <div class="newsletter-content">

            <p class="section-subtitle has-before">Get every update</p>

            <h2 class="h2 section-title">Subscribe newslater get latest updates and deals</h2>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" class="newsletter-form">
              <input type="email" name="email_address" placeholder="Enter your mail" required class="email-field">

              <button type="submit" class="btn btn-secondary has-before has-after">
                <span class="span">Subscribe</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </button>
            </form>

            <?php
            // Process newsletter form submission
            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email_address"])) {
                $email = filter_var($_POST["email_address"], FILTER_SANITIZE_EMAIL);
                
                if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    // Here you would typically save the email to a database
                    // For now, we'll just show a success message
                    echo '<p class="success-message">Thank you for subscribing!</p>';
                    
                    // In a real application, you might do something like:
                    // $stmt = $pdo->prepare("INSERT INTO subscribers (email, date_subscribed) VALUES (?, NOW())");
                    // $stmt->execute([$email]);
                } else {
                    echo '<p class="error-message">Invalid email format</p>';
                }
            }
            ?>

          </div>

        </div>
      </section>





      <!-- 
        - #BLOG
      -->

      <section class="section blog" id="blog" aria-label="blog">
        <div class="container">

          <p class="section-subtitle text-center has-before">Blog Post</p>

          <h2 class="h2 section-title text-center">
            Popular <span class="has-before">blog post</span>
          </h2>

          <ul class="blog-list">

            <?php
            // Example of how you could dynamically generate blog posts
            $blogPosts = [
                [
                    'img' => './assets/images/blog-1.jpg', 
                    'title' => 'Godaddy user flow solution...', 
                    'date' => 'July 22, 2022',
                    'tag' => 'Development',
                    'excerpt' => 'At Dhvtisu we specialize in designing, building, shipping and scaling beautifu. At Dhvtisu we specialize in designing, building, shipping and scaling beautiful.',
                    'width' => '644',
                    'height' => '363',
                    'large' => true,
                    'link' => 'https://in.indeed.com/career-advice/finding-a-job/how-to-become-freelance-blogger'
                ],
                [
                    'img' => './assets/images/blog-2.jpg', 
                    'title' => 'Godaddy user flow solution for every individual', 
                    'date' => 'July 21, 2020',
                    'tag' => 'Development',
                    'width' => '202',
                    'height' => '162',
                    'large' => false,
                    'link' => 'https://in.indeed.com/career-advice/finding-a-job/how-to-become-freelance-blogger'
                ],
                [
                    'img' => './assets/images/blog-3.png', 
                    'title' => 'Business solution for every individual', 
                    'date' => 'July 21, 2020',
                    'tag' => 'Development',
                    'width' => '202',
                    'height' => '162',
                    'large' => false,
                    'linlk' => 'https://in.indeed.com/career-advice/finding-a-job/how-to-become-freelance-blogger'
                ],
                [
                    'img' => './assets/images/blog-4.png', 
                    'title' => 'How to gain pro experience ar figma update version', 
                    'date' => 'July 21, 2020',
                    'tag' => 'Development',
                    'width' => '202',
                    'height' => '162',
                    'large' => false,
                    'linlk' => 'https://in.indeed.com/career-advice/finding-a-job/how-to-become-freelance-blogger'
                ]
            ];

            // Uncomment to use dynamic generation
            /*
            foreach ($blogPosts as $post) {
                echo '<li>
                    <div class="blog-card ' . ($post['large'] ? 'large' : '') . '">
                        <figure class="card-banner">
                            <img src="' . $post['img'] . '" width="' . $post['width'] . '" height="' . $post['height'] . '" loading="lazy" alt="' . $post['title'] . '" class="img-cover">
                        </figure>
                        <div class="card-content">
                            <div class="wrapper">
                                <a href="#" class="tag">' . $post['tag'] . '</a>
                                <a href="#" class="publish-date">
                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                    <span class="span">' . $post['date'] . '</span>
                                </a>
                            </div>
                            <h3' . (!$post['large'] ? ' class="h3"' : '') . '>
                                <a href="#" class="card-title">' . $post['title'] . '</a>
                            </h3>';
                
                if ($post['large'] && isset($post['excerpt'])) {
                    echo '<p class="card-text">' . $post['excerpt'] . '</p>';
                }
                
                echo '</div>
                    </div>
                </li>';
            }
            */
            ?>

            <!-- Static blog items (can be replaced with the dynamic PHP code above) -->
            <li>
              <div class="blog-card large">

                <figure class="card-banner">
                  <img src="./assets/images/blog-1.jpg" width="644" height="363" loading="lazy"
                    alt="Godaddy user flow solution..." class="img-cover">
                </figure>

                <div class="card-content">

                  <div class="wrapper">
                    <a href="#" class="tag">Development</a>

                    <a href="#" class="publish-date">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span class="span">July 22, 2022</span>
                    </a>
                  </div>

                  <h3>
                    <a href="#" class="card-title">Godaddy user flow solution...</a>
                  </h3>

                  <p class="card-text">
                    At Dhvtisu we specialize in designing, building, shipping and scaling beautifu. At Dhvtisu we
                    specialize in designing,
                    building, shipping and scaling beautiful.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">
                  <img src="./assets/images/blog-2.jpg" width="202" height="162" loading="lazy"
                    alt="Godaddy user flow solution for every individual" class="img-cover">
                </figure>

                <div class="card-content">

                  <div class="wrapper">
                    <a href="#" class="tag">Development</a>

                    <a href="#" class="publish-date">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span class="span">July 21, 2020</span>
                    </a>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Godaddy user flow solution for every individual</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">
                  <img src="./assets/images/blog-3.png" width="202" height="162" loading="lazy"
                    alt="Business solution for every individual" class="img-cover">
                </figure>

                <div class="card-content">

                  <div class="wrapper">
                    <a href="#" class="tag">Development</a>

                    <a href="#" class="publish-date">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span class="span">July 21, 2020</span>
                    </a>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Business solution for every individual</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">
                  <img src="./assets/images/blog-4.png" width="202" height="162" loading="lazy"
                    alt="How to gain pro experience ar figma update version" class="img-cover">
                </figure>

                <div class="card-content">

                  <div class="wrapper">
                    <a href="#" class="tag">Development</a>

                    <a href="#" class="publish-date">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span class="span">July 21, 2020</span>
                    </a>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">How to gain pro experience ar figma update version</a>
                  </h3>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>


  
      <!-- 
        - #AUTH SECTION
      -->

      <section class="section auth-section" aria-label="authentication" id="register">
        <div class="container">

          <div class="auth-container">
            <div class="auth-header">
              <a href="index.php" class="logo">Dhvtisu</a>
              <h1 class="auth-title">Welcome to Dhvtisu</h1>
              <p class="auth-subtitle">Login or create an account to get started</p>
            </div>

            <div class="auth-tabs">
              <button class="tab-btn active" data-tab="login">Login</button>
              <button class="tab-btn" data-tab="signup">Sign Up</button>
            </div>

            <!-- Login Form -->
            <div class="tab-content active" id="login-tab">
              <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>#register" method="post" class="auth-form" id="loginForm">
                <input type="hidden" name="form_type" value="login">
                <div class="input-wrapper">
                  <label for="login-email" class="label">Email Address</label>
                  <input type="email" name="email" id="login-email" placeholder="Enter your email" required class="input-field">
                  <p class="error-message">Please enter a valid email address</p>
                </div>

                <div class="input-wrapper">
                  <label for="login-password" class="label">Password</label>
                  <div class="password-wrapper">
                    <input type="password" name="password" id="login-password" placeholder="Enter your password" required class="input-field">
                    <button type="button" class="password-toggle" aria-label="toggle password visibility">
                      <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
                    </button>
                  </div>
                  <p class="error-message">Password must be at least 6 characters</p>
                  <a href="#" class="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" class="btn btn-primary has-before has-after">
                  <span class="span">Login</span>
                </button>

                <div class="divider">
                  <span class="divider-text">Or login with</span>
                </div>

                <div class="social-login-btns">
                  <a href="#" class="social-login-btn">
                    <ion-icon name="logo-google" aria-hidden="true"></ion-icon>
                  </a>
                  <a href="#" class="social-login-btn">
                    <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
                  </a>
                  <a href="#" class="social-login-btn">
                    <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </form>
              
              <?php
              // Process login form
              if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["form_type"]) && $_POST["form_type"] == "login") {
                  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
                  $password = $_POST["password"];
                  
                  // Here you would typically validate against a database
                  // For demonstration, we'll just show a success message
                  echo '<p class="success-message">Login successful! Redirecting...</p>';
                  
                  // In a real application, you might do something like:
                  // $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
                  // $stmt->execute([$email]);
                  // $user = $stmt->fetch();
                  // if ($user && password_verify($password, $user['password'])) {
                  //     $_SESSION['user_id'] = $user['id'];
                  //     header("Location: dashboard.php");
                  // } else {
                  //     echo '<p class="error-message">Invalid email or password</p>';
                  // }
              }
              ?>
            </div>

            <!-- Signup Form -->
            <div class="tab-content" id="signup-tab">
              <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>#register" method="post" class="auth-form" id="signupForm">
                <input type="hidden" name="form_type" value="signup">
                <div class="input-row">
                  <div class="input-wrapper">
                    <label for="firstName" class="label">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First name" required class="input-field">
                    <p class="error-message">First name is required</p>
                  </div>

                  <div class="input-wrapper">
                    <label for="lastName" class="label">Last Name</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Last name" required class="input-field">
                    <p class="error-message">Last name is required</p>
                  </div>
                </div>

                <div class="input-wrapper">
                  <label for="signup-email" class="label">Email Address</label>
                  <input type="email" name="email" id="signup-email" placeholder="Enter your email" required class="input-field">
                  <p class="error-message">Please enter a valid email address</p>
                </div>

                <div class="input-wrapper">
                  <label for="signup-password" class="label">Password</label>
                  <div class="password-wrapper">
                    <input type="password" name="password" id="signup-password" placeholder="Create a password" required class="input-field">
                    <button type="button" class="password-toggle" aria-label="toggle password visibility">
                      <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
                    </button>
                  </div>
                  <div class="password-strength">
                    <div class="strength-bar" id="bar1"></div>
                    <div class="strength-bar" id="bar2"></div>
                    <div class="strength-bar" id="bar3"></div>
                    <div class="strength-bar" id="bar4"></div>
                  </div>
                  <p class="strength-text" id="strengthText">Password strength</p>
                  <p class="error-message">Password must be at least 8 characters</p>
                </div>

                <div class="input-wrapper">
                  <label for="confirmPassword" class="label">Confirm Password</label>
                  <div class="password-wrapper">
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password" required class="input-field">
                    <button type="button" class="password-toggle" aria-label="toggle password visibility">
                      <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
                    </button>
                  </div>
                  <p class="error-message">Passwords do not match</p>
                </div>

               
                <button type="submit" class="btn btn-primary has-before has-after">
                  <span class="span">Create Account</span>
                </button>

                <div class="divider">
                  <span class="divider-text">Or sign up with</span>
                </div>

                <div class="social-login-btns">
                  <a href="#" class="social-login-btn">
                    <ion-icon name="logo-google" aria-hidden="true"></ion-icon>
                  </a>
                  <a href="#" class="social-login-btn">
                    <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>
                  </a>
                  <a href="#" class="social-login-btn">
                    <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </form>
              
              <?php
              // Process signup form
              if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["form_type"]) && $_POST["form_type"] == "signup") {
                  $firstName = filter_var($_POST["firstName"], FILTER_SANITIZE_STRING);
                  $lastName = filter_var($_POST["lastName"], FILTER_SANITIZE_STRING);
                  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
                  $password = $_POST["password"];
                  $confirmPassword = $_POST["confirmPassword"];
                  
                  $errors = [];
                  
                  if (empty($firstName)) {
                      $errors[] = "First name is required";
                  }
                  
                  if (empty($lastName)) {
                      $errors[] = "Last name is required";
                  }
                  
                  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                      $errors[] = "Invalid email format";
                  }
                  
                  if (strlen($password) < 8) {
                      $errors[] = "Password must be at least 8 characters";
                  }
                  
                  if ($password !== $confirmPassword) {
                      $errors[] = "Passwords do not match";
                  }
                  
                  if (empty($errors)) {
                      // Here you would typically save to a database
                      // For demonstration, we'll just show a success message
                      echo '<p class="success-message">Account created successfully! You can now log in.</p>';
                      
                      // In a real application, you might do something like:
                      // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                      // $stmt = $pdo->prepare("INSERT INTO users (first_name, last_name, email, password, created_at) VALUES (?, ?, ?, ?, NOW())");
                      // $stmt->execute([$firstName, $lastName, $email, $hashedPassword]);
                      
                      // Redirect to login tab
                      echo '<script>document.querySelector("[data-tab=\'login\']").click();</script>';
                  } else {
                      echo '<div class="error-container">';
                      foreach ($errors as $error) {
                          echo '<p class="error-message">' . $error . '</p>';
                      }
                      echo '</div>';
                  }
              }
              ?>
            </div>

          </div>

        </div>
      </section>

      <script>
        // Add this CSS to the top of the file to fix the checkbox alignment
    document.addEventListener("DOMContentLoaded", () => {
      // Add custom CSS to fix the checkbox alignment
      const style = document.createElement("style")
      style.textContent = `
        .checkbox-wrapper {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-block: 15px;
        }
        
        .checkbox-wrapper input[type="checkbox"] {
          margin-top: 3px;
          min-width: 16px;
          height: 16px;
        }
        
        .checkbox-label {
          color: var(--cool-gray);
          font-size: var(--fs-9);
          line-height: 1.4;
        }
      `
      document.head.appendChild(style)
    
      // DOM Elements
      // Tab switching functionality
      const tabBtns = document.querySelectorAll(".tab-btn")
      const tabContents = document.querySelectorAll(".tab-content")
    
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const tabId = btn.getAttribute("data-tab")
    
          // Remove active class from all tabs and contents
          tabBtns.forEach((b) => b.classList.remove("active"))
          tabContents.forEach((c) => c.classList.remove("active"))
    
          // Add active class to current tab and content
          btn.classList.add("active")
          document.getElementById(`${tabId}-tab`).classList.add("active")
        })
      })
    
      // Password toggle functionality
      const passwordToggles = document.querySelectorAll(".password-toggle")
    
      passwordToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
          const passwordField = toggle.previousElementSibling
          const type = passwordField.getAttribute("type") === "password" ? "text" : "password"
          passwordField.setAttribute("type", type)
    
          // Toggle icon
          const icon = toggle.querySelector("ion-icon")
          icon.setAttribute("name", type === "password" ? "eye-outline" : "eye-off-outline")
        })
      })
    
      // Password strength indicator
      const signupPassword = document.getElementById("signup-password")
      const strengthBars = [
        document.getElementById("bar1"),
        document.getElementById("bar2"),
        document.getElementById("bar3"),
        document.getElementById("bar4"),
      ]
      const strengthText = document.getElementById("strengthText")
    
      signupPassword?.addEventListener("input", () => {
        const password = signupPassword.value
        let strength = 0
    
        // Check password length
        if (password.length >= 8) strength += 1
    
        // Check for lowercase and uppercase
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1
    
        // Check for numbers
        if (/[0-9]/.test(password)) strength += 1
    
        // Check for special characters
        if (/[^a-zA-Z0-9]/.test(password)) strength += 1
    
        // Update strength bars
        strengthBars.forEach((bar, index) => {
          if (index < strength) {
            bar.style.backgroundColor = getStrengthColor(strength)
          } else {
            bar.style.backgroundColor = "var(--gainsboro)"
          }
        })
    
        // Update strength text
        strengthText.textContent = getStrengthText(strength)
        strengthText.style.color = getStrengthColor(strength)
      })
    
      function getStrengthColor(strength) {
        switch (strength) {
          case 1:
            return "var(--bittersweet)" // Weak - Red
          case 2:
            return "var(--selective-yellow)" // Fair - Yellow
          case 3:
            return "var(--yellow-green)" // Good - Light Green
          case 4:
            return "var(--emerald)" // Strong - Green
          default:
            return "var(--cool-gray)"
        }
      }
    
      function getStrengthText(strength) {
        switch (strength) {
          case 1:
            return "Weak password"
          case 2:
            return "Fair password"
          case 3:
            return "Good password"
          case 4:
            return "Strong password"
          default:
            return "Password strength"
        }
      }
    
      // Form validation
      const loginForm = document.getElementById("loginForm")
      const signupForm = document.getElementById("signupForm")
    
      // Login form validation
      loginForm?.addEventListener("submit", (e) => {
        e.preventDefault()
    
        const email = document.getElementById("login-email")
        const password = document.getElementById("login-password")
        let isValid = true
    
        // Validate email
        if (!validateEmail(email.value)) {
          showError(email, "Please enter a valid email address")
          isValid = false
        } else {
          hideError(email)
        }
    
        // Validate password
        if (password.value.length < 6) {
          showError(password, "Password must be at least 6 characters")
          isValid = false
        } else {
          hideError(password)
        }
    
        if (isValid) {
          // Submit the form - replace with your actual login logic
          console.log("Login form submitted successfully")
          // You would typically make an API call here
          // loginUser(email.value, password.value);
          loginForm.submit();
        }
      })
    
      // Signup form validation
      signupForm?.addEventListener("submit", (e) => {
        e.preventDefault()
    
        const firstName = document.getElementById("firstName")
        const lastName = document.getElementById("lastName")
        const email = document.getElementById("signup-email")
        const password = document.getElementById("signup-password")
        const confirmPassword = document.getElementById("confirmPassword")
        let isValid = true
    
        // Validate first name
        if (firstName.value.trim() === "") {
          showError(firstName, "First name is required")
          isValid = false
        } else {
          hideError(firstName)
        }
    
        // Validate last name
        if (lastName.value.trim() === "") {
          showError(lastName, "Last name is required")
          isValid = false
        } else {
          hideError(lastName)
        }
    
        // Validate email
        if (!validateEmail(email.value)) {
          showError(email, "Please enter a valid email address")
          isValid = false
        } else {
          hideError(email)
        }
    
        // Validate password
        if (password.value.length < 8) {
          showError(password, "Password must be at least 8 characters")
          isValid = false
        } else {
          hideError(password)
        }
    
        // Validate confirm password
        if (password.value !== confirmPassword.value) {
          showError(confirmPassword, "Passwords do not match")
          isValid = false
        } else {
          hideError(confirmPassword)
        }
    
        if (isValid) {
          // Submit the form
          signupForm.submit();
        }
      })
    
      // Helper functions
      function validateEmail(email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
      }
    
      function showError(input, message) {
        const wrapper = input.closest(".input-wrapper")
        wrapper.classList.add("show-error")
        input.classList.add("input-error")
        const errorElement = wrapper.querySelector(".error-message")
        if (errorElement) {
          errorElement.textContent = message
        }
    
        // Add shake animation
        wrapper.classList.add("shake")
        setTimeout(() => {
          wrapper.classList.remove("shake")
        }, 500)
      }
    
      function hideError(input) {
        const wrapper = input.closest(".input-wrapper")
        wrapper.classList.remove("show-error")
        input.classList.remove("input-error")
      }
    })
    
    console.log("Auth script loaded successfully!")
    
      </script>


      <!-- 
        - #CONTACT
      -->

      <section class="section contact-section"  id="contcat">
        <div class="container">

          <p class="section-subtitle has-before text-center slide-in">Contact Us</p>

          <h2 class="h2 section-title text-center slide-in" style="animation-delay: 0.2s;">
            Get in <span class="has-before">Touch</span> With Us
          </h2>

          <div class="contact-container">

            <div class="contact-form-container slide-in" style="animation-delay: 0.3s;">
              <div class="contact-info">
                <h3 class="h3">Send Us A Message</h3>
                <p>Feel free to contact us with any questions or inquiries. We're here to help!</p>
              </div>

              <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>#contcat" method="post" class="contact-form">
                <input type="hidden" name="form_type" value="contact">
                <div class="input-wrapper">
                  <label for="name" class="label">Full Name</label>
                  <input type="text" name="name" id="name" placeholder="Your full name" required class="input-field">
                </div>

                <div class="input-wrapper">
                  <label for="email" class="label">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="Your email address" required class="input-field">
                </div>

                <div class="input-wrapper">
                  <label for="subject" class="label">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="Subject" required class="input-field">
                </div>

                <div class="input-wrapper">
                  <label for="message" class="label">Message</label>
                  <textarea name="message" id="message" placeholder="Your message" required class="input-field"></textarea>
                </div>

                <button type="submit" class="btn btn-primary has-before has-after">
                  <span class="span">Send Message</span>
                </button>
              </form>
              
              <?php
              // Process contact form
              if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["form_type"]) && $_POST["form_type"] == "contact") {
                  $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
                  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
                  $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
                  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
                  
                  // Here you would typically send an email or save to a database
                  // For demonstration, we'll just show a success message
                  echo '<p class="success-message">Thank you for your message! We will get back to you soon.</p>';
                  
                  // In a real application, you might do something like:
                  // $to = "info@dhvtisu.com";
                  // $headers = "From: $email";
                  // mail($to, $subject, $message, $headers);
                  
                  // Or save to database:
                  // $stmt = $pdo->prepare("INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())");
                  // $stmt->execute([$name, $email, $subject, $message]);
              }
              ?>
            </div>

            <div>
              <ul class="contact-list">

                <li>
                  <div class="contact-card">
                    <div class="card-icon">
                      <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                    </div>
                    <h3 class="card-title">Our Location</h3>
                    <p class="card-text">123 Business Avenue, Digital Valley, CA 94043, USA</p>
                  </div>
                </li>

                <li>
                  <div class="contact-card">
                    <div class="card-icon">
                      <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                    </div>
                    <h3 class="card-title">Phone Number</h3>
                    <a href="tel:+1234567890" class="card-link">+1 (234) 567-890</a>
                    <a href="tel:+1234567890" class="card-link">+1 (234) 567-891</a>
                  </div>
                </li>

                <li>
                  <div class="contact-card">
                    <div class="card-icon">
                      <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                    </div>
                    <h3 class="card-title">Email Address</h3>
                    <a href="mailto:info@Dhvtisu.com" class="card-link">info@Dhvtisu.com</a>
                    <a href="mailto:support@Dhvtisu.com" class="card-link">support@Dhvtisu.com</a>
                  </div>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </section>


    </main>
      </article>
    
  <script>
    // Animation for elements with slide-in class
    document.addEventListener('DOMContentLoaded', function() {
      const slideElements = document.querySelectorAll('.slide-in');
      
      slideElements.forEach(element => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        }, element.style.animationDelay ? parseFloat(element.style.animationDelay) * 1000 : 0);
      });

      // Form submission animation
      const contactForm = document.querySelector('.contact-form');
      
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const formElements = contactForm.querySelectorAll('input, textarea, button');
          
          formElements.forEach(element => {
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '0.5';
            element.disabled = true;
          });
          
          setTimeout(() => {
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Your message has been sent successfully!';
            successMessage.style.color = 'var(--majorelle-blue)';
            successMessage.style.fontWeight = 'var(--fw-500)';
            successMessage.style.textAlign = 'center';
            successMessage.style.padding = '20px';
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(20px)';
            successMessage.style.transition = 'all 0.5s ease';
            
            contactForm.appendChild(successMessage);
            
            setTimeout(() => {
              successMessage.style.opacity = '1';
              successMessage.style.transform = 'translateY(0)';
            }, 100);
            
            setTimeout(() => {
              formElements.forEach(element => {
                element.style.opacity = '1';
                element.disabled = false;
                if (element.tagName.toLowerCase() !== 'button') {
                  element.value = '';
                }
              });
              
              successMessage.style.opacity = '0';
              successMessage.style.transform = 'translateY(-20px)';
              
              setTimeout(() => {
                successMessage.remove();
              }, 500);
            }, 3000);
          }, 1000);
        });
      }
    });
  </script>



  <!-- 
    - #FOOTER
  -->

  <footer class="footer">
    <div class="container">

      <div class="footer-top section">

        <div class="footer-brand">

          <p class="footer-list-title">About Dhvtisu</p>

          <p class="footer-text">
            A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla
          </p>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-skype"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Usefull Links</p>
          </li>

          <li>
            <a href="#" class="footer-link">Contact us</a>
          </li>

          <li>
            <a href="#" class="footer-link">How it Works</a>
          </li>

          <li>
            <a href="#" class="footer-link">Create</a>
          </li>

          <li>
            <a href="#" class="footer-link">Explore</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms & Services</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Community</p>
          </li>

          <li>
            <a href="#" class="footer-link">Help Center</a>
          </li>

          <li>
            <a href="#" class="footer-link">Partners</a>
          </li>

          <li>
            <a href="#" class="footer-link">Suggestions</a>
          </li>


          <li>
            <a href="#" class="footer-link">Newsletters</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Instagram post</p>
          </li>

          <li>
            <ul class="insta-post">

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-1.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover">
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-2.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover">
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-3.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover">
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-4.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover">
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-5.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover">
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-6.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover">
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

            </ul>
          </li>

        </ul>

      </div>

      <div class="footer-bottom">

        <p class="copyright">
          &copy; <?php echo date("Y"); ?> Dhvtisu. All Rights Reserved by Dhvtisu
        </p>

        <ul class="footer-bottom-list">

          <li>
            <a href="#" class="footer-bottom-link">Terms and conditions</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">Privacy policy</a>
          </li>

        </ul>

      </div>

    </div>
  </footer>




   

  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn has-after active" aria-label="back to top" data-back-top-btn>
    <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
  </a>





  <!-- 
    - custom js link
  -->
  <script src="./assets/js/script.js" defer></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>