import arrowIcon from "./images/icon-arrow.svg";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="form-container flex-row-center">
        <input placeholder="Email Address" type="email" />
        <button className="flex-row-center">
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </div>
    </form>
  );
}
