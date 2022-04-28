import { form as veeForm, field as veeField } from "vee-validate";

export default {
  install(app) {
    app.use("veeForm", veeForm);
    app.use("veeField", veeField);
  },
};
