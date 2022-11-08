import React from "react";

function Contact(){
    return(
        <>
           <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 bg-light pb-5">
                    <div class="row px-3">
                        <img src="https://i.imgur.com/pFCf3zf.jpg" class="logo"/>
                    </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5">
                        <img src="https://i.imgur.com/ucirQQf.png" class="image"/>
                    </div>
                    <div class="row px-3 text-center justify-content-center">
                        <h4>Collect everything in one place</h4>
                        <small class="text-muted px-5 mx-1 mx-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</small>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <h3 class="mb-1">Create your Mello account</h3>
                    <p class="mb-4 text-sm">Already have an account? <a class="text-primary login">Log In</a></p>
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="google"><span class="fa fa-google"></span><small class="pl-3 pr-1">Sign up with google</small></p>
                        </div>
                        <div class="col-sm-6">
                            <p class="fb"><span class="fa fa-facebook"></span><small class="pl-3 pr-1">Sign up with facebook</small></p>
                        </div>
                    </div>
                    <div class="row px-3">
                        <div class="line"></div>
                        <small class="text-muted or text-center">OR</small>
                        <div class="line"></div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <label class="mb-0"><h6 class="mb-0 text-sm">First Name</h6></label>
                            <input type="text" name="fname"/>
                        </div>
                        <div class="col-md-6">
                            <label class="mb-0"><h6 class="mb-0 text-sm">Last Name</h6></label>
                            <input type="text" name="lname"/>
                        </div>
                    </div>
                    <div class="row px-3">
                        <label class="mb-0"><h6 class="mb-0 text-sm">Email Address</h6></label>
                        <input type="text" name="email"/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-0"><h6 class="mb-0 text-sm">Password</h6></label>
                        <input type="password" name="password"/>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-5">
                            <button class="btn btn-blue text-center mb-1">Create Account</button>
                        </div>
                        <div class="col-md-7">
                            <small class="text-muted">By creating an account, you understand and agree to Mallo's <u>Terms of Service</u>, including the <u>User Agreement</u> and <u>Privacy Policy</u>.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default Contact;