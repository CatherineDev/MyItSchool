<?php

if($_SERVER ['SCRIPT_FILENAME'] == 'C:/OpenServer/domains/admin/explorer.php'){
    header("Location: ./index.php");
   
};
//1

echo '<pre>';
print_r(scandir('./'));
echo '</pre>';

echo '<hr>';

echo '<pre>';
print_r(scandir('./../'));
echo '</pre>';

echo '<pre>';
print_r(scandir('./../../'));
echo '</pre>';

echo '<pre>';
print_r(scandir('./../../../'));
echo '</pre>';


echo getcwd();
echo '<br>';

chdir('../');
echo getcwd();
echo '<pre>';
print_r(scandir('./'));
echo '</pre>';
echo '<br>';

chdir('.././');
echo getcwd();
echo '<hr>';

$dd = opendir(__DIR__);

while (false !== ($currentdir = readdir($dd))){
    echo $currentdir . '<br>';
}
closedir($dd);

//2
//Создание, переименовывание, удаление каталога

chdir('./domains/');
chdir('./admin');

function createDir ($dirname){
    if (!file_exists($dirname)) {
        mkdir($dirname);
    }
    return $dirname;
}

createDir('./frontend');

function renameDir ($dirname, $dirname2){
    if (file_exists($dirname) && !file_exists($dirname2)){
        rename($dirname,$dirname2);
    }
    return $dirname;
    return $dirname2;
}

renameDir ('./frontend','./front-end');

function delDir ($dirname){
    if (file_exists($dirname)){
        rmdir($dirname);
    }
    return $dirname;
}

delDir('./frontend');

//3.Создание/переименование/удаление файлов 
function createFile ($file_name){
    if (!file_exists($file_name)) {
        fopen($file_name, 'a');
    }
    return $file_name;
}

createFile ('./front-end/index.html');

function renameFile ($file_name, $file_name2){
    if (file_exists($file_name) && !file_exists($file_name2)) {
        rename($file_name, $file_name2);
    }
    return $file_name;
    return $file_name2;
}

renameFile ('./front-end/index.html', './front-end/page.html');

function delFile ($file_name){
    if (file_exists($file_name)) {
        unlink($file_name);
    }
    return $file_name;
}

delFile ('./front-end/index.html');

// 4

$content = '<h1>Title</h1><p>Lorem ipsum, dolor sit текст рыба adipisicing elit. Fugiat, maxime.<p>';

function putContent ($content){
    $content = mb_convert_encoding($content, 'UTF-8');
    $content = html_entity_decode($content);
    file_put_contents('./front-end/page.html', $content);
    return $content;
}

putContent ($content);

createFile ('./data.php');

echo '<hr>';

?>

<form action="./data.php" method="POST" enctype="multipart/form-data">
    <input type="file" multiple name="files[]">
    <button type="submit">SEND</button>

</form>

<?php
