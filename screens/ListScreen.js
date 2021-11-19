import * as React from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default class ListScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          api: '',

        };
      }

    // getAPIvalue = () =>{
    //     this.setState({
    //         api: this.props.navigation.getParam('api')
    //     })
    // }

    // componentDidMount = () =>{
   // this.getAPIvalue();
    // }

    render() {
        return (
            <View>
                <Text>{this.state.api}</Text>
            </View>
        );
    }
}