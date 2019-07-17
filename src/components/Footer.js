import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter, setVisiblilityFilter } = this.props;
    return (
      <div>
        <span>ShowState:</span>
        <button
          onClick={() => setVisiblilityFilter("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => setVisiblilityFilter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
        <button
          onClick={() => setVisiblilityFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default Footer;
