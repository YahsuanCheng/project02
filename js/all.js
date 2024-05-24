
$(document).ready(function () {

    function memberState(){
        let state = localStorage.getItem('memberState');
        console.log(state);
        if(JSON.parse(state)){
            $('.unauth').hide()
            $('.auth').show()
        } else{
            $('.unauth').show()
            $('.auth').hide()
        }
    }
    memberState();


    firebase.auth().onAuthStateChanged(function(user) {
        console.log('user',user);
        let state = localStorage.getItem('memberState');
        if (user) {
            if(!JSON.parse(state)){

                $('.login').hide();
                $('.logout-success').hide();
                $('#exampleModal').modal('show');
                $('#loader').show();

              setTimeout(function(){
                $('#loader').hide();
                $('.login-success').show();
              },1000)
            }
          
        }
      });

      $('#login').on('click', function () {
        firebase.auth().signOut().then(function(){
          $('.login').show();
          $('.login-success').hide();
          $('.logout-success').hide();

          $('#exampleModal').modal('show');

       
        })
    });
      $('#logout').on('click', function () {

          firebase.auth().signOut().then(function(){
            $('.login').hide();
            $('.login-success').hide();
            $('.logout-success').show();

            $('#exampleModal').modal('show');

          }).catch(function(err){
            console.log('Logout fail', err)
          })
      });
      $('.btn-close').on('click', function(){
        if($('.login-success').css('display') === 'block') {
            localStorage.setItem('memberState','true')
            setTimeout(function(){
                $('.login').show();
                $('.login-success').hide();
                $('.logout-success').hide();
                },1000)
        };
        if($('.logout-success').css('display') === 'block'){
            localStorage.setItem('memberState','false')
            setTimeout(function(){
            $('.login').show();
            $('.login-success').hide();
            $('.logout-success').hide();
            },1000)
            
        };;
        memberState()
        

      })
});