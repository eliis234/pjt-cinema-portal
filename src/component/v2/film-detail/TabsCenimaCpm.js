import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./style/tabs-cenima.scss";
import * as _ from "lodash";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#060e19'
  }
}));

export default function TabsCenimaCpm(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const _renderTabs = () => {
    let data = _.get(props, "data", TABS);
    let obj = {};
    obj.tabs = data.map((item, index) => {
      return (
        <LinkTab
          label={item.title}
          href={`/tabs-cenima-${index}`}
          {...a11yProps(index)}
          key={index}
        />
      );
    });
    obj.contents = data.map((item, index) => {
      return (
        <TabPanel value={value} key={index} index={index}>
          {item.content}
        </TabPanel>
      );
    });
    return obj
  };
  const { tabs, contents } = _renderTabs();
  return (
    <div className="cm-tabs-cenimas-cpm">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            // variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            {tabs}
          </Tabs>
        </AppBar>
        {contents}
      </div>
    </div>
  );
}

const TABS = [
  {
    title: "title 1",
    content: <h1 class="text-dark">title 1</h1>
  },
  {
    title: "title 2",
    content: <h1 class="text-dark">title 2</h1>
  },
  {
    title: "title 3",
    content: <h1 class="text-dark">title 3</h1>
  }
];
