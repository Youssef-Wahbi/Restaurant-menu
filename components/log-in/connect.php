<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "restaurant";

$conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

function redirect($url) {
    header("Location: $url");
    exit();
}

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}
?>