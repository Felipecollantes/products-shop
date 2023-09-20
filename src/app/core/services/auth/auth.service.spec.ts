import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

describe('AuthService', () => {
  let service: AuthService;
  let jwtHelperService: JwtHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
    });
    service = TestBed.inject(AuthService);
    jwtHelperService = TestBed.inject(JwtHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if token is expired', async () => {
    spyOn(jwtHelperService, 'isTokenExpired').and.resolveTo(true);

    const isAuthenticated = await service.isAuthenticated();

    expect(isAuthenticated).toBe(false);
  });
});
