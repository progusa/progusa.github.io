<!DOCTYPE html>
<html>

<head>
	<!--Made with love by Mutiullah Samim -->

	<!--Bootsrap 4 CDN-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> -->

	<!--Fontawesome CDN-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

	<!--Custom styles-->
	<link rel="stylesheet" type="text/css" href="./assets/css/stylesignup.css">

	<!-- Link Icon -->
	<link rel="icon" type="image/ico" href="./assets/logo_icon.ico"></link>

	<title>Sign Up PROGUSA</title>
</head>

<body>
	<div class="container">
		<div class="d-flex justify-content-center h-100">
			<div class="card">
				<div class="card-header">
					<h3>Sign Up</h3>
					<div class="d-flex justify-content-end social_icon">
						<span><i class="fab fa-facebook-square fa-gradient"></i></span>
						<span><i class="fab fa-google-plus-square fa-gradient"></i></span>
						<span><i class="fab fa-twitter-square fa-gradient"></i></span>
					</div>
				</div>
				<div class="card-body">
					<form action="assets/php/insert.php" method="POST" onsubmit="return validationSignUp()">
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input id="eemail" type="email" name="email" class="form-control" placeholder="e-mail" required>
						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input id="pass" type="password" name="password" class="form-control" placeholder="password" required>
						</div>
						<div class="input-group form-group">
							<div class="input-group-prepend">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input id="cpass" type="password" name="cpassword" class="form-control" placeholder="confirm password" required>
						</div>
						<div class="form-group">
							<input type="submit" name="submit" value="Submit" class="btn float-right login_btn">
						</div>
					</form>
				</div>
				<div class="card-footer">
					<div class="d-flex justify-content-center links">
						Enjoy your freedom man !
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Script Needed -->
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- custom script -->
	<script src="assets/javascript/kode.js"></script>
</body>

</html>