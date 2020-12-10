'created'=> $baris['created'],
'int_event' => $baris['int_event'],
‘upcoming_event'=> $baris['upcoming_event’],
'attended_event' => $baris['attended_event']
);
$row = mysqli_num_rows($checkAccount);
if($row== 0}{
$result = json_encode(array('success' => false, 'msg' => 'Akun Tidak Terdaftar!"));
}
else{
if($checkAccount){
if($baris['int_event']=="-"){
$result = json_encode(array('success' => true, 'result' => $data));
}
Else{
$result = json_encode(array('success' => true, 'result' => $data));
}
}
else{
