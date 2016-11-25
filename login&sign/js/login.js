
//登录验证

$(document).ready(function(e) {
    $.ajax({
        url: '/api/investManage/user_status',
        type: 'GET',
        dataType: 'json',
        contentType:'application/json',
        success:function(data){
            if(data.success == true){
                $('.login-btn').hide()
            }else{
                $('.login-btn').show();
                $('.entrance a').attr('href','javascript:;')
                $('.entrance a').click(function(){
                    dialog.confirmTips('您还未登录，请先登录您的账号','html/login/login.html')
                })
            }
        }
    });
});
