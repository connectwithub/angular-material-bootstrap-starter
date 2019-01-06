import { CoreFeaturesModule } from './core-features.module';

describe('CoreFeaturesModule', () => {
  let coreFeaturesModule: CoreFeaturesModule;

  beforeEach(() => {
    coreFeaturesModule = new CoreFeaturesModule();
  });

  it('should create an instance', () => {
    expect(coreFeaturesModule).toBeTruthy();
  });
});
