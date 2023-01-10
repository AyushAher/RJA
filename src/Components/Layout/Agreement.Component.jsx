import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h3 className="text-center text-decoration-underline mb-4">
          {" "}
          Disclaimer{" "}
        </h3>
        <p className="fs-5">
          The Bar Council of India does not permit advertisement or solicitation
          of work/clients by Advocates. This website is not intended for
          advertising or soliciting. By clicking on the “I agree” below, the
          viewer/user acknowledges that there has been no solicitation or
          advertisement or invitation or enticement or communication of
          whatsoever nature for any sort of legal or para legal work or services
          from us or any of our advocates.
        </p>
        <p className="fs-5">
          The viewer/user voluntarily wishes to have access to the information
          contained in the website. The information provided under this website
          is solely available at your request for informational purposes only.
          In cases where the user has any legal issues, the user/viewer must
          seek independent legal advice from the Advocate of his/her/its own
          select. No information provided herein shall be construed to be a
          legal advice or creating relationship of client and attorney.
        </p>
        ​
        <p className="fs-5">
          The Owner of the website www.rajendrajaigudeandassociate.com, the law
          firm 'Rajendra Jaigude and Associates', Advocates and the team there
          of shall not be responsible for any legal consequences and the
          Viewer/user shall alone be responsible.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 d-flex justify-content-around">
          <Button
            variant="outline-dark"
            onClick={() => {
              window.close();
            }}
          >
            Decline
          </Button>
          <Button variant="outline-dark" onClick={props.onHide}>
            I Agree
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function HideModel(setModalShow, agreementAccepted) {
  setModalShow(false);
  sessionStorage.setItem(
    "agreementAccepted",
    JSON.stringify(agreementAccepted)
  );
}

export const AgreementComponent = () => {
  const agreementAccepted = sessionStorage.getItem("agreementAccepted");
  const [modalShow, setModalShow] = React.useState(
    !JSON.parse(agreementAccepted)
  );

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => HideModel(setModalShow, true)}
      />
    </>
  );
};
