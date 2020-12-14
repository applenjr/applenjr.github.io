var res = ""; // 考生data(JSON)
var index = -1; // 查询到的考生下标

function test(result) {
  //回调函数名称(indexDemo)，需要与 src 中一致，而且要与文件地址中名一致。jsonp格式 名称({})
  //不然无法获取到对应的文件
  //console.log(result); //打印 indexDemo.json 中的数据
  res = result;
}

// 重置信息显示模块
function Clear() {
  // 反馈考生错误信息
  var Errorinfo = document.getElementById("errorinfo");
  var Errorname = document.getElementById("errorname");
  var Errornumber = document.getElementById("errornumber");
  var Error = document.getElementById("error");

  // 反馈考生正确信息
  var Username = document.getElementById("username");
  var Usernumber = document.getElementById("usernumber");
  var Userclassroomnumber = document.getElementById("userclassroomnumber");
  var Userclassroom = document.getElementById("userclassroom");
  var UsernameSpan = document.getElementById("usernameSpan");
  var UsernumberSpan = document.getElementById("usernumberSpan");
  var UserclassroomnumberSpan = document.getElementById(
    "userclassroomnumberSpan"
  );
  var UserclassroomSpan = document.getElementById("userclassroomSpan");
  Errorinfo.innerHTML = "";
  Errorname.innerHTML = "";
  Errornumber.innerHTML = "";
  Error.innerHTML = "";
  Username.innerHTML = "";
  Usernumber.innerHTML = "";
  Userclassroomnumber.innerHTML = "";
  Userclassroom.innerHTML = "";
  UsernameSpan.innerHTML = "";
  UsernumberSpan.innerHTML = "";
  UserclassroomnumberSpan.innerHTML = "";
  UserclassroomSpan.innerHTML = "";
}
function Search() {
  document.getElementById("Part2boxinfo").className = "part2boxinfo";
  // 考生输入信息
  var Name = document.getElementById("name").value;
  var Number = document.getElementById("number").value * 1;

  // 反馈考生错误信息
  var Errorinfo = document.getElementById("errorinfo");
  var Errorname = document.getElementById("errorname");
  var Errornumber = document.getElementById("errornumber");
  var Error = document.getElementById("error");

  // 反馈考生正确信息
  var Username = document.getElementById("username");
  var Usernumber = document.getElementById("usernumber");
  var Userclassroomnumber = document.getElementById("userclassroomnumber");
  var Userclassroom = document.getElementById("userclassroom");
  var UsernameSpan = document.getElementById("usernameSpan");
  var UsernumberSpan = document.getElementById("usernumberSpan");
  var UserclassroomnumberSpan = document.getElementById(
    "userclassroomnumberSpan"
  );
  var UserclassroomSpan = document.getElementById("userclassroomSpan");

  // 考生搜索格式错误
  if (Name == "" || Number == "") {
    if (Name == "" && Number == "") {
      Clear();
      Errorinfo.innerHTML = "请填写考生姓名和准考证号! ";
    } else if (Name == "") {
      Clear();
      Errorname.innerHTML = "请填写考生姓名! ";
    } else if (Number == "") {
      Clear();
      Errornumber.innerHTML = "请填写正确的准考证号! ";
    }
  }
  // 考生搜索格式正确
  else if (Name != "" && Number != "") {
    if (Number < 102930210107888 || Number > 102930210107893) {
      Clear();
      Errornumber.innerHTML = "请填写正确的准考证号! ";
    } else {
      Clear();
      // 循环遍历
      // for (i = 0; i < res.length; i++) {
      //   if (res[i].考生姓名 == Name && res[i].考生编号 == Number) {
      //     // console.log(i);
      //     Clear();
      //     document.getElementById("Part2boxinfo").className =
      //       "part2boxinfo-active";
      //     Username.innerHTML = "考生姓名: ";
      //     UsernameSpan.innerHTML = res[i].考生姓名;
      //     Usernumber.innerHTML = "考生编号: ";
      //     UsernumberSpan.innerHTML = res[i].考生编号;
      //     Userclassroomnumber.innerHTML = "考场号: ";
      //     UserclassroomnumberSpan.innerHTML = res[i].考场号;
      //     Userclassroom.innerHTML = "教室号: ";
      //     UserclassroomSpan.innerHTML = res[i].教室号;
      //     break;
      //   }
      // }
      // if (i == 6) {
      //   Clear();
      //   document.getElementById("Part2boxinfo").className = "part2boxinfo";
      //   Error.innerHTML = "未找到相关信息";
      // }

      // 对半搜索迭代遍历
      function half(Number, res, left, right) {
        if (left == right) {
          index = left;
          return;
        } else if (Number == res[parseInt((left + right) / 2)].考生编号) {
          index = parseInt((left + right) / 2);
          return;
        } else if (Number < res[parseInt((left + right) / 2)].考生编号) {
          half(Number, res, left, parseInt((left + right) / 2) - 1);
        } else if (Number > res[parseInt((left + right) / 2)].考生编号) {
          half(Number, res, parseInt((left + right) / 2) + 1, right);
        }
      }
      half(Number, res, 0, res.length - 1);
      // console.log(index);
      if (res[index].考生编号 == Number) {
        if (res[index].考生姓名 != Name) {
          Clear();
          document.getElementById("Part2boxinfo").className = "part2boxinfo";
          Error.innerHTML = "未找到相关信息";
        } else if (res[index].考生姓名 == Name) {
          Clear();
          document.getElementById("Part2boxinfo").className =
            "part2boxinfo-active";
          Username.innerHTML = "考生姓名: ";
          UsernameSpan.innerHTML = res[index].考生姓名;
          Usernumber.innerHTML = "考生编号: ";
          UsernumberSpan.innerHTML = res[index].考生编号;
          Userclassroomnumber.innerHTML = "考场号: ";
          UserclassroomnumberSpan.innerHTML = res[index].考场号;
          Userclassroom.innerHTML = "教室号: ";
          UserclassroomSpan.innerHTML = res[index].教室号;
        }
      }
    }
  }
}
