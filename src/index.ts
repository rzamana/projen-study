import { User, UserProps, CfnAccessKey } from '@aws-cdk/aws-iam';
import { Construct, Fn } from '@aws-cdk/core';

export class ZUser extends User {
  /**
   * An attribute that represents the user access_key.
   *
   * @attribute true
   */
  readonly accessKey: string;
  /**
    * An attribute that represents the user secret_key.
    *
    * @attribute true
    */
  readonly secretKey: string;

  constructor(scope: Construct, id: string, props?: UserProps) {
    super(scope, id, props);

    const access_keys = new CfnAccessKey(scope, `${id}AccessKeys`, {
      userName: this.userName,
    });
    const secret_key = Fn.getAtt(access_keys.logicalId, 'SecretAccessKey');

    this.accessKey = access_keys.ref;
    this.secretKey = secret_key.toString();

  }

}