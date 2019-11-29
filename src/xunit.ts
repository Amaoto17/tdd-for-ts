import * as assert from "assert";


class TestCase {
  constructor(protected name: string) {}

  run() {
    let method = "this." + this.name + "()";
    eval(method);
  }
}

class WasRun extends TestCase {
  public wasRun = false;

  constructor(name: string) { super(name); }

  testMethod() {
    this.wasRun = true;
  }
}

class TestCaseTest extends TestCase {
  constructor(name: string) { super(name); }

  testRunning() {
    const _test = new WasRun("testMethod");
    assert.ok(!_test.wasRun);
    _test.run();
    assert.ok(_test.wasRun);
  }
}

new TestCaseTest("testRunning").run();
