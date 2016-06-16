<html>
  <head>
  <title>My Now Amazing Webpage</title>
  <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
  <style type="text/css">
  body{
    background-color:black;
    color: white;
  }


    .header{
      height: 20px;
      width: 100%;
      color: white;
      position:absolute;
      z-index: 99;
    }
    .menuLogo{
      margin-left: 10px;
    }
    .menuBtn{
      float:right;
      margin-right: 20px;
    }
    #settingsDiv{
      height: 30vh;
      color: white;
      padding-top: 50px;

    }
    #slider{
      height: 50vh;
      z-index: 999;

    }
    input[type=checkbox] {
   position: absolute;
   top: -9999px;
   left: -9999px;
   /* For mobile, it's typically better to position checkbox on top of clickable
      area and turn opacity to 0 instead. */
}
input[type=checkbox]:checked + label {
  color: black;
  background-color: white;

  font-style: normal;
} 
.checkboxLabel{
  padding: 5px;
  border: 3px solid white;
  display: inline-block;
  text-transform: uppercase;
}
.settingsBtn{
  width: 100%;
      background-color: white;
    border: none;
    color: black;
    margin-top: 3px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

    .whiteFrame{
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
    .header{
      height: 20px;
      width: 100%;
      color: white;
      position:absolute;
      z-index: 99;
    }
    .menuLogo{
      margin-left: 10px;
    }
    .menuBtn{
      float:right;
      margin-right: 20px;
    }
    .profileContent{
      padding: 20% 10% 80% 10%;

    }    
    .profileContentInner{

      border: 3px solid white;
    }
    #sliderBg1{
      position: absolute;
      width: 100%;
      height: 50vh;

    }
    #sliderBg2{
      position: absolute;
      width: 100%;
      height: 50vh;
      opacity: 0;
    }    
    #sliderBg3{
      position: absolute;
      width: 100%;
      height: 50vh;
      opacity: 0;
    }

  </style>
  </head>
  <body>
<header class="header">
  <span class="menuLogo">logga</span>
  <span class="menuBtn"><a href="">menu</a></span>
</header>
<?php  
  $categoryArray = ['it', 'ekonomi', 'frontend', 'backend'];
?>
<div id="settingsDiv">
  <form action="slider.html" method="post">
    <?php foreach ($categoryArray as $category) {?>
      <input type="checkbox" name="IT" id="checkbox-<?php echo $category?>"> <label class="checkboxLabel" for="checkbox-<?php echo $category?>"><?php echo $category?></label>
   <?php  } ?>
   <input type="submit" name="" value="Hitta mer" class="settingsBtn">
     <!-- <input type="checkbox" name="IT" id="checkbox-it"> <label class="checkboxLabel" for="checkbox-it">IT</label>
      <input type="checkbox" name="ekonomi" id="checkbox-ekonomi"> <label class="checkboxLabel" for="checkbox-ekonomi">Ekonomi</label>
      <input type="checkbox" name="frontend" id="checkbox-frontend"> <label class="checkboxLabel" for="checkbox-frontend">Front-End</label>
      <input type="checkbox" name="backend" id="checkbox-backend"> <label class="checkboxLabel" for="checkbox-backend">Back-End</label>
      <input type="submit" name="" value="Hitta mer" class="settingsBtn">-->
  </form>

</div>
  <h2>Senaste:</h2>
  <div id="sliderBg1">
  </div>
  <div id="sliderBg2">
  </div>
  <div id="sliderBg3">
  </div>
    <div id="slider">

      <div  id="slideItem0">your content1</div>

      <div id="slideItem1">your content2</div>

      <div id="slideItem2">your content3</div>

      <div id="slideItem3">your content3</div>

      <div id="slideItem4">your content3</div>

      <div id="slideItem5">your content3</div>

    </div>

  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="slick/slick.min.js"></script>
  <script type="text/javascript" src="main.js">></script>

  </body>
</html>