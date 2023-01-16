import { PureComponent } from "react";
import "./Progressbar.style";

export class Progressbar extends PureComponent {
  state = {
    allSteps: [],
  };

  componentDidMount() {
    const progressState = this.props.allSteps.map((step, i) => {
      const filledStep = i === 0 ? true : false;
      return {
        step: step.step,
        title: step.title,
        completed: false,
        filled: filledStep,
      };
    });
    this.setState({ allSteps: progressState });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.checkoutStep !== this.props.checkoutStep) {
      const update = this.state.allSteps.map((step) => {
        if (step.step === this.props.checkoutStep) {
          return {
            step: step.step,
            completed: false,
            filled: true,
            title: step.title,
          };
        }
        if (step.step === prevProps.checkoutStep) {
          return {
            step: step.step,
            completed: true,
            filled: true,
            title: step.title,
          };
        }
        return {
          ...step,
        };
      });
      this.setState({
        allSteps: update,
      });
    }
  }

  renderProgressbar() {
    return (
      <div block="ProgressbarContainer">
        <div block="SideLines LeftLine SelectedLine"></div>
        <div block="Steps">
          {this.state.allSteps.map((step, i) => {
            return (
              <>
                {i !== 0 && i !== this.state.allSteps.length - 1 && (
                  <div
                    block={`BetweenLine ${step.filled && "SelectedLine"}`}
                  ></div>
                )}

                {i !== this.state.allSteps.length - 1 && (
                  <div block="Step">
                    <div
                      block={`StatusCircle ${step.filled && "FilledCircle"}`}
                    >
                      {step.completed ? (
                        <div block="checkMark"></div>
                      ) : (
                        <div block="stepNumber">{i + 1}</div>
                      )}
                    </div>
                    <div block={`stepTitle`}>
                      <span
                        block={`stepTitleSpan ${
                          step.filled ? "SelectedStepTitle" : null
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div
          block={`SideLines RightLine ${
            this.state.allSteps.length &&
            this.state.allSteps[this.state.allSteps.length - 2].completed &&
            "SelectedLine"
          }`}
        ></div>
      </div>
    );
  }

  render() {
    return <div>{this.renderProgressbar()}</div>;
  }
}

export default Progressbar;
