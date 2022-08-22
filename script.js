function registrUser() {
    const emailUser = prompt('Enter Youre Email');
    if (emailUser !== 'admin@test.io') {
        alert('Wrong Email');
        return;
    } 
    const passUser = prompt('Enter youre password');
    if (passUser !== 'admin1234') {
        alert('Wrong Password');
    } else {
        alert('Nice! Correct Login');
    }
} 

registrUser();