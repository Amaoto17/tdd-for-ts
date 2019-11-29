import * as assert from "assert";


class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  tearDown() {}

  run(result: TestResult) {
    result.testStarted();
    this.setUp();
    try {
      const method = `this.${this.name}()`;
      eval(method);
    } catch {
      result.testFailed();
    }
    this.tearDown();
  }
}

class WasRun extends TestCase {
  public log = "";

  setUp() {
    this.log = "setUp ";
  }

  testMethod() {
    this.log += "testMethod ";
  }

  testBrokenMethod() {
    throw new Error;
  }

  tearDown() {
    this.log += "tearDown ";
  }
}

class TestCaseTest extends TestCase {
  private result = new TestResult();

  testTemplateMethod() {
    const _test = new WasRun("testMethod");
    _test.run(this.result);
    assert.ok(_test.log === "setUp testMethod tearDown ");
  }

  testResult() {
    const _test = new WasRun("testMethod");
    _test.run(this.result);
    assert.ok(this.result.summary() === "1 run, 0 failed");
  }

  testFailedResult() {
    const _test = new WasRun("testBrokenMethod");
    _test.run(this.result);
    assert.ok(this.result.summary() === "1 run, 1 failed");
  }

  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    assert.ok(this.result.summary() === "1 run, 1 failed");
  }

  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testBrokenMethod"));
    suite.run(this.result);
    assert.ok(this.result.summary() === "2 run, 1 failed");
  }
}

class TestResult {
  private runCount = 0;
  private errorCount = 0;

  testStarted() {
    this.runCount++;
  }

  testFailed() {
    this.errorCount++;
  }

  summary() {
    return `${this.runCount} run, ${this.errorCount} failed`;
  }
}

class TestSuite {
  tests: Array<any> = [];

  add(test: any) {
    this.tests.push(test);
  }

  run(result: TestResult) {
    this.tests.forEach(test => test.run(result));
  }
}


const suite = new TestSuite();
suite.add(new TestCaseTest("testTemplateMethod"));
suite.add(new TestCaseTest("testResult"));
suite.add(new TestCaseTest("testFailedResult"));
suite.add(new TestCaseTest("testFailedResultFormatting"));
suite.add(new TestCaseTest("testSuite"));
const result = new TestResult();
suite.run(result);
console.log(result.summary());
