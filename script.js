function login_check(obj) {
    let login=obj.login.value;
    let login_pattern=/[0-9a-z]+/i;
    let check=login_pattern.test(login);
    if (check==true) {
        alert("Логін введено правильно");
    }
    else alert("Е, ні, так діло не піде. Виправляй");
}