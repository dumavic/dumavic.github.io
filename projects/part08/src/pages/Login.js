import './login.css'

function Login() {
    return(
<div>

<section id="login-container">

<div class="login">
<h2>Login Page</h2> 
<form id="login" method="get" action="login.php" >
<label><b>User Name</b>
</label>
<input type="text" name="Uname" id="Uname" placeholder="Username" />
<br></ br>
<label><b>Password
</b>
</label>
<input type="Password" name="Pass" id="Pass" placeholder="Password" />
<br></ br>
<input type="button" name="log" id="log" value="Log In Here" />
<br></br>
<input type="checkbox" id="check" />
<span>Remember me</span>
</form>
</div>
</section>

        </div>
    )
}

export default Login;