import Select from "../assets/components/Select";
import InputWithModal from "../assets/components/InputWithModal";
import ImageUpload from "../assets/components/ImageUpload";
import Button from "../assets/components/Button";

const OnlineTicket = () => {
  const storeOptions = [
    { value: "walmart", label: "Walmart" },
    { value: "target", label: "Target" },
    { value: "costco", label: "Costco" },
    { value: "amazon", label: "Amazon" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>
            <b>COMPRA ONLINE</b>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <img src="https://placehold.co/250x250" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h5>
            <b>COMPRA ONLINE</b>
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Select options={storeOptions} name="physicalTicketStore" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <InputWithModal
            modalImageSrc={"https://placehold.co/250x250"}
            modalText={"lorem ipsum"}
            placeholder={123}
            name="onlineTicketNum"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <InputWithModal
            modalImageSrc={"https://placehold.co/250x250"}
            modalText={"lorem ipsum"}
            placeholder={123}
            name="onlineTicketCode"
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="age" className="form-label">
          Fecha de Nacimiento*
        </label>
        <div className="d-flex justify-content-between">
          <input
            type="text"
            className="form-control me-2"
            placeholder="DD"
            maxLength={2}
            name="day"
            style={{ width: "32%" }}
            required
          />
          <input
            type="text"
            className="form-control me-2"
            placeholder="MM"
            maxLength={2}
            name="month"
            style={{ width: "32%" }}
            required
          />
          <input
            type="text"
            className="form-control"
            placeholder="AAAA"
            maxLength={4}
            name="year"
            style={{ width: "32%" }}
            required
          />
        </div>
      </div>

      <div className="row">
        <ImageUpload/>
      </div>

      <div className="row">
        <div className="col-md-12">
            <Button text="CONTINUAR" route="/user/ticket/trip"/>
        </div>
      </div>
    </div>
  );
};

export default OnlineTicket;
