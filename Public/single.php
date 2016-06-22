<?php  
require_once("header.html"); 
session_start();

if(isset($_GET['id'])){
  $singleId = $_GET['id'];
}
?>

<div id="singleCv"></div>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>
<script type="text/javascript" src="main.js">></script>
<script>
  window.addEventListener('load', getSingle(<?php echo $singleId;?>), false ); 
</script>
</body>
</html>

