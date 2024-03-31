import { safecontract_backend } from "declarations/safecontract_backend";
import { useState, useEffect } from "react";

const AddContract = () => {
  const [user, setUser] = useState(null);
  const [loading, SetLoading] = useState(false);

  async function addContract(e) {
    const terms = e.target.elements.terms.value;
    const id = e.target.elements.ids.value;
    console.log(terms, id);
    await safecontract_backend.add_contract(user, id, terms).then((res) => {
      console.log(res);
      if (res.Ok == null) {
        SetLoading(false);
        alert("Done.");
      } else {
        SetLoading(false);
        alert("Error: Unknown:");
      }
    });

    e.preventDefault();
  }

  useEffect(() => {
    // Get Item from Local storage
    async function getLocal() {
      const userData = window.localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }

    getLocal();
  }, []);

  return (
    <div>
      <form onSubmit={addContract}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Contract Terms :
          </label>
          <div class="form-floating">
            <textarea class="form-control" name="terms" id="terms"></textarea>
            <label htmlFor="terms">Terms of Contract...</label>
          </div>
          <div id="emailHelp" class="form-text">
            It will not be considered successful unless both validators approve.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Other approver e-mail :
          </label>
          <input
            name="ids"
            placeholder="This id must be Principal"
            class="form-control"
            type="text"
            id="ids"
          />
        </div>

        <button type="submit" class="btn btn-md btn-success">
          <span
            className={
              loading
                ? "me-2 spinner-border spinner-border-sm"
                : "me-2 visually-hidden spinner-border spinner-border-sm"
            }
            aria-hidden="true"
          ></span>
          Create
        </button>
      </form>
    </div>
  );
};

export default AddContract;
