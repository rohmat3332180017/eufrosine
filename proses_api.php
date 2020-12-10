$konfir_password = $postison['konfir_password'];
$agree $postjson['agree'];
$created= $todayDate.";".$todayMonth.";".$todayYear;
if($name == "}{
$result = json_encode(array('success'=> false, 'msg' => "Nama tidak boleh kosong!'));
}
else if($email ==”"){
$result = json_encode(array('success' => false, 'msg' => "Email tidak boleh kosong!"));
}
else if($pass == "”){
$result json_encode(array('success' => false, 'msg' => "Kata Sandi tidak boleh kosong!"));
}
else if($konfir_password=="”){
$result json_encode(array('success' => false, 'msg' => "Harap Konfirmasi Kata Sandi!"));
}
else if($pass != $konfir_password){
$result json_encode(array('success'=> false, 'msg' => "Kata Sandi Tidak Sama!"));
}
else if($agree != 1){
$result json_encode(array('success' => false, 'msg' => "Anda harus menyetujui Syarat& Ketentuan"));
}
