<?php
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = mysqli_query($conn, $sql);

    if ($row = mysqli_fetch_assoc($result)) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];
            redirect('../../main/index.html');
        } else {
            $_SESSION['error'] = "Incorrect password.";
            redirect('login.php');
        }
    } else {
        $_SESSION['error'] = "User not found.";
        redirect('login.php');
    }
}

mysqli_close($conn);
?>