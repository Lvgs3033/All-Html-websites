<?php
// Database connection
$host = 'localhost'; // XAMPP runs MySQL on localhost
$dbname = 'wp'; // Replace with your database name
$username = 'root'; // Default username for XAMPP
$password = ''; // Default password for XAMPP (empty)

// Create a connection using mysqli
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["name"], $_POST["email"], $_POST["message"])) {
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare and execute the SQL statement
        $stmt = $conn->prepare("INSERT INTO contacts (name, email, message, submitted_at) VALUES (?, ?, ?, NOW())");
        $stmt->bind_param("sss", $name, $email, $message);

        if ($stmt->execute()) {
            echo '<p class="success-message">Thank you for contacting us!</p>';
        } else {
            echo '<p class="error-message">Error: ' . $stmt->error . '</p>';
        }

        $stmt->close();
    } else {
        echo '<p class="error-message">Invalid email format</p>';
    }
}

// Close the connection
$conn->close();
?>