function welcome() {
    let welcome_text = '欢迎光顾buuu的妙妙屋~'
    if (document.referrer !== '') {
        let referrer = document.referrer.split("/")[2];
        welcome_text = "欢迎你，来自" + referrer.toUpperCase() + "的朋友！";
        if (referrer.toUpperCase() == document.domain.toUpperCase()) return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text,
        timer: 3000,
        showConfirmButton: false
    });
}
$(document).ready(() => {
    welcome()
})