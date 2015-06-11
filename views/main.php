  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta http-equiv="imagetoolbar" content="no" />
  <meta name="keywords" content="slideman, sliderman.js, javascript slider, jquery, slideshow, effects" />
  <meta name="description" content="Sliderman.js - will do all the sliding for you :)" />




<meta charset='UTF-8'>
  <link rel='stylesheet' href='css/style.css'>
  
  <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
    
    <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js'></script>
    <script src='js/jquery.color-RGBa-patch.js'></script>
    <script src='js/example.js'></script>

<style type="text/css">
    * { margin: 0; outline: none; }
    body { background: rgb(206,220,231); /* Old browsers */
background: -moz-linear-gradient(left,  rgba(206,220,231,1) 0%, rgba(89,106,114,1) 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(206,220,231,1)), color-stop(100%,rgba(89,106,114,1))); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(left,  rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(left,  rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(left,  rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%); /* IE10+ */
background: linear-gradient(to right,  rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cedce7', endColorstr='#596a72',GradientType=1 ); /* IE6-9 */
 }
    .c { clear: both; }
    #wrapper { margin: 0 auto; padding: 0 40px 60px 40px; width: 480px; }
    h2 { padding: 20px 0 10px 0; font-size: 24px; line-height: 40px; font-weight: normal; color: #adc276; text-shadow: 0 1px 3px #222222; }
  </style>

  <!-- sliderman.js -->
  <script type="text/javascript" src="js/sliderman.1.3.8.js"></script>
  <link rel="stylesheet" type="text/css" href="css/sliderman.css" />
  <!-- /sliderman.js -->
</head>
</div>
    <div class="container">
        <div id="contextAbout"  align="center">
      
           <center><h1><div class = "skills">I build and create software</div></h1></center><br/>
                <div id = "izquierda">
                 <center><h3 align="justify" style=" -moz-box-shadow:3px 3px 5px 6px #5F5F61;-webkit-box-shadow: 3px 3px 5px 6px #5F5F61;box-shadow:3px 3px 5px 6px #000000;padding-bottom:20px; padding-top:20px; padding-right: 20px; padding-left:20px; border-right:20px; border-radius:20px; font-family: sans-serif;font-size: 17px; color:#ffffff; font-weight: 300; font-style: normal; background-color:#54B7C4">I'm a very passionate developer. I develop software in <strong>Denver, Colorado</strong>. 
                 I can develop basic to advanced projects. Can work on variety of applications.
            Some of my skills include: Software Engineering, Web Development, Android applications and a growing understanding of the computer science enviroment.
                 </h3></center>
                 </div>
            
         
        </div>
      </div>
<center>
  <table height="500"width="900"align="center" border="0">
    <tr>
      <td  id= "pic"align="center"><br/></br><img id = "foto" src = "assets/henry.jpg" height = "300" width="300" /><br/><br/><br/><br/><br/>
      <div style="font-family: sans-serif;font-size: 25px; padding-bottom:20px; font-weight: bold; font-style: normal; color:yellow"><u>Snippes of code written by me</u></div><div id="wrapper">
      <br/>
    <div id="examples_outer">

      <div id="slider_container_2">

        <div id="SliderName_2" class="SliderName_2">
          <img src="img/1.jpg" width="700" height="450" alt="Demo2 first" title="Demo2 first" usemap="#img1map" />
          <map name="img1map">
            <area href="#img1map-area1" shape="rect" coords="100,100,200,200" />
            <area href="#img1map-area2" shape="rect" coords="300,100,400,200" />
          </map>
          <div  style="color:#FCA22B ; font-weight:300px; font-size:30px" class="SliderName_2Description"><center><strong>JAVASCRIPT</strong></center></div>
          <img src="img/2.jpg" width="600" height="450" alt="Demo2 second" title="Demo2 second" />
          <div  style="color:#FCA22B ; font-weight:300px; font-size:30px" class="SliderName_2Description"><center><strong>PHP</strong></center></div>
          <img src="img/3.jpg" width="600" height="450" alt="Demo2 third" title="Demo2 third" />
          <div  style="color:#FCA22B ; font-weight:300px; font-size:30px" class="SliderName_2Description"><center><strong>JAVA</strong></center></div>
          <img src="img/css2.jpg" width="400" height="550" alt="Demo2 fourth" title="Demo2 fourth" />
          <div style="color:#FCA22B ; font-weight:300px; font-size:30px" class="SliderName_2Description"><center><strong>CSS</strong></center></div>
          <img src="img/ccc.jpg" width="600" height="450" alt="Demo2 fourth" title="Demo2 fourth" />
          <div style="color:#FCA22B ; font-weight:300px; font-size:30px" class="SliderName_2Description"><center><strong>C++</strong></center></div>
        </div>
        <div class="c"></div>
        <div id="SliderNameNavigation_2"></div>
        <div class="c"></div>

        <script type="text/javascript">
          effectsDemo2 = 'rain,stairs,fade';
          var demoSlider_2 = Sliderman.slider({container: 'SliderName_2', width: 500, height: 400, effects: effectsDemo2,
            display: {
              autoplay: 1500,
              loading: {background: '#000000', opacity: 0.5, image: 'img/loading.gif'},
              buttons: {hide: true, opacity: 1, prev: {className: 'SliderNamePrev_2', label: ''}, next: {className: 'SliderNameNext_2', label: ''}},
              description: {hide: false, background: '#000000', opacity: 0.7, height: 50, position: 'bottom'},
              navigation: {container: 'SliderNameNavigation_2', label: '<img src="img/clear.gif" />'}
            }
          });
        </script>

        <div class="c"></div>
      </div>
      <div class="c"></div>
    </div>

    <div class="c"></div>
  </div>
  
      </td>
  </td>
    <td id = "bebe"><div id= "teck"><h1>Technical Skills:</h1></div><br></div>
    
    <h3><center><p style="-moz-box-shadow:3px 3px 5px 6px #5F5F61;-webkit-box-shadow: 3px 3px 5px 6px #5F5F61;box-shadow:3px 3px 5px 6px #000000; background-color:#2890D1; border-radius:20px; font-family: sans-serif;font-size: 17px; padding-bottom:20px; font-weight: 300; font-style: normal;padding-top:20px;color:#ffffff">Computer programmer that is proficient in the following programming languages:</p></center>
    <ul style="font-family: sans-serif;font-size: 18px; padding-bottom:20px; font-weight: bold; font-style: normal;padding-top:20px;color:#286978">
    <li>C++</li>
    <li>C</li>
    <li>C#</li>
    <li>Java</li>
    <li>Python</li>
    </ul> 
    <hr class="fancy-line"></hr>
    <div id= "mundo"><img id = "fot" src = "assets/developer.jpg" height="150" width="280" /></div>
    <center><p style="-moz-box-shadow:3px 3px 5px 6px #5F5F61;-webkit-box-shadow: 3px 3px 5px 6px #5F5F61;box-shadow:3px 3px 5px 6px #000000; background-color:#2890D1; border-radius:20px; font-family: sans-serif;font-size: 17px; padding-bottom:20px; font-weight: 300; font-style: normal;padding-top:20px;color:#ffffff"  >Web Designer & Developer that will put together the perfect package for your work.</p></center>
    <ul style="font-family: sans-serif;font-size: 18px; padding-bottom:18px; font-weight: bold; font-style: normal;padding-top:20px;color:#286978" >
    <li>DOM</li>
    <li>Events & Propagation</li>
    <li>HTTP (Get/Post)</li>
    <li>ASP.NET</li>
    <li>XML</li>
    <li>PHP</li>
    <li>Ruby on Rails</li>
    <li>HTML5</li>
    <li>CSS3 & Selectors</li>
    <li>Javascript patterns (scope/closure)</li>
    <li>AJAX</li>
    <li>JSON</li>
    <li>jQuery</li>
    </ul>
    <hr class="fancy-line"></hr>
    </div>
    </h3>
    
  </td>
    <tr/>
    
  </table>
  <br/>   
  </center>  
  

