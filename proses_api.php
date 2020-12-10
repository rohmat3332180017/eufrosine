echo $result;
}
else if($postjson['aksi']==’proses_login'){
$inputEmail = $postjson['email’];
$inputPass = $postjson ['password'];
if($inputEmail == “"){
$result = json_encode(array('success' => false, 'msg' => "Email tidak boleh kosong!'));
}
else if($inputPass == “"){
$result json_encode(array('success' => false, 'msg' => 'Kata Sandi tidak boleh kosong!'));
}
Else{
$password = md5($postjsonl'password']);
$checkAccount = mysqli_query($mysqli, "SELECT * FROM user WHERE 'email' = '$postjson[email]' AND 'password’ =
$password’");
$baris = mysqli_fetch_array($checkAccount);
$data = array(
'name' => $baris['name'],
'email'=> $baris['email'],
