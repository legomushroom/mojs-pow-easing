import pow from '../src/pow-easing.babel.js'

describe('pow-easing ->', function() {
  it('should create pow easing #2', function() {
    const newEasing = pow(2);

    expect(newEasing.out(0)).toBeCloseTo(0, 3);
    expect(newEasing.out(.25)).toBeCloseTo(0.4375, 3);
    expect(newEasing.out(.5)).toBeCloseTo(0.75, 3);
    expect(newEasing.out(.75)).toBeCloseTo(0.9375, 3);
    expect(newEasing.out(1)).toBeCloseTo(1, 3);
  });
  it('should create pow easing #3', function() {
    const newEasing = pow(3);

    expect(newEasing.in(0)).toBeCloseTo(0, 3);
    expect(newEasing.in(.25)).toBeCloseTo(0.015625, 3);
    expect(newEasing.in(.5)).toBeCloseTo(0.125, 3);
    expect(newEasing.in(.75)).toBeCloseTo(0.421875, 3);
    expect(newEasing.in(1)).toBeCloseTo(1, 3);
  });

  it('should create pow easing #4', function() {
    const newEasing = pow(4);

    expect(newEasing.inout(0)).toBeCloseTo(0, 3);
    expect(newEasing.inout(.25)).toBeCloseTo(0.03125, 3);
    expect(newEasing.inout(.5)).toBeCloseTo(0.5, 3);
    expect(newEasing.inout(.75)).toBeCloseTo(0.96875, 3);
    expect(newEasing.inout(1)).toBeCloseTo(1, 3);
  });
});
