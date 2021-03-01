import React from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "./loading";
import axios from "axios";
import swal from "sweetalert";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            telepon: 0,
            password: "",
            loading: false
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            telepon: this.state.telepon,
            password: this.state.password
        };
        this.setState({
            loading: true
        });
        axios
            .post("https://chatbismillah.herokuapp.com/api/login", data)
            .then(res => {
                swal({
                    title: "Success Login!",
                    text: "success you have successfully logged in",
                    icon: "success",
                    timer: 2000,
                    button: false
                });
                this.setState({
                    loading: false
                });
                localStorage.setItem("api_token", res.data[1].token);
                this.props.history.push("/");
            })
            .catch(err => {
                swal({
                    title: "Error!",
                    text:
                        "sorry you failed to log in please check your email or password",
                    icon: "error",
                    timer: 2000,
                    button: false
                });
                this.setState({
                    loading: false
                });
            });
    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        console.log(this.props);
        if (localStorage.getItem("api_token")) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <div className="section"></div>
                <center>
                    <div className="section"></div>
                    <div class="container">
                        <div
                            className="grey lighten-4 row"
                            style={{
                                display: "inline-block",
                                padding: " 32px 48px 32px 48px",
                                border: "1px solid #EEE"
                            }}
                        >
                            <h5 class="center-align indigo-text">Form Login</h5>
                            <form class="col s12" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">
                                            mail
                                        </i>
                                        <input
                                            id="icon_prefix"
                                            name="telepon"
                                            type="number"
                                            class="validate"
                                            onChange={this.handleChange}
                                        />
                                        <label for="icon_prefix">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">
                                            https
                                        </i>
                                        <input
                                            id="icon_telephone"
                                            name="password"
                                            onChange={this.handleChange}
                                            type="password"
                                            class="validate"
                                        />
                                        <label for="icon_telephone">
                                            Password
                                        </label>
                                    </div>
                                </div>
                                <center>
                                    <Loading
                                        loading={this.state.loading}
                                        onClick={this.handleSubmit}
                                    />
                                    <br />
                                    <br />
                                    <Link
                                        to="/register"
                                        className="btn waves-effect waves-light red"
                                    >
                                        create new account
                                    </Link>
                                </center>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default Login;
