import { Injectable } from "@angular/core";
import { Store } from "@core/store";
import { ScreamState, initialState } from "./scream-state";

@Injectable({ providedIn: "root" })
export class ScreamStore extends Store<ScreamState> {
  constructor() {
    super(initialState);
  }

  setScreams(screamsToSet) {
    console.log("[Scream] set Screams");

    const newState = {
      ...this.state,
      screams: screamsToSet,
      loading: false
    };

    this.setState(newState);
  }

  setScream(screamToSet: import("./scream").Scream) {
    console.log("[Scream] set Scream");

    const newState = {
      ...this.state,
      scream: [].concat(this.state.scream, screamToSet)
    };

    this.setState(newState);
  }

  loadingData() {
    console.log("[Scream] loading data");

    const newState = {
      ...this.state,
      loading: true
    };

    this.setState(newState);
  }

  likeScream(scream) {
    console.log("[Like] loading");

    let index = this.state.screams.findIndex(
      scream => scream.screamId === scream.screamId
    );
    this.state.screams[index] = scream;
    if (this.state.scream. === scream.screamId) {
      this.state.scream = scream;
    }

    const newState = {
      ...this.state
    };

    this.setState(newState);
  }

  unlikeScream(scream) {
    console.log("[Unlike] loading");

    let index = state.screams.findIndex(
      scream => scream.screamId === action.payload.screamId
    );
    state.screams[index] = action.payload;
    if (state.scream.screamId === action.payload.screamId) {
      state.scream = action.payload;
    }

    const newState = {
      ...this.state
    };

    this.setState(newState);
  }

  // clearScream() {
  //   console.log("[Scream] Clear Scream");

  //   const newState = initialState;

  //   this.setState(newState);
  // }

  // restoreScream(stateToRestore: ScreamState) {
  //   console.log("[Scream] Restore Scream");

  //   this.setState(stateToRestore);
  // }

  // removeScream(screamToRemove: import("./scream").Scream) {
  //   console.log("[Scream] Remove Scream");

  //   const newState = {
  //     ...this.state,
  //     cartItems: this.state.cartItems.filter(
  //       cartItem => cartItem.productId !== cartItemToRemove.productId
  //     )
  //   };

  //   this.setState(newState);
  // }

  // updateScream(screamToUpdate: import("./scream").Scream) {
  //   console.log("[Scream] Update Scream");

  //   const newState = {
  //     ...this.state,
  //     cartItems: this.state.cartItems.map(cartItem =>
  //       cartItem.productId === cartItemToUpdate.productId
  //         ? cartItemToUpdate
  //         : cartItem
  //     )
  //   };

  //   this.setState(newState);
  // }
}