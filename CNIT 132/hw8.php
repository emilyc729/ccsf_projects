
<?php 

	$msg = "E-Mail Sent From Hills HW 8 Feedback Form (PHP)\n";

	$msg .= "Sender's Name: $_POST[name]\n";

	$msg .= "Sender's Email: $_POST[email]\n";

	$msg .="Sender's Favorite Colors: $_POST[color1] $_POST[color2] $_POST[color3] $_POST[color4]\n";

	$msg .= "Sender's Favorite Dessert: $_POST[dessert]\n";

	$msg .= "Comments: $_POST[comments]\n\n";

	$to = "emilyc72994@gmail.com";

	$subject = "Feedback Form (PHP)";

	$mailheaders = "From: $_POST[email]\n";

	$mailheaders .= "Reply-To: $_POST[email]\n\n";
	
	if (mail($to, $subject, $msg, $mailheaders)) {
		echo("<p>Email successfully sent!</p>");
	} else {
		echo("<p>Email delivery failed</p>");
	}

?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8">
		<title>Email Sent Successfully!</title>
	<head>
	
	<body>
		<h3>The following email has been sent to Emily Cheung:</h3>
		<p>
			<strong>Your Name:</strong>
			<?php echo "$_POST[name]";?>
			<br><br>
			
			<strong>Your Email:</strong>
			<?php echo "$_POST[email]";?>
			<br><br>
			
			<strong>Your Favorite Colors:</strong>
			<?php echo "$_POST[color1]";?>
			<?php echo " "; ?>
			<?php echo "$_POST[color2]";?>
			<?php echo " "; ?>
			<?php echo "$_POST[color3]";?>
			<?php echo " "; ?>
			<?php echo "$_POST[color4]";?>
			<br><br>
			
			<strong>Your Favorite Dessert:</strong>
			<?php echo "$_POST[dessert]";?>
			<br><br>
			
			<strong>Comments:</strong>
			<?php echo "$_POST[comments]";?>
		
		</p>
	</body>
</html>

