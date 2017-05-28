/**
 * Created by marius on 28/05/2017.
 */
import {AuthorizationService} from "./authorization.service";
import {Authorization} from "../domain/authorization";
import {AUTH} from "../domain/data";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationFileService implements AuthorizationService {
  getAuthorization(): Promise<Authorization> {
    return Promise.resolve(AUTH);
  }
}
