import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Rating from '@material-ui/lab/Rating';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#52DE97"
    },
    secondary: {
      main: "#3C9D9B",
    },
    dark: {
      main: "#2C003E"
    }
  },
});


window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
  },
  button: {
    margin: theme.spacing(1),
    alignContent: "right"
  },
  cover: {
    width: 120,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  littleAvatar: {
    width: 35,
    height: 35,
  },
  sellerSummary: {
    fontSize: '0.7rem;' 
  },
  caption: {
    fontSize: '0.6rem;' 
  },
  root: {
    flexGrow: 1
  },
  rootTwo: {
    display: 'flex',
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(2),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
  paper: {
    height: 100,
    width: 160,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#52DE97',
  },
})(Rating);

function getLabelText(value) {
  return `${value} MusicNoteIcon${value !== 1 ? 's' : ''}`;
}

export default function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <ThemeProvider theme={outerTheme}>
    <Card className={classes.card}>
      <CssBaseline />
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image="https://image-ticketfly.imgix.net/00/03/03/46/77-og.jpg?w=500&h=334&fit=crop&crop=top"
          title="Illenium: The Ascend Tour"
        />
        <CardContent className={classes.content}>
          <Typography component="h8" variant="h8">
            Illenium: The Ascend Tour
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            November 8th, 2019
          </Typography>
        </CardContent>
      </div>
      <Divider />
      <List dense>
        <ListItem key={1}>
          <ListItemAvatar>
            <Avatar
              className={classes.littleAvatar}
              alt={`Mark Z`}
              src={`https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg`}
            />
          </ListItemAvatar>
          <ListItemText id={1} primary={
          <StyledRating
            name="customized-color"
            value={4}
            getLabelText={getLabelText}
            precision={0.5}
            size="small"
            icon={<MusicNoteIcon fontSize="inherit" />}
          />
          } secondary={`Mark has 25 verified tickets sold.`} className={classes.sellerSummary}/>
          <IconButton aria-label="score">
            <Badge badgeContent={"97%"} color="secondary">
              <ConfirmationNumberIcon color="primary"/>
            </Badge>
          </IconButton>
        </ListItem>
      </List>
      <Divider />
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="UIC Pavilion"
            secondary={
              <React.Fragment>
                <Rating name="size-small" precision={0.5} value={3.5} size="small" />
              </React.Fragment>
            }
          />
          <Typography variant="caption" display="">
            173 reviews
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Payment"
            secondary={
              <React.Fragment>
                <Typography variant="caption" className={classes.caption}>
                  You will not be charged until ticket is verified as valid.
                </Typography>
              </React.Fragment>
            }
          />
          <React.Fragment>$45.00</React.Fragment>
        </ListItem>
      </List>
      <Divider />
      <Button className={classes.button} color="secondary">
        Upload a PDF ticket
      </Button>
    </Card>
    </ThemeProvider>
  );
}