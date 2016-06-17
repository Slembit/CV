<?php  
require_once("user.class.php");
require_once("header.html"); 
session_start();
// print_r($_SESSION['user']['token']);

$User = new User;


$allSkills = $User->skills($_SESSION['user']['token']);

?>

    <div id="settingsDiv">
    <form action="slider.php" id="skills" method="post">
    <?php foreach ($allSkills as $skill ) { ?>
      <input type="checkbox" value="<?php echo $skill['id']?>" id="checkbox-<?php echo $skill['id']?>"> <label class="checkboxLabel" for="checkbox-<?php echo $skill['id']?>"><?php echo $skill['skill']?></label>
    <?php } ?>
        <input type="submit" name="" value="Hitta mer" class="settingsBtn">

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
    <script type="text/javascript" src="main.js"></script>

</body>
</html>