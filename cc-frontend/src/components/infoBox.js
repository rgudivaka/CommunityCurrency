import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomizedProgressBars from './progressBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        maxWidth: 250,
        margin: 5,
        backgroundColor: "#c9daf8",
    },
    text: {
        color: "#0b5394",
        fontWeight: "bold",
    },
    pos: {
        marginBottom: 12,
    },
}

export default class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            boxColor: "#c9daf8",
            textColor: "#0b5394",
        };
    }

    handleClick() {
        this.setState({
            boxColor: "#0b5394",
            textColor: "#c9daf8",
        })
    }

    render(){
        return (
            <div>
                <a style={{ cursor: 'pointer' }} onClick={this.handleClick.bind(this)}>
                    <Card style={styles.root} variant="outlined">
                        <CardContent>
                            <Grid container spacing={2} justify="flex-start">
                                <Grid item xs={12} sm container>
                                    <Grid item xs={8} container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" style={styles.text}>
                                                {this.state.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Basic Info Here
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <CustomizedProgressBars />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Button size="small" style={styles.text} onChange={this.handleClick.bind(this)}>
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </a>
            </div>
        )
    }
}