import React, { Component } from 'react';
import './nic_config.css'
//import { addValidationRule } from 'formsy-react';

class SelectTrueFalse extends Component {
    render(){
        const name = this.props.name + "_SelectTrueFalse"
        const id = this.props.id + "_SelectTrueFalse"
        // name
        // id
        return (
            <div id={id}>
                <input name={name} type="radio" id={id + "_True"} value="True" />
                <label htmlFor={id + "_True"}>True</label> 
                <input name={name} type="radio" id={id + "_False"} value="False" defaultChecked />
                <label htmlFor={id + "_Falsese"}>False</label>
            </div>
        );
    }
}

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

class TypeInterface extends Component {
    render(){
        const component_value = 'TypeInterface'
        return (
            <div id='interface' className="Interface">
                name: <input id="interface_name" type="text" />
                <br/>
                use_dhcp: <SelectTrueFalse id={component_value + "use_dhcp"} name={component_value + "use_dhcp"}/>
                <br/>
                use_dhcpv6: <SelectTrueFalse id={component_value + "use_dhcpv6"} name={component_value + "use_dhcpv6"}/>
                <br/>
                ip_netmask: <AddressesV4 />
                <br/>
                ipv6_netmask: <AddressesV6 />
                <br/>
                routes: <Routes />
                <br/>
                hotplug(Default is false): <SelectTrueFalse id={component_value + "_hotplug"} name={component_value + "_hotplug"}/>
                <br/>
                onboot(Default is true): <SelectTrueFalse id={component_value + "_onboot"} name={component_value + "_onboot"}/>
                
            </div>
        );
    }
}

class TypeOvsBridge extends Component {
    render(){
        return (
            <div className="Interface"></div>
        );
    }
}


class NicConfig extends Component {
    render() {
        return (<TypeInterface />);
//        return (
//            Add nic type<br/>
//            <select>
//                <option value="interface">Interface</option>
//                <option value="ovs_bridge">OVS_Bridge</option>
//                <option value="linux_bridge">Linux_Bridge</option>
//             </select>
//            <button>Add</button>
//        );
    }

}

export default NicConfig

