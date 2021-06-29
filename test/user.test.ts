import { expect, haveResource, countResources } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { ZUser } from '../src';

describe('User', () => {
  it('creates the user', () => {
    const stack = new Stack();
    new ZUser(stack, 'User');
    expect(stack).to(haveResource('AWS::IAM::User'));
    expect(stack).to(countResources('AWS::IAM::User', 1));
    expect(stack).to(haveResource('AWS::IAM::AccessKey'));
    expect(stack).to(countResources('AWS::IAM::AccessKey', 1));
  });
});
