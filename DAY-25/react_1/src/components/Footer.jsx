const Footer = () => {
  const nav = ['Need Help?', 'Job', 'Contact Us'];
  return (
    <div>
      {nav.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default Footer;
