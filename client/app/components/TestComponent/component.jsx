import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { 
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Box,
    Switch,
    DialogActions,
    Slide,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Component extends React.Component {
    state = {
        isActive: false
    }

    renderFireflies = (flyfliesQty) => {
        let fireflies = []
        for (let i = 0; i < flyfliesQty; i++) {
            fireflies.push(<div className="firefly"></div>)
        }
        return fireflies
    }

    render() {
        const { isActive } = this.state;
        return (
            <div className="relative font-sans layout-guild-bg firefly-container">
                <div className="absolute bottom-5 left-5">
                    <Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection="horizontal"
                        ref={(r) => this.flippy = r}
                        style={{ width: '200px', height: '300px' }}
                    >
                        <FrontSide
                            style={{
                                backgroundColor: '#41669d',
                            }}
                        >
                            RICK
                        </FrontSide>
                        <BackSide style={{ backgroundColor: '#175852'}}>
                            ROCKS
                        </BackSide>
                    </Flippy>
                </div>
            </div>
        );
    }
}

export default Component;