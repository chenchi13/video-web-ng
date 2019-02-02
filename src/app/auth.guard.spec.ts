import { NeedAuthGuard } from './auth.guard';

describe('NeedAuthGuard', () => {
  it('should create an instance', () => {
    expect(new NeedAuthGuard(null, null)).toBeTruthy();
  });
});
