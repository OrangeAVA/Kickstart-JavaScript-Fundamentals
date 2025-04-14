// Display the form data upon form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const country = document.getElementById('country').value;
    const dob = document.getElementById('dob').value;
    const profilePicture = document.getElementById('profilePicture').files[0];
    const ageRange = document.getElementById('ageRange').value;

    // Validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    password = '*****';
    //confirmPassword='#####';
    // Create the information display
    let infoHTML = `<p><strong>Full Name:</strong> ${fullName}</p>`;
    infoHTML += `<p><strong>Email:</strong> ${email}</p>`;
    infoHTML += `<p><strong>Phone:</strong> ${phone}</p>`;
    infoHTML += `<p><strong>Password:</strong> ${password}</p>`;
   // infoHTML += `<p><strong>Confirm Password:</strong> ${confirmPassword}</p>`;
    infoHTML += `<p><strong>Gender:</strong> ${gender || 'Not selected'}</p>`;
    infoHTML += `<p><strong>Country:</strong> ${country}</p>`;
    infoHTML += `<p><strong>Date of Birth:</strong> ${dob}</p>`;
    infoHTML += `<p><strong>Age Range:</strong> ${ageRange}</p>`;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            infoHTML += `<p><strong>Profile Picture:</strong><br><img src="${e.target.result}" alt="Profile Picture" style="max-width: 200px;"></p>`;
            document.getElementById('infoDisplay').innerHTML = infoHTML;
        };
        reader.readAsDataURL(profilePicture);
    } else {
        document.getElementById('infoDisplay').innerHTML = infoHTML;
    }
});

// Update the range value display
document.getElementById('ageRange').addEventListener('input', function() {
    document.getElementById('ageValue').textContent = this.value;
});
