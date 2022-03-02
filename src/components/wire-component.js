import React from 'react';

export default class WireComponent extends React.Component {

    constructor() {
        super();
        this.myRef = React.createRef();
    }

    componentDidMount() {
                        
        if(this.myRef) {
            
            let cmp = wire.ui.Component.create(this.props.component);        

            cmp.render(this.myRef.current.firstChild, this.props.config);

        }

    }      
    
    render() {

        return <div ref={this.myRef}>{this.props.children}</div>;

    }

}
