<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate form data
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Your email address where the form data will be sent
    $to = "sterling.spear74@gmail.com"; 
    $subject = "New Contact Form Submission from SterFlies";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    // Headers
    $headers = "From: noreply@yourdomain.com\r\n"; // Use a generic email from your domain to avoid spam filters
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
