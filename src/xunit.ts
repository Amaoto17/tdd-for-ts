import * as assert from "assert";


class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  tearDown() {}

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();
    const method = "this." + this.name + "()";
    eval(method);
    this.tearDown();
    return result;
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
  testTemplateMethod() {
    const _test = new WasRun("testMethod");
    _test.run();
    assert.ok(_test.log === "setUp testMethod tearDown ");
  }

  testResult() {
    const _test = new WasRun("testMethod");
    const result = _test.run();
    assert.ok(result.summary() === "1 run, 0 failed");
  }

  testFailedResult() {
    const _test = new WasRun("testBrokenMethod");
    const result = _test.run();
    assert.ok(result.summary() === "1 run, 1 failed");
  }
}

class TestResult {
  private runCount = 0;

  testStarted() {
    this.runCount++;
  }

  summary() {
    return this.runCount + " run, 0 failed"
  }
}

new TestCaseTest("testTemplateMethod").run();
new TestCaseTest("testResult").run();
// new TestCaseTest("testFailedResult").run();
