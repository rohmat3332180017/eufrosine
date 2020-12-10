$result json_encode(array('success' => false, 'msg' => Terjadi Kesalahan'));
}
}
}
echo $result;
}
else if($postjson['aksi']=='load_category'){
$email = $postjson['email'];
$loadCategoryUser = mysqli_query($mysqli, "SELECT * FROM 'user’ WHERE 'email' = ‘$email’");
$rowsCategoryUser = mysqli_fetch_array($loadCategoryUser);
$int_event = $rowsCategoryUser['int_event'];
$loadCategory = mysqli_query($mysqli, "SELECT * FROM 'category’");
$rowsCategory = mysqli_fetch_array($loadCategory);
$sumRows = mysqli_num_rows($loadCategory);
$data = [];
if($loadCategory){
for($i=1;$i<=$sumRows;$i++){
$select = mysqli_query($mysqli, "SELECT * FROM ‘category' WHERE 'id' = "$i’");
