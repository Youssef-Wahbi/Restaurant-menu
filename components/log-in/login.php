<?php include 'connect.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Login | Santa Rita</title>
    <!-- <link rel="stylesheet" href="../main/css/restaurant.css"> -->
    <link rel="stylesheet" href="Sign in style.css">
</head>
<body>
    <div class="wrapper">
        <div class="form-header">
            <div class="titles">
                <h2 class="title-login">Login</h2>
            </div>
        </div>
        
        <?php if (isset($_SESSION['error'])): ?>
            <div class="notification error" style="position: relative; margin-bottom: 20px;">
                <?= $_SESSION['error']; unset($_SESSION['error']); ?>
            </div>
        <?php endif; ?>
        
        <?php if (isset($_SESSION['success'])): ?>
            <div class="notification success" style="position: relative; margin-bottom: 20px;">
                <?= $_SESSION['success']; unset($_SESSION['success']); ?>
            </div>
        <?php endif; ?>
        
        <form class="login-form" action="login_process.php" method="post">
            <div class="input-box">
                <input type="text" name="username" class="input-field" required>
                <label class="label">Username or Email</label>
            </div>
            
            <div class="input-box">
                <input type="password" name="password" class="input-field" required>
                <label class="label">Password</label>
            </div>
            
            <button type="submit" class="btn-submit">Log In <i class="fas fa-sign-in-alt"></i></button>
            
            <div class="switch-form">
                <p>Don't have an account? <a href="register.php" onclick="registerFunction()">Sign Up</a></p>
                <p><a href="forgot_password.php">Forgot password?</a></p>
            </div>
        </form>
    </div>
    
    <script src="../components/auth/Sign in script.js"></script>
</body>
</html>