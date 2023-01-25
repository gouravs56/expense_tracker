<?php
header('Access-Control-Allow-Origin: *');   /* to handle cors related issue */

$con = mysqli_connect("localhost","id20198115_expensedbgs","V9zHHDHcMp=VgdBN","id20198115_expensedb");
$response=array();
if ($con) {
    $sql =  "select * from `dbdata` ";   /* this back tick ` `  is very important */
    $result = mysqli_query($con,$sql);
    if($result){
    header("Content-Type: JSON");  /* this formats the json structure */
    $i=0;
    while($row = mysqli_fetch_assoc($result)){ 
    $response[$i]['id'] = $row['id'];
    $response[$i]['title'] = $row['title'];
    $response[$i]['amount'] = $row['amount'];
    $response[$i]['date'] = $row['date'];
    $i++;
}
echo json_encode($response,JSON_PRETTY_PRINT);
}
}
else {
    echo "connection failed";
}

?>