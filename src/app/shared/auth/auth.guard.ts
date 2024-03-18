import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {

    const token = localStorage.getItem('token');
    const router = inject(Router);

    console.log(token);

    // localStorage.setItem('token', 'AAAA');
  localStorage.removeItem('token');

    if(token) {
      return true;
    } else {
      router.navigate(['login']);
      return false;
    }
};
