// https://test-utils.vuejs.org/guide/essentials/a-crash-course.html
// https://youtu.be/QIDhzBg5eWY

// https://v1.test-utils.vuejs.org/api/mount.html
// https://v1.test-utils.vuejs.org/api/shallowmount.html

// npm run test:unit

import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp.vue", () => {
  it("Render de todoText", () => {
    const wrapper = mount(TodoApp);
    const todo = wrapper.get('[data-prueba="lista"]');
    expect(todo.text()).toBe("Prueba de Texto");
  });
  it("Agregar un nuevo todo", async () => {
      const wrapper = mount(TodoApp);
      expect(wrapper.findAll('[data-prueba="lista"]')).toHaveLength(2);

      await wrapper.get ('[data-prueba="new-todo"]').setValue("Nueva Tarea")
      await wrapper.get('[data-prueba="form"]').trigger('submit')

      expect(wrapper.findAll('[data-prueba="lista"]')).toHaveLength(3);
    });
});
