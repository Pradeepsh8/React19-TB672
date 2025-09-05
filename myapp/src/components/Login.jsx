import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { UserContext } from "../context/UserProvider";


function Login() {

    const loginForm = {
        userName: "",
        password: ""
    }

    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {loginClick} = useContext(UserContext);

    const validationLoginSchema = Yup.object({
        userName: Yup.string().required('User Name is mandatory'),
        password: Yup.string().required('Password is mandatory')
    })

    const handlSignIn = (frm) => {
        if (frm.userName === "admin" && frm.password === "admin") {
            setMessage("Login is successful");
            loginClick(frm.userName);
            setTimeout(() => {
                navigate('/databinding');
            }, 2000);
        }
        else {
            setMessage("Invalid Credentials");
        }
    }

    return (<>
        <div className="row">
            <div className="col-lg-6">
                <h4>Login</h4>
                {
                    message && <div className="alert alert-success">{message}</div>
                }
                <Formik initialValues={loginForm}
                    enableReinitialize={true}
                    onSubmit={(frm) => handlSignIn(frm)}
                    validationSchema={validationLoginSchema}
                >
                    <Form>
                        <div className="form-group">
                            <label>User Name</label>
                            <Field name="userName" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="userName" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className="form-control"></Field>
                            <ErrorMessage className="text-danger" component="label" name="password" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Sign in" />
                    </Form>

                </Formik>
            </div>
        </div>


    </>)
}

export default Login;