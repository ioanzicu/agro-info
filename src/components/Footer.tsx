import React from "react";
import { Card } from "react-bootstrap";

const Footer: React.FC = () => {
  const date = new Date();

  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">
        Agro Info &copy; Copyright {date.getFullYear()}. All rights reserved.
        <hr />
        <div className="m-3">
          Agro Info web application was made by Ioan Zîcu, as a university
          project.
          <br />
          All information displayed on the site has educational porposes and is
          not refered to the real company.
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Footer;
