<?php 
    require_once("./dbconfig.php");
    $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);

    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $dataJson = file_get_contents("php://input");
    $data = json_decode($dataJson);

    if($requestMethod == "POST"){
        if(!empty($data)){
            $id = $data -> id; 
            $name = $data -> name;
            $code = $data -> code;
            $tel = $data -> tel;
            $agent = $data -> agent;
            $purpose = $data -> purpose;
            $datetime = (new DateTime())->format('Y-m-d H:i:s');

            $sql = "UPDATE t_cars SET name='$name',agent='$agent',tel='$tel',purpose='$purpose'  WHERE id='$id' AND code='$code';";
            $result = $conn -> query($sql);
            
            if ($result -> rowCount() > 0) {
                $result -> closeCursor();
                echo json_encode(['message' => 'Update Data Complete', 'state' => true]);
                // http_response_code(200);
            }else{
                echo json_encode(['message' => 'Error', 'state' => false]);
                // http_response_code(400);
            }
        }else{
            echo json_encode(['message' => 'Error', 'state' => false]);
            // http_response_code(400);
        }
    }
?>