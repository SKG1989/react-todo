var React = require('react');

var TodoSearch = React.createClass({
    handleOnChange: function () {
      var showCompleted = this.refs.showCompleted.checked;
      var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search ToDos" onChange={this.handleOnChange}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleOnChange}/>
                        Show Completed todos
                    </label>
                </div>

            </div>
        )
    }

});

module.exports = TodoSearch;