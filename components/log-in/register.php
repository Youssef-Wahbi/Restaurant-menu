<?php include 'connect.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Register | Santa Rita</title>
        <!-- <link rel="stylesheet" href="../main/css/restaurant.css"> -->

    <link rel="stylesheet" href="Sign in style.css">
</head>
<body>
<div class="wrapper">
        <div class="form-header">
            <div class="titles">
                <h2 class="title-register">Register</h2>
            </div>
        </div>
        
        <?php if (isset($_SESSION['error'])): ?>
            <div class="notification error" style="position: relative; margin-bottom: 20px;">
                <?= $_SESSION['error']; unset($_SESSION['error']); ?>
            </div>
        <?php endif; ?>
        
        <form class="register-form" action="register_process.php" method="post">
            <div class="input-box">
                <input type="text" name="username" class="input-field" required>
                <label class="label">Username</label>
            </div>
            
            <div class="input-box">
                <input type="email" name="email" class="input-field" required>
                <label class="label">Email</label>
            </div>
            
            <div class="input-box">
                <input type="password" name="password" class="input-field" required>
                <label class="label">Password</label>
            </div>
            
            <div class="input-box">
                <input type="password" name="confirm_password" class="input-field" required>
                <label class="label">Confirm Password</label>
            </div>
            
            <button type="submit" class="btn-submit">Sign Up <i class="fas fa-user-plus"></i></button>
            
            <div class="switch-form">
                <p>Already have an account? <a href="login.php" onclick="loginFunction()">Log In</a></p>
            </div>
        </form>
    </div>
    
    <script src="Sign in script.js"></script>
</body>
</html>