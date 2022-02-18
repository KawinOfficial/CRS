<?php 
    require_once("./dbconfig.php");
    $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);

    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $dataJson = file_get_contents("php://input");
    $data = json_decode($dataJson);

    if($requestMethod == "GET"){
        $sql = "SELECT*FROM t_cars_status ;";
        $result = $conn -> query($sql);

        $carsStatus = array();
        while($row = $result-> fetchObject()){
            $carsStatus[] = [
                "cars" => $row -> cars, 
                "status" => new DateTime($row -> blockEnd) < new DateTime() ? true : false,
                "note" => $row -> note,
                "blockEnd" => $row -> blockEnd
                ];
        }

        echo json_encode($carsStatus);
    }

    if($requestMethod == "POST"){
        if(!empty($data)){
            $cars = $data -> cars;
            $status = $data -> status;
            $blockStart = $data -> blockStart;
            $blockEnd = $data -> blockEnd;
            $note = $data -> note;
            $datetime = (new DateTime())->format('Y-m-d H:i:s');

            $sql = "UPDATE t_cars_status SET status = '$status', blockStart = '$blockStart', blockEnd = '$blockEnd', note = '$note', datetime = '$datetime' WHERE cars = '$cars' ;";
            $result = $conn -> query($sql);
            if($result -> rowCount() > 0){
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
