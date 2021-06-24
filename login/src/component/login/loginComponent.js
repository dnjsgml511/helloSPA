import { useState, useRef } from 'react'
import * as service from "../../service/service";

function LoginComponent() {

    const [hasIDVal, setHasIDVal] = useState("input100");
    const [hasPWVal, setPWHasVal] = useState("input100");
    const idRef = useRef(null);
    const pwRef = useRef(null);

    /* [ Focus input ]*/
    const focusIDInput = (e) => {
        const target = e.target;
        const value = target.value.trim();
        if (value.length !== 0) {
            setHasIDVal("input100 has-val");
        } else {
            setHasIDVal("input100");
        }
    }

     /* [ Focus input ]*/
     const focusPWInput = (e) => {
        const target = e.target;
        const value = target.value.trim();
        if (value.length !== 0) {
            setPWHasVal("input100 has-val");
        } else {
            setPWHasVal("input100");
        }
    }

    const login = () => {
        const id = idRef.current.value;
        const pw = pwRef.current.value;

        if(pw.length < 4){
            alert("비밀번호는 4자 이상 입력해주세요")
            return false
        }

        service.login(id, pw);
    }

    return (
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <div class="login100-form validate-form" >
                        <span class="login100-form-title p-b-26">
                            Welcome
					    </span>
                        <span class="login100-form-title p-b-48">
                            <i class="zmdi zmdi-font"></i>
                        </span>

                        <div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                            <input className={hasIDVal} type="text" name="email" onBlur={focusIDInput} ref={idRef} />
                            <span class="focus-input100" data-placeholder="ID" ></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Enter password">
                            <span class="btn-show-pass">
                                <i class="zmdi zmdi-eye"></i>
                            </span>
                            <input className={hasPWVal} type="password" name="pass" onBlur={focusPWInput} ref={pwRef} />
                            <span class="focus-input100" data-placeholder="Password" ></span>
                        </div>

                        <div class="container-login100-form-btn">
                            <div class="wrap-login100-form-btn">
                                <div class="login100-form-bgbtn"></div>
                                <button class="login100-form-btn" onClick={login}>
                                    Login
							</button>
                            </div>
                        </div>

                        <div class="text-center p-t-115">
                            <span class="txt1">
                                Don’t have an account?
						</span>

                            <a class="txt2" href="#">
                                Sign Up
						</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent