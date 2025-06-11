function calculateAge() {
    const dob = document.getElementById('dob').value;
    const result = document.getElementById('result');

    if (!dob) {
        alert("Please select a date");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        alert("Birth date cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}

function resetForm() {
    document.getElementById('dob').value = '';
    document.getElementById('result').innerText = '';
}
