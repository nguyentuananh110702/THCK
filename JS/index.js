$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   $("#btn2").click(function(){
       $("#myModal").modal();
   });

   function KiemTraTen(){
       var i =1;
       let mauKT =/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
       if($("#Name").val()==""){
           $("#tbName").html("không để trống");
           return false;
       }
       if(!mauKT.test($("#Name").val())){
        $("#tbName").html("mỗi ký tự đầu viết hoa không sử dụng số");
         return true;
       }
       $("#tbName").html("*");
       return true;
    }
    $("#Name").blur(KiemTraTen);

    function KiemTraCMND(){
        var mauKT = /^\d*$/;
        if($("#CMND").val()==""){
            $("#tbCMND").html("không để trống");
            return false;
        }
        if(!mauKT.test($("#CMND").val())){
            $("#tbCMND").html("dùng số 1 đến 100");
            return true;
        }else{
            var CMND = $("#CMND").val();
            if(CMND > 1 ){
                $("#tbCMND").html("từ 1 đến 1000000");
            }else{
                $("#tbCMND").html("*");
                return true;
            }
        }
    }

    $("#Ao").blur(KiemTraCMND);

    function KiemTraQUEQUAN(){
        var mauKT =/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)$/;
        if($("#QQ").val()==""){
            $("#tbQQ").html("không để trống");
            return false;
    }
    if(!mauKT.test($("#QQ").val())){
        $("#tbQQ").html("mỗi ký tự đầu viết hoa không sử dụng số");
         return true;
        }
        $("#tbQQ").html("*");
        return true;
    }
    $("#QQ").blur(KiemTraQUEQUAN);

    function KiemTraNTT(){
        if($("#NTT").val()==""){
            $("#tbNTT").html("không để trống");
            return false;
       }
       var today = new Date();
       var ntt = new Date($("#NTT").val());
       today = today.setDate(today.getDate() +7 );
       if(today > ntt){
        $("#tbNTT").html("phải sau ngày hiện tại 7 ngày");
        return false;
       }
       $("#tbNTT").html("*");
       return true;
    }
    $("#NTT").blur(KiemTraNTT);

    function KiemTraSDT(){
        var maKT = /^0\d{3}-\d{3}-\d{3}$/;
        if($("#SDT").val()==""){
            $("#tbSDT").html("không để trống");
            return false;
    }
    if(!mauKT.test($("#SDT").val())){
        $("#tbSDT").html("theo dạng 0xxx-xxx-xxx trong đó x là số");
         return true;
    }
    $("#tbSDT").html("*");
    return true;
}
     $("#SDT").blur(KiemTraSDT);

     $("#Save").click(function(){
    if(KiemTraTen()== true && KiemTraSoAo()==true && KiemTraSDT()==true&& KiemTraNTT()==true&& KiemTraDiaChi()==true){
        row ="<tr>";
        row += "<th>"+(i++)+"</th>";
        row += "<th>"+$("#Name").val() + " </th>";
        row += "<th>"+$("#CMND").val() + " </th>";
        row += "<th>"+$("#QQ").val() + " </th>";
        row += "<th>"+$("#NTT").val() + " </th>";
        row += "<th>"+$("#SDT").val() + " </th>";
        row += "<th>"+$("#ADD").val() + " </th>";
        $("#danhSach").append(row);
        $("#myModal").modal("hide");
    }
})

   
})

