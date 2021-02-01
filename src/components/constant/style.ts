import CSS from 'csstype';

const colors = {
  textGreyColor: '#6a6c6e'
}

export const cardStyle: CSS.Properties = {
  backgroundColor: 'black',
  fontFamily: 'sans-serif',
  border: '2px solid black',
  borderRadius: '5px',
  padding: '5px 0',
  marginBottom: '10px',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  width: '250px',
};

export const textStyles: CSS.Properties = {
  fontSize: 'small',
  textAlign: 'center',
  color: 'white'
};

export const subTextStyles: CSS.Properties = {
  color: colors.textGreyColor
};
export const listWrapperStyles: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  top: '50px'
};
export const dashboardStyles: CSS.Properties = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  top: '50px'
};
export const crossStyle: CSS.Properties = {
  color: 'black',
  textAlign: 'center',
  width: '50px',
  height: '50px',
  background: 'red',
  borderRadius: '50%'
};
export const tickStyle: CSS.Properties = {
  display: 'inline-block',
  transform: 'rotate(45deg)',
  height: '24px',
  width: '12px',
  borderBottom: '4px solid black',
  borderRight: '4px solid black',
};

export const circleStyle: CSS.Properties = {
  width: '50px',
  height: '50px',
  background: 'green',
  borderRadius: '50%'
}