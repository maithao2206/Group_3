function isLeapYear(mnam) {
	if ((mnam % 4 == 0 && mnam % 100 != 0) || mnam % 400 == 0)
	{
		return true;
	}
	return false;
} 
function NgayTrongThang(thang,nam) {
  switch (thang) {
	case 1: case 3: case 5: case 7: case 8: case 10: case 12: return 31;
	case 2:
		    if (isLeapYear(nam) == true) return 29;
	     	else return 28;
	default:
		return 30;
	}
}   
function NgayQuaKhu(ngay,thang,nam) {
  var date = new Date();
	if (ngay == 1) {
		if (thang == 1) {
			date.setMonth(11);
			date.setFullYear(nam - 1);
		}
		else {
			date.setMonth (thang - 1);
		}
		date.setDate(NgayTrongThang(date.getMonth(),date.getFullYear()));
  }
	else {
		date.setDate( ngay - 1);
	}
	return date;
}  
function InNgay() {
  var dHT = new Date();
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var date = prompt('Nhập vào ngày quá khứ', 'Ví dụ: Nov 09 2017');
  var arrDate = date.split(" ");
  var vitri; 
  for(i = 0; i < months.length;i++) {
      if(months[i] == arrDate[0]){
        vitri = i;
        break;
      }
  }
	// debugger;
  var d = new Date((vitri + 1)+ "/" + arrDate[1]+"/"+ arrDate[2]);
  var dTam = new Date((dHT.getMonth() + 1) + "/" + dHT.getDate() + "/" + dHT.getFullYear());
  var days = new Array(months[dTam.getMonth()] + " " + dTam.getDate());
  for( i = 0 ; i < 6;i++) {

    dTam =  new Date(NgayQuaKhu(dTam.getDate(),dTam.getMonth() + 1,dTam.getFullYear()).getMonth() + 1
                        + "/" + NgayQuaKhu(dTam.getDate(),dTam.getMonth() + 1,dTam.getFullYear()).getDate()
                        + "/" + NgayQuaKhu(dTam.getDate(),dTam.getMonth() + 1,dTam.getFullYear()).getFullYear()
                     );
    days[i + 1] = months[dTam.getMonth()] + " " + dTam.getDate();
    if(dTam.getDate() == d.getDate() && dTam.getMonth() == d.getMonth() && dTam.getFullYear() == d.getFullYear()) {
      break;
    }
  } 
  console.log(days);
}

