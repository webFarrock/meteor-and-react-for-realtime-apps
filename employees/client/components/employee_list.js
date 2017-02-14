import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 10;

class EmployeeList extends Component {
    constructor(props){

        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);


    }

    componentWillMount(){
        this.page = 1;
    }

    handleButtonClick() {
        this.page++;
        Meteor.subscribe('employees', PER_PAGE * this.page);

    }

    render() {
        return (
            <div>
                <div className="employee-list">
                    {this.props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee}/>)}
                </div>
                <button
                    className="btn btn-primary"
                    onClick={this.handleButtonClick}
                >Load More...
                </button>
            </div>
        );
    }
}
;


export default createContainer(() => {
    // set up subscription
    Meteor.subscribe('employees', PER_PAGE);

    // return an object/ whatever we return will be sent to EmployeeList as props
    return {employees: Employees.find({}).fetch()};
}, EmployeeList);