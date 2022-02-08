const componentMargin = {
    margin: "10px 10px",
  }
  
const changeSize = {
    width: '100vw',
    height: '100vh'
  }
  
const zIndex = {
    zIndex: 3,
  }

const buttonStyle = {
  cursor: 'pointer',
  ...zIndex,
  ...componentMargin,
  borderRadius: '25px',
  border: 'none',
  padding: 15,
}

export const styles = {componentMargin, changeSize, zIndex, buttonStyle}