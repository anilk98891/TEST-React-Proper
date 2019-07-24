import React ,{Component}from 'react'
import {View} from 'react-native'
import { Button } from '../common';
class Home extends Component {
    
    renderContent() {
            return (
              <View />
            );
      }
    
      render = () => {
        const { navigation } = this.props;
        const itemId = navigation.getParam('data');
        
        return (
            <Button>
                {itemId}
            </Button>
            );
    }
    }
export default Home;