import React from "react";
import "./chatlist.css";

class Chatlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h5 className="center">telegram</h5>
                <hr />
                <div class="container">
                    <div class="row msg-container">
                        <div class="col m12 col s12">
                            <div class="box-blue">
                                <img
                                    class="pull-right"
                                    ng-src="{{message.imageUrl}}"
                                />
                                <p>Content</p>
                                <div>
                                    <strong>Invite</strong>&nbsp;
                                    <span class="date">Fecha</span>
                                </div>
                            </div>
                        </div>

                        <div class="col m12 col s12">
                            <div class="box-gray">
                                <img
                                    class=" pull-left"
                                    ng-src="{{message.imageUrl}}"
                                />
                                <p>Content</p>
                                <div>
                                    <strong>Rudman</strong>&nbsp;
                                    <span class="date">Fecha</span>
                                </div>
                            </div>
                        </div>

                        <div class="col m12 col s12">
                            <div class="box-blue">
                                <img
                                    class="pull-right"
                                    ng-src="{{message.imageUrl}}"
                                />
                                <p>Content</p>
                                <div>
                                    <strong>Invite</strong>&nbsp;
                                    <span class="date">Fecha</span>
                                </div>
                            </div>
                        </div>

                        <div class="col m12 col s12">
                            <div class="box-gray">
                                <img
                                    class=" pull-left"
                                    ng-src="{{message.imageUrl}}"
                                />
                                <p>Content</p>
                                <div>
                                    <strong>Rudman</strong>&nbsp;
                                    <span class="date">Fecha</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <form style={{ display: "inherit" }}>
                            <div class="col m9 s9">
                                <input
                                    type="text"
                                    placeholder="Escribe un mensaje"
                                />
                            </div>
                            <div class="col m3 s3">
                                <span class="input-group-btn">
                                    <label class="btn btn-sm chat-submit-button">
                                        <i class="material-icons">attachment</i>
                                        <input type="file" class="file_input" />
                                    </label>
                                </span>
                                <button
                                    type="submit"
                                    class="btn chat-submit-button"
                                >
                                    <i class="material-icons">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chatlist;
