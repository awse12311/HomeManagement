<?php
header("Content-Type: application/json; charset=UTF-8");
$sql=$_GET["sql"];
// if($sql == null ){
//     echo "null no get";
// }else{
    $conn = new mysqli("localhost", "root", "123qwe");
    mysqli_query($conn, "set names utf8");
    $result = $conn->query($sql);
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($outp, JSON_UNESCAPED_UNICODE);
// }



?>