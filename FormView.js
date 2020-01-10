import React from 'react'
import { View, Text, Image,ToastAndroid, Button } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import axios from 'axios';

class FormView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            division: ''
        }
        
        
    }
    
    componentDidMount(){
        if(this.props.data!=null){
            this.setState(this.props.data);
        }
    }

    send(){
        ToastAndroid.show('safsa', ToastAndroid.SHORT);
        var url = 'http://192.168.100.95:2500/dataInsert';
        axios.post(url, this.state).then(res=>{
            if(res=="Sukses"){
                this.setState({name:'', division:'' });
            }
    })

    }
    
    render(){
        return(
            <>
            <Card title='Paper Form'>
            <Text>Name :</Text>
            <Input placeholder='Enter your name..' value={this.state.name} onChangeText={ev=>this.setState({name:ev})}/>
            <Text>Division :</Text>
            <Input placeholder='Enter your division..' value={this.state.division} onChangeText={ev=>this.setState({division:ev})}/>
            <Button buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='Submit' onPress={ev=>this.send()}/>
            </Card>
            
            </>
        )
    }
}
export default FormView;