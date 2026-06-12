<?php
session_start();

// Database connection
$host = 'localhost';
$dbname = 'wp'; // Replace with your database name
$username = 'root'; // Default username for XAMPP
$password = ''; // Default password for XAMPP (empty)

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create operation
function createRecord($table, $data) {
    global $conn;
    $columns = implode(", ", array_keys($data));
    $placeholders = implode(", ", array_fill(0, count($data), "?"));
    $values = array_values($data);

    $stmt = $conn->prepare("INSERT INTO $table ($columns) VALUES ($placeholders)");
    $types = str_repeat("s", count($values)); // Assuming all fields are strings
    $stmt->bind_param($types, ...$values);

    if ($stmt->execute()) {
        return true;
    } else {
        return $stmt->error;
    }
}

// Read operation
function readRecords($table, $conditions = []) {
    global $conn;
    $query = "SELECT * FROM $table";
    if (!empty($conditions)) {
        $query .= " WHERE " . implode(" AND ", array_map(function ($key) {
            return "$key = ?";
        }, array_keys($conditions)));
    }

    $stmt = $conn->prepare($query);
    if (!empty($conditions)) {
        $types = str_repeat("s", count($conditions));
        $stmt->bind_param($types, ...array_values($conditions));
    }

    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Update operation
function updateRecord($table, $data, $conditions) {
    global $conn;
    $setClause = implode(", ", array_map(function ($key) {
        return "$key = ?";
    }, array_keys($data)));
    $whereClause = implode(" AND ", array_map(function ($key) {
        return "$key = ?";
    }, array_keys($conditions)));

    $stmt = $conn->prepare("UPDATE $table SET $setClause WHERE $whereClause");
    $values = array_merge(array_values($data), array_values($conditions));
    $types = str_repeat("s", count($values));
    $stmt->bind_param($types, ...$values);

    if ($stmt->execute()) {
        return true;
    } else {
        return $stmt->error;
    }
}

// Delete operation
function deleteRecord($table, $conditions) {
    global $conn;
    $whereClause = implode(" AND ", array_map(function ($key) {
        return "$key = ?";
    }, array_keys($conditions)));

    $stmt = $conn->prepare("DELETE FROM $table WHERE $whereClause");
    $types = str_repeat("s", count($conditions));
    $stmt->bind_param($types, ...array_values($conditions));

    if ($stmt->execute()) {
        return true;
    } else {
        return $stmt->error;
    }
}

// Example usage
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST["action"];

    if ($action == "create") {
        $data = [
            "name" => $_POST["name"],
            "email" => $_POST["email"],
            "message" => $_POST["message"]
        ];
        $result = createRecord("contacts", $data);
        echo $result === true ? "Record created successfully" : $result;
    } elseif ($action == "update") {
        $data = [
            "name" => $_POST["name"],
            "email" => $_POST["email"]
        ];
        $conditions = ["id" => $_POST["id"]];
        $result = updateRecord("contacts", $data, $conditions);
        echo $result === true ? "Record updated successfully" : $result;
    } elseif ($action == "delete") {
        $conditions = ["id" => $_POST["id"]];
        $result = deleteRecord("contacts", $conditions);
        echo $result === true ? "Record deleted successfully" : $result;
    }
}
?>