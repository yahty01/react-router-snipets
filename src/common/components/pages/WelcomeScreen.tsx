import React from 'react';

type Props = {}

export const WelcomeScreen = (props: Props) => {
  return (
    <div style={{
      paddingLeft: '15px',
      paddingRight: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}>
      Welcome! <br/>
      We’re so glad to have you here. <br/>
      Enjoy your time with us! <br/>
    </div>
  );
}

