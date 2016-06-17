
<?php  
require_once("user.class.php");
  require_once("header.html"); 
session_start();




// print_r($_SESSION['user']['token']);

$User = new User;


$allSkills = $User->skills($_SESSION['user']['token']);

?>

<div id="settingsDiv">
  <form action="slider.html" method="post">
    <?php foreach ($allSkills as $index ) {
  foreach ($index as $skill => $value) {?>
      <input type="checkbox" name="<?php echo $value?>" id="checkbox-<?php echo $value?>"> <label class="checkboxLabel" for="checkbox-<?php echo $value?>"><?php echo $value?></label>
   <?php    }
} ?>

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