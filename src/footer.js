const footerStyles = {
  backgroundColor: "#DDD",
  display: "flex",
  justifyContent: "center",
  padding: 10,
};

const Footer = (props) => (
  <footer style={footerStyles}>trademark Bedu {props.year}</footer>
);

export default Footer;
