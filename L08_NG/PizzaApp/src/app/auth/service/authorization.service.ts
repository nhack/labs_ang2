/**
 * Created by marius on 28/05/2017.
 */
import {Authorization} from "../domain/authorization";
import {OpaqueToken} from "@angular/core";

export interface AuthorizationService {
  getAuthorization(): Promise<Authorization>
}

export const AUTH_SERVICE: OpaqueToken = new OpaqueToken('app.auth.service');
