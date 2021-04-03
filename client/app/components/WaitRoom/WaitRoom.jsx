import React from 'react';
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

class WaitRoom extends React.Component {
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

    handleClickOpen = () => {
        const { isActive } = this.state;
        this.setState({ isActive: true });
    }

    handleClickClose = () => {
        const { isActive } = this.state;
        this.setState({ isActive: false });
    }

    avatarContainer = (imagePath, isShiftLeft = false) => (
        <div className={`mn-player-avatar-wrapper ${isShiftLeft ? "mn-player-avatar-wrapper-shifted-left" : ""}`}>
            <div className="player-avatar mn-player-avatar">
                <div className="player-avatar-background"></div>
                <div className="player-avatar-container">
                    <div className="player-avatar__avatar" style={{ backgroundImage: `url(${imagePath})` }}>
                    </div>
                </div>
            </div>
        </div>
    )

    render() {
        const { isActive } = this.state;
        return (
            <div className="font-sans layout-bg firefly-container">
                {this.renderFireflies(20)}
                <Dialog
                    open={isActive}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClickClose()}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Avalon's Game Settings"}</DialogTitle>
                        <DialogContent>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Assign Available Players Role</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        display="flex"
                                        control={<Switch name="gilad" color="primary" />}
                                        label={
                                            <Box component="div" display="flex">
                                                Morgana & Percival
                                                {this.avatarContainer("../../../assets/img/morgana.cc686237.png")}
                                                {this.avatarContainer("../../../assets/img/percival.13166f82.png", true)}
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        control={<Switch name="jason" color="primary" />}
                                        label={
                                            <Box component="div" display="flex">
                                                Mordred
                                                {this.avatarContainer("../../../assets/img/mordred.125ac96c.png")}
                                            </Box>
                                        }
                                    />
                                    <FormControlLabel
                                        control={<Switch name="antoine" color="primary" />}
                                        label={
                                            <Box component="div" display="flex">
                                                Oberon
                                                {this.avatarContainer("../../../assets/img/oberon.1e137078.png")}
                                            </Box>
                                        }
                                    />
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => this.handleClickClose()} color="primary">
                            CANCEL
                        </Button>
                        <Button onClick={() => this.handleClickClose()} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className="relative min-h-screen flex-1 p-4 flex justify-center items-center">
                    <div className="relative min-h-screen flex-1 p-4 flex justify-center items-center">
                    <div className="bg-white w-full md:max-w-4xl rounded shadow">
                        <div className="justify-end h-12 pb-3 flex items-center border-b border-gray-200 m-4">
                            <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen()}>
                                SETTING
                            </Button>
                            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                        </div>
                    </div>
                    <div className="px-6 h-96 overflow-y-scroll grid grid-cols-2 gap-x-4">
                        <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <div className="text-sm font-semibold text-gray-600 overflow-ellipsis">Lirik</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <div className="text-sm font-semibold text-gray-600 overflow-ellipsis">MembTV</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <div className="text-sm font-semibold text-gray-600 overflow-ellipsis">DansGaming</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <div className="text-sm font-semibold text-gray-600 overflow-ellipsis">Lirik</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
                            <div className="flex items-center">
                                <div className="ml-2">
                                    <div className="text-sm font-semibold text-gray-600 overflow-ellipsis">MembTV</div>
                                </div>
                            </div>
                        </div>
                        </div>
                            <div className="p-6 ">
                                <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">Start the game</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WaitRoom;