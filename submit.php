<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['Message'];

    // Change these lines to your email address and subject
    $to = "sujitworkclg@gmail.com";
    $subject = "Message from website";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_message)) {
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    echo "Sorry, there was an error processing your form.";
}
?>
