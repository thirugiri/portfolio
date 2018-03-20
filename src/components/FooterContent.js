import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import {Footer} from 'react-materialize';

class FooterContent extends Component{
    render(){
        return(
            <div>
              <Footer className='blue-grey darken-4'  copyrights="All rights reserved | Developed using react-materialize.">
                <Icon  name='facebook f' className='white-text' size='large' />
                <Icon className='white-text' name='twitter' size='large'/>
                <Icon  name='instagram' className='white-text' size='large'/>
                <Icon  name='behance' className='white-text' size='large'/>
                <Icon  name='github' className='white-text' size='large'/>
              </Footer>
            </div>
        );
    }
}



export default FooterContent;