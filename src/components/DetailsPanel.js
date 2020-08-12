import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({

  pos: {
    marginBottom: 12,
    marginTop:10
  },
});

class DetailsPanel extends React.Component {


    render(){
        const {classes} = this.props
        return (
            <Card className={classes.root} >
            <CardContent>
                <Typography variant="h5" component="h2">
                Selected values from the above plot
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  X Axis Value : {this.props.data.xVal}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                 Y Axis Value : {this.props.data.yVal}
                </Typography>
            </CardContent>
            </Card>
        );
    }
}

export default withStyles(useStyles)(DetailsPanel)
