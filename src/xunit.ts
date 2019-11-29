import * as assert from "assert";


class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  run() {
    this.setUp();
    const method = "this." + this.name + "()";
    eval(method);
  }
}

class WasRun extends TestCase {
  public wasRun = false;
  public wasSetUp = false;

  constructor(name: string) { super(name); }

  setUp() {
    this.wasSetUp = true;
  }

  testMethod() {
    this.wasRun = true;
  }
}

class TestCaseTest extends TestCase {
  public _test: WasRun = new WasRun("testMethod");

  constructor(name: string) { super(name); }

  setUp() {
  }

  testRunning() {
    this._test.run();
    assert.ok(this._test.wasRun);
  }

  testSetUp() {
    this._test.run();
    assert.ok(this._test.wasSetUp);
  }
}

new TestCaseTest("testRunning").run();
new TestCaseTest("testSetUp").run();
