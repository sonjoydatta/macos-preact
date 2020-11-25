import { fade, makeStyles } from '@material-ui/core';
import React from 'react';
import IconSystemPreferences from '__assets/app-icons/system-preferences/256.png';
import IconGithub from '__assets/app-icons/github/256.png';
import IconFinder from '__assets/app-icons/finder/256.png';
import IconLaunchpad from '__assets/app-icons/launchpad/256.png';
import IconSafari from '__assets/app-icons/safari/256.png';

function Dock({}) {
  const classes = useStyles();

  return (
    <>
      <section className={classes.dockContainer}>
        <div className={classes.dock}>
          <img src={IconFinder} />
          <img src={IconLaunchpad} />
          <img src={IconSafari} />
          <img src={IconSystemPreferences} />
          <img src={IconGithub} />
        </div>
      </section>
    </>
  );
}

const useStyles = makeStyles(({ spacing, shape, palette }) => ({
  dockContainer: {
    position: 'fixed',
    bottom: spacing(0.3),
    left: 0,
    zIndex: 999999999999999,

    width: '100%',
    height: spacing(5),

    padding: spacing(0.4),

    display: 'flex',
    justifyContent: 'center',
  },

  dock: {
    backdropFilter: 'blur(5px)',
    backgroundColor: fade(palette.grey[100], 0.2),

    boxShadow: 'rgba(0, 0, 0, 0.3) 2px 5px 19px 7px;',

    padding: spacing(0.3),

    borderRadius: spacing(1),

    height: '100%',

    '& img': {
      maxHeight: '100%',
    },
  },
}));

export { Dock };