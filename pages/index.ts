import {Component, Vue} from 'nuxt-property-decorator';

@Component
export default class Page extends Vue {
    protected created() {
        console.warn('page created');
    }

    protected mounted() {
        console.warn('page mounted');
    }
}
