// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

// Creates a dropdown, add options and selects any option
class DropDownCopy {
  dropdown;
  options = [];

  constructor(...options1) {
    this.dropdown = this.createDropdown();
    this.options = [...options1];

    for (let option of this.options) {
      const option1 = document.createElement('option');
      option1.text = option;
      this.dropdown.appendChild(option1);
    }
    this.dropdown.addEventListener('change', this.onChange.bind(this));
    appDiv.appendChild(this.dropdown);
  }

  createDropdown() {
    return document.createElement('select');
  }

  appOptions(...options) {
    for (let option of options) {
      const option1 = document.createElement('option');
      option1.text = option;
      this.dropdown.appendChild(option1);
    }
  }

  onChange(event) {
    const selectedValue = event.target.value;
    console.log('Selected option:', selectedValue);
    // Perform any actions or logic based on the selected option
  }
}

const print = () => console.log('hey');

const dropdown = new DropDownCopy('a', 'b', 'c');
