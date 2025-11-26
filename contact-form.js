const sendbtn = document.getElementById ('contact-form-send-btn');
const contactFrom = document.getElementById('contact-form');
contactFrom.addEventListener('submit', (event) =>{
    const name = event.target.sender.value;
    const message = event.target.message.value;

    const subject = encodeURIComponent(`${name} says hello`);
    const body = encodeURIComponent(message);

    window.location.herf = `mailto:et.yoan.h@eduiteh.eu?subject=${subject}&body=${body}`;
    console.log("sent");
});  

