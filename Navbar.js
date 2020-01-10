import React from 'react';

import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class NavbarView extends React.Component{

    render(){
        return(
            <Header centerComponent={{ text: 'Paper Work', style: { color: '#fff' } }} rightComponent={{ icon: 'star', color: '#fff', type: 'font-awesome' }}/>
        )
    }
}

export default NavbarView;