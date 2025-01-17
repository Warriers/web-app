import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "components/Paper";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundImage: "url(/static/onepirate/appCurvyLines.png)",
      backgroundRepeat: "no-repeat",
    },
    paper: {
      padding: theme.spacing(4, 3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(8, 6),
      },
    },
  });

interface Props {
  children: React.ReactNode;
  classes: {
    [key: string]: any;
  };
}

const AppForm = (props: Props) => {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
      </Container>
    </div>
  );
};

export default withStyles(styles)(AppForm);
