import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component.js";
import "./Checkout.extension.style.scss";
import ContentWrapper from "Component/ContentWrapper";
import CheckoutOrderSummary from "@scandipwa/scandipwa/src/component/CheckoutOrderSummary";

import Progressbar from "Component/Progressbar";

import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from "./Checkout.config";

class Checkout extends SourceCheckout {
  stepMap = {
    [SHIPPING_STEP]: {
      title: __("Shipping step"),
      url: "/shipping",
      render: this.renderShippingStep.bind(this),
      areTotalsVisible: true,
      renderCartCoupon: this.renderCartCoupon.bind(this),
    },
    [BILLING_STEP]: {
      title: __("Billing step"),
      url: "/billing",
      render: this.renderBillingStep.bind(this),
      areTotalsVisible: true,
      renderCartCoupon: this.renderCartCoupon.bind(this),
    },
    [DETAILS_STEP]: {
      title: __("Billing step"),
      url: "/billing",
      render: this.renderBillingStep.bind(this),
      areTotalsVisible: true,
      renderCartCoupon: this.renderCartCoupon.bind(this),
    },
  };

  render() {
    const { checkoutStep } = this.props;
    return (
      <div>
        <Progressbar
          checkoutStep={checkoutStep}
          allSteps={[
            { step: SHIPPING_STEP, title: "Shipping" },
            { step: BILLING_STEP, title: "Review & Payments" },
            { step: DETAILS_STEP, title: "Details step" },
          ]}
        />
        <main block="Checkout">
          <ContentWrapper
            wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
            label={__("Checkout page")}
          >
            {this.renderSummary(true)}

            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
            <div>
              {this.renderSummary()}
              {this.renderPromo()}
              {this.renderCoupon()}
            </div>
          </ContentWrapper>
        </main>
      </div>
    );
  }
}

export default Checkout;
