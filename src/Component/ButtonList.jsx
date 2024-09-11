import Button from "../utils/Button";
import { button } from "../utils/constant";

let buttonList =
  button &&
  button.map((button) => {
    return (
      <Button
        background={button.backgroundColor}
        label={button.label}
        key={button.id}
      />
    );
  });

function ButtonList() {
  return <div className="mx-3">{buttonList}</div>;
}

export default ButtonList;
