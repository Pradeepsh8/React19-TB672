import { Component } from "react";


class ErrorBoundary extends Component
{
    constructor(props){
        super(props);
        this.state = { hasError: false, errorMessage: ""  };
    }

    static getDerivedStateFromError(error){
       
        return { hasError: true, errorMessage: error };
        
    }

    componentDidCatch(error){
        //log error in db
        console.log('Print Error=' + error);

    }

    render(){
        if(this.state.hasError){
            return <h4>Something went wrong. Try again later. {this.state.errorMessage?.message} {this.state.errorMessage.stack} </h4>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;