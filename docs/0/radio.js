var Radio = {
    props: {
        id:     { type: String, required: false },
        name:   { type: String, required: false },
        value:  { type: String, required: false },
        label:  { type: String, required: false },
    },
    template: `
        <input type="radio" :id="id" :name="name" :value="value">
        <label             :for="id">{{label}}</label>
    `,
    mounted() {
        console.log('mounted()', this.$refs.sex1);
//        const root = Vue.ref(null);
//        console.log(root);
        /*
        this.$refs.
        for(let option of this.$children) {

        }
        */
    }
}

