import React from 'react';
import Layout from "../components/Layout";
import API from '../api';
import InputMask from "react-input-mask";


export default class Index extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      list: [],
      projectList: [],
      type: 'REGULAR',
      projectId: '',
      datew: '',
      startTime: '',
      endTime: '',
      description: '',
      messagetext: '',
      messagetype: ''

    };


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.getList();
    this.getProjectList();
    this.setState({
      datew: this.formatDate(new Date()),
      startTime: '07:30',
      endTime: '17:30',
    })
  }

  getList = () => {
    API
      .get("/activity")
      .then(data => {
        this.setState({ list: data.data });
      })
      .catch(err => {
        this.setState({
          messagetext : 'Erro ao listar atividades',
          messagetype : 'notification is-danger'
        });
      });
  };

  getProjectList = () => {
    API
      .get("/project/active")
      .then(data => {
        this.setState({ projectList: data.data, projectId: data.data[0].id });
      })
      .catch(err => {
        this.setState({
          messagetext : 'Erro ao listar projetos',
          messagetype : 'notification is-danger'
        });
      });
  };

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  handleSubmit(event) {


    API
      .post("/activity", this.state)
      .then(() => {
        this.setState({
          messagetext : 'Salva com sucesso',
          messagetype : 'notification is-success'
        });
        this.getList();
      })
      .catch(err => {
        console.log(`error aqui`,err);
        this.setState({
          messagetext : 'Erro ao salvar atividade',
          messagetype : 'notification is-danger'
        });

      });


    event.preventDefault();
  }

  delete(id) {
    if (confirm('Are you sure')) {
      API
        .delete("/activity/" + id)
        .then(() => {
          this.getList();
        })
        .catch(err => {
          return null;
        });
    }

  }

  render() {
    return (
      <Layout messagetext={this.state.messagetext} messagetype={this.state.messagetype}>
        <form onSubmit={this.handleSubmit}>
          <div className="table-container">
            <table className="table is-fullwidth  is-hoverable">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Project</th>
                  <th>Date</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <div className="field">
                      <div className="control">
                        <div className="select">
                          <select name="type" onChange={this.handleInputChange}>
                            <option value="REGULAR">REGULAR</option>
                            <option value="EXTRA">EXTRA</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="field">
                      <div className="control">
                        <div className="select">
                          <select name="projectId" onChange={this.handleInputChange}>
                            {this.state.projectList.map((row, i) => {
                              return (
                                <option key={row.id} value={row.id}>{row.name}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="field">
                      <div className="control">
                        <InputMask mask="9999-99-99" className="input" type="text" placeholder="" name="datew" onChange={this.handleInputChange} value={this.state.datew} required />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="field">
                      <div className="control">
                        <InputMask mask="99:99" className="input" type="text" placeholder="00:00" name="startTime" value={this.state.startTime} onChange={this.handleInputChange} required />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="field">
                      <div className="control">
                        <InputMask mask="99:99" className="input" type="text" placeholder="00:00" name="endTime" value={this.state.endTime} onChange={this.handleInputChange} required />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="" name="description" maxLength="255" onChange={this.handleInputChange} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="button is-primary" type="submit">Add</button>
                  </td>
                </tr>
                {this.state.list.map((row, i) => {
                  return (
                    <tr key={row.id} className={row.type == 'EXTRA' ? 'is-selected' : ''}>
                      <td align="center">{row.type}</td>
                      <td align="center">{row.projectName}</td>
                      <td align="center">{row.datew}</td>
                      <td align="center">{row.startTime}</td>
                      <td align="center">{row.endTime}</td>
                      <td align="left">{row.description}</td>
                      <td align="center"><button className="button is-danger is-small" type="button" onClick={this.delete.bind(this, row.id)}><i className="fas fa-minus-circle"></i></button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>
      </Layout>
    );
  }

};