import React from "react";
import API from "../../utils/API";

class DataTable extends React.Component {
    state = {
        name: "",
        directory: []
    }

    componentDidMount() {
        this.randomUsers();
    }

    randomUsers= ()=>{
        API.randUser()
            .then(res=> this.setState({ directory: res.data.results }))
    }

    searchFn = e => {
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }
    render(){
        return(
            <>
                <input
                className="form-control mr-sm-2"
                placeholder="Search Employees"
                type="search"
                onChange={this.searchFn}></input>
                <h1>{this.state.name}</h1>

                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.directory.map( element => (
                            <tr>
                            <th scope="row">{element.id.value}</th>
                            <td>{element.name.first} {element.name.last}</td>
                            <td>{element.email}</td>
                            <td>{element.phone}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </>
        )
    }
}

export default DataTable