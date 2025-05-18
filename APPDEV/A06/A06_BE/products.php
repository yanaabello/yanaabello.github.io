<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include("connect.php");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
  case 'POST':
    handleGet($pdo, $input);
    break;
  case 'GET':
    handleGet($pdo, $input);
    break;
  default:
    echo json_encode(['message' => 'Invalid request method']);
    break;
}

function handleGet($pdo, $input)
{
  if (isset($input['categoryID'])) {
    $sql = "SELECT 
            p.productID,
            p.categoryID,
            p.productName,
            p.isAvailable,
            p.productCode,
            p.productPrice,
            p.img,
            s.sizeName,
            s.sizePrice,
            s.sizeCode
        FROM products p
        LEFT JOIN sizes s ON p.productID = s.productID
        WHERE p.categoryID = :categoryID";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['categoryID' => $input['categoryID']]);
  } else {
    $sql = "SELECT 
            p.productID,
            p.categoryID,
            p.productName,
            p.isAvailable,
            p.productCode,
            p.productPrice,
            p.img,
            s.sizeName,
            s.sizePrice,
            s.sizeCode
        FROM products p
        LEFT JOIN sizes s ON p.productID = s.productID";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
  }

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($result);
}

?>