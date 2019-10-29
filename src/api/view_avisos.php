<?php
include 'connections.php';

$resuslt = mysqli_query ($link,"select * from notificacoes");
if(mysqli_num_rows ($resuslt)){

    while($row[]=mysqli_fetch_assoc($resuslt)){
        $json = json_encode($row);

    }
}else{
    echo 'Result not found';
}
    echo $json;
    mysqli_close($link);