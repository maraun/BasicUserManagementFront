import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenStorageService} from '../../auth/token-storage.service';

@Directive({
  selector: '[ngxHasRole]',
})
export class HasRoleDirective implements OnInit, OnDestroy {

  @Input() appHasRole: Array<string>;
  private roles: string[];
  stop$ = new Subject();
  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      if (!this.roles) {
        this.viewContainerRef.clear();
      }

      if (this.roles.some(r => this.appHasRole.includes(r))) {
        if (!this.isVisible) {
          this.isVisible = true;
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      } else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    }
  }

  ngOnDestroy() {
    this.stop$.next();
  }
}
