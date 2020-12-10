$rows mysqli_fetch_array($select);
array_push ($data, $rows['name']);
}
}
$result json_encode(array('success' => true, 'int_event' => $int_event, 'result' => $data));
echo $result;
}
else if($postjson['aksi']=='update_int_event'){
$update = mysqli_query($mysqli, "UPDATE 'user' SET int_event = '?" WHERE 'email' = '$postjson[email]’");
if($update){
$result = json_encode(array('update' => true));
}
echo $result;
}
else if($postjson['aksi']=='cek_update_int_event"){
$cek = mysqli_query($mysqli, "SELECT * FROM ‘category’");
$num = mysqli_num_rows($cek);
$category [];
