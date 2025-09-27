import Container from "./Container";

const Footer = () => {
  return (
    <Container className="max-w-3xl">
      <div className="mt-8 max-w-xl mx-auto px-3 pb-8 sm:px-5 ">
        <p className="text-muted-foreground text-center text-xs mb-2">
          That's all, folks | Designed & built with more headache...
        </p>
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear() } Ajay Shekhawat. All rights reserved (even the bugs).
        </p>
      </div>
    </Container>
  );
};

export default Footer;
