import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './nic_config.css'

class TypeInterface extends Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                use_dhcp: false,
                use_dhcpv6: false,
                ip_netmask: "",
                ipv6_netmask: "",
                routes: [],
                hotplug: false,
                onboot: true
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event, data) {
            console.log(data)
            this.setState({value: event.target.value});
        }

        handleSubmit() {
            
        }

    render(){
        const component_value = 'TypeInterface'
        return (
            <form id='interface' onSubmit={this.handleSubmit}>
               <label>
                name: <input id="interface_name" type="text" />
               </label>
               <label>
                use_dhcp: <SelectTrueFalse id={component_value + "use_dhcp"} name={component_value + "use_dhcp"}/>
               </label>
               <label>
                use_dhcpv6: <SelectTrueFalse id={component_value + "use_dhcpv6"} name={component_value + "use_dhcpv6"}/>
                </label>
               <label>
                ip_netmask: <AddressesV4 />
               </label>
                <label>
                    ipv6_netmask: <AddressesV6 />
                </label>
                <label>
                    routes: <Routes />
                </label>
                <label>
                    hotplug(Default is false): <SelectTrueFalse id={component_value + "_hotplug"} name={component_value + "_hotplug"}/>
                </label>
                <label>
                    onboot(Default is true): <SelectTrueFalse id={component_value + "_onboot"} name={component_value + "_onboot"}/>
                </label>
                <label>
                    <input type="submit" value="Submit" />
                </label>
            </form>
        );
    }
}
const SelectTrueFalse = ({id, name}) => (

            <div>
                <input name={name} type="radio" id={id + "_True"} value="True" onChange={this.handleChange(name)}/>
                <label for={id + "_True"}>True</label> 
                <input name={name} type="radio" id={id + "_False"} value="False" defaultChecked onChange={this.state.use_dhcpv6}/>
                <label for={id + "_Falsese"}>False</label>
            </div>
);

//class SelectTrueFalse extends Component {
//    constructor(props) {
//        super(props);
//        console.log(this)
//    }
//    console(){
//        console.log(this.state)
//    }
//    render(){
//        const name = this.props.name + "_SelectTrueFalse"
//        const id = this.props.id + "_SelectTrueFalse"
//        
//        return (
//            <div id={id}>
//                
//                <input name={name} type="radio" id={id + "_True"} value="True" onChange={this.state.use_dhcp}/>
//                <label for={id + "_True"}>True</label> 
//                <input name={name} type="radio" id={id + "_False"} value="False" defaultChecked onChange={this.state.use_dhcpv6}/>
//                <label for={id + "_Falsese"}>False</label>
//            </div>
//        );
//    };
//}

class AddressesV4 extends Component {
    render(){
        return (
            <input id="v4_addresses" type="text" />
        );
    }
}

class AddressesV6 extends Component {
    render(){
        return (
            <input id="v6_addresses" type="text" />
        );
    }
}

class Routes extends Component {
    render(){
        const component_value = 'Routes'
        return (
            <div>
                ip_netmask: <input id="routes_ip" type="text" />
                <br/>
                next_hop: <input id="next_hop" type="text" />
                <br/>
                default: <SelectTrueFalse id={component_value} name={component_value}/>
            </div>
        );
    }
}

//
//class InputField extends React.Component {
//    render() {
//        return (
//            <div>
//              <input type={this.props.InputType} id={this.props.InputId} name={this.props.InputName} />
//              <label for={this.props.InputId}>{this.props.InputName}</label>
//            </div>
//        );
//    }
//}
//
//class HealthConditions extends React.Component {
//    constructor(props){
//          super(props);
//    
//          this.state = {
//              inputLinkClicked: false
//          }
//    }
//
//    handleAddSecondInput = () => {
//      this.setState({
//        inputLinkClicked: true
//      });
//    }
//
//    handleRemoveSecondInput = () => {
//        this.setState({
//            inputLinkClicked: false
//        });
//
//    }
//
//    render() {
//        return(
//            <div>
//               <InputField label="Name of condition" InputType="text" InputId="id-condition" InputName="condition" />
//    
//               { this.state.inputLinkClicked ?
//                <div>
//                    <button type="button" className="make-button-link" data-add-button="" href="#" onClick={this.handleRemoveSecondInput}>
//                        Remove a condition
//                    </button>
//                    <InputField label="" InputType="text" InputId="id-condition2" InputName="condition2" />
//                </div>
//                : 
//                   <div></div>
//               }
//                <div className="inner-block">
//                    <button type="button" className="make-button-link" data-add-button="" href="#" onClick={this.handleAddSecondInput}>
//                        Add a condition
//                    </button>
//                </div>
//            </div>
//        );
//    }
//
//}
class NicConfig extends Component {
    constructor(props){
        super(props);
        this.nic_config = []
    }

    addType = () => {
        ReactDOM.render(<TypeInterface />, document.getElementById('all'));
    }

    render() {
        return (
            <div>
                <button type="button" href="#" onClick={this.addType}> New Interface NIC </button>
                <div id='all'></div>
            </div>
        );
    }
}

export default NicConfig

