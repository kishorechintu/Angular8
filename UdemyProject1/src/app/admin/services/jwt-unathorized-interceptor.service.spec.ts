import { TestBed } from "@angular/core/testing";

import { JwtUnathorizedInterceptorService } from "./jwt-unathorized-interceptor.service";

describe("JwtUnathorizedInterceptorService", () => {
  let service: JwtUnathorizedInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtUnathorizedInterceptorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
