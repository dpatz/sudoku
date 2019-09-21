import Component from '@ember/component';

export default Component.extend({
  handleUpdate(e) {
    let value = parseInt(e.target.value);
    this.onUpdate(isNaN(value) ? 0 : value);
  },
});
