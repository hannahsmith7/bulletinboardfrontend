import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = new Router()
  const authToken = localStorage.getItem('token')

  if (!authToken) 
  {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
