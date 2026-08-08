// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        alert("Login successful!");

        // Temporary redirect
        window.location.href = "patient-dashboard.html";
    });
}// Registration Form

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}
// Appointment Form

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const hospital = document.getElementById("hospital").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;

        if (!hospital || !doctor || !date || !time) {

            alert("Please fill all required fields.");

            return;
        }

        alert(
            "Appointment booked successfully!\n\n" +
            "Doctor: " + doctor +
            "\nDate: " + date +
            "\nTime: " + time
        );

        window.location.href = "patient-dashboard.html";

    });

}
// =========================
// LIVE QUEUE SYSTEM
// =========================

const currentTokenElement = document.getElementById("currentToken");
const patientsAheadElement = document.getElementById("patientsAhead");
const estimatedWaitElement = document.getElementById("estimatedWait");

if (
    currentTokenElement &&
    patientsAheadElement &&
    estimatedWaitElement
) {

    const currentTokenNumber = 18;
    const yourTokenNumber = 24;

    const patientsAhead =
        yourTokenNumber - currentTokenNumber - 0;

    const averageTimePerPatient = 5;

    const estimatedWait =
        patientsAhead * averageTimePerPatient;


    currentTokenElement.textContent =
        "A-" + currentTokenNumber;

    patientsAheadElement.textContent =
        patientsAhead;

    estimatedWaitElement.textContent =
        estimatedWait + " min";
}

const currentTokenElement = document.getElementById("currentToken");
const patientsAheadElement = document.getElementById("patientsAhead");
const estimatedWaitElement = document.getElementById("estimatedWait");

if (
    currentTokenElement &&
    patientsAheadElement &&
    estimatedWaitElement
) {

    const currentTokenNumber = 18;
    const yourTokenNumber = 24;

    const patientsAhead =
        yourTokenNumber - currentTokenNumber - 0;

    const averageTimePerPatient = 5;

    const estimatedWait =
        patientsAhead * averageTimePerPatient;


    currentTokenElement.textContent =
        "A-" + currentTokenNumber;

    patientsAheadElement.textContent =
        patientsAhead;

    estimatedWaitElement.textContent =
        estimatedWait + " min";
}
// =========================
// QR CODE
// =========================

const qrElement = document.getElementById("qrcode");

if (qrElement) {

    const qrImage = document.createElement("img");

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
        encodeURIComponent(
            "MediQueue | Patient: Aman | Doctor: Dr. Sharma | Token: A-24"
        );

    qrImage.alt = "MediQueue Appointment QR Code";

    qrElement.appendChild(qrImage);
}
// =========================
// DOCTOR QUEUE CONTROL
// =========================

const nextPatientButton =
    document.getElementById("nextPatientButton");

const currentTokenDisplay =
    document.querySelector(".current-token");

if (nextPatientButton && currentTokenDisplay) {

    let currentDoctorToken = 18;

    nextPatientButton.addEventListener("click", function () {

        if (currentDoctorToken < 24) {

            currentDoctorToken++;

            currentTokenDisplay.textContent =
                "A-" + currentDoctorToken;

            alert(
                "Now calling patient A-" +
                currentDoctorToken
            );

        } else {

            alert("No more patients in the queue.");

        }

    });
}