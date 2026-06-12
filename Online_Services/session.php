<?php
session_start();

// Check if the user is logged in
function isLoggedIn() {
    return isset($_SESSION["user"]);
}

// Get the logged-in user's email
function getUserEmail() {
    return isLoggedIn() ? htmlspecialchars($_SESSION["user"]) : null;
}

// Redirect to login page if the user is not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header("Location: loginsignin.php");
        exit();
    }
}

// Log the user in by setting the session
function loginUser($email) {
    $_SESSION["user"] = $email;
}

// Log the user out by destroying the session
function logoutUser() {
    session_unset();
    session_destroy();
    header("Location: index.php");
    exit();
}
?>