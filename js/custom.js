$(function (){

    var $data = $('#data');
    var $first_name = $('#first_name');
    var $last_name =$('#last_name');
    
    // Get data from api
    $.ajax({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
        success: function(data) {
          $.each(data.data,function(i,data){
            $data.append('<li><strong>First Name</strong> :  '+ data.first_name+ '</br>'+'<strong>Last Name</strong> :  '+ data.last_name +'</li>');
        
           console.log( this.first_name);    
        });
    },
    error: function() {
        alert('error loading data');
    }
    
    
    });
        //Post data through api
      $('#add-data').on('click', function(){
    
        //Create the object that will send
        var obj ={
            first_name: $first_name.val(),
            last_name: $last_name.val(),
    
    };
    $.ajax({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        data: obj,
        success: function(Newdata) {
    console.log(Newdata);
           $data.append('<li>name:  '+ Newdata.first_name+ ',last name:  '+ Newdata.last_name +'</li>');
           console.log("done!");
        },
        error: function() {
            console.log("error");
            alert('error saving new data');
    
        }
      });
      });
    });