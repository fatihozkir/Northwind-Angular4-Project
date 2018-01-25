import {Injectable} from '@angular/core'
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import{AccountService} from './account.service'
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let logged=this.accountService.isLoggedIn();
        if(logged)return true;
        this.router.navigate(["account"],{queryParams:{returnUrl:state.url}});
        return false;
    }
    
    constructor(private accountService:AccountService,private router:Router) {
        
        
    }
    
}
