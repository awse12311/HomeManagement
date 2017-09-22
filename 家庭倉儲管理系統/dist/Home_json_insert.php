<?php
$servername = "localhost";
$username = "root";
$password = "123qwe";
$dbname = "HomeManagementDB";
header("Content-Type: application/json; charset=UTF-8");
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql=$_GET["sql"];
//$sql = "INSERT INTO `Entity` (`Entity_id`, `Type_id`, `Entity_Expired`, `Address_id`, `Floor`, `Area`, `Level`, `Entity_Remark`) VALUES (NULL, '3', '1995-04-20', 'addr001', 'F1', 'A2', 'A', 'What happen?')";
//$sql = "INSERT INTO `SubClass` (`SubClass_id`, `Class_id`, `SubClass_name`) VALUES (NULL, 'F', '測試用品')";
mysqli_query($conn,"SET CHARACTER SET UTF8");
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
