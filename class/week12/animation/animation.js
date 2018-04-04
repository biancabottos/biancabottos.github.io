

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chindogu.com</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="startStyle.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Attention:</h4>
        </div>
        <div class="modal-body">
          <p>Please fill out both fields&hellip;</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.modal -->
  <div class="container">
    <div class="row">
      <div class="col-md-12 logo">
        Chindogu.com
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="selectContainer flexSpaceAround">
          <div class="selectLabel">
            Choose another product type :
          </div>
          <div>
            <select class="form-control" name="">

    </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 adsLeft">

      </div>
      <div class="col-md-8 output flexSpaceAround">

      </div>
      <div class="col-md-2 adsRight">

      </div>
    </div>
    <div class="row">
      <div class="col-md-12 footer">
        <hr>
        <span>© 2018 Chindogu.com</span>
      </div>
    </div>
  </div>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script>
    function getAds() {

      var ads = [
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad1.jpeg",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad2.jpg",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad3.jpeg",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad4.jpeg",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad5.jpg",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad6.png",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad7.png",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad8.jpg",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad9.png",
        "https://andersonguelphjs.github.io/class/week11/img/ads/ad10.jpeg"
      ];
      //write 3 ads on either side, using a random url from the ads array
      for (var i = 0; i < 3; i++) {
        $(".adsLeft").append("<div class='ad'><img src='" + ads[Math.floor(Math.random() * 10)] + "'/></div>");

        $(".adsRight").append("<div class='ad'><img src='" + ads[Math.floor(Math.random() * 10)] + "'/></div>");
      }

    }

    function getOptions() {
      var html = "";
      var options = {
        "Anderson 1": "https://andersonguelphjs.github.io/class/week11/myJSON.json",
        "Anderson 2": "https://andersonguelphjs.github.io/class/week11/myJSON2.json"
        //after you will create a JSON file which will be an option here
      };
      //loop through the object
      for (var key in options){
        html+="<option value='"+options[key]+"'>"+key+"</option>";
      }
      //write the options to the select
      $(".selectContainer").find("select").html(html);

    }
//will contain all the events
    function initEvents(){
      //do this when user changes teh select
        $(".selectContainer").find("select").on("change", function(){
          var val = $(this).val();

          if (val){//if val exists
            $.get(val)//use the url to get the json
            .done(function(data){//success
              console.log("success get select json! ");
              console.dir(data);
              writeJSONToDOM(data.Sheet1);
            })
            .fail(function(data){//fail
              console.log("fail get select json! ");
              console.dir(data);
            })
          }
          //alert("value "+val);
        })//end select change
    }
//event delegation ; put this on any of this kind that shows up
// $(".buyButton").on("click", function()){
//   console.log("clicked buy!");
// })
$("body").on("click",".buyButton", function(){
  console.log("clicked buy!");
  //closest goes up the tree to find the first match
  var thisItem = $(this).closest(".itemContainer");
  var itemId = $(this).attr("data-id");

  //find means go down the tree
  thisItem.find(".buttonContainer").remove();

  //write this item + form html
var html = "<div data-id='"+itemId+"' class='itemContainer'>"+thisItem.html()+"</div>"+formHtml;

$(".output").html(html);

//prevent multiple click events
  return false;
})

$(".logo").on("click", function(){
  window.location.reload();

})

$("body").on("click", ".submit", function(){
console.log("clicked submit");
//pseudocode:
//check if username and password is filled
//if not show the modal
//if yes, show a confirmation message
var username = $(".username").val();
var password = $(".password").val();

if(username && password){
console.log("both are filled");
var randomNumber = Math.floor(Math.random()*1000000);
$(".checkoutContainer").html("div class='confirmationMessage'>Thank you for your order<br>Confirmation #"+randomNumber+"</div>");
//simulate sending to data to the database;
//creating a json object with some info and writing to the screen
//add a confirmation message to the screen
var itemId = $(".itemContainer").attr("data-id");
//$(post) simulation
var postObj={
  "itemId":itemId,
  "username":username,
  "password":password,
  "cNumber":randomNumber
}

$(".checkoutContainer").append("<br><br>"+JSON.stringify(postObj));

}

else{//at least one is empty so show the modal
  $(".modal").modal("show");
}

})

//end initEvents

    function writeJSONToDOM(d){
      var html="";

      for(var jsonObj in d){
        html+="<div data-id='"+jsonObj+"' class='itemContainer'>";
        for (var key in d[jsonObj]){//loop through the keys of each object

          var str = String(d[jsonObj][key]);

          if (key==="itemId"){
            continue;//continue mean skip this iteration of the loop
          }
          if (str.indexOf("github")!==-1){
            //if 'github' text appears in the value (-1 means not found)
            html+="<div class='imageContainer'><img src='https://"+d[jsonObj][key]+"'></div>";
          }
          else{//otherwise use the key as teh class and teh value as teh text
            html+="<div class='"+key+"'>"+d[jsonObj][key]+"</div>";
          }
        }//inner loop

       html+="<div class='buttonContainer'>";
       html+="<button type='button' class='buyButton btn-default btn'>Buy</button>";
       html+="</div>";
       html+="</div>";

     }//first for loop

        //loop this here
      $(".output").html(html);
    }

    var formHtml="";
    var formUrl="https://samanthalaaa.github.io/class/week12/partial.html";

    $.get(formUrl)
    .done(function(data){//success
      console.log("success get formHtml! ");
      console.log(data);
      formHtml=data;
      //writeJSONToDOM(data.Sheet1);
      $(document).ready(function() {
        getOptions();
        getAds();
        initEvents();
        $(".selectContainer").find("select").change();
        $("body").fadeIn();
      })
    })
    .fail(function(data){//fail
      console.log("fail get select json! ");
      console.dir(data);
    })








  </script>
</body>

</html>
