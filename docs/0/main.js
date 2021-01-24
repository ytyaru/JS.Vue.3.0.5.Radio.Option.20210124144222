window.addEventListener('load', (event) => {
    const app = Vue.createApp({});
    app.component('v-radio', Radio);
    app.component('base-input', {
        template: `
            <input ref="input" />
        `,
        methods: {
            focusInput() {
                console.log('-------------');
                console.log(this.$refs.input);
                this.$refs.input.focus();
            }
        },
        mounted() {
            this.focusInput()
        }
    });
    app.mount('#app');
});
