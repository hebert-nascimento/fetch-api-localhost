<?php
$servidor = "localhost";
$usuario = "root";
$senha = "123456";
$dbname = "descart_bd";

//Criar a conexao
$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);

// FETCH DATA
$sql = mysqli_query($conn, "SELECT nome,email,data FROM user");

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));