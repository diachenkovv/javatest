function prov_adress(obj) {
    var adr=obj.mail.value;
    var par=obj.pas.value;
    var adr_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var par_pattern=/[0-9a-z]+/i;
    var prov=adr_pattern.test(adr);
    var prov1=par_pattern.test(par);
    if (prov==true &&  prov1==true) {
  alert("Вы зарегистрированы!");
    }
    else {
          alert("Введенные данные некорректны!");
    }
  }
  