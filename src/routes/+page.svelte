<script>

</script>



<svelte:head>
	<title>Cloud Master | Academy</title>
	<meta name="description" content="Cloud Master Academy" />
</svelte:head>



<main>
    <section class="container-fluid">
        <div class="row">
            <div class="col-md-6 HERO-TEXT">
                <h1>Master the Cloud!</h1>
                <p>Unlock the power of cloud computing from the comfort of your own home with our interactive virtual classes. Our expert instructors will guide you through hands-on projects and real-world scenarios, ensuring you gain the skills and knowledge needed to excel in the rapidly evolving world of cloud technology.</p>
                <a href=""class="btn btn-primary">Get Started</a>

            </div>
            <div class="col-md-6 HERO-IMAGE">
                <img src="/media/images/hero.png" alt="">
            </div>
        </div>
        <div class="row CAREER-PATHS">
            <div class="col-md-4 ">
                <div class="CAREER">
                    Become a Cloud Architect  &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cloud-fog2-fill" viewBox="0 0 16 16">
                        <path d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"/>
                      </svg>

                </div>
            </div>
            <div class="col-md-4 ">
                <div class="CAREER">
                    Become a Cloud Engineer &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-hdd-stack" viewBox="0 0 16 16">
                        <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"/>
                        <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                        <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                      </svg>

                </div>
            </div>
            <div class="col-md-4 ">
                <div class="CAREER">
                    Become a DevOps Engineer &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-infinity" viewBox="0 0 16 16">
                        <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"/>
                      </svg>

                </div>
            </div>
        </div>
    </section>

    <section class="container-fluid COURSES">
        <div class="row">
            <h3>Courses</h3>
            <br><br>
            <div class="col-lg-6">
                <div class="COURSE-BOX">
                    <h5>Cloud Computing</h5>
                    <img src="/media/images/cloudcomp.jpg" alt="">
                    <br><br>
                    
                    <p>Experience the scalability, flexibility, and cost-efficiency of cloud computing. Our cloud computing solutions empower businesses to leverage the full potential of cloud technologies, enabling seamless access to resources, rapid deployment, and enhanced productivity. Embrace the cloud revolution and transform the way you do business.</p>
                    <a href="#">More</a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="COURSE-BOX">
                    <h5>DevOps</h5>

                    <img src="/media/images/devops.jpg" alt="">
                    <br><br>
                    <p>Break down the barriers between development and operations and streamline your software development lifecycle with DevOps. Our DevOps practices and tools enable you to achieve faster and more reliable deployments, automate processes, enhance collaboration, and deliver high-quality software solutions.</p>
                    <a href="#">More</a>
                    
                </div>
            </div>
        </div>
    </section>

    

    <section class="container-fluid CONTACT">
        <div class="row">
            <div class="col-lg-12">
                <h3>Contact</h3>
                <p>Have questions or need assistance? We're here to help! Feel free to reach out to us using the contact information below. Our dedicated team of experts is ready to provide you with the guidance and support you need in your cloud journey</p>
            <a href="mailto:eoladosu04@gmail.com" class="btn btn-primary">GET IN TOUCH</a>
        
            </div>
            </div>
    </section>
</main>



<style>
    h1,h2,h3,h4,h5,h6{
        font-family: Georgia, 'Times New Roman', Times, serif;

    }
    a{
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
    
    .HERO-TEXT{
        padding-top: 4rem;
        padding-bottom: 4rem;

    }
    .HERO-IMAGE{
        display: grid;
        place-items: center;
    }
    .CAREER-PATHS{
        padding-top: 4rem;
        padding-bottom: 4rem;

    }
    .CAREER{
        border-radius: 1rem;
        background-color: #1299f3;
        padding: 2rem;
        text-align: center;
        color: white;
        font-weight: 500;
        font-size: 2rem;

    }
    .COURSES{
        background-color: #1299f3;
        color: white;
    }
    .COURSES img{
        width: 100%;
    }
    .CAREER:hover{
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.5); 

    }
    .CONTACT{
        text-align: center;
    }
    @media (min-width: 767px) {
        .container-fluid{
            padding: 3rem 4rem

        }
                
        .HERO-IMAGE{
            display: grid;
            place-items: end;
        }
    }

    @media (max-width: 767px) {
        .CAREER{
        margin-top: 1rem;
        margin-bottom: 1rem;
        }
        .CONTACT{
        padding-top: 1rem;
        padding-bottom: 1rem;

        }
    }
</style>