class EventListener {
   #form = null;
   #initialElement = null;
   #toggleElement = null;

   setForm(formClass) {
      this.#form = document.querySelector(`.${formClass}`);

      if (this.#form) {
         return this
      } else {
         console.error(`Form with class "${formClass}" not found`);
      }
   }

   onSubmitForm(initialElement,toggleElement) {
      this.#form.addEventListener('submit', (e) => {
         const form = e.currentTarget;
         const formData = new FormData(form);

         this.#initialElement = document.querySelector(`.${initialElement}`);
         this.#toggleElement = document.querySelector(`.${toggleElement}`);
         
         e.preventDefault();
         if (this.isFormDataValid(formData)) {
            form.classList.remove('is-invalid');
            this.toggleVisible();
         } else {
            form.classList.add('is-invalid');
         }
      })

      return this;
   }

   isFormDataValid(formData) {
      const formEntries = Object.fromEntries(formData);

      //if (!email || !validator.isEmail(email)) return false;
      for (const key in formEntries) {
         const inputElement = document.getElementById(key);
         if(!this.validateData(formEntries[key], inputElement.type)) {
            inputElement.parentNode.classList.add('is-invalid');
            return false;
         } else {
            inputElement.parentNode.classList.remove('is-invalid');
         }
      }

      return true;
   }

   validateData(data, dataType) {
      if (dataType === 'email' && validator.isEmail(data)) {
         return true;
      }

      if (dataType === 'text' && data.trim() !== '') {
         return true;
      }

      if (dataType === 'number' && validator.isNumeric(data)) {
         return true;
      }

      return false;
   }

   toggleVisible() {
         if (!this.#initialElement || !this.#toggleElement) {
            console.error('Elements not found for toggling visibility');
            return this;
         }

         // Toggle visibility
         this.#initialElement.classList.toggle('is-hidden');  
         this.#toggleElement.classList.toggle('is-visible');
   }

   initializeSuccessButton(className) {
      const successButton = document.querySelector(`.${className}`);
      
      if (successButton) {
         successButton.addEventListener('click', () => {
            this.toggleVisible();
         });
      }
   }
}

new EventListener()
   .setForm('form')
   .onSubmitForm('newsletter','success')
   .initializeSuccessButton('success__button');