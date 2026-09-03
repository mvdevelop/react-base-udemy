import store from './index';
import * as actions from './modules/example/actions';

describe('Store', () => {
  it('should have a working store', () => {
    expect(store).toBeDefined();
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
  });

  it('should dispatch actions correctly', () => {
    const action = actions.clicaBotaoRequest();
    expect(action.type).toBe('BOTAO_CLICADO_REQUEST');
  });

  it('should have initial state', () => {
    const state = store.getState();
    expect(state.example).toBeDefined();
    expect(state.example.botaoClicado).toBe(false);
  });
});