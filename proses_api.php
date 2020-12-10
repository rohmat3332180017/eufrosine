Else{
$password = md5($postjson['password']);
$select = mysqli _query($mysqli, "SELECT * FROM 'user’ WHERE 'email' = ‘$postjsonjemail’");
$row= mysqli_num_rows($select);
if($row>= 1){
$result = json_encode(array('success' => false, 'msg' => 'Email yang dimasukkan sudah terdaftar!'));
}
else{
$insert = mysqli_query($mysqli, "INSERT INTO 'user’ VALUES (null, '$postjson[namel', '$postjson[email]','$password', '$created','-‘, '-‘', '-‘)");
if($insert){
$result = json_encode(array('success' => true, 'msg' => "Sukses Mendaftakan Akun. Login melalui Menu yang tersedia.’));
Else{
$result = json_encode(array('success' => false, 'msg' => 'Gagal Melakukan Pendaftaran! Periksa formulir dan coba lagi.’));
}
}
}
