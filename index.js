<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Janhavi Lakhera | Creative Resume</title>

<!-- Bootstrap CSS -->
<link 

href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-

icons@1.11.3/font/bootstrap-icons.min.css">

<style>

body{
    background: linear-gradient(135deg,#6a11cb,#2575fc);
    font-family: 'Poppins', sans-serif;
    padding: 30px;
}

/* Main Resume Card */
.resume-container{
    max-width: 1000px;
    margin: auto;
    background: white;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

/* Sidebar */
.sidebar{
    background: linear-gradient(180deg,#141e30,#243b55);
    color: white;
    padding: 35px;
    text-align: center;
}

/* Profile Circle */
.profile{
    width: 130px;
    height: 130px;
    background: linear-gradient(45deg,#ff9a9e,#fad0c4);
    border-radius: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: #141e30;
    border: 5px solid white;
    margin-bottom: 20px;
}

/* Heading */
.sidebar h2{

    font-weight: bold;
}

.sidebar p{
    color: #ddd;
}

/* Social Buttons */
.social a{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background: white;
    color: #2575fc;
    margin: 5px;
    transition: 0.3s;
    font-size: 18px;
}

.social a:hover{
    background: #ff4d94;
    color: white;
    transform: scale(1.1);
}

/* Skill Badges */
.skill-badge{
    margin: 6px;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 14px;
    transition: 0.3s;
}

.skill-badge:hover{
    transform: translateY(-5px);
}

/* Main Content */
.main-content{
    padding: 40px;
    background: #f9f9f9;

}

/* Section Titles */
.section-title{
    position: relative;
    color: #2575fc;
    margin-bottom: 20px;
    font-weight: bold;
}

.section-title::after{
    content: '';
    width: 50px;
    height: 4px;
    background: #ff4d94;
    position: absolute;
    left: 0;
    bottom: -8px;
    border-radius: 10px;
}

/* Cards */
.custom-card{
    background: white;
    border: none;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: 0.3s;
}


.custom-card:hover{
    transform: translateY(-5px);
}

/* Buttons */
.custom-btn{
    border-radius: 30px;
    padding: 10px 25px;
    font-weight: bold;
}

/* Progress Bars */

.progress{
    height: 10px;
    border-radius: 10px;
}

</style>
</head>

<body>

<div class="container resume-container">
<div class="row">

    <!-- Sidebar -->
    <div class="col-md-4 sidebar">

        <div class="profile">
            J
        </div>

        <h2>Janhavi Lakhera</h2>
        <p>First Year CSE Student</p>

        <hr>

        <h5><i class="bi bi-person-lines-fill"></i> Contact</h5>

        <p><i class="bi bi-envelope-fill"></i> janhavi@email.com</p>
        <p><i class="bi bi-telephone-fill"></i> +91 9876543210</p>
        <p><i class="bi bi-geo-alt-fill"></i> SB Jain Institute</p>

        <div class="social mt-3">
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-github"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
        </div>

        <hr>

        <h5><i class="bi bi-stars"></i> Skills</h5>


        <span class="badge bg-primary skill-badge">HTML</span>
        <span class="badge bg-success skill-badge">CSS</span>
        <span class="badge bg-warning text-dark skill-badge">Bootstrap</span>

        <span class="badge bg-danger skill-badge">Java</span>
        <span class="badge bg-info text-dark skill-badge">Python</span>

        <div class="mt-4 text-start">

            <p>HTML</p>
            <div class="progress mb-3">
                <div class="progress-bar bg-primary" style="width:90%"></div>
            </div>

            <p>CSS</p>
            <div class="progress mb-3">
                <div class="progress-bar bg-success" style="width:85%"></div>
            </div>

            <p>Java</p>
            <div class="progress mb-3">
                <div class="progress-bar bg-warning" style="width:75%"></div>
            </div>

        </div>

    </div>

    <!-- Main Content -->
    <div class="col-md-8 main-content">

        <h1 class="fw-bold text-primary">Creative Resume</h1>
        <p class="text-muted">B.Tech Computer Science Engineering</p>

        <!-- Objective -->
        <div class="custom-card">
            <h3 class="section-title">Objective</h3>

            <p>
                Passionate Computer Science student with strong interest in
                web development, UI designing, and creative technologies.
                Seeking opportunities to enhance technical skills and gain
                practical experience.

            </p>

        </div>

        <!-- Education -->
        <div class="custom-card">

            <h3 class="section-title">Education</h3>

            <h5>SB Jain Institute</h5>
            <p>
                B.Tech in Computer Science Engineering<br>
                First Year (2025 - Present)
            </p>
        </div>

        <!-- Projects -->
        <div class="custom-card">
            <h3 class="section-title">Projects</h3>

            <div class="card mb-3 border-0 shadow-sm">
                <div class="card-body">
                    <h5 class="text-success">Portfolio Website</h5>
                    <p>Developed a responsive portfolio using HTML, CSS, and Bootstrap.</p>
                </div>
            </div>

            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <h5 class="text-danger">Image Gallery</h5>
                    <p>Created an animated image gallery with hover effects and 

transitions.</p>
                </div>
            </div>

        </div>

        <!-- Achievements -->
        <div class="custom-card">
            <h3 class="section-title">Achievements</h3>

            <ul class="list-group">

                <li class="list-group-item">Participated in coding competitions</li>

                <li class="list-group-item">Built beginner-level responsive websites</li>
                <li class="list-group-item">Completed HTML & CSS mini projects</li>
            </ul>
        </div>

        <!-- Buttons -->

        <div class="text-center mt-4">
            <a href="#" class="btn btn-primary custom-btn me-2">
                <i class="bi bi-linkedin"></i> LinkedIn
            </a>

            <a href="#" class="btn btn-dark custom-btn">
                <i class="bi bi-github"></i> GitHub
            </a>
        </div>

    </div>

</div>
</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

