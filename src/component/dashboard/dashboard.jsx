import React from "react";
import "./dashboard.css";
import Chatlist from "./chatlist";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            id: 0
        };
    }
    componentDidMount(){
        axios.get('https://chatbismillah.herokuapp.com/api/inbox?token='+localStorage.getItem('api_token'))
            .then(res => {
                console.log(res)
            })
    }
    showSearch = () => {
        this.setState({
            search: true
        });
    };
    hideSearch = () => {
        this.setState({
            search: false
        });
    };
    handleClick = (id) => {
        this.setState({
            id : id
        })
    }
    render() {
        if(localStorage.getItem('api_token') === null){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <div className="row">
                    <div className="col s3 m3">
                        <div>
                            <h5 className="center">
                                telegram
                                <i
                                    onClick={
                                        this.state.search
                                            ? this.hideSearch
                                            : this.showSearch
                                    }
                                    className="material-icons right"
                                >
                                    search
                                </i>
                            </h5>
                            <hr />
                        </div>
                        <nav
                            class={this.state.search ? "white black-text" : 'hide'}
                            style={{ borderRadius: "15px" }}
                        >
                            <div class="nav-wrapper">
                                <form>
                                    <div class="input-field">
                                        <input
                                            id="search"
                                            type="search"
                                            required
                                        />
                                        <label class="label-icon" for="search">
                                            <i class="material-icons black-text">
                                                search
                                            </i>
                                        </label>
                                        <i class="material-icons">close</i>
                                    </div>
                                </form>
                            </div>
                        </nav>
                        <div style={{ maxHeight: "400px", overflow: "scroll" }}>
                            <div
                                class="msg z-depth-3 hoverable"
                                onClick={(id) => this.handleClick(1)}
                                style={{ borderRadius: "10px" }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                            <div
                                class="msg z-depth-3 hoverable"
                                style={{ borderRadius: "10px" }}
                                onClick={(id) => this.handleClick(2)}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                            <div
                                class="msg z-depth-3 hoverable"
                                style={{ borderRadius: "10px" }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                            <div
                                class="msg z-depth-3 hoverable"
                                style={{ borderRadius: "10px" }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                            <div
                                class="msg z-depth-3 hoverable"
                                style={{ borderRadius: "10px" }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                            <div
                                class="msg z-depth-3 hoverable"
                                style={{ borderRadius: "10px" }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                            <div
                                class="msg z-depth-3 hoverable"
                                style={{ borderRadius: "10px" }}
                            >
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src="https://image.shutterstock.com/image-vector/people-vector-icon-template-black-260nw-1613782714.jpg"
                                            className="responsive-img circle"
                                            style={{
                                                width: "30px",
                                                height: "30px"
                                            }}
                                            alt=""
                                        />
                                    </div>
                                    <div className="col">Basic Message</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s9 m9">
                        <Chatlist />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
