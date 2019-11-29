import * as assert from "assert";


class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  tearDown() {}

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();
    try {
      const method = `this.${this.name}()`;
      eval(method);
    } catch {
      result.testFailed();
    }
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

  testFailedResultFormatting() {
    const result = new TestResult();
    result.testStarted();
    result.testFailed();
    assert.ok(result.summary() === "1 run, 1 failed");
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

console.log(new TestCaseTest("testTemplateMethod").run().summary());
console.log(new TestCaseTest("testResult").run().summary());
console.log(new TestCaseTest("testFailedResult").run().summary());
console.log(new TestCaseTest("testFailedResultFormatting").run().summary());
