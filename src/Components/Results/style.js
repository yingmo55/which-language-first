const fontSize = {
  fontSize: "2rem",
};

const componentMargin = {
  margin: "10px 10px",
};

const zIndex = {
  zIndex: 3,
};

const buttonStyle = {
  cursor: "pointer",
  ...zIndex,
  ...componentMargin,
  borderRadius: "25px",
  border: "none",
  padding: 15,
};

export const styles = { componentMargin, fontSize, zIndex, buttonStyle };
