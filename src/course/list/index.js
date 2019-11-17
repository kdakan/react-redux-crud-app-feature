import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import querystring from "querystring";
import Paginator from "../../shared/paginator";
import { connect } from "react-redux";
import { getCourseList, searchCourseList } from "./actions";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedSearchTerm: "",
      currentPageCourseList: []
    };

    this.setCurrentPageItems = this.setCurrentPageItems.bind(this);
  }

  componentDidMount() {
    const searchTerm = this.getSearchTerm();
    if (searchTerm !== this.state.fetchedSearchTerm) {
      this.setState({ fetchedSearchTerm: searchTerm });
    }

    if (searchTerm) {
      this.props.dispatch(searchCourseList(searchTerm));
    } else {
      this.props.dispatch(getCourseList());
    }
  }

  componentDidUpdate() {
    const searchTerm = this.getSearchTerm();
    if (searchTerm !== this.state.fetchedSearchTerm) {
      this.setState({ fetchedSearchTerm: searchTerm });
      if (searchTerm) {
        this.props.dispatch(searchCourseList(searchTerm));
      } else {
        this.props.dispatch(getCourseList());
      }
    }
  }

  getSearchTerm() {
    let searchTerm = querystring.parse(this.props.location.search)["?search"];
    if (!searchTerm) searchTerm = "";
    return searchTerm;
  }

  setCurrentPageItems(currentPageItems) {
    this.setState({ currentPageCourseList: currentPageItems });
  }

  render() {
    const rows = this.state.currentPageCourseList.map(course => {
      return (
        <tr key={course.id}>
          <td>{course.id}</td>
          <td>{course.title}</td>
          <td>{course.date}</td>
          <td>{course.level}</td>
          <td className="text-center">
            <NavLink
              to={`/courses/${course.id}/view`}
              className="btn btn-sm btn-primary"
            >
              View
            </NavLink>{" "}
            <NavLink
              to={`/courses/${course.id}/edit`}
              className="btn btn-sm btn-warning"
            >
              Edit
            </NavLink>{" "}
            <NavLink
              to={`/courses/${course.id}/delete`}
              className="btn btn-sm btn-danger"
            >
              Delete
            </NavLink>
          </td>
        </tr>
      );
    });

    if (this.props.error) {
      console.log(this.props.error);
      return "An error occured, please retry.";
    }

    return (
      <div className="table-responsive">
        <p />
        <h4>Courses</h4>
        <p />
        <table className="table table-striped table-bordered table-hover table-sm table-responsive">
          <thead className="thead-dark">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Date</th>
              <th>Level</th>
              <th>
                <div className="text-right">
                  <NavLink
                    to={`/courses/0/add`}
                    className="btn btn-sm btn-success"
                  >
                    Add
                  </NavLink>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <Paginator
          items={this.props.courseList}
          setCurrentPageItems={this.setCurrentPageItems}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courseList: state.courseList,
    error: state.error
  };
}

export default connect(mapStateToProps)(CourseList);
