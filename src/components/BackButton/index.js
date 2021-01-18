import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/bp-card");
  }

  return (
    <button type="button" onClick={handleClick}>
      Back
    </button>
  );
}

export default BackButton;