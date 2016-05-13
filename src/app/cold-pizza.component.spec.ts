import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ColdPizzaAppComponent } from '../app/cold-pizza.component';

beforeEachProviders(() => [ColdPizzaAppComponent]);

describe('App: ColdPizza', () => {
  it('should create the app',
      inject([ColdPizzaAppComponent], (app: ColdPizzaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cold-pizza works!\'',
      inject([ColdPizzaAppComponent], (app: ColdPizzaAppComponent) => {
    expect(app.title).toEqual('cold-pizza works!');
  }));
});
