import config from 'config';
import http from 'lib/http';

export default class SessionSource {
  static urlRoot = '/reporter';

  static sendCode(code, type) {
    return http.post({ url: this.urlRoot, body: { code, type }}).then(result => result.json());
  }
}
