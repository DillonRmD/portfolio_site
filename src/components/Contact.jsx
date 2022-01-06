import Grid from "@mui/material/Grid";

const Contact = () => {
  const contactMethods = [
    {
      name: "Email - dilwill@ostatemail.okstate.edu",
      link: "mailto: dilwill@ostatemail.okstate.edu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png",
    },
    {
      name: "Twitter - itsssdillon",
      link: "https://twitter.com/itsssdillon",
      image:
        "https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png",
    },
    {
      name: "LinkedIn - Dillon Williams",
      link: "https://www.linkedin.com/in/dillon-williams-273000220/",
      image:
        "https://icons.iconarchive.com/icons/danleech/simple/1024/linkedin-icon.png",
    },
    {
        name: "Github - DillonRmD",
        link: "https://github.com/DillonRmD",
        image: 
            "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/github/github-original.svg"
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        backgroundImage:
          "url(https://cdn.dribbble.com/users/2574963/screenshots/5720089/motion-81-portal-travel-dr.gif)",
        backgroundSize: "100% 100%",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={5}
      >
        <h1 style={{ fontFamily: "Nunito", fontSize: "24px", color: "white" }}>
          Lets Get in Contact!
        </h1>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={5}
          
        >
          {contactMethods.map((method) => (
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontsize: "8px",
                fontFamily: "Nunito",
                marginLeft:"auto",
                marginRight:"auto"
              }}
            >
              <a href={method.link}>
                <img alt={method.name} src={method.image} width="40" height="40" />
              </a>
              <p style={{ fontWeight: "bold" }}>{method.name}</p>
            </div>
          ))}
        </Grid>
        <p style={{fontFamily: "Nunito", fontSize: "16px", color: "white"}}>Try clicking some of the icons ;)</p>
      </Grid>
    </div>
  );
};

export default Contact;
