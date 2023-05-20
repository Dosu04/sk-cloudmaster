<script>
    
</script>

<main>
    <nav class="navbar navbar-expand-lg  fixed-top shadow">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="/media/images/nav-logo.png" alt=""></a>
          <h3 class="NAV-TITLE">CloudMaster</h3>
          <button style="background-color:white" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav  ms-auto">
              <a class="nav-link" href="/">Home</a>
              <a class="nav-link" href="/about">About</a>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Cloud Computing</a></li>
                  <li><a class="dropdown-item" href="#">DevOps</a></li>
                </ul>
              </li>
            </div>
          </div>
        </div>
    </nav>
</main>

<style>
    main{
        padding-top: 8rem;
    }
    .container-fluid{
        padding: 0.5rem 4rem;

    }
    nav{
        background-color: #1299f3;
    }
    .navbar-brand img{
        width: 4rem;
    }
    a.nav-link{
        color: white;
        font-weight: 400;
    }
    a.nav-link:hover{
        font-size:larger ;
        font-weight: 600;
    }
    .NAV-TITLE{
        color: white;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .navbar-toggler-icon{
        color: #1299f3;
    }
    @media (max-width: 767px) {
        nav h3{
            display: none;
        }
        .container-fluid{
        padding: 1rem 1rem;
        
        }
        main{
            padding-top: 6rem;
        }
    }
</style>