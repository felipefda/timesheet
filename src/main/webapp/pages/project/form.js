import React from 'react';
import API from '../../api';
import Layout from "../../components/Layout";
import Link from 'next/link'
import Router from 'next/router'



export default class ProjectForm extends React.Component {

  static getInitialProps({query}) {
    return {query}
  }


  constructor(props) {
    
    super(props);
    let nameValue = ""
    if(this.props.query.name)
      nameValue = this.props.query.name
    
    this.state = {name: nameValue};
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {

    if(this.props.query.id){
      API
      .put("/project/"+this.props.query.id, {name: this.state.name})
      .then(data => {
        Router.push('/project/list')
      })
      .catch(err => {
        return null;
      });
    }else{
      API
      .post("/project", {name: this.state.name})
      .then(data => {
        console.log(`salvou com sucesso`,data);
        Router.push('/project/list')
      })
      .catch(err => {
        return null;
      });
    }
    

      

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }


  render() {

    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1 className="title">Project Form</h1>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" value={this.state.name} onChange={this.handleChange} type="text" placeholder="Project name" />
              </div>
            </div>
          </div>
          <div>
            &nbsp;
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Submit</button>
            </div>
            <div className="control">
              <Link href="/project/list">
                <button className="button is-link is-light">Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </Layout>
    );
  }
};
