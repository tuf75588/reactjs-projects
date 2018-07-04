
//build out static version of app

class TimerDashboard extends React.Component {
    render() {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList 
                    isOpen={true}
                    />
                </div>
            </div>
        )
    }
}
class EditableTimerList extends React.Component {
    render() {
        return (
            <div id="timers">
                <EditableTimer 
                title='Learn React'
                project='Web Domination'
                elapsed='8986300'
                runningSince={null}
                editFormOpen={false}
                />
                <EditableTimer 
                title='Learn Extreme Ironing'
                project='World Domination'
                elapsed='3890985'
                runningSince={null}
                editFormOpen={true}
                />
            </div>
        )
    }
}
class EditableTimer extends React.Component {
    render() {
        if(this.props.editFormOpen) {
            return (
                <TimerForm 
                title={this.props.title}
                project={this.props.project}
                />
            )
        } else {
            return (
                <Timer 
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
                />
            )
        }
    }
}
class TimerForm extends React.Component {
    render() {
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label htmlFor="">Title</label>
                            <input type="text" defaultValue={this.props.title}/>
                        </div>
                        <div className="field">
                            <label htmlFor="">Project</label>
                            <input type="text" defaultValue={this.props.project}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
class ToggableTimerForm extends React.Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm />
            )
        } else {
            return (
                <div className="ui basic content center aligned segment">
                    <button className="ui basic button icon">
                        <i className="plus icon"></i>
                    </button>
                </div>
            )
        }
    }
} 
ReactDOM.render(<TimerDashboard />, document.getElementById('main'))