import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CollapseSidenav, ExpandSidenav, ToggleSidenav } from './ui.action';

export interface UiStateModel {
  sidenavCollapsed: boolean;
}

@State<UiStateModel>({
  name: 'ui',
  defaults: {
    sidenavCollapsed: false
  }
})
export class UiState {
  @Selector()
  static sidenavCollapsed(state: UiStateModel): boolean {
    return state.sidenavCollapsed;
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
} 