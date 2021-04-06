import React from "react";
import API from "../../utils/API";

class DataTable extends React.Component {
    state = {
        name: "",
        directory: [],
        sortOrder:'descend'
    }

    componentDidMount() {
        this.randomUsers();
    }

    randomUsers= ()=>{
        API.randUser()
            .then(res=> this.setState({ directory: res.data.results }))
    }

     //function to update search state each time the user types a character
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

    searchFn = e => {
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }

    sortByFirstName = () => {
        const sortedemployees = this.state.directory.sort((a,b) => {
            if (b.name.first > a.name.first) {
                return  -1

            }
            if (a.name.first > b.name.first){
                return 1

            }
            return 0
        });
        if (this.state.sortOrder === "descend") {
            sortedemployees.reverse()
            this.setState({ sortOrder: "ascend" })
        }else {
            this.setState({ sortOrder: "descend "})
        }
        this.setState({ directory: sortedemployees })
    }

    sortByLasttName = () => {
        const sortedEmployees = this.state.directory.sort((a,b) => {
            if (b.name.last > a.name.last) {
                return -1
            }
            if (a.name.last > b.name.last) {
                return 1
            }
            return 0
        })
        if (this.state.sortOrder === "descend") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ascend "});
        } else {
            this.setState({ sortOrder: "descend "})
        }
        this.setState({ directory: sortedEmployees })
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
                        <th onClick={this.sortByFirstName}scope="col">Name</th>
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