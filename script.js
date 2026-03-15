function showInstructions() {
    const name = document.getElementById('studentName').value.trim();
    const pass = document.getElementById('studentPass').value.trim();
    const errorMsg = document.getElementById('login-error');

    // 1. Admin Reset Logic
    if (name === "Siemens" && pass === "1234") {
        localStorage.removeItem("examStatus"); 
        alert("Admin: Access has been RESET.");
        location.reload();
        return;
    }

    // 2. The Updated Message (Check this line carefully)
    if (localStorage.getItem("examStatus") === "done") {
        errorMsg.innerText = "❌ You have already submitted. Contact your admin to reset.";
        errorMsg.style.display = 'block';
        return;
    }

    // 3. Login Logic
    if (name === "Deva" && pass === "1371") {
        errorMsg.style.display = 'none';
        currentQuestions = shuffle([...questionBank]);
        currentQuestions.forEach(q => q.options = shuffle([...q.options]));
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('instruction-section').style.display = 'block';
    } else {
        errorMsg.innerText = "❌ Name or Password is not correct.";
        errorMsg.style.display = 'block';
    }
}
