import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = theme => ({
  root: {
    minWidth: 275,
    margin:'40px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop:10
  },
});
class Home extends React.Component {
    render() {
      const {classes} = this.props
      return (

        <Card className={classes.root} >
        <CardContent>
            <Typography variant="h5" component="h2">
                Github details 
            </Typography>
            <Typography variant="h5" component="h2">
                  <Link href="https://github.com/stardev24/timeseriesplot.git">
			Repo
		      </Link>
            </Typography>
        </CardContent>
        </Card>
       
      )

    }
}

export default withStyles(useStyles)(Home)
