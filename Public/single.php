<html>
  <head>
  <title>My Now Amazing Webpage</title>
  <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
  <style type="text/css">
  body{

  }
  #singleCv{
    width: 100%;
    height: 100%;
    color: white;
    font-weight: bold;
    background-size: cover;
  }
    .whiteFrame{
      border: 5px solid white;
      color: white;
    }
    .whiteFrame div{
      width: 100%;
      height: 100%;
      text-align: center;
        -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    }
    h3{
      color:pink;
    }


  </style>
  </head>
  <body>
  <div id="singleCv"></div>
  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="slick/slick.min.js"></script>
   <script type="text/javascript" src="main.js">></script>

  </body>
</html>
<?php 
if(isset($_GET['id'])){
  $singleId = $_GET['id'];
}
?>
<script>
  window.addEventListener('load', getSingle(<?php echo $singleId;?>), false ); 
</script>