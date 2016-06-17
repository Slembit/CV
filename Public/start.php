<?php  
  require_once("header.html"); 
session_start();


  $categoryArray = ['itt', 'ekotnomi', 'frovntend', 'backend', 'ekono2mi', 'fron2end', 'backe3nd', 'eko4nomi', 'fro5ntend', 'ba6ckend', 'ekonyomi', 'frontennd'];
?>
<div id="settingsDiv">
  <form action="slider.php" method="post">
    <?php foreach ($categoryArray as $category) {?>
      <input type="checkbox" name="<?php echo $category?>" id="checkbox-<?php echo $category?>"> <label class="checkboxLabel" for="checkbox-<?php echo $category?>"><?php echo $category?></label>
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
  <div id="sliderBg1" class="startSliderBg">
  </div>
  <div id="sliderBg2" class="startSliderBg">
  </div>
  <div id="sliderBg3" class="startSliderBg">
  </div>
    <div id="slider" class="sliderStart">

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