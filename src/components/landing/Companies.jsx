import Container from "../shared/Container";

const Companies = () => {
  const logos = [
    "/logos/company1.png",
    "/logos/company2.png",
    "/logos/company3.png",
    "/logos/company4.png",
    "/logos/company5.png",
  ]
  return (
    <Container>
      <p className="text-neutral-500/80 py-5">Companies we helped grow</p>
      <div className="flex justify-between items-center flex-wrap gap-5">
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>
    </Container>

  );
};

export default Companies;