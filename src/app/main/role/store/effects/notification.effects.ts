import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as roleActions from '../role.actions';
import { NotificationService, NotificationType } from '../../../../services/notification/notification.service';

@Injectable()
export class RoleNotificationEffects {
  @Effect({ dispatch: false })
  createRoleSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(roleActions.CREATE_SUCCESS, roleActions.UPDATE_SUCCESS),
    tap(() =>
      this.notificationService.send({
        type: NotificationType.MESSAGE,
        message: 'Role is going to be saved',
      }),
    ),
  );

  @Effect({ dispatch: false })
  deleteRoleSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(roleActions.DELETE_SUCCESS),
    tap(() =>
      this.notificationService.send({
        type: NotificationType.MESSAGE,
        message: 'Role is going to be deleted',
      }),
    ),
  );

  constructor(private actions$: Actions, private notificationService: NotificationService) {}
}
