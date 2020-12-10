<php
header('Access-Control-Allow-Origin: *’);
header('Access-Control-Allow-Credentials: true'};
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS’);
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token');
header('Content-Type: application/json; charset=UTF-8');

include("config.php");

$postjson = json_decode(file_get_contents('php://input'), true);

$todayDate = date('d');
$todayMonth date('m');
$todayYear = date(‘Y’);

if($postjson['aksi']=="proses_register”){
$name = $postjson['name'l;
$email = $postjson['email'];
$pass = $postjson['password'];
