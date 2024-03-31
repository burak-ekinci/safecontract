import { safecontract_backend } from "declarations/safecontract_backend";
import { useEffect, useState } from "react";

const MyContracts = () => {
  const [loadingapp, SetLoadingapp] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [mycontracts, setContracts] = useState({});
  const [creator, setCreator] = useState();
  const [id, setId] = useState();
  const [approver, setApprover] = useState();
  const [terms, setTerms] = useState();
  const [approved_creator, setApproved_creator] = useState();
  const [approved_approver, setApproved_approver] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get Item from Local storage
    const userData = window.localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      alert("Please Login!");
    }
  }, []);

  function getContract() {
    SetLoading(true);
    safecontract_backend.get_contract_id(user).then((res) => {
      if (res == [""]) {
        SetLoading(false);
      } else if (res != null) {
        safecontract_backend.get_contract(res[0]).then((res) => {
          const jsonContract = JSON.parse(res);
          console.log("bu json: " + jsonContract);
          setId(jsonContract.id);
          setCreator(jsonContract.creator);
          setApprover(jsonContract.approver);
          setTerms(jsonContract.terms);
          setApproved_approver(jsonContract.approved_approver);
          setApproved_creator(jsonContract.approved_creator);
          SetLoading(false);
        });
      } else {
        SetLoading(false);
        alert("You don't have any contract");
      }
    });
  }

  async function approveContract() {
    SetLoadingapp(true);
    await safecontract_backend.approve_contract(user, id);
    SetLoadingapp(false);
  }

  return (
    <div>
      <div className="d-flex">
        <h1>MY CONTRACTS</h1>
        <button
          onClick={() => {
            getContract();
          }}
          className="btn ms-4 btn-warning"
        >
          <span
            className={
              loading
                ? "mx-2 spinner-border spinner-border-sm"
                : "mx-2 visually-hidden spinner-border spinner-border-sm"
            }
            aria-hidden="true"
          ></span>
          Get My Contracts...
        </button>
      </div>
      <strong>
        <hr />
      </strong>

      <div key={id} className="card bg-secondary-subtle m-5 text-center border">
        <div className="card-body">
          <h5 className="card-title d-flex text-start">
            <strong>Contract Terms : </strong>
            <h4 className="text-success ms-4 fw-bold">
              {approved_approver && approved_creator ? "APPROVED" : ""}
            </h4>
          </h5>
          <h6 className="card-text text-start">{terms}</h6>
          <div className="d-flex justify-content-around">
            <a
              onClick={() => {
                approveContract();
              }}
              className={
                approved_creator == false
                  ? "btn btn-primary m-1"
                  : "btn btn-success disabled m-1"
              }
            >
              <span
                className={
                  loadingapp
                    ? "mx-2 spinner-border spinner-border-sm"
                    : "mx-2 visually-hidden spinner-border spinner-border-sm"
                }
                aria-hidden="true"
              ></span>
              {approved_creator == false
                ? "Approve: Creator"
                : "Approved: Creator"}
            </a>
            <a
              onClick={() => {
                approveContract();
              }}
              className={
                approved_approver == false
                  ? "btn btn-primary m-1"
                  : "btn btn-success disabled m-1"
              }
            >
              <span
                className={
                  loadingapp
                    ? "mx-2 spinner-border spinner-border-sm"
                    : "mx-2 visually-hidden spinner-border spinner-border-sm"
                }
                aria-hidden="true"
              ></span>
              {approved_approver == false
                ? "Approve: Approver"
                : "Approved: Approver"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContracts;
