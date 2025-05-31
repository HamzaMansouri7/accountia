import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CollapseSidenav, ExpandSidenav, ToggleSidenav, SetDirection } from './ui.action';

export interface UiStateModel {
  sidenavCollapsed: boolean;
  direction: 'ltr' | 'rtl';
}

@State<UiStateModel>({
  name: 'ui',
  defaults: {
    sidenavCollapsed: false,
    direction: 'ltr'
  }
})
export class UiState {
  @Selector()
  static sidenavCollapsed(state: UiStateModel): boolean {
    return state.sidenavCollapsed;
  }

  @Selector()
  static direction(state: UiStateModel): 'ltr' | 'rtl' {
    return state.direction;
  }

  @Action(CollapseSidenav)
  collapseSidenav(ctx: StateContext<UiStateModel>) {
    ctx.patchState({ sidenavCollapsed: true });
  }

  @Action(ExpandSidenav)
  expandSidenav(ctx: StateContext<UiStateModel>) {
    ctx.patchState({ sidenavCollapsed: false });
  }

  @Action(ToggleSidenav)
  toggleSidenav(ctx: StateContext<UiStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ sidenavCollapsed: !state.sidenavCollapsed });
  }

  @Action(SetDirection)
  setDirection(ctx: StateContext<UiStateModel>, action: SetDirection) {
    ctx.patchState({ direction: action.direction });
  }
} 