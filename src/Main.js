import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div><Link to="/redux/saga">Redux-Saga Post Flow Test</Link></div>
      <div><Link to="/component/checkbox">Checkbox Test</Link></div>
      <div><Link to="/redux/textField">Redux text field change test</Link></div>

    </>
  );
}
