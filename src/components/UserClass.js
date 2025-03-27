import React from 'react';

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            count : 0,
        }
        console.log("Constructor");
       
    }

    componentDidMount(){
        console.log("Child Component did mount");
    }

    
    render() {
        console.log("Render");
        const { count } = this.state;
        return(
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h2>count: {count} </h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    })
                }} >Increase</button>
            </div>
        )
    }
};

export default UserClass;