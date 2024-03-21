import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { increment } from "@/shared/helper";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("helper.ts", () => {
  it("increments int", () => {
    const value = increment(2, 10);
    expect(value).toBe(3);
  });
});
