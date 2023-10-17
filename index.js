function myFunction(){
    var name = document.getElementById("input_name").value;
    var phone = document.getElementById("input_phone").value;
    if (name == ""){
        alert("姓名不能为空！");
    }
    else if (phone == ""){
        alert("联系方式不能为空！")
    }
    else{
        alert("恭喜" + name + "用户提交成功！") ;
    }
}
    