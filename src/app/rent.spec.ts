import { Rent } from './rent';

describe('Rent', () => {
  it('should create an instance', () => {
    expect(new Rent(null, '', '', null, null)).toBeTruthy();
  });
});
