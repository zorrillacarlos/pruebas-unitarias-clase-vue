import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue";

describe("Message.vue", () => {
  it("Probando mensaje props", () => {
    const wrapper = mount(Message, {
        propsData: {msg: "Hola Mundo"}
    });
    expect(wrapper.text()).toMatch("Hola Mundo")
  });
});
