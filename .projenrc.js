const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Rafael Z. Kineippe',
  authorAddress: 'rafael@zamana.com.br',
  cdkVersion: '1.95.2',
  defaultReleaseBranch: 'main',
  name: 'projen-study',
  repositoryUrl: 'https://github.com/rzamana/projen-study.git',
  cdkAssert: true, /* Install the @aws-cdk/assert library? */
  license: 'Apache-2.0', /* License's SPDX identifier. */
  licensed: true, /* Indicates if a license should be added. */

  cdkDependencies: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/core',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  release: true, /* Add release management to this project. */
  publishToPypi: {
    distName: 'projen-study',
    module: 'projen_study',
  }, /* Publish to pypi. */
});
project.synth();