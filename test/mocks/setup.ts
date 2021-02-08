// window.console
Object.defineProperty(window, 'console', {
  value: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  }
});
