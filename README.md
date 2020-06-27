# Percy.io/TestCafe Snapshot Testing Starter Project
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io) [![Tested with TestCafe.](https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg)](https://github.com/DevExpress/testcafe)

This project is a very simple demo to show the power of visual testing with Percy.io.

[HERE](https://www.youtube.com/watch?v=1Sr_h9_3MI0) is a quick video introduction to Percy.io. The Percy documentation can be found [HERE](https://docs.percy.io/docs/).

TestCafe is used alongside Percy.io in this project to allow page interactions.


## Setup and Run

### Percy.io Setup:
1. Navigate to the [Percy.io homepage](https://percy.io/login) and click "Sign Up" to create a new Percy account.
2. Log into Percy with your account and create a new organisation, this can be updated later so any name will do.
3. In this organisation create a new project. Calling this project something like your application name is ideal, but again, it can be changed later.
4. In your Percy project, navigate to the "Project settings" tab. Under "Branch settings" set a default branch name that will be used to save baseline snapshots to compare against (I use 'master').

### Framework Setup:
1. At the root directory of this project, rename the '.env.example' file in the root directory to '.env'.
2. Navigate back to the "Project settings" page in your Percy project and copy the project token into the .env file.
3. Open a new terminal window and navigate to the root directory, then install all dependencies:
```shell
    $ cd path/to/your/project
    $ npm i
```

### Running Tests:
1. Before running the test, decide if you want this run to compare and overwrite the baseline snapshots or simply compare against the existing baseline.
    * To overwrite the snapshots and create a new baseline, update the "PERCY_BRANCH" value in the .env file to the default branch name you chose above. 
    * To simply take new snapshots and compare them against the current baseline, update the "PERCY_BRANCH" value to a different branch name (any value that is not your default branch name is fine since this example does not run in CI).
2. Open a terminal window and navigate to the root directory, then run the package.json script for the test you would like to run:
```shell
    $ cd path/to/your/project
    $ npm run test:pageLoop
```

### Viewing Test Results:
When the test run has completed the terminal window will show something similar to the following:
```shell
 13 passed (1m 18s)
[percy] stopping percy...
[percy] waiting for 13 snapshots to complete...
[percy] done.
[percy] finalized build #1: https://percy.io/...
```

Following the link will take you to the test results where you can compare the snapshots taken to the baseline and overwrite it if required.


## Expanding This Project
Once you are familiar with this project it should be easy to begin adding more tests and more functionality.

Below are some useful areas you may consider expanding: 

#### Project Folder Structure
TestCafe has no recommended test/folder structure so feel free to reorganise the folder structure to suit your needs.
If you are having trouble with this, [HERE](https://github.com/DevExpress/testcafe/tree/master/test/functional) is a link to the official TestCafe project tests.

#### Environment Management
It is strongly recommended that the environment is managed from the npm script to allow the environment to be easily switched between staging/prod etc.

Such as in the examples below:
```
"test:staging": "BASE_URL='https://www.qantas.staging.com' cross-env-file-shell $(npm bin)/percy exec -h `ipconfig getifaddr en0` -- $(npm bin)/testcafe chrome tests/"

"test:staging": "ENV=STAGING cross-env-file-shell $(npm bin)/percy exec -h `ipconfig getifaddr en0` -- $(npm bin)/testcafe chrome tests/"
```

#### Global Configuration
A global configuration file can be made to provide more standardisation and reduce the bulk of your npm scripts. In this project a .percy.yml file has been used for this purpose.

More information about this can be found [HERE](https://docs.percy.io/docs/sdk-configuration).

#### Percy Specific CSS
Percy specific CSS can be used to hide or mask fields. This is useful for preventing unintended failures caused by elements that frequently change e.g. times, dates.

More information about this can be found [HERE](https://docs.percy.io/docs/percy-specific-css).

#### CI
A Percy.io framework can be incorporated into your CI pipeline.

More information about this can be found [HERE](https://docs.percy.io/docs/ci-setup).


## Further Reading
* [Official Percy.io TestCafe example app](https://github.com/percy/example-percy-testcafe)
* [Percy.io documentation](https://docs.percy.io/docs)
* [TestCafe documentation](https://devexpress.github.io/testcafe/documentation)
