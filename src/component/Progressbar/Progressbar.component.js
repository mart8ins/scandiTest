// import PropTypes from 'prop-types';
import { PureComponent } from "react";

import "./Progressbar.style";

export class Progressbar extends PureComponent {
  renderProgressbar() {
    const { checkoutStep, allSteps } = this.props;
    console.log(checkoutStep);
    return (
      <div block="ProgressbarContainer">
        <div block="Line"></div>
        <div block="Steps">
          {allSteps.map((step, i) => {
            return <div block="Step">{step}</div>;
          })}
        </div>
        <div block="Line"></div>
      </div>
    );
  }

  render() {
    return <div>{this.renderProgressbar()}</div>;
  }
}

export default Progressbar;
