import React from 'react';
import API from '../../api';
import Layout from "../../components/Layout";
import Link from 'next/link'

export default class ProjectList extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.getList();
  }

  

  getList = () => {
    API
      .get("/project")
      .then(data => {
        this.setState({ list: data.data });
      })
      .catch(err => {
        return null;
      });
  };

  changeStatus(id) {
    API
      .put("/project/changeStatus/"+id)
      .then(data => {
        this.getList();
      })
      .catch(err => {
        return null;
      });
  }

  delete(id) {
    API
      .delete("/project/"+id)
      .then(data => {
        this.getList();
      })
      .catch(err => {
        return null;
      });
  }

  render() {

    return (
      <Layout>
        <div>
          <h1 className="title">Projects</h1>

          <div className="columns">
            <div className="column is-6">
              <button className="button" onClick={this.getList}><i className="fas fa-sync"></i></button>
            </div>
            <div className="column is-6 is-pulled-right	">
              <Link href="/project/form">
                <button className="button is-link">Novo</button>
              </Link>
            </div>
          </div>



          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((row, i) => {
                return (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>
                      <Link href={{ pathname: '/project/form/', query: { id: row.id, name: row.name } }}>
                        <button className="button"><i className="far fa-edit fa-lg"></i> Edit</button>
                      </Link>
                      <button className="button" onClick={this.delete.bind(this,row.id)}><i className="far fa-trash-alt fa-lg"></i> Remove</button>
                      <button className="button" onClick={this.changeStatus.bind(this,row.id)}>
                        {row.active ? (
                          <i className="fas fa-toggle-on fa-lg"></i>
                        ) : (
                          <i className="fas fa-toggle-off fa-lg"></i>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="subtitle is-6">{this.state.list.length} projetos cadastrados</p>
        </div>
      </Layout>
    );
  }
};
