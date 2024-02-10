const currentUrl = window.location.href;

const disableOnBack = () => {
    window.history.forward();
};

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", function(e) {
  if (e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      e.preventDefault();
      window.alert("想看我代码? 🫵你坏坏🫵");     
  }
}, false);

if (!(currentUrl.includes("localhost"))) {
    document.onkeydown = (e) => {
        //禁用 F12 键
        if (e.keyCode == 123) {
            window.alert("想看我代码? 🫵你坏坏🫵");
            return false;
        }

        //禁用 I 键
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            window.alert("想看我代码? 🫵你坏坏🫵");
            return false;
        }

        //禁用 J 键
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            window.alert("想看我代码? 🫵你坏坏🫵");
            return false;
        }

        //禁用 U 键
        if (e.ctrlKey && e.keyCode == 85) {
            window.alert("想看我代码? 🫵你坏坏🫵");
            return false;
        }
    };
}


if (navigator.userAgent.match(/Android/i)) {

} else if (navigator.userAgent.match(/iPhone/i)) {

} else {

}