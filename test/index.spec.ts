import * as Modkit from '../src/index';

describe('Modkit Singleton', () => {
  it('should export Modkit singleton', () => {
    expect(Modkit.modules.length).toEqual(0);
    expect(Modkit.load).toBeDefined();
    expect(Modkit.getModule).toBeDefined();
  });
});
