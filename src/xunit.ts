import * as assert from "assert";


class TestCase {
  constructor(protected name: string) {}

  setUp() {}

  tearDown() {}

  run() {
    this.setUp();
    const method = "this." + this.name + "()";
    eval(method);
    this.tearDown();
  }
}

class WasRun extends TestCase {
  public log = "";

  constructor(name: string) { super(name); }

  setUp() {
    this.log = "setUp ";
  }

  testMethod() {
    this.log += "testMethod ";
  }

  tearDown() {
    this.log += "tearDown ";
  }
}

class TestCaseTest extends TestCase {
  constructor(name: string) { super(name); }

  testTemplateMethod() {
    const _test = new WasRun("testMethod");
    _test.run();
    assert.ok(_test.log === "setUp testMethod tearDown ");
  }
}

new TestCaseTest("testTemplateMethod").run();
