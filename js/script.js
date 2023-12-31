 document.addEventListener('DOMContentLoaded', function() {
        const confirmButton = document.getElementById('confirmButton');
        const invitationDiv = document.getElementById('invitation');
        const usernameInput = document.getElementById('username');
    
        confirmButton.addEventListener('click', function() {
            const name = usernameInput.value;
            if (name) {
                localStorage.setItem('attendanceConfirmed', true);
                localStorage.setItem('guestName', name);
                usernameInput.disabled = true;
                confirmButton.style.display = 'none';
                invitationDiv.innerHTML = "<p>¡Gracias! Respondeme con un SI! <br> a mi Whatsapp</p>";
            }
        });
    
        const attendanceConfirmed = localStorage.getItem('attendanceConfirmed');
        const guestName = localStorage.getItem('guestName');
    
        if (attendanceConfirmed && guestName) {
            usernameInput.value = guestName;
            usernameInput.disabled = true;
            confirmButton.style.display = 'none';
            invitationDiv.innerHTML = "<p>¡Gracias! Respondeme con un SI! <br> a mi Whatsapp</p>";
        }
    });







// console.log("ENTRO A JS");
// document.addEventListener('DOMContentLoaded', function() {
//     const confirmButton = document.getElementById('confirmButton');
//     const invitationDiv = document.getElementById('invitation');
//     const usernameInput = document.getElementById('username');

//     confirmButton.addEventListener('click', function() {
//         console.log("CONFIRMA");
//         localStorage.setItem('attendanceConfirmed', true);
//         invitationDiv.innerHTML = "<p>¡Gracias! Respondeme con un SI! <br> a mi Whatsapp</p>";

//         const name = usernameInput.value;
//         console.log("nombre: "+name);
//         if (name) {
//             localStorage.setItem('attendanceConfirmed', true);
//             localStorage.setItem('guestName', name);
//             usernameInput.disabled = 'true';
//             confirmButton.style.display = 'none';
//             invitationDiv.innerHTML = "<p>¡Gracias! Respondeme con un SI! <br> a mi Whatsapp</p>";
//             nameContainer.style.display = 'block';
//             nameContainer.innerHTML = `<p>${name}</p>`;
//         }
       
//     });

//     const attendanceConfirmed = localStorage.getItem('attendanceConfirmed');
//     const guestName = localStorage.getItem('guestName');
//     console.log("guestname: "+guestName);
//     if (attendanceConfirmed && guestName) {
//         usernameInput.disabled = 'true';
//         confirmButton.style.display = 'none';
//         invitationDiv.innerHTML = "<p>¡Gracias! Respondeme con un SI! <br> a mi Whatsapp</p>";
//         nameContainer.style.display = 'block';
//         usernameInput.value = guestname;
//         // nameContainer.innerHTML = `<p>${guestName}</p>`;
//         console.log(guestName);
//     }

    // createUserButton.addEventListener('click', function() {
    //     console.log("CREA USUARIO");
    //     const username = usernameInput.value;
    //     if (username) {
    //         localStorage.setItem('votedUser', username);
    //         votingDiv.innerHTML = "<p>¡Usuario creado y voto registrado!</p>";
    //     }
    // });

    // const attendanceConfirmed = localStorage.getItem('attendanceConfirmed');
    // const votedUser = localStorage.getItem('votedUser');

    // if (attendanceConfirmed) {
    //     invitationDiv.innerHTML = "<p>Gracias por confirmar tu asistencia!</p>";
    // }

    // if (votedUser) {
    //     votingDiv.innerHTML = "<p>¡Usuario registrado!</p>";
    // }

    // if (attendanceConfirmed && !votedUser) {
    //     votingDiv.style.display = 'block';
    // }
// });
