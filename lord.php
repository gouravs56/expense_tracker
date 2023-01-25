<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');

$conn = mysqli_connect("localhost","id20198115_expensedbgs","V9zHHDHcMp=VgdBN","id20198115_expensedb");
if(!$conn){
die("connection failed".mysqli_connect_error());
}
else{
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod == 'POST') 
{
    $id=$_POST['id'];
$title=$_POST['title'];
$amount=$_POST['amount'];
$date=$_POST['date'];
$sql="INSERT INTO dbdata (`id`,`title`,`amount`,`date`) VALUES('$id','$title','$amount','$date')";
$result = mysqli_query($con,$sql);
if($result){
    echo(" Form submitted sucrssfully");
}
else
{
    echo("error:".$sql."".mysqli_error($conn));
}
mysqli_close($conn); 
}
}

?>