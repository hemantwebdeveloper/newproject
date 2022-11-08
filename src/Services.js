import React from "react";

function Service(){
    return(
        <>
            <div class="container my-container ">
    <div class="card bg-white px-5">
        <div class="card-header">
            <div class="jumbotron mb-1 bg-white ">
                <h1 class="display-5" style={{color:"blue"}}><b>You'r almost there</b></h1>
            </div>
        </div>
        <div class="card-body">
            <div class="row ">
             
                <div class="col-md-5 ">
                    <div class="card mt-0 border-0 first-card">
                       
                        <div class="card-body">
                            <h5 class="card-title">1. Choose your billing cycle</h5>
                            <div class="row">
                                <div class="col-md-auto ">
                                    <div class="custom-control custom-radio custom-control-inline "> <input id="customRadioInline1" type="radio" name="customRadioInline1" class="custom-control-input" checked="true"/> <label for="customRadioInline1" class="custom-control-label label-radio">Bill Yearly</label> </div>
                                    <p class="my-0"> $45.99 / year</p> <del class="text-success">
                                        <p>$45.99 / year</p>
                                    </del>
                                </div>
                                <div class="col-md-auto ">
                                    <div class="custom-control custom-radio custom-control-inline "> <input id="customRadioInline2" type="radio" name="customRadioInline1" class="custom-control-input"/> <label for="customRadioInline2" class="custom-control-label label-radio">Bill Monthly</label> </div>
                                    <p> $19.99 / year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-2 border-0 second-card">
                     
                        <div class="card-body">
                            <h5 class="card-title">2. Enter Payment details</h5>
                            <div class="row">
                                <div class="col-md-auto col-sm-auto ">
                                    <div class="custom-control custom-radio custom-control-inline "> <input id="customRadioInline11" type="radio" name="customRadioInline11" class="custom-control-input" checked="true"/> <label for="customRadioInline11" class="custom-control-label label-radio"><img src="https://img.icons8.com/color/48/000000/visa.png" class="card-image"/> </label> </div>
                                </div>
                                <div class="col-md-auto col-sm">
                                    <div class="custom-control custom-radio custom-control-inline "> <input id="customRadioInline22" type="radio" name="customRadioInline11" class="custom-control-input"/> <label for="customRadioInline22" class="custom-control-label label-radio"><img src="https://img.icons8.com/officel/48/000000/discover.png" class="card-image"/></label> </div>
                                </div>
                            </div> 
                            <form method="get" action="">
                                <div class="form-group "> <label for="cc-number" class="control-label mt-3">Card number</label> <input id="cc-number" name="cc-number" type="tel" placeholder="xxxx-xxxx-xxxx-xxxx" class="form-control form-control-lg cc-number identified visa " value="" data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autocomplete="cc-number"/> </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6 col-sm-6"> <label for="cc-exp" class="control-label ">Expiration date</label> <input id="cc-exp" type="tel" class=" form-control form-control-lg cc-exp" autocomplete="cc-exp" placeholder="MM / YY" required/> </div>
                                    <div class="form-group col-md-6 col-sm-6"> <label for="cc-cvc" class="control-label ">CVV<span><i class="fa fa-info-circle px-2" aria-hidden="true"></i> </span> </label> <input id="cc-cvc" type="tel" class="form-control-lg form-control cc-cvc " autocomplete="off" placeholder="&bull;&bull;&bull;" required/> </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-8 col-sm-6"> <label for="inputState">State</label> <select id="inputState" class="form-control form-control-lg">
                                            <option selected>United State</option>
                                            <option>India</option>
                                            <option>UK</option>
                                            <option>China</option>
                                        </select> </div>
                                    <div class="form-group col-md-4 col-sm-6"> <label for="inputZip">Zip</label> <input type="text" class="form-control form-control-lg" id="inputZip" placeholder="111111"/> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-1 d-none d-sm-block"></div>
                <div class="col-md-6">
                    <div class="card right-card ">
                        <div class="card-header ">
                            <h3 class="font-weight"><b>BBBotstrap Professional</b></h3>
                            <h6><b>Bilied Now : $45.99</b></h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Perfect Software Solution is a <span class="text-primary">professional software, website development</span> timely delivered and cost effective software,<span class="text-primary"> website development services</span>. We are highly experienced in offering offshore software development.</p>
                            <div class="custom-control custom-checkbox checkbox-lg"><input type="checkbox" class="custom-control-input" id="checkbox-2"/><label class="custom-control-label" for="checkbox-2">I agree <span class="text-primary cursor-pointer"><u> BBBotstrap Terms</u> </span> </label> </div>
                        </div>
                        <div class="card-footer"> <button type="submit" class="btn btn-primary btn-lg">Buy now</button> </div>
                    </div>
                    <div class="card border-0">
                        <div class="card-body">
                            <h4 class="card-title">What included in BBBotstrap Professional</h4>
                            <div class="row ">
                                <div class="col-md-6">
                                    <ul class="list-group list-group-flush ">
                                        <li class="list-group-item borderless"><i class="fa fa-check"></i> Strategic Consulting,</li>
                                        <li class="list-group-item borderless"><i class="fa fa-check"></i> UI AND UX </li>
                                        <li class="list-group-item borderless"><i class="fa fa-check"></i> Client Application</li>
                                    </ul>
                                </div>
                                <div class="col-md-6 ">
                                    <ul class="list-group list-group-flush p-0">
                                        <li class="list-group-item borderless"><i class="fa fa-check"></i> E-Commerce</li>
                                        <li class="list-group-item borderless"><i class="fa fa-check"></i> IT Consulting</li>
                                    </ul>
                                </div>
                            </div>
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
export default Service;