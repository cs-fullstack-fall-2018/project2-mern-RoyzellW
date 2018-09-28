import React, {Component} from 'react';
import './App.css';
import AppNavBar from "./AppNavBar";
import {Col, Jumbotron, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Content from "./Content";

// import Content from 'Content';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            title: "",
            content: "",
            data: []
        }
    }

    submitChange = (event) => {
        fetch('/',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: this.state.username,
                        title: this.state.title,
                        content: this.state.content
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
    };

    deleteByID = (id) => {
        console.log("delete this ID: " + id);

        fetch('/',
            {
                method: "DELETE",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
    };

    InputOnChangeUser = (event) => {

        this.setState({username: event.target.value})

    };

    InputOnChangeTitle = (event) => {
        this.setState({title: event.target.value});


    };

    InputOnChangeContent = (event) => {

        this.setState({content: event.target.value})

    };

    render() {
        fetch('/getAll')
            .then(data => data.json())
            .then(response => this.setState({data: response}));
        return (
            <div>

                <AppNavBar/>

                <Jumbotron>

                    <Form onSubmit={this.submitChange}>
                        <Label for="username" sm={2}> Username: </Label>
                        <Input type="text" value={this.state.username} onChange={this.InputOnChangeUser} name="username"
                               id="userName" placeholder="Input a Username"/>
                        <Label for="title" sm={2}>Title: </Label>
                        <Input type="text" value={this.state.title} onChange={this.InputOnChangeTitle} name="title"
                               id="userTitle" placeholder="Input a Title"/>
                        <Label for="content" sm={2}>Post: </Label>
                        <Input type="text" value={this.state.content} onChange={this.InputOnChangeContent}
                               name="content" id="userContent" placeholder="Input message "/>
                        <input type="submit" value="submit"/>
                    </Form>

                </Jumbotron>

                <Content info={this.state.data}
                         deleteFunction={this.deleteByID}/>
            </div>
        );
    }
}

export default App;
