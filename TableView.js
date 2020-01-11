import React from 'react';
import axios from 'axios';
import { Text, View, ToastAndroid } from 'react-native';

class TableView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        this.showData();
    }

    showData(){
        axios.get('http://192.168.100.95:2500/DataGet').then(res=>{
            this.setState({data:res.data});
        });
    }

    render(){
        var data = this.state.data.map((item, i)=>{
            return(
            <Text>{item.name}</Text>
            )
           
        });
        return(
            <View>
                {data}
            </View>
        )
    }

}
export default TableView;
