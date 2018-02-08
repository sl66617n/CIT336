function disappear(){
  $(document).ready(function(){
  $("#gift").click(function(){
    $(this).hide();
  });
});
}

function popUp()
{
    alert("Hello, welcome to my web page!");
}

function showDateTime(){
  document.getElementById('demo').innerHTML = Date();
}