<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    // Задание 1
    $a=10;
    $b=2;
    echo $a + $b .'</br>';
    echo $a - $b .'</br>';
    echo $a * $b .'</br>';
    echo $a / $b .'</br>';

    //Задание 2 x = 2,y = 6 и z = 9. Найдите (x+1)4−2(z−2x^2+y^2)

    $x = 2;
    $y = 6;
    $z = 9;
    echo '<hr/>';
    echo ($x+1)*4-2*($z−2* $x**2+$y**2);

    // Задание 3
    echo '<hr/>';

    $a=17;
    $b=10;
    $c = $a - $b;
    $d = 7;
    $result = $c + $d;

    echo  $result;

    // Задание 4 
    echo '<hr/>';

    $text1='Привет';
    $text2='Мир!';

    echo $text1 . ' ' . $text2;

    // Задание 5 

    echo '<hr/>';

    function hello($name) {
        echo 'Привет,' . " " . $name . '!';
    }
    hello('Katrin');

    // Задание 6 
   echo '<hr/>';

   $num = '12345';

   echo $num[0] + $num[1] + $num[2] + $num[3] + $num[4];
 
   // Задание 7

    echo '<hr/>';

    $min = 60;

    $hour = $min*60;
    echo  $hour .'</br>';

    $day = $hour * 24;
    echo  $day .'</br>';

    $month = $day * 30;
    echo  $month .'</br>';

    $year = $month * 12;
    echo  $year .'</br>';

    $today = $year * 12 + $day * 19 + $hour * 12 + $min * 17;

    echo  $today;

    // Задание 8 

    echo '<hr/>';

    $hour = 12;
    $min = 21;
    $sec =15;

    echo $hour . ':' . $min . ':' . $sec;

   // Задание 9

    echo '<hr/>';
    $var = 1;
    $var += 12;
    $var -= 14;
    $var *= 5;
    $var /= 7;
    $var += 1;
    $var -= 1;
    echo $var;

  // Задание 10
  echo '<hr/>';

  define ('LASTNAME', 'Ignatovec');

  $name = 'Ekaterina';
  $second_name = 'Petrovna';
  $age = 30;
  $lastname = LASTNAME;

 //var_dump(defined('LASTNAME'));
 
  if (LASTNAME)
      echo ("Меня зовут {$lastname} {$name[0]}. {$second_name[0]}. </br> Мне {$age} лет.");
    ?>
  
</body>
</html>