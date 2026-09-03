import axios from './axios';

describe('Axios Configuration', () => {
  it('should have a baseURL configured', () => {
    expect(axios.defaults.baseURL).toBeDefined();
  });

  it('should have default headers', () => {
    expect(axios.defaults.headers).toBeDefined();
  });

  it('should have a timeout configured', () => {
    expect(axios.defaults.timeout).toBeDefined();
  });
});